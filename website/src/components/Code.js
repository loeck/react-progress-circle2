import React from 'react'
import styled from 'styled-components'
import { UnControlled as CodeMirror } from 'react-codemirror2'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/tomorrow-night-bright.css'

try {
  require('codemirror/mode/jsx/jsx')
} catch (e) {}

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

export default Code
