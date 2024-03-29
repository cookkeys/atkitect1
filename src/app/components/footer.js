import React from 'react'
import styles from "./styles/footer.module.css"
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (

    <div>
    <div className={styles.main_div}>
      <div className={styles.outer_div_1}>
        <p className={styles.Logo}>LOGO</p>
        <h3><Link href="">About Us</Link></h3>
        <p>A site designed to inspire, motivate, and encourage with popular quotes and sayings.</p>

        <div className={styles.icons}>
        <Link href="https://in.pinterest.com/NitinSingh2611/"><FaPinterest className={styles.icon1}/></Link>
        <Link href="https://www.instagram.com/nitinnssingh"><FaInstagram className={styles.icon2}/></Link>
        <Link href="https://twitter.com/nitinsinghyoyo"><FaTwitter className={styles.icon3}/></Link>
        <Link href="https://www.facebook.com/profile.php?id=100034325422673"><FaFacebook className={styles.icon4}/></Link>
        </div>
        
      </div>

      <div className={styles.outer_div_2}>
        <h3><Link href="">Connect With Us</Link></h3>
        <p><Link href="">Team</Link></p>
        <p><Link href="">Careers</Link></p>
        <p><Link href="">Contact Us</Link></p>
        <p><Link href="">Terms & Conditions</Link></p>
      </div>

      <div className={styles.outer_div_3}>
        <h3><Link href="">Associated Sites</Link></h3>
        <p><Link href="">Inspiring Info</Link></p>
      </div>

      <div className={styles.outer_div_4}>
        <h3><Link href="">Inspiring Ideas</Link></h3>
      </div>


    </div>
    </div>
  )
}
