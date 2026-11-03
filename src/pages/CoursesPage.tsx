import React from 'react';
import { CourseFinder } from '../components/CourseFinder';
import { useI18n } from '../i18n/I18nContext';
import { FAQ } from '../components/FAQ';
import styles from './CoursesPage.module.css';
import { ScrollMotion } from '../components/ScrollMotion';

interface CoursesPageProps {
  onOpenCallbackModal: (courseName?: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onOpenCallbackModal }) => {
  const { t } = useI18n();

  return (
    <main id="main-content" className={styles.main}>
      <ScrollMotion />
      <header className={styles.pageHeader}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.breadcrumb}>
            <a href="/">Главная</a> <span>/</span> <span>{t('courses.title')}</span>
          </div>
          <h1 className={styles.title}>{t('courses.title')}</h1>
          <p className={styles.subtitle}>
            {t('courses.subtitle')}
          </p>
        </div>
      </header>

      {/* Directory with equal priority finder */}
      <CourseFinder onSelectCourseForCallback={onOpenCallbackModal} />

      {/* Relevant FAQ regarding course enrollment */}
      <FAQ />
    </main>
  );
};
