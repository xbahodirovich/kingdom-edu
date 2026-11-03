import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { ABOUT_INFO } from '../data/content';
import styles from './SecondaryPage.module.css';

export const AboutPage: React.FC = () => {
  const { tr } = useI18n();

  return (
    <main id="main-content" className={styles.main}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.breadcrumb}>
            <a href="/">Главная</a> <span>/</span> <span>{tr(ABOUT_INFO.title)}</span>
          </div>
          <h1 className={styles.title}>{tr(ABOUT_INFO.title)}</h1>
          <p className={styles.subtitle}>{tr(ABOUT_INFO.headline)}</p>
        </div>
      </header>

      <section className={`section ${styles.contentSection}`}>
        <div className={`container ${styles.container}`}>
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>{ABOUT_INFO.founded}</span>
              <span className={styles.statLabel}>Год основания</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>{ABOUT_INFO.yearsInEducation}</span>
              <span className={styles.statLabel}>Лет опыта</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>{ABOUT_INFO.graduates}</span>
              <span className={styles.statLabel}>Выпускников курсов</span>
            </div>
          </div>

          <div className={styles.narrative}>
            {ABOUT_INFO.paragraphs.map((p, idx) => (
              <p key={idx} className={styles.paragraph}>{tr(p)}</p>
            ))}
          </div>

          <div className={styles.principlesGrid}>
            <h2 className={styles.sectionHeading}>Наши академические принципы</h2>
            <div className={styles.principlesCards}>
              {ABOUT_INFO.principles.map((pr, idx) => (
                <div key={idx} className={styles.principleCard}>
                  <h3 className={styles.principleTitle}>{tr(pr.title)}</h3>
                  <p className={styles.principleDesc}>{tr(pr.desc)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
