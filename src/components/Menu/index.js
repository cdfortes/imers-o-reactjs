import React from 'react'

import Logo from '../../assets/img/logo.png'
import ButtonLink from '../ButtonLink'

import './Menu.css'

const Menu = () => {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img src={Logo} alt='logo cdfflix' className='Logo' />
      </a>
      <ButtonLink className='ButtonLink' href='/'>
        novo
      </ButtonLink>
    </nav>
  )
}

export default Menu
