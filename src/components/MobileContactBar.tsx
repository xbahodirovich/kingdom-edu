import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useI18n } from '../i18n/I18nContext';
import { CONTACT } from '../data/content';
import styles from './MobileContactBar.module.css';

interface MobileContactBarProps {
  isModalOpen: boolean;
}

export const MobileContactBar: React.FC<MobileContactBarProps> = ({
  isModalOpen,
}) => {
  const { t } = useI18n();
  const location = useLocation();
  const [contactVisible, setContactVisible] = useState(true);

  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      setContactVisible(visible.size > 0);
    }, { threshold: [0, 0.5], rootMargin: '-76px 0px -90px 0px' });
    const scan = () => {
      observer.disconnect();
      visible.clear();
      const actions = root.querySelectorAll<HTMLElement>('a[href^="tel:"], a[href*="t.me/kingdomedu_supportbot"], [data-contact-action]');
      for (const action of actions) {
        const rect = action.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0 && rect.bottom > 76 && rect.top < innerHeight - 90) visible.add(action);
        observer.observe(action);
      }
      setContactVisible(visible.size > 0);
    };
    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(root, { childList: true, subtree: true });
    return () => { observer.disconnect(); mutations.disconnect(); };
  }, [location.pathname, isModalOpen]);

  // Hide the bar when a contact modal dialog is open to prevent visual clutter & keyboard overlap
  if (isModalOpen || contactVisible) return null;

  return createPortal(
    <aside className={styles.bottomBar} aria-label="Быстрые контакты для мобильных устройств">
      <div className={styles.barContainer}>
        {/* Filled Primary Call Action */}
        <a
          href={CONTACT.phone.href}
          className={`btn-primary ${styles.callBtn}`}
          aria-label={`Позвонить в Kingdom Education по номеру ${CONTACT.phone.display}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>{t('mobileBar.call')}</span>
        </a>

        {/* Outlined Secondary Callback Action */}
        <a
          href={CONTACT.social.telegramBot}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-secondary ${styles.callbackBtn}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" /></svg>
          <span>{t('mobileBar.write')}</span>
        </a>
      </div>
    </aside>, document.body
  );
};
