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

const AMajor = () => <GuitarChord chord={'A'} />
const AMinor = () => <GuitarChord chord={'A'} quality={'MIN'} />
```

## Properties

| Props      | Description       | Required | Default Value |
| ---------- | ----------------- | -------- | ------------- |
| chords     | Name of the Chord | Required |               |
| quality    | MAJ or MIN        | Optional | 'MAJ' (Major) |
| height     | Height of the SVG | Optional | 15em          |
| background | Background Color  | Optional | #FFF          |
| stroke     | Stroke Color      | Optional | #222          |
