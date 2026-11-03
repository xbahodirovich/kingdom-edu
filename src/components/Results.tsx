import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { STUDENT_RESULTS } from '../data/content';
import styles from './Results.module.css';

export const Results: React.FC = () => {
  const { tr, t } = useI18n();

  return (
    <section className={`section ${styles.resultsSection}`} id="results">
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionHeader} data-reveal>
          <h2 className={styles.sectionTitle}>{t('results.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('results.subtitle')}</p>
        </div>

        {/* Readable Story Cards — NOT a looping carousel */}
        <div className={styles.storiesGrid}>
          {STUDENT_RESULTS.map((item) => (
            <article key={item.id} className={styles.resultCard} data-reveal>
              <div className={styles.cardMain}>
                {item.photoUrl && (
                  <div className={styles.avatarWrapper}>
                    <img
                      src={item.photoUrl}
                      alt={item.name}
                      width={100}
                      height={100}
                      className={styles.avatar}
                      loading="lazy"
                    />
                  </div>
                )}
                <div className={styles.cardHeader}>
                  <div className={styles.examBadge}>{item.exam}</div>
                  <h3 className={styles.studentName}>{item.name}</h3>
                  <div className={styles.scoreRow}>
                    <span className={styles.scoreNumber}>{item.score}</span>
                    <span className={styles.scoreLabel}>Overall Band Score</span>
                  </div>
                </div>
              </div>

              <div className={styles.detailsRow}>
                <p className={styles.breakdown}>{tr(item.details)}</p>
              </div>

              <div className={styles.contextBox}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.infoIcon} aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <p className={styles.contextText}>{tr(item.verifiedContext)}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Explicit Honest Disclaimer */}
        <div className={styles.disclaimerBox}>
          <p className={styles.disclaimerText}>{t('results.disclaimer')}</p>
        </div>
      </div>
    </section>
  );
};
