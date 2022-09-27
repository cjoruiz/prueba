import Header from '@components/Header';
import React from 'react';



const Layout = ({children, profile}) => {
  
  
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default Layout