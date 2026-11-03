import { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { CONTACT } from '../data/content';
import styles from './Hero.module.css';

export const Hero = ({ onOpenCallback }: { onOpenCallback: () => void }) => {
  const { locale, t } = useI18n();
  const [failed, setFailed] = useState(false);
  return (
    <section className={styles.heroSection} data-hero>
      <div className={`container ${styles.container}`}>
        <div className={styles.contentCol}>
          <h1 className={styles.headline}>
            {locale === 'ru' ? <>Новые знания.<br /><span>Ваш следующий шаг.</span></> : <>Yangi bilimlar.<br /><span>Keyingi qadamingiz.</span></>}
          </h1>
          <p className={styles.subheadline}>{t('hero.subheadline')}</p>
          <div className={styles.actions}>
            <a href={CONTACT.phone.href} className="btn-primary">{locale === 'ru' ? 'Позвонить нам' : 'Qo‘ng‘iroq qilish'} <span aria-hidden="true">↗</span></a>
            <button data-contact-action className="btn-secondary" onClick={onOpenCallback}>{t('hero.cta.callback')}</button>
          </div>
          <a className={styles.phone} href={CONTACT.phone.href}>{CONTACT.phone.display}</a>
          <div className={styles.location}>{locale === 'ru' ? 'Kingdom Education · Ташкент' : 'Kingdom Education · Toshkent'}</div>
        </div>
        <div className={styles.mediaCol}>
          <div className={styles.backing} data-hero-plane aria-hidden="true"><span className={styles.geometry} /></div>
          <div className={styles.imageCard}>
            {!failed ? <img src="/about.jpg" width="560" height="640" className={styles.heroImage} alt={locale === 'ru' ? 'Учебный центр Kingdom Education' : 'Kingdom Education o‘quv markazi'} onError={() => setFailed(true)} fetchPriority="high" /> : <div className={styles.fallback}>Kingdom<br />Education</div>}
            <div className={styles.imageCaption}>{locale === 'ru' ? 'Место для вашего следующего шага' : 'Keyingi qadamingiz uchun maskan'}</div>
          </div>
          <a href="#courses" className={styles.explore}>{locale === 'ru' ? 'Найдите свой курс' : 'Kursingizni toping'} <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
  );
};
