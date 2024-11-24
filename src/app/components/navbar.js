import React from "react";
import styles from "./styles/navbar.module.css";
import Link from "next/link";
import {FaFacebook, FaInstagram, FaSearch, FaTwitch, FaTwitter} from "react-icons/fa"

export default function Navbar() {
  return (
    <div className={styles.outer_div}>
      <div className={styles.inner_div_1}>
        <p>LOGO (demo site for testing)</p>
      </div>

      <div className={styles.inner_div_2}>
        <ul>
            <li><Link href=" ">  <p>Projects</p>   </Link></li>
            <li><Link href=" ">   <p>Services</p>  </Link></li>
            <li><Link href=" ">   <p>About</p>  </Link></li>
            <li><Link href=" ">  <p>Pages</p>   </Link></li>
            <li><Link href=" ">    <p><FaSearch/></p>    </Link></li>
        </ul>
      </div>

      <div className={styles.inner_div_3}> 
            <Link href=" https://twitter.com/nitinsinghyoyo "><FaTwitter className={styles.button1}/></Link>
            <Link href=" https://www.facebook.com/profile.php?id=100034325422673 "><FaFacebook className={styles.button2}/></Link>
            <Link href=" https://www.instagram.com/nitinnssingh "><FaInstagram className={styles.button3}/></Link> 
      </div>
    </div>
  );
}
