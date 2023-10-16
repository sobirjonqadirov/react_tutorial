import { useState } from 'react'
import picture from './react-logo.png'

export default function Header() {
  return (
    <header>
      <nav className='nav'>
        <img src={picture} className='nav-logo' />
        <ul className='nav-items'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}