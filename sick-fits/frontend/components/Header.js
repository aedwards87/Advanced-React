import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import Nav from './Nav'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

const Header = () => {
  return (
    <S.Header>
      <div className="bar">
        <S.Logo>
          <Link href="/">
            <a>Sick Fits</a>
          </Link>
        </S.Logo>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <div>Cart</div>
    </S.Header>
  )
}

const S = {
  Header: styled.header`
    .bar {
      border-bottom: 10px solid ${({ theme }) => theme.black};
      display: grid;
      grid-template-columns: auto 1fr;
      justify-content: space-between;
      align-items: stretch;
      @media (max-width: ${({ theme }) => theme.mediaDesktop}) {
        grid-template-columns: 1fr;
        justify-content: center;
      }
    }
    .sub-bar {
      display: grid;
      grid-template-columns: 1fr auto;
      border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
    }
  `,
  Logo: styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-7deg);
    a {
      padding: .5rem 1rem;
      background: ${({ theme }) => theme.red};
      color: white;
      text-transform:uppercase;
      text-decoration: none;
    }
    @media (max-width: ${({ theme }) => theme.mediaDesktop}) {
      margin: 0;
      text-align: center;
    }
  `,
}


export default Header
