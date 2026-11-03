import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { FAQ_ITEMS } from '../data/content';
import styles from './FAQ.module.css';

export const FAQ: React.FC = () => {
  const { tr, t } = useI18n();

  return (
    <section className={`section ${styles.faqSection}`} id="faq">
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('faq.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('faq.subtitle')}</p>
        </div>

        {/* Native details/summary elements with instant expansion — no height tween delays */}
        <div className={styles.faqList}>
          {FAQ_ITEMS.map((item) => (
            <details key={item.id} className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                <span className={styles.questionText}>{tr(item.question)}</span>
                <span className={styles.toggleIcon} aria-hidden="true">+</span>
              </summary>
              <div className={styles.faqAnswer}>
                <p className={styles.answerText}>{tr(item.answer)}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
