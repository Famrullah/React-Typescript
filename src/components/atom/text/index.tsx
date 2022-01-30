import React from 'react'

interface IProps {
  tag: string
  style?: any
  className?: string
}
const classObject: any = {
  1: 'text-3xl sm:text-4xl font-semibold text-gray-900',
  2: 'text-2xl sm:text-3xl font-semibold text-gray-900',
  3: 'text-2xl sm:t`ext-3xl font-normal text-gray-800',
  4: 'text-xl sm:t`ext-2xl font-normal text-gray-800',
  5: 'text-xl sm:t`ext-xl font-normal text-gray-700',
  6: 'text-xl sm:t`ext-xl font-normal text-gray-700',
}

export const Text: React.FC<IProps> = (Props) => {
  const strToArr: string[] = Props.tag.split('')
  const index: string = classObject[strToArr[1]]
  return (
    <>
      {React.createElement(
        Props.tag,
        {
          className: `${index ? index : ''} ${Props.className} py-2`,
          style: Props.style,
        },
        Props.children
      )}
    </>
  )
}
