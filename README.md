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
![C Major](https://raw.githubusercontent.com/vinodronold/react-guitar-chord/master/images/CMAJ.png "C Major")
![C Minor](https://raw.githubusercontent.com/vinodronold/react-guitar-chord/master/images/CMIN.png "C Minor")


## Properties

| Props      | Description       | Required | Default Value |
| ---------- | ----------------- | -------- | ------------- |
| chords     | Name of the Chord | Required |               |
| quality    | MAJ or MIN        | Optional | 'MAJ' (Major) |
| height     | Height of the SVG | Optional | 15em          |
| background | Background Color  | Optional | #FFF          |
| stroke     | Stroke Color      | Optional | #222          |
