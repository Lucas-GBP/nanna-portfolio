import styles from "./page.module.scss";
import {useTranslations} from 'next-intl';

export default function Home() {
    const t = useTranslations('home');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{t('title')}</h1>
        <div>{t('about')}</div>
      </main>
    </div>
  );
}
