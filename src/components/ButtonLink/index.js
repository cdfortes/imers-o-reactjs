import React from 'react'

const ButtonLink = ({ href, children, className }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
export default ButtonLink
