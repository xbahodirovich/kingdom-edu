import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { KINDERGARTEN_INFO, CONTACT } from '../data/content';
import { CallbackForm } from '../components/CallbackForm';
import styles from './SecondaryPage.module.css';

export const KindergartenPage: React.FC = () => {
  const { tr } = useI18n();

  return (
    <main id="main-content" className={styles.main}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.breadcrumb}>
            <a href="/">Главная</a> <span>/</span> <span>{tr(KINDERGARTEN_INFO.title)}</span>
          </div>
          <h1 className={styles.title}>{tr(KINDERGARTEN_INFO.title)}</h1>
          <p className={styles.subtitle}>{tr(KINDERGARTEN_INFO.subtitle)}</p>
        </div>
      </header>

      <section className={`section ${styles.contentSection}`}>
        <div className={`container ${styles.container}`}>
          <div className={styles.twoCol}>
            <div>
              <h2 className={styles.sectionHeading}>Условия пребывания и программа</h2>
              <div className={styles.scheduleBadge}>
                <span>Режим работы:</span> {tr(KINDERGARTEN_INFO.schedule)}
              </div>

              <ul className={styles.checklist}>
                {KINDERGARTEN_INFO.features.map((feat, idx) => (
                  <li key={idx} className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{tr(feat)}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.directContactNote}>
                <p>
                  Записаться на экскурсию по детскому саду в филиале Медгородок (ул. Камарнисо, 12-Д) можно по телефону:
                </p>
                <a href={CONTACT.phone.href} className="btn-secondary">
                  Позвонить: {CONTACT.phone.display}
                </a>
              </div>
            </div>

            <div>
              <CallbackForm initialCourse="Kingdom Детский сад" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
