import React from 'react'
import { number, string, node } from 'prop-types'

const _propTypes = {
  x: number.isRequired,
  y: number.isRequired,
  fontSize: number,
  fill: string,
  children: node.isRequired
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
