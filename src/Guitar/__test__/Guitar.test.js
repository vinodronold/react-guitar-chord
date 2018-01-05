import React from 'react'
import renderer from 'react-test-renderer'
import Guitar from '../Guitar'

describe('Guitar', () => {
  it('A should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'A'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('A alternate should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar alternate chord={'A'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Am should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'A'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('Am alternate should match the sanpshot', () => {
    const _guitar = renderer.create(
      <Guitar alternate chord={'A'} quality={'MIN'} />
    )
    expect(_guitar).toMatchSnapshot()
  })

  it('A#/Bb should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'A#'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('A#/Bb alternate should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar alternate chord={'A#'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('A#m/Bbm should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'A#'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('A#m/Bbm alternate should match the sanpshot', () => {
    const _guitar = renderer.create(
      <Guitar alternate chord={'A#'} quality={'MIN'} />
    )
    expect(_guitar).toMatchSnapshot()
  })

  it('B should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'B'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('B alternate should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar alternate chord={'B'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Bm should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'B'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('Bm alternate should match the sanpshot', () => {
    const _guitar = renderer.create(
      <Guitar alternate chord={'B'} quality={'MIN'} />
    )
    expect(_guitar).toMatchSnapshot()
  })

  it('C should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'C'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('C alternate should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar alternate chord={'C'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Cm should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'C'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('Cm alternate should match the sanpshot', () => {
    const _guitar = renderer.create(
      <Guitar alternate chord={'C'} quality={'MIN'} />
    )
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
  it('C#m alternate should match the sanpshot', () => {
    const _guitar = renderer.create(
      <Guitar alternate chord={'C#'} quality={'MIN'} />
    )
    expect(_guitar).toMatchSnapshot()
  })

  it('D should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'D'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('D alternate should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar alternate chord={'D'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Dm should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'D'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('Dm alternate should match the sanpshot', () => {
    const _guitar = renderer.create(
      <Guitar alternate chord={'D'} quality={'MIN'} />
    )
    expect(_guitar).toMatchSnapshot()
  })

  it('D# should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'D#'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('D alternate should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar alternate chord={'D#'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('D#m should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'D#'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('D#m alternate should match the sanpshot', () => {
    const _guitar = renderer.create(
      <Guitar alternate chord={'D#'} quality={'MIN'} />
    )
    expect(_guitar).toMatchSnapshot()
  })

  it('E should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'E'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('E alternate should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar alternate chord={'E'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Em should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'E'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('Em alternate should match the sanpshot', () => {
    const _guitar = renderer.create(
      <Guitar alternate chord={'E'} quality={'MIN'} />
    )
    expect(_guitar).toMatchSnapshot()
  })

  it('F should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'F'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('F alternate should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar alternate chord={'F'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Fm should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'F'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('Fm alternate should match the sanpshot', () => {
    const _guitar = renderer.create(
      <Guitar alternate chord={'F'} quality={'MIN'} />
    )
    expect(_guitar).toMatchSnapshot()
  })

  it('F# should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'F#'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('F# alternate should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar alternate chord={'F#'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('F#m should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'F#'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('F#m alternate should match the sanpshot', () => {
    const _guitar = renderer.create(
      <Guitar alternate chord={'F#'} quality={'MIN'} />
    )
    expect(_guitar).toMatchSnapshot()
  })

  it('G should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'G'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('G alternate should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar alternate chord={'G'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('Gm should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'G'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('Gm alternate should match the sanpshot', () => {
    const _guitar = renderer.create(
      <Guitar alternate chord={'G'} quality={'MIN'} />
    )
    expect(_guitar).toMatchSnapshot()
  })

  it('G# should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'G#'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('G# alternate should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar alternate chord={'G#'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('G#m should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'G#'} quality={'MIN'} />)
    expect(_guitar).toMatchSnapshot()
  })
  it('G#m alternate should match the sanpshot', () => {
    const _guitar = renderer.create(
      <Guitar alternate chord={'G#'} quality={'MIN'} />
    )
    expect(_guitar).toMatchSnapshot()
  })

  it('X# should match the sanpshot', () => {
    const _guitar = renderer.create(<Guitar chord={'X#'} />)
    expect(_guitar).toMatchSnapshot()
  })

  it('A should match the sanpshot with height', () => {
    const _guitar = renderer.create(<Guitar chord={'A'} height={'30em'} />)
    expect(_guitar).toMatchSnapshot()
  })
})
