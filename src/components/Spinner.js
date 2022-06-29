import React from 'react'

export const Spinner = ({ text = '', size = '5em' }) => {
  const header = text ? <h4>{text}</h4> : null
  return (
    <div className="flex flex-col justify-center items-center">
      {header}
      <div className="loader" style={{ height: size, width: size }} />
    </div>
  )
}
