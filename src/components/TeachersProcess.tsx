import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { TEACHERS } from '../data/content';
import styles from './TeachersProcess.module.css';

export const TeachersProcess: React.FC = () => {
  const { tr, t } = useI18n();

  return (
    <section className={styles.teachersSection} id="teachers">
      <div className={`container ${styles.container}`}>
        {/* Section Heading */}
        <div className={styles.sectionHeader} data-reveal>
          <h2 className={styles.sectionTitle}>{t('teachers.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('teachers.subtitle')}</p>
        </div>

      </div>
      <div className={styles.processChapter} data-process>
        <div className={`container ${styles.processInner}`}>
          <h2 data-reveal>{t('process.heading')}</h2>
          <div className={styles.railTrack} aria-hidden="true"><span className={styles.rail} data-process-rail /></div>
        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <div className={styles.stepNumber} aria-hidden="true">01</div>
            <h3 className={styles.stepTitle}>{t('process.step1.title')}</h3>
            <p className={styles.stepDesc}>{t('process.step1.desc')}</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.stepNumber} aria-hidden="true">02</div>
            <h3 className={styles.stepTitle}>{t('process.step2.title')}</h3>
            <p className={styles.stepDesc}>{t('process.step2.desc')}</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.stepNumber} aria-hidden="true">03</div>
            <h3 className={styles.stepTitle}>{t('process.step3.title')}</h3>
            <p className={styles.stepDesc}>{t('process.step3.desc')}</p>
          </div>
        </div>

        </div>
      </div>
      <div className={`container ${styles.container}`}>
        {/* Faculty & Verified Instructors Representation Across Subject Families */}
        <div className={styles.teachersGrid}>
          {TEACHERS.map((teacher) => (
            <article key={teacher.id} className={styles.teacherCard} data-reveal>
              {teacher.photoUrl ? (
                <div className={styles.photoWrapper}>
                  <img
                    src={teacher.photoUrl}
                    alt={tr(teacher.name)}
                    width={180}
                    height={180}
                    className={styles.teacherPhoto}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className={styles.facultyIconWrapper}>
                  <span className={styles.facultyIcon} aria-hidden="true">↗</span>
                </div>
              )}

              <div className={styles.teacherInfo}>
                <h3 className={styles.teacherName}>{tr(teacher.name)}</h3>
                <span className={styles.teacherRole}>{tr(teacher.role)}</span>
                <span className={styles.teacherExp}>{tr(teacher.experience)}</span>

                <ul className={styles.credentialsList}>
                  {teacher.credentials.map((cred, idx) => (
                    <li key={idx} className={styles.credentialItem}>
                      <span className={styles.checkIcon} aria-hidden="true">✓</span>
                      <span>{tr(cred)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
