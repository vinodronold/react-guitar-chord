import React from 'react'
import renderer from 'react-test-renderer'
import Guitar from '../Guitar'

describe('Guitar', () => {
  it('A should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'A'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Am should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'A'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('A#/Bb should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'A#'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('A#m/Bb# should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'A#'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('B should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'B'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Bm should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'B'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('C should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'C'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Cm should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'C'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('C# should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'C#'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('C#m should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'C#'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('D should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'D'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Dm should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'D'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('D# should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'D#'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('D#m should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'D#'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('E should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'E'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Em should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'E'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('F should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'F'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Fm should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'F'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('F# should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'F#'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('F#m should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'F#'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('G should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'G'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Gm should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'G'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('G# should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'G#'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('G#m should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'G#'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('X should error', () => {
    expect(() => {
      renderer.create(<Guitar chord={'X'} />)
    }).toThrowError(new Error(`X is not a valid chord`))
  })

  it('X# should error', () => {
    expect(() => {
      renderer.create(<Guitar chord={'X#'} />)
    }).toThrowError(new Error(`X# is not a valid chord`))
  })
})
