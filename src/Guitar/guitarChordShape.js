/**
 * shape {
 *  chord{
 *    type: {
 *      b: barre
 *      s: start
 *      p: [string6,string2,string3,string4,string5,string1]
 *    }
 *  }
 * }
 */
const chordCommon = p => b => s => ({ b, s, p })
const barreCommonEMajShape = chordCommon([0, 3, 3, 2, 0, 0])(1)
const barreCommonEMinShape = chordCommon([0, 3, 3, 0, 0, 0])(1)
const barreCommonAMajShape = chordCommon([0, 0, 3, 3, 3, 0])(1)
const barreCommonAMinShape = chordCommon([0, 0, 3, 3, 2, 0])(1)
const chordMajMin = (MAJ, MIN) => ({ MAJ, MIN })

export default {
  A: chordMajMin(
    chordCommon([0, 0, 2, 2, 2, 0])(0)(0),
    chordCommon([0, 0, 2, 2, 1, 0])(0)(0)
  ),
  'A#': chordMajMin(barreCommonAMajShape(1), barreCommonAMinShape(1)),
  B: chordMajMin(barreCommonAMajShape(2), barreCommonAMinShape(2)),
  C: chordMajMin(
    chordCommon([0, 3, 2, 0, 1, 0])(0)(0),
    barreCommonAMinShape(3)
  ),
  'C#': chordMajMin(barreCommonAMajShape(4), barreCommonAMinShape(4)),
  D: chordMajMin(
    chordCommon([0, 0, 0, 2, 3, 2])(0)(0),
    chordCommon([0, 0, 0, 2, 3, 1])(0)(0)
  ),
  'D#': chordMajMin(barreCommonAMajShape(6), barreCommonAMinShape(6)),
  E: chordMajMin(
    chordCommon([0, 2, 2, 1, 0, 0])(0)(0),
    chordCommon([0, 2, 2, 0, 0, 0])(0)(0)
  ),
  F: chordMajMin(barreCommonEMajShape(1), barreCommonEMinShape(1)),
  'F#': chordMajMin(barreCommonEMajShape(2), barreCommonEMinShape(2)),
  G: chordMajMin(
    chordCommon([3, 2, 0, 0, 3, 3])(0)(0),
    barreCommonEMinShape(3)
  ),
  'G#': chordMajMin(barreCommonEMajShape(4), barreCommonEMinShape(4))
}
