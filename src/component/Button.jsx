import React from 'react'

function Button({text,className,onClick,tabIndex}) {
  return (
    <button tabIndex={tabIndex} onClick={onClick} className={`bg-cyan-600 w-44 p-2 text-white text-center rounded-2xl cursor-pointer ${className}`}>{text}</button>
  )
}

export default Button