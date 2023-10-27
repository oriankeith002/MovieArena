import React from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import './Layout.css';

const Layout = () => {
  // const navigate = useNavigate()

  // navigate(0)

  return (
    <div className="layout">
        <Header />
        <Outlet />
    </div>
  )
}

export default Layout;