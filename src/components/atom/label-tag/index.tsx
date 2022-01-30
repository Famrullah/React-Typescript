import React from 'react'

interface IProps {
  style?: any
  className?: string
}

export const LabelTag: React.FC<IProps> = (Props) => {
  return (
    <>
      <span
        style={Props.style}
        className={`${
          Props.style
            ? Props.className
            : 'bg-green-500 text-white my-2 rounded align-middle'
        } text-sm font-medium py-1 px-2`}
      >
        {Props.children}
      </span>
    </>
  )
}
