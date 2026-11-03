import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { COURSES, COURSE_CATEGORIES } from '../data/content';
import { useI18n } from '../i18n/I18nContext';
import styles from './CoursePreview.module.css';

export function CoursePreview() {
  const { locale, tr } = useI18n();
  const [paused, setPaused] = useState(false);
  const [inView, setInView] = useState(false);
  const region = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!region.current || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(region.current);
    return () => observer.disconnect();
  }, []);
  const courses = [...COURSES].sort((a, b) => tr(a.name).localeCompare(tr(b.name), locale));
  return (
    <section ref={region} className={`section ${styles.section}`} id="courses">
      <div className={`container ${styles.layout}`}>
        <div className={styles.editorial}>
          <h2>{locale === 'ru' ? 'Большие цели начинаются с первого занятия.' : 'Katta maqsadlar birinchi darsdan boshlanadi.'}</h2>
          <p>{locale === 'ru' ? 'Заговорить на новом языке. Разобраться в сложном предмете. Подготовиться к важному экзамену. Выберите свой следующий шаг — мы поможем найти подходящий курс.' : 'Yangi tilda gapirish. Murakkab fanni tushunish. Muhim imtihonga tayyorlanish. Keyingi qadamingizni tanlang — mos kursni topishga yordam beramiz.'}</p>
          <div className={styles.benefits}>
            <span>{locale === 'ru' ? 'Языки для новых возможностей' : 'Yangi imkoniyatlar uchun tillar'}</span>
            <span>{locale === 'ru' ? 'Знания для уверенного старта' : 'Ishonchli boshlanish uchun bilim'}</span>
            <span>{locale === 'ru' ? 'Курс под вашу цель' : 'Maqsadingizga mos kurs'}</span>
          </div>
        <div className={styles.actions}>
          <button className={styles.pause} onClick={() => setPaused(value => !value)} aria-pressed={paused}>
            {paused ? (locale === 'ru' ? 'Включить движение' : 'Harakatni yoqish') : (locale === 'ru' ? 'Остановить движение' : 'Harakatni to‘xtatish')}
          </button>
          <Link to="/courses" className="btn-primary">{locale === 'ru' ? 'Все курсы' : 'Barcha kurslar'} <span aria-hidden="true">↗</span></Link>
        </div>
        </div>
      <div className={styles.movingColumn}>
      <div className={styles.viewport} data-paused={paused}>
        <div className={styles.track} style={{ animationPlayState: inView ? 'running' : 'paused' }}>
          <ul className={styles.group}>
            {courses.map(course => <li key={course.id}>
              <Link to={`/courses/${course.slug}`} className={styles.tile}>
                <span className={styles.category}>{tr(COURSE_CATEGORIES[course.category])}</span>
                <h3>{tr(course.name)}</h3>
                <span className={styles.footer}>{locale === 'ru' ? 'Подробнее о курсе' : 'Kurs haqida'} <span aria-hidden="true">↗</span></span>
              </Link>
            </li>)}
          </ul>
          <div className={`${styles.group} ${styles.copy}`} aria-hidden="true">
            {courses.map(course => <Link key={course.id} to={`/courses/${course.slug}`} tabIndex={-1} className={styles.tile}>
              <span className={styles.category}>{tr(COURSE_CATEGORIES[course.category])}</span>
              <span className={styles.copyTitle}>{tr(course.name)}</span>
              <span className={styles.footer}>{locale === 'ru' ? 'Подробнее о курсе' : 'Kurs haqida'} <span>↗</span></span>
            </Link>)}
          </div>
        </div>
      </div>
      <div className={styles.hint}>{locale === 'ru' ? 'Наведите курсор, чтобы остановить список.' : 'Ro‘yxatni to‘xtatish uchun kursorni ustiga olib boring.'}</div>
      </div>
      </div>
    </section>
  );
}
