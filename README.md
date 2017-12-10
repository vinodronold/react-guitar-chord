# React Guitar Chord

React component to draw SVG Guitar chords.

## Installation

```
npm install react-guitar-chord
```

or

```
yarn add react-guitar-chord
```

## Example

```javascript
import React from 'react'
import GuitarChord from 'react-guitar-chord'

export default () => (
  <div>
    <GuitarChord chord={'C'} />
    <GuitarChord chord={'C'} quality={'MIN'} />
  </div>
)
```

![C Chords](https://raw.githubusercontent.com/vinodronold/react-guitar-chord/master/images/C_CHORD.png "C Chords")

## Properties

| Props      | Description       | Required | Default Value |
| ---------- | ----------------- | -------- | ------------- |
| chords     | Name of the Chord | Required |               |
| quality    | MAJ or MIN        | Optional | 'MAJ' (Major) |
| height     | Height of the SVG | Optional | 15em          |
| background | Background Color  | Optional | #FFF          |
| stroke     | Stroke Color      | Optional | #222          |
