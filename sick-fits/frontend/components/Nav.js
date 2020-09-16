import React from 'react'
import Link from 'next/link'
import NavStyles from './styles/NavStyles'

const navLinks = ['Shop', 'Sell', 'Signup', 'Orders', 'Account']

const Nav = () => {
  return (
    <NavStyles>
      {navLinks.map(navLink => (
        <Link key={navLink} href={`/${navLink.toLowerCase()}`}>
          <a>{navLink}</a>
        </Link>
      ))}
    </NavStyles>
  )
}

export default Nav
