import React from 'react'
import './App.css'

function App() {
  const [text, setText] = React.useState('')
  const [checkedState, setCheckedState] = React.useState(true)
  const [outputText, setOutputText] = React.useState('')

  function handleTextChange(event) {
    const { value } = event.target
    setText(value)
  }

  function handleCheckStateChange(event) {
    const { checked } = event.target
    setCheckedState(checked)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const lowercaseText = checkedState
      ? text
          .toLocaleLowerCase()
          .replace(/\./gi, '')
          .replace(/\s/gi, '')
      : text
    setText('')
    setOutputText(lowercaseText)
  }

  return (
    <div className='app'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='checkbox'>
          <input
            className='checkbox__input'
            type='checkbox'
            defaultChecked={checkedState}
            onChange={handleCheckStateChange}
          />
          <label className='checkbox__label'>clean</label>
        </div>
        <div className='form__input-field'>
          <input
            className='form__text-field'
            type='text'
            value={text}
            onChange={handleTextChange}
          />
          <label className='form__label'>Enter text</label>
        </div>
      </form>

      <div className='output'>
        <div className='output__header-text'>Output</div>
        {outputText === '' ? (
          <div className='output__main-content'>No data to display.</div>
        ) : (
          <div className='output__main-content'>{outputText}</div>
        )}
      </div>
    </div>
  )
}

export default App
