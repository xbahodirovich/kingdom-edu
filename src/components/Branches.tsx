import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { BRANCHES } from '../data/content';
import styles from './Branches.module.css';

export const Branches: React.FC = () => {
  const { tr, t } = useI18n();
  const [activeBranchId, setActiveBranchId] = useState<string>(BRANCHES[0].id);

  const activeBranch = BRANCHES.find((b) => b.id === activeBranchId) || BRANCHES[0];

  return (
    <section className={`section ${styles.branchesSection}`} id="branches">
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('branches.title')}</h2>
          <p className={styles.sectionSubtitle}>{t('branches.subtitle')}</p>
        </div>

        {/* Branch Selector Tabs */}
        <div className={styles.branchTabs} role="tablist" aria-label="Выбор филиала">
          {BRANCHES.map((branch) => {
            const isActive = branch.id === activeBranchId;
            return (
              <button
                key={branch.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                onClick={() => setActiveBranchId(branch.id)}
              >
                {tr(branch.name)}
              </button>
            );
          })}
        </div>

        {/* Active Branch Display */}
        <div className={styles.branchContentGrid}>
          {/* Branch Details Card */}
          <div className={styles.infoCard}>
            <div className={styles.districtBadge}>
              {tr(activeBranch.district)}
            </div>

            <h3 className={styles.branchHeading}>{tr(activeBranch.name)}</h3>

            <div className={styles.detailGroup}>
              <span className={styles.detailLabel}>Адрес:</span>
              <address className={styles.addressText}>{tr(activeBranch.address)}</address>
            </div>

            <div className={styles.detailGroup}>
              <span className={styles.detailLabel}>Ориентир:</span>
              <p className={styles.landmarkText}>{tr(activeBranch.landmark)}</p>
            </div>

            <div className={styles.detailGroup}>
              <span className={styles.detailLabel}>Телефон филиала:</span>
              <a
                href={activeBranch.phone.href}
                className={styles.phoneLink}
                aria-label={`Позвонить в ${tr(activeBranch.name)}: ${activeBranch.phone.display}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{activeBranch.phone.display}</span>
              </a>
            </div>

            <div className={styles.notesBox}>
              <span className={styles.notesIcon} aria-hidden="true">ℹ️</span>
              <p className={styles.notesText}>{tr(activeBranch.verifiedNotes)}</p>
            </div>

            <div className={styles.ctaRow}>
              <a href={activeBranch.phone.href} className="btn-primary" style={{ width: '100%' }}>
                {t('branches.callBranch')}
              </a>
            </div>
          </div>

          {/* Lazy-Loaded Embedded Map */}
          <div className={styles.mapContainer}>
            <iframe
              src={activeBranch.embedMapUrl}
              title={`Карта проезда: ${tr(activeBranch.name)}`}
              className={styles.mapIframe}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
