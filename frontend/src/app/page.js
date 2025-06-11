import Form from "@/components/Form";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "CoSolar",
  description: "Empresa de energía solar",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <Maintenance /> */}
        <Form />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
