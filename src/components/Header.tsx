import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useI18n } from '../i18n/I18nContext';
import { CONTACT } from '../data/content';
import styles from './Header.module.css';
import { useDialogFocus } from './useDialogFocus';
import { useCallback } from 'react';

interface HeaderProps {
  onOpenCallback: (courseName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCallback }) => {
  const { locale, setLocale, t } = useI18n();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);
  useDialogFocus(menuRef, mobileMenuOpen, closeMenu);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSecondaryMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Trap focus & escape key for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setSecondaryMenuOpen(false);
      }
    };
    if (mobileMenuOpen || secondaryMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, secondaryMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        {/* Brand Logo */}
        <Link to="/" className={styles.logoLink} aria-label={t('brand.name')}>
          <img
            src="/logo.png"
            alt="Kingdom Education"
            width={160}
            height={52}
            className={styles.logoImg}
            onError={(e) => {
              // Fallback if image fails
              const target = e.currentTarget;
              target.style.display = 'none';
              const textFallback = target.nextElementSibling as HTMLElement;
              if (textFallback) textFallback.style.display = 'block';
            }}
          />
          <span className={styles.logoTextFallback} style={{ display: 'none' }}>
            KINGDOM <small>EDUCATION</small>
          </span>
        </Link>

        {/* Primary Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Основная навигация">
          <Link to="/courses" className={styles.navLink}>
            {t('nav.courses')}
          </Link>
          <a href="/#teachers" className={styles.navLink}>
            {t('nav.teachers')}
          </a>
          <a href="/#results" className={styles.navLink}>
            {t('nav.results')}
          </a>
          <a href="/#branches" className={styles.navLink}>
            {t('nav.branches')}
          </a>
          <a href="/#faq" className={styles.navLink}>
            {t('nav.faq')}
          </a>

          {/* Secondary Pages Dropdown */}
          <div className={styles.dropdownContainer} ref={secondaryRef}>
            <button
              type="button"
              className={styles.dropdownToggle}
              onClick={() => setSecondaryMenuOpen(!secondaryMenuOpen)}
              aria-expanded={secondaryMenuOpen}
              aria-haspopup="true"
            >
              {t('nav.about')} ▾
            </button>
            {secondaryMenuOpen && (
              <div className={styles.dropdownMenu} role="menu">
                <Link to="/about" className={styles.dropdownItem} role="menuitem">
                  {t('nav.about')}
                </Link>
                <Link to="/corporate" className={styles.dropdownItem} role="menuitem">
                  {t('nav.corporate')}
                </Link>
                <Link to="/kindergarten" className={styles.dropdownItem} role="menuitem">
                  {t('nav.kindergarten')}
                </Link>
                <Link to="/vacancies" className={styles.dropdownItem} role="menuitem">
                  {t('nav.vacancies')}
                </Link>
                <Link to="/contacts" className={styles.dropdownItem} role="menuitem">
                  {t('nav.contacts')}
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Contact info and Language switcher */}
        <div className={styles.actions}>
          {/* Explicit Language Switcher */}
          <div className={styles.langSwitch} role="group" aria-label={locale === 'ru' ? 'Язык сайта' : 'Sayt tili'}>
            <button
              type="button"
              className={`${styles.langBtn} ${locale === 'ru' ? styles.langActive : ''}`}
              onClick={() => setLocale('ru')}
              aria-label="Русский"
              lang="ru"
              aria-pressed={locale === 'ru'}
            >
              RU
            </button>
            
            <button
              type="button"
              className={`${styles.langBtn} ${locale === 'uz' ? styles.langActive : ''}`}
              onClick={() => setLocale('uz')}
              aria-label="O‘zbekcha"
              lang="uz"
              aria-pressed={locale === 'uz'}
            >
              UZ
            </button>
          </div>

          {/* Phone call CTA with raw tel link */}
          <a
            href={CONTACT.phone.href}
            className={styles.phoneLink}
            aria-label={`Позвонить в Kingdom Education по номеру ${CONTACT.phone.display}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className={styles.phoneText}>{CONTACT.phone.display}</span>
          </a>

          {/* Callback button */}
          <button
            type="button"
            className={`btn-primary ${styles.callbackBtn}`}
            onClick={() => onOpenCallback()}
          >
            {t('hero.cta.callback')}
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            className={styles.mobileMenuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && createPortal(
        <div className={styles.mobileOverlay} onClick={() => setMobileMenuOpen(false)}>
          <div
            className={styles.mobileDrawer}
            id="mobile-navigation"
            ref={menuRef}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Мобильное меню"
          >
            <div className={styles.mobileDrawerHeader}>
              <span className={styles.mobileDrawerTitle}>{t('brand.name')}</span>
              <button
                type="button"
                className={styles.closeDrawerBtn}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Закрыть меню"
              >
                ✕
              </button>
            </div>

            <nav className={styles.mobileNav} onClick={(event) => {
              if ((event.target as HTMLElement).closest('a')) closeMenu();
            }}>
              <Link to="/courses" className={styles.mobileNavLink}>
                {t('nav.courses')}
              </Link>
              <a href="/#teachers" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                {t('nav.teachers')}
              </a>
              <a href="/#results" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                {t('nav.results')}
              </a>
              <a href="/#branches" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                {t('nav.branches')}
              </a>
              <a href="/#faq" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>
                {t('nav.faq')}
              </a>

              <div className={styles.mobileDivider} />

              <span className={styles.mobileSubheading}>О центре</span>
              <Link to="/about" className={styles.mobileNavLink}>
                {t('nav.about')}
              </Link>
              <Link to="/corporate" className={styles.mobileNavLink}>
                {t('nav.corporate')}
              </Link>
              <Link to="/kindergarten" className={styles.mobileNavLink}>
                {t('nav.kindergarten')}
              </Link>
              <Link to="/vacancies" className={styles.mobileNavLink}>
                {t('nav.vacancies')}
              </Link>
              <Link to="/contacts" className={styles.mobileNavLink}>
                {t('nav.contacts')}
              </Link>
            </nav>

            <div className={styles.mobileDrawerFooter}>
              <a href={CONTACT.phone.href} className="btn-primary" style={{ width: '100%' }}>
                {t('nav.call')}: {CONTACT.phone.display}
              </a>
            </div>
          </div>
        </div>, document.body
      )}
    </header>
  );
};
