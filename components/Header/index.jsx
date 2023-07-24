import Link from "next/link";
import React from "react";
import image from "next/image";
import styles from "@styles/Header.module.scss"

const Header = () => {
  return (
    <nav className={styles.header_container}>
      <div className={styles.navbar_left}>
        <Link href="/">
          <a href="./">
            <img
              src="img/milogo.png"
              height={60}
              width={180}
              alt="logo crisjor"
              className={styles.nav_logo}
            />
          </a>
        </Link>
      </div>

      <div className={styles.navbar_right}>
        <ul class="icons">
          <li>
            <a href="https://github.com/cjoruiz" target="_blank">
              <img src="icons/github (18).svg" alt="logo of github" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <img src="icons/mail-envelope (1).svg" alt="logo of email" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/cjoruiz " target="_blank">
              <img src="icons/facebook-round.svg" alt="logo of facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/cris.jor/" target="_blank">
              <img src="icons/instagram.svg" alt="logo of instagram" />
            </a>
          </li>
        </ul>
      </div>
      {/* {toggle && <Menu />}
      {toggleOrders && <MyOrder />} */}
    </nav>
  );
}

export default Header;
