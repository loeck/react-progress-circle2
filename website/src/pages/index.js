/* eslint-disable no-template-curly-in-string */

import React, { PureComponent } from 'react'
import styled from 'styled-components'
import ProgressCircle from 'react-progress-circle2'
import { UnControlled as CodeMirror } from 'react-codemirror2'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/tomorrow-night-bright.css'

import Layout from '../components/Layout'

try {
  require('codemirror/mode/jsx/jsx')
} catch (e) {}

const Title = styled.a`
  display: block;
  background-color: black;
  color: white;
  padding: 20px;
  font-size: 30px;
`
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
const WrapperCode = styled.div`
  margin-top: 20px;
`

const Code = ({ value }) => (
  <WrapperCode>
    <CodeMirror
      value={value}
      options={{
        cursorHeight: 0,
        lineNumbers: true,
        mode: 'jsx',
        readOnly: true,
        showCursorWhenSelecting: false,
        theme: 'tomorrow-night-bright',
      }}
    />
  </WrapperCode>
)

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
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

  render() {
    const { randomValue } = this.state

    return (
      <Layout>
        <Title href="https://github.com/loeck/react-progress-circle2">react-progress-circle2</Title>
        <Content
          style={{
            justifyContent: 'center',
            margin: '60px 0',
          }}
        >
          <ProgressCircle progress={randomValue} size={200} strokeWidth={5}>
            {(progress, v) => (
              <div
                style={{
                  fontSize: 30,
                }}
              >
                {progress}
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
              {progress => progress}
            </ProgressCircle>
            <Code
              value={`<ProgressCircle
  progress={40}
  size={100}
>
  {progress => progress}
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
            <ProgressCircle progress={40} size={100} progressLabel={v => `${v} w00t!`}>
              {progress => (
                <div
                  style={{
                    color: 'red',
                    fontSize: 9,
                  }}
                >
                  {progress}
                </div>
              )}
            </ProgressCircle>
            <Code
              value={`<ProgressCircle
  progress={40}
  progressLabel={v => ${'`${v} w00t!`'}}
  size={100}
>
  {progress => (
    <div
      style={{
        color: 'red',
        fontSize: 9,
      }}
    >
      {progress}
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
