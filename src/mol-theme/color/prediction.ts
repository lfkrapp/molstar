/**
 * Copyright (c) 2019 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * @author Alexander Rose <alexander.rose@weirdbyte.de>
 */

import { Color, ColorScale } from '../../mol-util/color';
import { StructureElement, Unit, Bond, ElementIndex } from '../../mol-model/structure';
import { Location } from '../../mol-model/location';
import { ColorTheme } from '../color';
import { ParamDefinition as PD } from '../../mol-util/param-definition';
import { ThemeDataContext } from '../theme';

const DefaultPredictionColor = Color(0xCCCCCC);
const Description = `Assigns a color based on the predicted interface of an atom.`;

export const PredictionColorThemeParams = {
    domain: PD.Interval([0.0, 1.0]),
    list: PD.ColorList('blue-white-red', { presetKind: 'scale' }),
};
export type PredictionColorThemeParams = typeof PredictionColorThemeParams
export function getPredictionColorThemeParams(ctx: ThemeDataContext) {
    return PredictionColorThemeParams; // TODO return copy
}

export function getPrediction(unit: Unit, element: ElementIndex): number {
    if (Unit.isAtomic(unit)) {
        return unit.model.atomicConformation.occupancy.value(element);
    } else {
        return 0;
    }
}

export function PredictionColorTheme(ctx: ThemeDataContext, props: PD.Values<PredictionColorThemeParams>): ColorTheme<PredictionColorThemeParams> {
    const scale = ColorScale.create({
        reverse: false,
        domain: props.domain,
        listOrName: props.list.colors,
    });

    function color(location: Location): Color {
        if (StructureElement.Location.is(location)) {
            return scale.color(getPrediction(location.unit, location.element));
        } else if (Bond.isLocation(location)) {
            return scale.color(getPrediction(location.aUnit, location.aUnit.elements[location.aIndex]));
        }
        return DefaultPredictionColor;
    }

    return {
        factory: PredictionColorTheme,
        granularity: 'group',
        color,
        props,
        description: Description,
        legend: scale ? scale.legend : undefined
    };
}

export const PredictionColorThemeProvider: ColorTheme.Provider<PredictionColorThemeParams, 'prediction'> = {
    name: 'prediction',
    label: 'Prediction',
    category: ColorTheme.Category.Atom,
    factory: PredictionColorTheme,
    getParams: getPredictionColorThemeParams,
    defaultValues: PD.getDefaultValues(PredictionColorThemeParams),
    isApplicable: (ctx: ThemeDataContext) => !!ctx.structure && ctx.structure.models.some(m => m.atomicConformation.occupancy.isDefined)
};

