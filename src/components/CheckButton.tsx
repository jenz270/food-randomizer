import React from 'react'
import { CheckIcon } from "@heroicons/react/24/solid"

type Props = {
    onClick: () => void;
}

const CheckButton = ({ onClick }: Props) => {
  return (
    <button
        className="rounded-full bg-greenColor p-2"
        onClick={onClick}
    >
        <CheckIcon className="h-6 w-6 text-white"/>
    </button>
  )
}

export default CheckButton