import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { VACANCIES_INFO, CONTACT } from '../data/content';
import styles from './SecondaryPage.module.css';

export const VacanciesPage: React.FC = () => {
  const { tr } = useI18n();

  return (
    <main id="main-content" className={styles.main}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.breadcrumb}>
            <a href="/">Главная</a> <span>/</span> <span>{tr(VACANCIES_INFO.title)}</span>
          </div>
          <h1 className={styles.title}>{tr(VACANCIES_INFO.title)}</h1>
          <p className={styles.subtitle}>{tr(VACANCIES_INFO.subtitle)}</p>
        </div>
      </header>

      <section className={`section ${styles.contentSection}`}>
        <div className={`container ${styles.container}`}>
          <h2 className={styles.sectionHeading}>Открытые позиции</h2>
          <div className={styles.vacanciesList}>
            {VACANCIES_INFO.positions.map((pos, idx) => (
              <div key={idx} className={styles.vacancyCard}>
                <h3 className={styles.vacancyTitle}>{tr(pos.title)}</h3>
                <p className={styles.vacancyReqs}>
                  <strong>Требования:</strong> {tr(pos.reqs)}
                </p>
              </div>
            ))}
          </div>

          <div className={styles.applyCard}>
            <h3 className={styles.applyTitle}>Как подать резюме</h3>
            <p className={styles.applyNote}>{tr(VACANCIES_INFO.applyNote)}</p>
            <div className={styles.applyActions}>
              <a href={CONTACT.phone.href} className="btn-primary">
                Позвонить в отдел кадров: {CONTACT.phone.display}
              </a>
              <a
                href={CONTACT.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Telegram: @kingdomedu
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
