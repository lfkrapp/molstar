/**
 * Copyright (c) 2018-2021 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Alexander Rose <alexander.rose@weirdbyte.de>
 */

import { ValueCell } from '../mol-util';
import { idFactory } from '../mol-util/id-factory';
import { WebGLExtensions } from './webgl/extensions';
import { isWebGL2, GLRenderingContext } from './webgl/compat';

export type DefineKind = 'boolean' | 'string' | 'number'
export type DefineType = boolean | string
export type DefineValues = { [k: string]: ValueCell<DefineType> }

const shaderCodeId = idFactory();

type ShaderExtensionsValue = 'required' | 'optional'
export interface ShaderExtensions {
    readonly standardDerivatives?: ShaderExtensionsValue
    readonly fragDepth?: ShaderExtensionsValue
    readonly drawBuffers?: ShaderExtensionsValue
    readonly shaderTextureLod?: ShaderExtensionsValue
}

type FragOutTypes = { [k in number]: 'vec4' | 'ivec4' }

export interface ShaderCode {
    readonly id: number
    readonly name: string
    readonly vert: string
    readonly frag: string
    readonly extensions: ShaderExtensions
    /** Fragment shader output type only applicable for webgl2 */
    readonly outTypes: FragOutTypes
}

import { apply_fog } from './shader/chunks/apply-fog.glsl';
import { apply_interior_color } from './shader/chunks/apply-interior-color.glsl';
import { apply_light_color } from './shader/chunks/apply-light-color.glsl';
import { apply_marker_color } from './shader/chunks/apply-marker-color.glsl';
import { assign_clipping_varying } from './shader/chunks/assign-clipping-varying.glsl';
import { assign_color_varying } from './shader/chunks/assign-color-varying.glsl';
import { assign_group } from './shader/chunks/assign-group.glsl';
import { assign_marker_varying } from './shader/chunks/assign-marker-varying.glsl';
import { assign_material_color } from './shader/chunks/assign-material-color.glsl';
import { assign_position } from './shader/chunks/assign-position.glsl';
import { assign_size } from './shader/chunks/assign-size.glsl';
import { check_picking_alpha } from './shader/chunks/check-picking-alpha.glsl';
import { clip_instance } from './shader/chunks/clip-instance.glsl';
import { clip_pixel } from './shader/chunks/clip-pixel.glsl';
import { color_frag_params } from './shader/chunks/color-frag-params.glsl';
import { color_vert_params } from './shader/chunks/color-vert-params.glsl';
import { common_clip } from './shader/chunks/common-clip.glsl';
import { common_frag_params } from './shader/chunks/common-frag-params.glsl';
import { common_vert_params } from './shader/chunks/common-vert-params.glsl';
import { common } from './shader/chunks/common.glsl';
import { float_to_rgba } from './shader/chunks/float-to-rgba.glsl';
import { light_frag_params } from './shader/chunks/light-frag-params.glsl';
import { matrix_scale } from './shader/chunks/matrix-scale.glsl';
import { normal_frag_params } from './shader/chunks/normal-frag-params.glsl';
import { read_from_texture } from './shader/chunks/read-from-texture.glsl';
import { rgba_to_float } from './shader/chunks/rgba-to-float.glsl';
import { size_vert_params } from './shader/chunks/size-vert-params.glsl';
import { texture3d_from_1d_trilinear } from './shader/chunks/texture3d-from-1d-trilinear.glsl';
import { texture3d_from_2d_linear } from './shader/chunks/texture3d-from-2d-linear.glsl';
import { texture3d_from_2d_nearest } from './shader/chunks/texture3d-from-2d-nearest.glsl';
import { wboit_write } from './shader/chunks/wboit-write.glsl';

const ShaderChunks: { [k: string]: string } = {
    apply_fog,
    apply_interior_color,
    apply_light_color,
    apply_marker_color,
    assign_clipping_varying,
    assign_color_varying,
    assign_group,
    assign_marker_varying,
    assign_material_color,
    assign_position,
    assign_size,
    check_picking_alpha,
    clip_instance,
    clip_pixel,
    color_frag_params,
    color_vert_params,
    common_clip,
    common_frag_params,
    common_vert_params,
    common,
    float_to_rgba,
    light_frag_params,
    matrix_scale,
    normal_frag_params,
    read_from_texture,
    rgba_to_float,
    size_vert_params,
    texture3d_from_1d_trilinear,
    texture3d_from_2d_linear,
    texture3d_from_2d_nearest,
    wboit_write
};

const reInclude = /^(?!\/\/)\s*#include\s+(\S+)/gmi;
const reSingleLineComment = /[ \t]*\/\/.*\n/g;
const reMultiLineComment = /[ \t]*\/\*[\s\S]*?\*\//g;
const reMultipleLinebreaks = /\n{2,}/g;

function addIncludes(text: string) {
    return text
        .replace(reInclude, (_, p1) => {
            const chunk = ShaderChunks[p1];
            if (!chunk) throw new Error(`empty chunk, '${p1}'`);
            return chunk;
        })
        .trim()
        .replace(reSingleLineComment, '\n')
        .replace(reMultiLineComment, '\n')
        .replace(reMultipleLinebreaks, '\n');
}

export function ShaderCode(name: string, vert: string, frag: string, extensions: ShaderExtensions = {}, outTypes: FragOutTypes = {}): ShaderCode {
    return { id: shaderCodeId(), name, vert: addIncludes(vert), frag: addIncludes(frag), extensions, outTypes };
}

// Note: `drawBuffers` need to be 'optional' for wboit

import { points_vert } from './shader/points.vert';
import { points_frag } from './shader/points.frag';
export const PointsShaderCode = ShaderCode('points', points_vert, points_frag, { drawBuffers: 'optional' });

import { spheres_vert } from './shader/spheres.vert';
import { spheres_frag } from './shader/spheres.frag';
export const SpheresShaderCode = ShaderCode('spheres', spheres_vert, spheres_frag, { fragDepth: 'required', drawBuffers: 'optional' });

import { cylinders_vert } from './shader/cylinders.vert';
import { cylinders_frag } from './shader/cylinders.frag';
export const CylindersShaderCode = ShaderCode('cylinders', cylinders_vert, cylinders_frag, { fragDepth: 'required', drawBuffers: 'optional' });

import { text_vert } from './shader/text.vert';
import { text_frag } from './shader/text.frag';
export const TextShaderCode = ShaderCode('text', text_vert, text_frag, { standardDerivatives: 'required', drawBuffers: 'optional' });

import { lines_vert } from './shader/lines.vert';
import { lines_frag } from './shader/lines.frag';
export const LinesShaderCode = ShaderCode('lines', lines_vert, lines_frag, { drawBuffers: 'optional' });

import { mesh_vert } from './shader/mesh.vert';
import { mesh_frag } from './shader/mesh.frag';
export const MeshShaderCode = ShaderCode('mesh', mesh_vert, mesh_frag, { standardDerivatives: 'optional', drawBuffers: 'optional' });

import { directVolume_vert } from './shader/direct-volume.vert';
import { directVolume_frag } from './shader/direct-volume.frag';
export const DirectVolumeShaderCode = ShaderCode('direct-volume', directVolume_vert, directVolume_frag, { fragDepth: 'optional', drawBuffers: 'optional' });

import { image_vert } from './shader/image.vert';
import { image_frag } from './shader/image.frag';
export const ImageShaderCode = ShaderCode('image', image_vert, image_frag, { drawBuffers: 'optional' });

//

export type ShaderDefines = {
    [k: string]: ValueCell<DefineType>
}

function getDefinesCode(defines: ShaderDefines) {
    if (defines === undefined) return '';
    const lines = [];
    for (const name in defines) {
        const define = defines[name];
        const v = define.ref.value;
        if (v !== undefined) {
            if (typeof v === 'string') {
                lines.push(`#define ${name}_${v}`);
            } else if (typeof v === 'number') {
                lines.push(`#define ${name} ${v}`);
            } else if (typeof v === 'boolean') {
                if (v) lines.push(`#define ${name}`);
            } else {
                throw new Error('unknown define type');
            }
        }
    }
    return lines.join('\n') + '\n';
}

function getGlsl100FragPrefix(extensions: WebGLExtensions, shaderExtensions: ShaderExtensions) {
    const prefix: string[] = [];
    if (shaderExtensions.standardDerivatives) {
        prefix.push('#extension GL_OES_standard_derivatives : enable');
        prefix.push('#define enabledStandardDerivatives');
    }
    if (shaderExtensions.fragDepth) {
        if (extensions.fragDepth) {
            prefix.push('#extension GL_EXT_frag_depth : enable');
            prefix.push('#define enabledFragDepth');
        } else if (shaderExtensions.fragDepth === 'required') {
            throw new Error(`required 'GL_EXT_frag_depth' extension not available`);
        }
    }
    if (shaderExtensions.drawBuffers) {
        if (extensions.drawBuffers) {
            prefix.push('#extension GL_EXT_draw_buffers : require');
            prefix.push('#define requiredDrawBuffers');
            prefix.push('#define gl_FragColor gl_FragData[0]');
        } else if (shaderExtensions.drawBuffers === 'required') {
            throw new Error(`required 'GL_EXT_draw_buffers' extension not available`);
        }
    }
    if (shaderExtensions.shaderTextureLod) {
        if (extensions.shaderTextureLod) {
            prefix.push('#extension GL_EXT_shader_texture_lod : enable');
            prefix.push('#define enabledShaderTextureLod');
        } else if (shaderExtensions.shaderTextureLod === 'required') {
            throw new Error(`required 'GL_EXT_shader_texture_lod' extension not available`);
        }
    }
    if (extensions.depthTexture) {
        prefix.push('#define depthTextureSupport');
    }
    return prefix.join('\n') + '\n';
}

const glsl300VertPrefix = `#version 300 es
#define attribute in
#define varying out
#define texture2D texture
`;

const glsl300FragPrefixCommon = `
#define varying in
#define texture2D texture
#define texture2DLodEXT textureLod

#define gl_FragColor out_FragData0
#define gl_FragDepthEXT gl_FragDepth

#define depthTextureSupport
`;

function getGlsl300FragPrefix(gl: WebGL2RenderingContext, extensions: WebGLExtensions, shaderExtensions: ShaderExtensions, outTypes: FragOutTypes) {
    const prefix = [
        '#version 300 es',
        `layout(location = 0) out highp ${outTypes[0] || 'vec4'} out_FragData0;`
    ];

    if (shaderExtensions.standardDerivatives) {
        prefix.push('#define enabledStandardDerivatives');
    }
    if (shaderExtensions.fragDepth) {
        prefix.push('#define enabledFragDepth');
    }
    if (shaderExtensions.drawBuffers) {
        prefix.push('#define requiredDrawBuffers');
        const maxDrawBuffers = gl.getParameter(gl.MAX_DRAW_BUFFERS) as number;
        for (let i = 1, il = maxDrawBuffers; i < il; ++i) {
            prefix.push(`layout(location = ${i}) out highp ${outTypes[i] || 'vec4'} out_FragData${i};`);
        }
    }
    if (shaderExtensions.shaderTextureLod) {
        prefix.push('#define enabledShaderTextureLod');
    }
    prefix.push(glsl300FragPrefixCommon);
    return prefix.join('\n') + '\n';
}

function transformGlsl300Frag(frag: string) {
    return frag.replace(/gl_FragData\[([0-9]+)\]/g, 'out_FragData$1');
}

export function addShaderDefines(gl: GLRenderingContext, extensions: WebGLExtensions, defines: ShaderDefines, shaders: ShaderCode): ShaderCode {
    const header = getDefinesCode(defines);
    const vertPrefix = isWebGL2(gl) ? glsl300VertPrefix : '';
    const fragPrefix = isWebGL2(gl)
        ? getGlsl300FragPrefix(gl, extensions, shaders.extensions, shaders.outTypes)
        : getGlsl100FragPrefix(extensions, shaders.extensions);
    const frag = isWebGL2(gl) ? transformGlsl300Frag(shaders.frag) : shaders.frag;
    return {
        id: shaderCodeId(),
        name: shaders.name,
        vert: `${vertPrefix}${header}${shaders.vert}`,
        frag: `${fragPrefix}${header}${frag}`,
        extensions: shaders.extensions,
        outTypes: shaders.outTypes
    };
}