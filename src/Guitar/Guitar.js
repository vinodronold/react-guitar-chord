import React from 'react'
import { string, object } from 'prop-types'
import SVGText from './SVGText'
import Barre from './Barre'
import guitarChordShape from './guitarChordShape'

const _propTypes = {
  chord: string.isRequired,
  fill: string,
  quality: string,
  stroke: string,
  style: object
}

const _defaultProps = {
  quality: 'MAJ',
  height: '15rem',
  fill: '#FFF',
  stroke: '#222'
}

const Guitar = ({ chord, fill, height, quality, stroke, style, ...props }) => {
  let ChordShape = guitarChordShape[chord][quality]
  let start = ChordShape.s ? ChordShape.s : 1
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 250"
      style={{
        position: 'relative',
        height: height,
        width: 'auto',
        ...style
      }}
      {...props}
    >
      <path fill={fill} d="M-1-1h202v252H-1z" />
      <g stroke={stroke}>
        <path fill={fill} strokeWidth="1.5" d="M25 25h150v200H25z" />
        <path
          fill="none"
          strokeOpacity="null"
          strokeWidth="1.5"
          d="M26 75h150M26 125h150M26 175h150M56 26v199M86 26v199m30-199v199m30-199v199"
          strokeLinecap="null"
          strokeLinejoin="null"
        />
        <SVGText x={95} y={20} fontSize={16}>
          {`${chord}${quality === 'MIN' ? 'm' : ''}`}
        </SVGText>
        <SVGText x={9.5} y={50}>
          {start}
        </SVGText>
        <SVGText x={9.5} y={100}>
          {start + 1}
        </SVGText>
        <SVGText x={9.5} y={150}>
          {start + 2}
        </SVGText>
        <SVGText x={9.5} y={200}>
          {start + 3}
        </SVGText>
        <Barre fret={ChordShape.b} stroke={stroke} />
        {ChordShape.p.map(
          (f, i) =>
            f > 0 && f <= 4 ? (
              <ellipse
                key={i}
                cx={26 + 30 * i}
                cy={50 * f}
                fill={stroke}
                strokeOpacity="null"
                strokeWidth="1.5"
                ry="5"
                rx="5"
              />
            ) : null
        )}
      </g>
    </svg>
  )
}

Guitar.propTypes = _propTypes
Guitar.defaultProps = _defaultProps

export default Guitar
