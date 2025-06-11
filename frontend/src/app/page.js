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
        <h1>Pagina principal</h1>
      </main>
    </div>
  );
}
