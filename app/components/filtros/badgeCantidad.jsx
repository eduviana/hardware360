import React from 'react'

const BadgeCantidad = ({numero}) => {
  return (
    <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-primary ms-2 opacity-75">
    {numero}<span className="visually-hidden">unread messages</span>
  </span>
  )
}

export default BadgeCantidad