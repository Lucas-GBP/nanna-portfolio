import styles from "./page.module.scss";
import Home from "@/layout/home";

export default function Main() {
  return (
      <main className={styles.page}>
        <Home/>
      </main>
  );
}
