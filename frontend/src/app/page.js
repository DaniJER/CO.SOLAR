import styles from "./page.module.css";
import Maintenance from "@/components/maintenance";
export const metadata = {
  title: "CoSolar",
  description: "Empresa de energía solar",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Maintenance />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
