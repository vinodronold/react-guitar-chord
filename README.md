# React Guitar Chord

React component to draw SVG Guitar chords.

[![Build Status](https://travis-ci.org/vinodronold/react-guitar-chord.svg?branch=master)](https://travis-ci.org/vinodronold/react-guitar-chord)

[![Coverage Status](https://coveralls.io/repos/github/vinodronold/react-guitar-chord/badge.svg)](https://coveralls.io/github/vinodronold/react-guitar-chord)

## Installation

```
npm install react-guitar-chord
```

or

```
yarn add react-guitar-chord
```

[DEMO](https://react-guitar-chord.now.sh/)

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
| chord      | Name of the Chord | Required |               |
| quality    | MAJ or MIN        | Optional | 'MAJ' (Major) |
| height     | Height of the SVG | Optional | 15em          |
| background | Background Color  | Optional | #FFF          |
| stroke     | Stroke Color      | Optional | #222          |
