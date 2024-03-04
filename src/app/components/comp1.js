import React from "react";
import styles from "./styles/comp1.module.css";

export default function Comp1() {
  return (
    <div className={styles.outer_div}>
      <div className={styles.heading1}>
        <p>
          We design
          <br />
          the future
        </p>
      </div>
      <div className={styles.text1}>
        <p>
          Architecture is the art and technique of designing and building, as
          distinguished from the skills associated with construction. It is both
          the process and the product of sketching, conceiving, planning,
          designing
        </p>
      </div>
    </div>
  );
}
