import React from 'react'

type Props = {
    value: string
    onClick: () => void
}

const Button = ({value, onClick}: Props) => {
  return (
    <button
      className="py-1 px-8 rounded-lg text-lg font-bold bg-buttonColor"
      onClick={onClick}
    >
      {value}
    </button>
  )
}

export default Button