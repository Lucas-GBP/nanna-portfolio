import styles from "./home.module.scss"
import {useTranslations} from 'next-intl';

export default function Home() {
    const t = useTranslations('home');

    console.log(t("about.p1"));

    return <section>
        <div className={styles.main}>
            <div>

            </div>
            <div className={styles.text}>
                <h1>{t('title')}</h1>
                <h2>{t('subtitle')}</h2>
                <div>
                    <p>{t("about.p1")}</p>
                    <p>{t("about.p2")}</p>
                </div>
            </div>
        </div>
    </section>;
}
