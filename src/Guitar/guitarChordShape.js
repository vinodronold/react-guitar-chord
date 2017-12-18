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

const barreCommonEMajShape = s => ({
  b: 1,
  s,
  p: [0, 3, 3, 2, 0, 0]
})
const barreCommonEMinShape = s => ({
  b: 1,
  s,
  p: [0, 3, 3, 0, 0, 0]
})
const barreCommonAMajShape = s => ({
  b: 1,
  s,
  p: [0, 0, 3, 3, 3, 0]
})
const barreCommonAMinShape = s => ({
  b: 1,
  s,
  p: [0, 0, 3, 3, 2, 0]
})

const barreCommonEShape = s => ({
  MAJ: {
    b: 1,
    s,
    p: [0, 3, 3, 2, 0, 0]
  },
  MIN: {
    b: 1,
    s,
    p: [0, 3, 3, 0, 0, 0]
  }
})
const barreCommonAShape = s => ({
  MAJ: {
    b: 1,
    s,
    p: [0, 0, 3, 3, 3, 0]
  },
  MIN: {
    b: 1,
    s,
    p: [0, 0, 3, 3, 2, 0]
  }
})

export default {
  A: {
    MAJ: {
      b: 0,
      p: [0, 0, 2, 2, 2, 0]
    },
    MIN: {
      b: 0,
      p: [0, 0, 2, 2, 1, 0]
    }
  },
  'A#': barreCommonAShape(1),
  B: barreCommonAShape(2),
  C: {
    MAJ: {
      b: 0,
      p: [0, 3, 2, 0, 1, 0]
    },
    MIN: {
      b: 1,
      s: 3,
      p: [0, 0, 3, 3, 2, 0]
    }
  },
  'C#': barreCommonAShape(4),
  D: {
    MAJ: {
      b: 0,
      p: [0, 0, 0, 2, 3, 2]
    },
    MIN: {
      b: 0,
      p: [0, 0, 0, 2, 3, 1]
    }
  },
  'D#': barreCommonAShape(6),
  E: {
    MAJ: {
      b: 0,
      p: [0, 2, 2, 1, 0, 0]
    },
    MIN: {
      b: 0,
      p: [0, 2, 2, 0, 0, 0]
    }
  },
  F: barreCommonEShape(1),
  'F#': barreCommonEShape(2),
  G: {
    MAJ: {
      b: 0,
      p: [3, 2, 0, 0, 3, 3]
    },
    MIN: {
      b: 1,
      s: 3,
      p: [0, 3, 3, 0, 0, 0]
    }
  },
  'G#': barreCommonEShape(4)
}
