import React, { useState, useEffect } from 'react'
import CheckButton from './CheckButton'
import ListEntry from './ListEntry'

type Props = {
    inputList: Array<string>
    updateInputList: (list: Array<string>) => void
    removeInput: (item: string) => void
    showError: Boolean
}

const EntryBox = ({ inputList, updateInputList, removeInput, showError }: Props) => {
  const [inputValue, setInputValue] = useState("")
  const [displayError, setDisplayError] = useState(showError)

  useEffect(() => {
    setDisplayError(showError);
  }, [showError]);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
  }

  const handleInputDelete = (item) => {
     removeInput(item)
  }

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      setDisplayError(true);
      return;
    }

    const updatedArray = [...inputList, inputValue]
    updateInputList(updatedArray)
    setInputValue("")
    setDisplayError(false)
  }

  return (
    <div className="w-100 h-350 md:w-500 md:h-250 bg-boxBackgroundColor p-10 rounded-lg shadow-md">
        {/* Input Box & Enter Button */}
        <div className="flex flex-row gap-3 justify-center">
            <input
                className="border rounded-lg py-2 px-8 text-black focus:outline-none focus:ring-2"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter food here"
            />
            <CheckButton onClick={handleSubmit}/>
        </div>
        {displayError && (
          <p className="mt-3 text-red-600 text-center">Please enter a value before randomizing!</p>
        )}
        <div className="mt-6">

            {/* Entries */}
            <ul>
                 {inputList.map((item, index) => (
                        <ListEntry
                            key={`${item}-${index}`}
                            text={item}
                            onClick={() => handleInputDelete(item)}
                        />
                 ))}
            </ul>
        </div>
    </div>
  )
}

export default EntryBox