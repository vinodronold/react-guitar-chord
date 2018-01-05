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
    [chordCommon([0, 0, 2, 2, 2, 0])(0)(0), barreCommonEMajShape(5)],
    [chordCommon([0, 0, 2, 2, 1, 0])(0)(0), barreCommonEMinShape(5)]
  ),
  'A#': chordMajMin(
    [barreCommonAMajShape(1), barreCommonEMajShape(6)],
    [barreCommonAMinShape(1), barreCommonEMinShape(6)]
  ),
  B: chordMajMin(
    [barreCommonAMajShape(2), barreCommonEMajShape(7)],
    [barreCommonAMinShape(2), barreCommonEMinShape(7)]
  ),
  C: chordMajMin(
    [chordCommon([0, 3, 2, 0, 1, 0])(0)(0), barreCommonEMajShape(8)],
    [barreCommonAMinShape(3), barreCommonEMinShape(8)]
  ),
  'C#': chordMajMin(
    [barreCommonAMajShape(4), barreCommonEMajShape(9)],
    [barreCommonAMinShape(4), barreCommonEMinShape(9)]
  ),
  D: chordMajMin(
    [chordCommon([0, 0, 0, 2, 3, 2])(0)(0), barreCommonAMajShape(5)],
    [chordCommon([0, 0, 0, 2, 3, 1])(0)(0), barreCommonAMinShape(5)]
  ),
  'D#': chordMajMin(
    [barreCommonAMajShape(6), barreCommonEMajShape(11)],
    [barreCommonAMinShape(6), barreCommonEMinShape(11)]
  ),
  E: chordMajMin(
    [chordCommon([0, 2, 2, 1, 0, 0])(0)(0), barreCommonAMajShape(7)],
    [chordCommon([0, 2, 2, 0, 0, 0])(0)(0), barreCommonAMinShape(7)]
  ),
  F: chordMajMin(
    [barreCommonEMajShape(1), barreCommonAMajShape(8)],
    [barreCommonEMinShape(1), barreCommonAMinShape(8)]
  ),
  'F#': chordMajMin(
    [barreCommonEMajShape(2), barreCommonAMajShape(9)],
    [barreCommonEMinShape(2), barreCommonAMinShape(9)]
  ),
  G: chordMajMin(
    [chordCommon([3, 2, 0, 0, 3, 3])(0)(0), barreCommonEMajShape(3)],
    [barreCommonEMinShape(3), barreCommonAMinShape(10)]
  ),
  'G#': chordMajMin(
    [barreCommonEMajShape(4), barreCommonAMajShape(11)],
    [barreCommonEMinShape(4), barreCommonAMinShape(11)]
  )
}
