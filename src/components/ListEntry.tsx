import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

type Props = {
    text: string
    onClick: () => void
}

const ListEntry = ({ text, onClick }: Props) => {
  return (
    <li className="pt-5">
        <div className="flex flex-row gap-10">
            <p className="font-bold text-lg text-center w-3/4 text-greenTextColor">{text}</p>
            <button onClick={onClick}>
                <XMarkIcon className="h-6 w-9 text-red-600"/>
            </button>
        </div>
    </li>
  )
}

export default ListEntry