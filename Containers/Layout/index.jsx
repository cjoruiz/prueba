import Header from '@components/Header';
import React from 'react';
import styles from "@styles/Home.module.scss";



const Layout = ({children, profile}) => {
  
  
  return (
    <div color='red' className={styles.Principal}>
      <Header />
      {children}
    </div>
  );
}

export default Layout