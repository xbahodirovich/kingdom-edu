import React from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import {
  COURSES,
  COURSE_CATEGORIES,
  TEACHERS,
  CONTACT,
  type Course,
} from '../data/content';
import { CallbackForm } from '../components/CallbackForm';
import styles from './CourseDetailPage.module.css';

interface CourseDetailPageProps {
  onOpenCallbackModal: (courseName?: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  onOpenCallbackModal,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const { tr, t } = useI18n();

  // If accessed via /kurs-single.html?id=... or /courses/:slug
  const queryCourseId = searchParams.get('id') || searchParams.get('slug');
  const targetIdentifier = slug || queryCourseId || 'english';

  const course: Course | undefined =
    COURSES.find((c) => c.slug === targetIdentifier || c.id === targetIdentifier) ||
    COURSES[0];

  const categoryLabel = tr(COURSE_CATEGORIES[course.category]);
  const courseName = tr(course.name);
  const assignedTeachers = TEACHERS.filter((teacher) =>
    course.teacherIds.includes(teacher.id)
  );

  return (
    <main id="main-content" className={styles.main}>
      {/* Course Header Banner */}
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
            <Link to="/">{t('nav.about')}</Link>
            <span aria-hidden="true">/</span>
            <Link to="/courses">{t('courses.title')}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{courseName}</span>
          </nav>

          <div className={styles.headerMain}>
            <div className={styles.badgeRow}>
              <span className={styles.categoryBadge}>{categoryLabel}</span>
              <span className={styles.ageBadge}>{tr(course.ageRange)}</span>
              <span className={styles.levelBadge}>{tr(course.level)}</span>
            </div>

            <h1 className={styles.title}>{courseName}</h1>
            <p className={styles.shortDesc}>{tr(course.shortDescription)}</p>

            {/* Quick Actions */}
            <div className={styles.actionRow}>
              <button
                type="button"
                className={`btn-primary ${styles.enrollBtn}`}
                data-contact-action
                onClick={() => onOpenCallbackModal(courseName)}
              >
                {t('course.enrollCTA')}
              </button>
              <a
                href={CONTACT.phone.href}
                className={`btn-secondary ${styles.callBtn}`}
                aria-label={`Позвонить для записи на курс ${courseName}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{CONTACT.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className={`container ${styles.layoutContainer}`}>
        <div className={styles.contentColumn}>
          {/* Detailed Course Description */}
          <section className={styles.contentSection}>
            <h2 className={styles.sectionHeading}>О курсе</h2>
            <p className={styles.fullDescText}>{tr(course.fullDescription)}</p>
          </section>

          {/* Syllabus / Program */}
          {course.syllabus && course.syllabus.length > 0 && (
            <section className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>{t('course.syllabus')}</h2>
              <ol className={styles.syllabusList}>
                {course.syllabus.map((item, index) => (
                  <li key={index} className={styles.syllabusItem}>
                    <span className={styles.syllabusIndex}>0{index + 1}</span>
                    <span className={styles.syllabusText}>{tr(item)}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {/* Verified Faculty for this Course */}
          {assignedTeachers.length > 0 && (
            <section className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>Преподаватели курса</h2>
              <div className={styles.teachersList}>
                {assignedTeachers.map((teacher) => (
                  <div key={teacher.id} className={styles.teacherBrief}>
                    {teacher.photoUrl && (
                      <img
                        src={teacher.photoUrl}
                        alt={tr(teacher.name)}
                        width={64}
                        height={64}
                        className={styles.teacherAvatar}
                      />
                    )}
                    <div>
                      <h4 className={styles.teacherBriefName}>{tr(teacher.name)}</h4>
                      <p className={styles.teacherBriefRole}>{tr(teacher.role)}</p>
                      <p className={styles.teacherBriefExp}>{tr(teacher.experience)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contextual lead form directly on detail page */}
          <section className={styles.contentSection}>
            <CallbackForm initialCourse={courseName} />
          </section>
        </div>

        {/* Sidebar with Verified Key Parameters */}
        <aside className={styles.sidebarColumn}>
          <div className={styles.paramsCard}>
            <h3 className={styles.paramsTitle}>Параметры обучения</h3>

            <div className={styles.paramGroup}>
              <span className={styles.paramLabel}>{t('course.audience')}</span>
              <span className={styles.paramValue}>{tr(course.audience)}</span>
            </div>

            <div className={styles.paramGroup}>
              <span className={styles.paramLabel}>{t('course.format')}</span>
              <span className={styles.paramValue}>{tr(course.format)}</span>
            </div>

            <div className={styles.paramGroup}>
              <span className={styles.paramLabel}>{t('course.duration')}</span>
              <span className={styles.paramValue}>{tr(course.duration)}</span>
            </div>

            <div className={styles.paramGroup}>
              <span className={styles.paramLabel}>{t('course.schedule')}</span>
              <span className={styles.paramValue}>{tr(course.schedule)}</span>
            </div>

            <div className={styles.paramGroup}>
              <span className={styles.paramLabel}>{t('course.prerequisites')}</span>
              <span className={styles.paramValue}>{tr(course.prerequisites)}</span>
            </div>

            <div className={`${styles.paramGroup} ${styles.priceGroup}`}>
              <span className={styles.paramLabel}>{t('course.price')}</span>
              <span className={styles.priceClarifyText}>{t('course.price.clarify')}</span>
            </div>

            <div className={styles.sidebarActionBox}>
              <button
                type="button"
                className="btn-primary"
                data-contact-action
                style={{ width: '100%' }}
                onClick={() => onOpenCallbackModal(courseName)}
              >
                {t('course.enrollCTA')}
              </button>
              <a
                href={CONTACT.phone.href}
                className="btn-secondary"
                style={{ width: '100%' }}
              >
                Позвонить в центр
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};
