// @flow

import React from 'react'
import { Spring, animated } from 'react-spring'

const STYLE_WRAPPER = {
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
}
const STYLE_SVG = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
  transform: 'rotate(-90deg)',
}

type Props = {
  bgColor: string,
  children: any,
  progress: number,
  progressColor: string,
  progressLabel: number => any,
  size: number,
  strokeWidth: number,
}

const ProgressCircle = ({
  bgColor,
  children,
  progress,
  progressColor,
  progressLabel,
  size,
  strokeWidth,
}: Props) => {
  const circleSize = size / 2
  const circleRadius = circleSize - strokeWidth / 2
  const circleDash = 2 * Math.PI * circleRadius

  const circleProps = {
    fill: 'none',
    cx: circleSize,
    cy: circleSize,
    r: circleRadius,
    strokeWidth,
  }

  return (
    <div
      style={{
        ...STYLE_WRAPPER,
        height: size,
        width: size,
      }}
    >
      <Spring
        native
        to={{
          offset: circleDash * (1 - progress / 100),
          progress,
        }}
      >
        {({ offset, progress }) => (
          <>
            {typeof children === 'function'
              ? children(
                  <animated.div>
                    {progress.interpolate(v => progressLabel(Math.round(v)))}
                  </animated.div>,
                )
              : children}
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={STYLE_SVG}>
              <circle {...circleProps} stroke={bgColor} />
              <animated.circle
                {...circleProps}
                stroke={progressColor}
                strokeDasharray={circleDash}
                strokeDashoffset={offset.interpolate(v => v)}
              />
            </svg>
          </>
        )}
      </Spring>
    </div>
  )
}

ProgressCircle.defaultProps = {
  bgColor: 'rgba(165, 180, 186, 0.4)',
  progress: 0,
  progressColor: '#a5b4ba',
  progressLabel: v => `${v}%`,
  size: 40,
  strokeWidth: 2,
}

export default ProgressCircle
