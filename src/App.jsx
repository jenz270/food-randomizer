import { useState, useEffect } from 'react'
import Title from "./components/Title"
import EntryBox from "./components/EntryBox"
import ResultBox from "./components/ResultBox"
import Button from "./components/Button"
import { FOOD_RANDOMIZER, LETS_EAT, BACK, RANDOMIZE } from './utils/constants'

function App() {
  const [showResultBox, setShowResultBox] = useState(false)
  const [randomResult, setRandomResult] = useState('')
  const [showError, setShowError] = useState(false)

  const [inputList, setInputList] = useState(() => {
    const savedInputList = localStorage.getItem('inputList')
    return savedInputList ? JSON.parse(savedInputList) : []
  })

  // Save inputList to localStorage whenever its changed
  useEffect(() => {
    localStorage.setItem('inputList', JSON.stringify(inputList))
  }, [inputList])

  const updateInputList = (list) => {
     setInputList(list)
  }

  const removeInputFromInputList = (input) => {
    const updatedArray = inputList.filter(item => item !== input);
    setInputList(updatedArray);
  }

  const randomize = () => {
    const randomIndex = Math.floor(Math.random() * inputList.length)
    setRandomResult(inputList[randomIndex])
 }

  const handleRandomizeClick = () => {
    if (inputList.length === 0) {
      setShowError(true)
    } else {
        setShowError(false)
        randomize()
        setShowResultBox(true)
    }
  }

  const handleBackButtonClick = () => {
     setShowResultBox(false)
  }

  return (
    <div className="app bg-purple-300">
     <div className="flex flex-col items-center justify-center pt-20 gap-6">
        <Title text={FOOD_RANDOMIZER}/>
        {showResultBox ? (
          <ResultBox result={randomResult}/>
        ) : (
          <EntryBox
            inputList={inputList}
            updateInputList={updateInputList}
            removeInput={removeInputFromInputList}
            showError={showError}
          />
        )}
        <Button value={showResultBox ? RANDOMIZE : LETS_EAT} onClick={handleRandomizeClick}/>
        {showResultBox && (<Button value={BACK} onClick={handleBackButtonClick}/>)}
     </div>
    </div>
  )
}

export default App
