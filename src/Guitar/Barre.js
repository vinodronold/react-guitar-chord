import React from 'react'
import propTypes from 'prop-types'

const _propTypes = {
  stroke: propTypes.string.isRequired,
  fret: propTypes.number
}
const _defaultProps = {
  fret: 1
}

const Barre = ({ stroke, fret }) =>
  fret > 0 ? (
    <ellipse
      cx="100"
      cy={50 * fret}
      fill={stroke}
      strokeWidth="1.5"
      ry="3"
      rx="80"
    />
  ) : null

Barre.propTypes = _propTypes
Barre.defaultProps = _defaultProps

export default Barre
