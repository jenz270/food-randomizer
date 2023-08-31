import React from 'react'
import { MENU } from '../utils/constants'

type Props = {
    result: string
}

const ResultBox = ({ result }: Props) => {
  return (
    <div className="w-1/2 bg-boxBackgroundColor p-10 rounded-lg shadow-md">
        <div className="relative flex flex-col justify-start">
            <p className="font-bold text-sm text-black">{MENU}</p>
            <p className="pt-10 font-bold text-5xl text-black text-center">{result}</p>
        </div>
    </div>
  )
}

export default ResultBox