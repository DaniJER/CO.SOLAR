import { Noto_Sans_Inscriptional_Pahlavi } from "next/font/google";
import styles from "./page.module.css";
import InitialHomeSection from "@/components/home-section/InitialHomeSection";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <InitialHomeSection />
        </main>
      </div>
    </>
  );
}
