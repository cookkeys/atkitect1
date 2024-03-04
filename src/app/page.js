import Image from "next/image";
import styles from "./page.module.css";
import MainBody from "./components/mainBody";
import Comp1 from "./components/comp1";


export default function Home() {
  return (
    <div>
      <Comp1/>
      <MainBody/>
    </div>
  );
}
