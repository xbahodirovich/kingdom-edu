import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import { CONTACT, COURSES, BRANCHES } from '../data/content';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { tr, t } = useI18n();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        {/* Brand Col */}
        <div className={styles.brandCol}>
          <Link to="/" className={styles.logoLink} aria-label="Kingdom Education главная">
            <img
              src="/footerlogo.svg"
              alt="Kingdom Education"
              width={160}
              height={50}
              className={styles.footerLogo}
              onError={(e) => {
                // Fallback to png logo if svg encounters rendering differences
                e.currentTarget.src = '/logo.png';
              }}
            />
          </Link>
          <p className={styles.brandTagline}>
            {t('brand.tagline')}. Учебные программы для школьников, абитуриентов и взрослых с 2016 года.
          </p>

          <div className={styles.contactBlock}>
            <span className={styles.contactLabel}>{t('footer.callCenter')}</span>
            <a href={CONTACT.phone.href} className={styles.phoneLink}>
              {CONTACT.phone.display}
            </a>
            <span className={styles.scheduleText}>{t('footer.scheduleLabel')} {tr(CONTACT.hours)}</span>
          </div>

          <div className={styles.socialsGroup}>
            <span className={styles.socialsLabel}>{t('footer.social')}:</span>
            <div className={styles.socialsList}>
              <a
                href={CONTACT.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Telegram-канал Kingdom Education"
              >
                Telegram
              </a>
              <a
                href={CONTACT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram Kingdom Education"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Courses Column (All Courses have equal opportunity) */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>{t('footer.courses')}</h4>
          <ul className={styles.linksList}>
            {COURSES.slice(0, 7).map((c) => (
              <li key={c.id}>
                <Link to={`/courses/${c.slug}`} className={styles.link}>
                  {tr(c.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Школьные предметы</h4>
          <ul className={styles.linksList}>
            {COURSES.slice(7).map((c) => (
              <li key={c.id}>
                <Link to={`/courses/${c.slug}`} className={styles.link}>
                  {tr(c.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Secondary Pages & Branches */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>{t('footer.navigation')}</h4>
          <ul className={styles.linksList}>
            <li>
              <Link to="/courses" className={styles.link}>
                {t('courses.title')}
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.link}>
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link to="/corporate" className={styles.link}>
                {t('nav.corporate')}
              </Link>
            </li>
            <li>
              <Link to="/kindergarten" className={styles.link}>
                {t('nav.kindergarten')}
              </Link>
            </li>
            <li>
              <Link to="/vacancies" className={styles.link}>
                {t('nav.vacancies')}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className={styles.link}>
                {t('nav.contacts')}
              </Link>
            </li>
          </ul>

          <h4 className={`${styles.colTitle} ${styles.subColTitle}`}>{t('footer.branches')}</h4>
          <ul className={styles.linksList}>
            {BRANCHES.map((b) => (
              <li key={b.id}>
                <a href="/#branches" className={styles.link}>
                  {tr(b.name)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Legal & Compliance Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContainer}`}>
          <p className={styles.copyright}>{t('footer.copyright')}</p>
          <p className={styles.disclaimer}>{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
};
