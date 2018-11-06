/* eslint-disable no-template-curly-in-string */

import React, { PureComponent } from 'react'
import styled from 'styled-components'
import ProgressCircle from 'react-progress-circle2'

import Code from '../components/Code'
import Layout from '../components/Layout'

const Content = styled.div`
  display: flex;
  padding: 20px;
  margin-top: 20px;

  > * + * {
    margin-left: 20px;
  }
`
const Box = styled.div`
  width: 50%;
`
const Hr = styled.div`
  background: black;
  margin: 20px 0;
  height: 5px;
  width: 100%;
`

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function getColor(value) {
  const hue = (120 * value) / 100
  return `hsl(${hue}, 100%, 50%)`
}

class IndexPage extends PureComponent {
  _interval = null

  state = {
    randomValue: getRandomInt(100),
  }

  componentDidMount() {
    this._interval = setInterval(
      () =>
        this.setState({
          randomValue: getRandomInt(100),
        }),
      1e3,
    )
  }

  componentWillUnmount() {
    clearInterval(this._interval)
  }

  render() {
    const { randomValue } = this.state
    return (
      <Layout title="react-progress-circle2" href="https://github.com/loeck/react-progress-circle2">
        <Content
          style={{
            justifyContent: 'center',
            margin: '60px 0',
          }}
        >
          <ProgressCircle progress={randomValue} size={200} strokeWidth={5}>
            {({ progress }) => (
              <div
                style={{
                  fontSize: 30,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    color: getColor(progress),
                  }}
                >
                  {Math.round(progress)}
                </div>
                <div>%</div>
              </div>
            )}
          </ProgressCircle>
        </Content>
        <Hr />
        <Content>
          <Box>
            <ProgressCircle
              bgColor="red"
              progress={40}
              progressColor="green"
              size={100}
              strokeWidth={10}
            />
            <Code
              value={`<ProgressCircle
  bgColor="red"
  progress={40}
  progressColor="green"
  size={100}
  strokeWidth={10}
/>`}
            />
          </Box>
          <Box>
            <ProgressCircle progress={40} size={100}>
              {({ progress }) => progress}
            </ProgressCircle>
            <Code
              value={`<ProgressCircle
  progress={40}
  size={100}
>
  {({ progress }) => progress}
</ProgressCircle>`}
            />
          </Box>
        </Content>
        <Content>
          <Box>
            <ProgressCircle progress={40} size={100}>
              Hey \o/
            </ProgressCircle>
            <Code
              value={`<ProgressCircle
  progress={40}
  size={100}
>
  Hey \\o/
</ProgressCircle>`}
            />
          </Box>
          <Box>
            <ProgressCircle progress={40} size={100}>
              {({ progress }) => (
                <div
                  style={{
                    color: 'red',
                    fontSize: 9,
                  }}
                >
                  {progress} w00t!
                </div>
              )}
            </ProgressCircle>
            <Code
              value={`<ProgressCircle
  progress={40}
  size={100}
>
  {({ progress }) => (
    <div
      style={{
        color: 'red',
        fontSize: 9,
      }}
    >
      {progress} w00t!
    </div>
  )}
</ProgressCircle>
              `}
            />
          </Box>
        </Content>
      </Layout>
    )
  }
}

export default IndexPage
