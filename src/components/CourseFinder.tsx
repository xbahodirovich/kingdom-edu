import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import {
  COURSES,
  COURSE_CATEGORIES,
  CATEGORY_ORDER,
  type CourseCategory,
  type Course,
} from '../data/content';
import styles from './CourseFinder.module.css';

interface CourseFinderProps {
  onSelectCourseForCallback?: (courseName: string) => void;
}

function CourseTile({ course, onSelect }: { course: Course; onSelect?: (name: string) => void }) {
  const { locale, tr, t } = useI18n();
  const [desktop, setDesktop] = useState(() => matchMedia('(min-width: 768px)').matches);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const media = matchMedia('(min-width: 768px)');
    const update = () => setDesktop(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  const name = tr(course.name);
  const mark = course.slug === 'ielts' ? 'I' : course.slug === 'sat' ? 'S' : name.slice(0, 1);
  return (
    <details className={styles.courseCard} open={desktop || expanded} data-reveal>
      <summary className={styles.courseSummary} tabIndex={desktop ? -1 : 0}
        onClick={event => { event.preventDefault(); if (!desktop) setExpanded(value => !value); }}>
        <span className={styles.subjectMark} aria-hidden="true">{mark}<span /></span>
        <span className={styles.summaryText}>
          <span className={styles.categoryBadge}>{tr(COURSE_CATEGORIES[course.category])}</span>
          <h3 className={styles.courseTitle}>{name}</h3>
        </span>
        <span className={styles.expandIndicator} aria-hidden="true" />
      </summary>
      <div className={styles.courseBody}>
        <p className={styles.courseDescription}>{tr(course.shortDescription)}</p>
        <div className={styles.mobileMeta}>
          <span>{t('course.format')}: {tr(course.format)}</span>
          <span>{t('course.level')}: {tr(course.level)}</span>
        </div>
        <div className={styles.cardFooter}>
          <Link to={`/courses/${course.slug}`} className={styles.detailsBtn}
            aria-label={`${t('courses.details')}: ${name}`}>
            {locale === 'ru' ? 'О курсе' : 'Kurs haqida'} <span aria-hidden="true">↗</span>
          </Link>
          {onSelect && <button type="button" className={styles.quickCallbackBtn}
            onClick={() => onSelect(name)} aria-label={`${locale === 'ru' ? 'Записаться' : 'Yozilish'}: ${name}`}>
            {locale === 'ru' ? 'Записаться' : 'Yozilish'}
          </button>}
        </div>
      </div>
    </details>
  );
}

export const CourseFinder: React.FC<CourseFinderProps> = ({ onSelectCourseForCallback }) => {
  const { locale, tr, t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Equal opportunity: Default alphabetical listing by active locale!
  const filteredCourses = useMemo(() => {
    let result = [...COURSES];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter((course) => course.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter((course) => {
        const name = tr(course.name).toLowerCase();
        const desc = tr(course.shortDescription).toLowerCase();
        return name.includes(q) || desc.includes(q);
      });
    }

    // Sort Alphabetically by name in the active locale
    result.sort((a, b) => {
      const nameA = tr(a.name);
      const nameB = tr(b.name);
      return nameA.localeCompare(nameB, locale === 'uz' ? 'uz' : 'ru');
    });

    return result;
  }, [selectedCategory, searchQuery, locale, tr]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <section className={`section ${styles.finderSection}`} id="courses">
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionHeader} data-reveal>
          <div className={styles.titleWrapper}>
            <h2 className={styles.sectionTitle}>{t('courses.title')}</h2>
            <p className={styles.sectionSubtitle}>{t('courses.subtitle')}</p>
          </div>

          {/* Search Input */}
          <div className={styles.searchWrapper}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder={t('courses.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label={t('courses.searchPlaceholder')}
            />
            {searchQuery && (
              <button
                type="button"
                className={styles.clearSearchBtn}
                onClick={() => setSearchQuery('')}
                aria-label={locale === 'ru' ? 'Очистить поиск' : 'Qidiruvni tozalash'}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs — Goal-based, equal treatment */}
        <div className={styles.categoryFilters} role="group" aria-label={locale === 'ru' ? 'Фильтры категорий курсов' : 'Kurs toifalari'}>
          <button
            type="button"
            
            aria-pressed={selectedCategory === 'all'}
            className={`${styles.filterBtn} ${selectedCategory === 'all' ? styles.filterBtnActive : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            {t('courses.filter.all')} ({COURSES.length})
          </button>
          {CATEGORY_ORDER.map((catKey) => {
            const count = COURSES.filter((c) => c.category === catKey).length;
            const label = tr(COURSE_CATEGORIES[catKey]);
            return (
              <button
                key={catKey}
                type="button"
                
                aria-pressed={selectedCategory === catKey}
                className={`${styles.filterBtn} ${selectedCategory === catKey ? styles.filterBtnActive : ''}`}
                onClick={() => setSelectedCategory(catKey)}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid — Equal visual weight, no featured/oversized tile */}
        {filteredCourses.length > 0 ? (
          <div className={styles.coursesGrid}>
            {filteredCourses.map(course => (
              <CourseTile key={course.id} course={course} onSelect={onSelectCourseForCallback} />
            ))}
          </div>
        ) : (
          /* Honest no-results state with reset button */
          <div className={styles.noResultsBox}>
            <p className={styles.noResultsText}>{t('courses.noResults')}</p>
            <button
              type="button"
              className={`btn-primary ${styles.resetBtn}`}
              onClick={handleReset}
            >
              {t('courses.reset')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
