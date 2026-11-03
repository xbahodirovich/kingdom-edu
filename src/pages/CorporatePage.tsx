import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { CORPORATE_INFO, CONTACT } from '../data/content';
import { CallbackForm } from '../components/CallbackForm';
import styles from './SecondaryPage.module.css';

export const CorporatePage: React.FC = () => {
  const { tr } = useI18n();

  return (
    <main id="main-content" className={styles.main}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.breadcrumb}>
            <a href="/">Главная</a> <span>/</span> <span>{tr(CORPORATE_INFO.title)}</span>
          </div>
          <h1 className={styles.title}>{tr(CORPORATE_INFO.title)}</h1>
          <p className={styles.subtitle}>{tr(CORPORATE_INFO.subtitle)}</p>
        </div>
      </header>

      <section className={`section ${styles.contentSection}`}>
        <div className={`container ${styles.container}`}>
          <div className={styles.twoCol}>
            <div>
              <h2 className={styles.sectionHeading}>Форматы сотрудничества</h2>
              <ul className={styles.checklist}>
                {CORPORATE_INFO.formats.map((fmt, idx) => (
                  <li key={idx} className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{tr(fmt)}</span>
                  </li>
                ))}
              </ul>

              <h2 className={`${styles.sectionHeading} ${styles.mtLarge}`}>Преимущества для бизнеса</h2>
              <ul className={styles.checklist}>
                {CORPORATE_INFO.features.map((feat, idx) => (
                  <li key={idx} className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{tr(feat)}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.directContactNote}>
                <p>
                  Для обсуждения корпоративного тарифа и запроса коммерческого предложения свяжитесь с нами напрямую:
                </p>
                <a href={CONTACT.phone.href} className="btn-secondary">
                  Позвонить: {CONTACT.phone.display}
                </a>
              </div>
            </div>

            <div>
              <CallbackForm initialCourse="Корпоративное обучение" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
