import { Noto_Sans_Inscriptional_Pahlavi } from "next/font/google";
import styles from "./page.module.css";
import InitialHomeSection from "@/components/home-section/InitialHomeSection";
import SlideImageSection from "@/components/home-section/SlideImageSection";
import ShowTestimonial from "@/components/home-section/ShowTestimonial";
export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <InitialHomeSection />
          <SlideImageSection />
          <ShowTestimonial />
        </main>
      </div>
    </>
  );
}
