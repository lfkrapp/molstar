
import { parseSdf } from '../sdf/parser';

const SdfString = `
  Mrv1718007121815122D

  5  4  0  0  0  0            999 V2000
    0.0000    0.8250    0.0000 O   0  5  0  0  0  0  0  0  0  0  0  0
   -0.8250    0.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
    0.0000   -0.8250    0.0000 O   0  5  0  0  0  0  0  0  0  0  0  0
    0.0000    0.0000    0.0000 P   0  0  0  0  0  0  0  0  0  0  0  0
    0.8250    0.0000    0.0000 O   0  5  0  0  0  0  0  0  0  0  0  0
  4  1  1  0  0  0  0
  4  2  2  0  0  0  0
  4  3  1  0  0  0  0
  4  5  1  0  0  0  0
M  CHG  3   1  -1   3  -1   5  -1
M  END
> <DATABASE_ID>
0

> <DATABASE_NAME>
drugbank

> 5225 <TEST_FIELD>
whatever

> <INCHI_IDENTIFIER>
InChI=1S/H3O4P/c1-5(2,3)4/h(H3,1,2,3,4)/p-3

> <INCHI_KEY>
NBIIXXVUZAFLBC-UHFFFAOYSA-K

> <FORMULA>
O4P

> <MOLECULAR_WEIGHT>
94.9714

> <EXACT_MASS>
94.95342

> <JCHEM_ACCEPTOR_COUNT>
4

> <JCHEM_ATOM_COUNT>
5

> <JCHEM_AVERAGE_POLARIZABILITY>
4.932162910070488

> <JCHEM_BIOAVAILABILITY>
1

> <JCHEM_DONOR_COUNT>
0

> <JCHEM_FORMAL_CHARGE>
-3

> <JCHEM_GHOSE_FILTER>
0

> <JCHEM_IUPAC>
phosphate

> <JCHEM_LOGP>
-1.0201038226666665

> <JCHEM_MDDR_LIKE_RULE>
0

> <JCHEM_NUMBER_OF_RINGS>
0

> <JCHEM_PHYSIOLOGICAL_CHARGE>
-2

> <JCHEM_PKA>
6.951626889535468

> <JCHEM_PKA_STRONGEST_ACIDIC>
1.7961261340181292

> <JCHEM_POLAR_SURFACE_AREA>
86.25

> <JCHEM_REFRACTIVITY>
11.2868

> <JCHEM_ROTATABLE_BOND_COUNT>
0

> <JCHEM_RULE_OF_FIVE>
1

> <JCHEM_TRADITIONAL_IUPAC>
phosphate

> <JCHEM_VEBER_RULE>
0

> <DRUGBANK_ID>
DB14523

> <DRUG_GROUPS>
experimental

> <GENERIC_NAME>
Phosphate ion

> <SYNONYMS>
Orthophosphate; Phosphate

$$$$

Comp 2

5  4  0  0  0  0            999 V2000
  0.0000    0.8250    0.0000 O   0  5  0  0  0  0  0  0  0  0  0  0
 -0.8250    0.0000    0.0000 O   0  0  0  0  0  0  0  0  0  0  0  0
  0.0000   -0.8250    0.0000 O   0  5  0  0  0  0  0  0  0  0  0  0
  0.0000    0.0000    0.0000 P   0  0  0  0  0  0  0  0  0  0  0  0
  0.8250    0.0000    0.0000 O   0  5  0  0  0  0  0  0  0  0  0  0
4  1  1  0  0  0  0
4  2  2  0  0  0  0
4  3  1  0  0  0  0
4  5  1  0  0  0  0
M  CHG  3   1  -1   3  -1   5  -1
M  END
> <DATABASE_ID>
1

$$$$

2244
  -OEChem-04122119123D

 21 21  0     0  0  0  0  0  0999 V2000
    1.2333    0.5540    0.7792 O   0  0  0  0  0  0  0  0  0  0  0  0
   -0.6952   -2.7148   -0.7502 O   0  0  0  0  0  0  0  0  0  0  0  0
    0.7958   -2.1843    0.8685 O   0  0  0  0  0  0  0  0  0  0  0  0
    1.7813    0.8105   -1.4821 O   0  0  0  0  0  0  0  0  0  0  0  0
   -0.0857    0.6088    0.4403 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.7927   -0.5515    0.1244 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.7288    1.8464    0.4133 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.1426   -0.4741   -0.2184 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.0787    1.9238    0.0706 C   0  0  0  0  0  0  0  0  0  0  0  0
   -2.7855    0.7636   -0.2453 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.1409   -1.8536    0.1477 C   0  0  0  0  0  0  0  0  0  0  0  0
    2.1094    0.6715   -0.3113 C   0  0  0  0  0  0  0  0  0  0  0  0
    3.5305    0.5996    0.1635 C   0  0  0  0  0  0  0  0  0  0  0  0
   -0.1851    2.7545    0.6593 H   0  0  0  0  0  0  0  0  0  0  0  0
   -2.7247   -1.3605   -0.4564 H   0  0  0  0  0  0  0  0  0  0  0  0
   -2.5797    2.8872    0.0506 H   0  0  0  0  0  0  0  0  0  0  0  0
   -3.8374    0.8238   -0.5090 H   0  0  0  0  0  0  0  0  0  0  0  0
    3.7290    1.4184    0.8593 H   0  0  0  0  0  0  0  0  0  0  0  0
    4.2045    0.6969   -0.6924 H   0  0  0  0  0  0  0  0  0  0  0  0
    3.7105   -0.3659    0.6426 H   0  0  0  0  0  0  0  0  0  0  0  0
   -0.2555   -3.5916   -0.7337 H   0  0  0  0  0  0  0  0  0  0  0  0
  1  5  1  0  0  0  0
  1 12  1  0  0  0  0
  2 11  1  0  0  0  0
  2 21  1  0  0  0  0
  3 11  2  0  0  0  0
  4 12  2  0  0  0  0
  5  6  1  0  0  0  0
  5  7  2  0  0  0  0
  6  8  2  0  0  0  0
  6 11  1  0  0  0  0
  7  9  1  0  0  0  0
  7 14  1  0  0  0  0
  8 10  1  0  0  0  0
  8 15  1  0  0  0  0
  9 10  2  0  0  0  0
  9 16  1  0  0  0  0
 10 17  1  0  0  0  0
 12 13  1  0  0  0  0
 13 18  1  0  0  0  0
 13 19  1  0  0  0  0
 13 20  1  0  0  0  0
M  END
> <PUBCHEM_COMPOUND_CID>
2244

> <PUBCHEM_CONFORMER_RMSD>
0.6

> <PUBCHEM_CONFORMER_DIVERSEORDER>
1
11
10
3
15
17
13
5
16
7
14
9
8
4
18
6
12
2

> <PUBCHEM_MMFF94_PARTIAL_CHARGES>
18
1 -0.23
10 -0.15
11 0.63
12 0.66
13 0.06
14 0.15
15 0.15
16 0.15
17 0.15
2 -0.65
21 0.5
3 -0.57
4 -0.57
5 0.08
6 0.09
7 -0.15
8 -0.15
9 -0.15

> <PUBCHEM_EFFECTIVE_ROTOR_COUNT>
3

> <PUBCHEM_PHARMACOPHORE_FEATURES>
5
1 2 acceptor
1 3 acceptor
1 4 acceptor
3 2 3 11 anion
6 5 6 7 8 9 10 rings

> <PUBCHEM_HEAVY_ATOM_COUNT>
13

> <PUBCHEM_ATOM_DEF_STEREO_COUNT>
0

> <PUBCHEM_ATOM_UDEF_STEREO_COUNT>
0

> <PUBCHEM_BOND_DEF_STEREO_COUNT>
0

> <PUBCHEM_BOND_UDEF_STEREO_COUNT>
0

> <PUBCHEM_ISOTOPIC_ATOM_COUNT>
0

> <PUBCHEM_COMPONENT_COUNT>
1

> <PUBCHEM_CACTVS_TAUTO_COUNT>
1

> <PUBCHEM_CONFORMER_ID>
000008C400000001

> <PUBCHEM_MMFF94_ENERGY>
39.5952

> <PUBCHEM_FEATURE_SELFOVERLAP>
25.432

> <PUBCHEM_SHAPE_FINGERPRINT>
1 1 18265615372930943622
100427 49 16967750034970055351
12138202 97 18271247217817981012
12423570 1 16692715976000295083
12524768 44 16753525617747228747
12716758 59 18341332292274886536
13024252 1 17968377969333732145
14181834 199 17830728755827362645
14614273 12 18262232214645093005
15207287 21 17703787037639964108
15775835 57 18340488876329928641
16945 1 18271533103414939405
193761 8 17907860604865584321
20645476 183 17677348215414174190
20871998 184 18198632231250704846
21040471 1 18411412921197846465
21501502 16 18123463883164380929
23402539 116 18271795865171824860
23419403 2 13539898140662769886
23552423 10 18048876295495619569
23559900 14 18272369794190581304
241688 4 16179044415907240795
257057 1 17478316999871287486
2748010 2 18339085878070479087
305870 269 18263645056784260212
528862 383 18117272558388284091
53812653 8 18410289211719108569
7364860 26 17910392788380644719
81228 2 18050568744116491203

> <PUBCHEM_SHAPE_MULTIPOLES>
244.06
3.86
2.45
0.89
1.95
1.58
0.15
-1.85
0.38
-0.61
-0.02
0.29
0.01
-0.33

> <PUBCHEM_SHAPE_SELFOVERLAP>
513.037

> <PUBCHEM_SHAPE_VOLUME>
136

> <PUBCHEM_COORDINATE_TYPE>
2
5
10

$$$$
`;

describe('sdf reader', () => {
    it('basic', async () => {
        const parsed = await parseSdf(SdfString).run();
        if (parsed.isError) {
            throw new Error(parsed.message);
        }
        const compound1 = parsed.result.compounds[0];
        const compound2 = parsed.result.compounds[1];
        const compound3 = parsed.result.compounds[2];
        const { molFile, dataItems } = compound1;
        const { atoms, bonds } = molFile;

        expect(parsed.result.compounds.length).toBe(3);

        // number of structures
        expect(atoms.count).toBe(5);
        expect(bonds.count).toBe(4);

        expect(compound2.molFile.atoms.count).toBe(5);
        expect(compound2.molFile.bonds.count).toBe(4);

        expect(atoms.x.value(0)).toBeCloseTo(0, 0.001);
        expect(atoms.y.value(0)).toBeCloseTo(0.8250, 0.0001);
        expect(atoms.z.value(0)).toBeCloseTo(0, 0.0001);
        expect(atoms.type_symbol.value(0)).toBe('O');

        expect(bonds.atomIdxA.value(3)).toBe(4);
        expect(bonds.atomIdxB.value(3)).toBe(5);
        expect(bonds.order.value(3)).toBe(1);

        expect(dataItems.dataHeader.value(0)).toBe('<DATABASE_ID>');
        expect(dataItems.data.value(0)).toBe('0');

        expect(dataItems.dataHeader.value(1)).toBe('<DATABASE_NAME>');
        expect(dataItems.data.value(1)).toBe('drugbank');

        expect(dataItems.dataHeader.value(2)).toBe('5225 <TEST_FIELD>');
        expect(dataItems.data.value(2)).toBe('whatever');

        expect(dataItems.dataHeader.value(31)).toBe('<SYNONYMS>');
        expect(dataItems.data.value(31)).toBe('Orthophosphate; Phosphate');

        expect(compound1.dataItems.data.value(0)).toBe('0');
        expect(compound2.dataItems.data.value(0)).toBe('1');

        expect(compound3.dataItems.dataHeader.value(2)).toBe('<PUBCHEM_CONFORMER_DIVERSEORDER>');
        expect(compound3.dataItems.data.value(2)).toBe('1\n11\n10\n3\n15\n17\n13\n5\n16\n7\n14\n9\n8\n4\n18\n6\n12\n2');

        expect(compound3.dataItems.dataHeader.value(21)).toBe('<PUBCHEM_COORDINATE_TYPE>');
        expect(compound3.dataItems.data.value(21)).toBe('2\n5\n10');
    });
});
