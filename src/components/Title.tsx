import React from "react"

type Props = {
    text: string
}

const Title = ({ text }: Props) => {
  return (
    <div className="text-5xl text-titleColor font-bold">{text}</div>
  )
}

export default Title