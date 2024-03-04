import React from "react";
import styles from "./styles/mainBody.module.css";
import {
  Fa500Px,
  FaAccessibleIcon,
  FaAccusoft,
  FaAd,
  FaAddressBook,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function MainBody() {
  return (
    <div className={styles.outer_div}>
      <div className={styles.inner_div_1}>
        <Fa500Px className={styles.icon1} />
        <FaInstagram className={styles.icon2} />
        <FaAccessibleIcon className={styles.icon3} />
        <FaFacebook className={styles.icon4} />
        <FaAccusoft className={styles.icon5} />
        <FaAd className={styles.icon6} />
        <FaAddressBook className={styles.icon7} />
      </div>

      <div className={styles.inner_div_2}>
        <div className={styles.box_1}>
          <p className={styles.box_heading1}>200+</p>
          <p className={styles.box_text1}>properties</p>
          <p className={styles.box_text2}>
            rchitecture is the art and technique of designing and building, as
            distinguished from the skills associated with construction. It is
            both the process and the product of sketching, conceiving, planning,
            designing
          </p>
        </div>

        <div className={styles.box_2}>
          <p className={styles.box_heading1}>200+</p>
          <p className={styles.box_text1}>properties</p>
          <p className={styles.box_text2}>
            rchitecture is the art and technique of designing and building, as
            distinguished from the skills associated with construction. It is
            both the process and the product of sketching, conceiving, planning,
            designing
          </p>
        </div>

        <div className={styles.box_3}>
          <p className={styles.box_heading1}>200+</p>
          <p className={styles.box_text1}>properties</p>
          <p className={styles.box_text2}>
            rchitecture is the art and technique of designing and building, as
            distinguished from the skills associated with construction. It is
            both the process and the product of sketching, conceiving, planning,
            designing
          </p>
        </div>
      </div>

      <div className={styles.inner_div_3}>
        <p>OUR SERVICES</p>
      </div>

      <div className={styles.inner_div_4}>
        <div className={styles.inner_div_4_1}>
          <p className={styles.box_heading2}>Plan</p>
          <p
            style={{ fontSize: "13px", paddingRight: "40px" }}
            className={styles.box_text3}
          >
            Architecture is the art and technique of designing and building, as
            distinguished from the skills associated with construction. It is
            both the process and the product of sketching, conceiving, planning,
            designing
          </p>
          <p
            style={{ fontSize: "13px", paddingRight: "40px" }}
            className={styles.box_text4}
          >
            rchitecture is the art and technique of designing and building, as
            distinguished from the skills associated with construction. It is
            both the process and the product of sketching, conceiving, planning,
            designing
          </p>
          <img
            src="https://i.pinimg.com/originals/d4/06/39/d406390f1b8850c85f1d6f7a93967286.jpg"
            className={styles.img_1}
          ></img>
        </div>

        <div className={styles.inner_div_4_2}>
          <img
            src="https://thumbs.dreamstime.com/b/businesswoman-writing-document-office-elegant-desk-bright-35031413.jpg"
            className={styles.img_2}
          ></img>
          <p className={styles.box_heading2}>Design</p>
          <p
            style={{ fontSize: "13px", paddingRight: "40px" }}
            className={styles.box_text3}
          >
            rchitecture is the art and technique of designing and building, as
            distinguished from the skills associated with construction. It is
            both the process and the product of sketching, conceiving, planning,
            designing
          </p>
          <p
            style={{ fontSize: "13px", paddingRight: "40px" }}
            className={styles.box_text4}
          >
            rchitecture is the art and technique of designing and building, as
            distinguished from the skills associated with construction. It is
            both the process and the product of sketching, conceiving, planning,
            designing
          </p>
        </div>
      </div>
    </div>
  );
}
