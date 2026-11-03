import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { CONTACT } from '../data/content';
import { CallbackForm } from '../components/CallbackForm';
import { Branches } from '../components/Branches';
import styles from './SecondaryPage.module.css';

export const ContactsPage: React.FC = () => {
  const { tr, t } = useI18n();

  return (
    <main id="main-content" className={styles.main}>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.breadcrumb}>
            <a href="/">Главная</a> <span>/</span> <span>{t('nav.contacts')}</span>
          </div>
          <h1 className={styles.title}>{t('nav.contacts')}</h1>
          <p className={styles.subtitle}>
            Свяжитесь с нами удобным способом или посетите один из наших филиалов в Ташкенте.
          </p>
        </div>
      </header>

      <section className={`section ${styles.contentSection}`}>
        <div className={`container ${styles.container}`}>
          <div className={styles.twoCol}>
            {/* Contact details */}
            <div>
              <h2 className={styles.sectionHeading}>Телефоны и график</h2>
              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>Центральный колл-центр:</span>
                <a href={CONTACT.phone.href} className={styles.largePhone}>
                  {CONTACT.phone.display}
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>Дополнительные линии:</span>
                <ul className={styles.additionalPhonesList}>
                  {CONTACT.additionalPhones.map((p, idx) => (
                    <li key={idx}>
                      <a href={p.href} className={styles.phoneSubLink}>
                        {p.display} — {tr(p.label)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>График работы:</span>
                <p className={styles.hoursText}>{tr(CONTACT.hours)}</p>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>Социальные сети и мессенджеры:</span>
                <div className={styles.socialButtonsRow}>
                  <a
                    href={CONTACT.social.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Telegram: @kingdomedu
                  </a>
                  <a
                    href={CONTACT.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Instagram: @kingdom_edu
                  </a>
                </div>
              </div>
            </div>

            {/* Inline Callback form */}
            <div>
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>

      {/* Branches with Map */}
      <Branches />
    </main>
  );
};
