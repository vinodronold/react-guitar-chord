import React from 'react'
import propTypes from 'prop-types'

const _propTypes = {
  x: propTypes.number.isRequired,
  y: propTypes.number.isRequired,
  fontSize: propTypes.number,
  fill: propTypes.string,
  children: propTypes.node.isRequired
}

const _defaultProps = {
  fontSize: 12,
  fill: '#222'
}

const SVGText = ({ x, y, fontSize, fill, children, ...props }) => (
  <text
    x={x}
    y={y}
    stroke={'none'}
    fill={fill}
    fontSize={`${fontSize}px`}
    {...props}
  >
    {children}
  </text>
)
SVGText.propTypes = _propTypes
SVGText.defaultProps = _defaultProps

export default SVGText
