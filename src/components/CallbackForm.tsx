import React, { useState, useRef, useId } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { CONTACT, COURSES } from '../data/content';
import styles from './CallbackForm.module.css';
import { useDialogFocus } from './useDialogFocus';

interface CallbackFormProps {
  initialCourse?: string;
  isModal?: boolean;
  onClose?: () => void;
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Normalizes phone string into Uzbek format +998 __ ___ __ __
 */
function normalizeUzbekPhone(value: string): string {
  // Extract only digits
  let digits = value.replace(/\D/g, '');

  // If user pasted or typed without 998, prepend 998 if 9 digits
  if (digits.length === 9) {
    digits = '998' + digits;
  } else if (digits.startsWith('8') && digits.length === 10) {
    // 890... -> 99890...
    digits = '998' + digits.slice(1);
  }

  // Format: +998 (XX) XXX-XX-XX
  if (!digits.startsWith('998')) {
    digits = '998' + digits;
  }

  const trimmed = digits.slice(0, 12);
  let formatted = '+' + trimmed.slice(0, 3);

  if (trimmed.length > 3) {
    formatted += ' (' + trimmed.slice(3, 5);
  }
  if (trimmed.length > 5) {
    formatted += ') ' + trimmed.slice(5, 8);
  }
  if (trimmed.length > 8) {
    formatted += '-' + trimmed.slice(8, 10);
  }
  if (trimmed.length > 10) {
    formatted += '-' + trimmed.slice(10, 12);
  }

  return formatted;
}

function isValidUzbekPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return digits.length === 12 && digits.startsWith('998');
}

export const CallbackForm: React.FC<CallbackFormProps> = ({
  initialCourse,
  isModal = false,
  onClose,
}) => {
  const { tr, t, locale } = useI18n();
  const formId = useId();

  const [phone, setPhone] = useState('+998 ');
  const [name, setName] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(initialCourse || '');
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');

  const phoneInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useDialogFocus(dialogRef, isModal, onClose);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (raw.length < 5 && raw.trim() !== '') {
      setPhone('+998 ');
    } else {
      const formatted = normalizeUzbekPhone(raw);
      setPhone(formatted);
    }
    // Clear error on active typing
    if (phoneError) setPhoneError(null);
  };

  const handlePhoneBlur = () => {
    if (!isValidUzbekPhone(phone)) {
      setPhoneError('Введите полный номер телефона в формате +998 (XX) XXX-XX-XX');
    } else {
      setPhoneError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate phone
    if (!isValidUzbekPhone(phone)) {
      setPhoneError('Введите полный номер телефона в формате +998 (XX) XXX-XX-XX');
      phoneInputRef.current?.focus();
      return;
    }

    // No configured delivery endpoint: never simulate successful receipt.
    setSubmissionState('error');
  };

  const handleResetForm = () => {
    setSubmissionState('idle');
    setPhone('+998 ');
    setName('');
  };

  return (
    <div
      className={`${styles.formContainer} ${isModal ? styles.modalWrapper : ''}`}
      ref={dialogRef}
      role={isModal ? 'dialog' : 'region'}
      aria-modal={isModal ? 'true' : undefined}
      aria-labelledby={`${formId}-callback-form-title`}
    >
      <div className={styles.formHeader}>
        <div className={styles.titleArea}>
          <h2 id={`${formId}-callback-form-title`} className={styles.formTitle}>
            {t('callback.title')}
          </h2>
          <p className={styles.formSubtitle}>{locale === 'ru' ? 'Поможем подобрать курс и ответим на вопросы.' : 'Kurs tanlash va savollaringizga javob topishda yordam beramiz.'}</p>
        </div>

        {isModal && onClose && (
          <button
            type="button"
            className={styles.closeModalBtn}
            onClick={onClose}
            aria-label={t('dialog.close')}
          >
            ✕
          </button>
        )}
      </div>

      <p className={styles.availabilityNotice}>
        {locale === 'ru' ? 'Онлайн-заявки пока недоступны. Позвоните нам — поможем выбрать курс.' : 'Onlayn arizalar hozircha mavjud emas. Kurs tanlash uchun bizga qo‘ng‘iroq qiling.'}
      </p>

      {submissionState === 'success' ? (
        <div className={styles.stateCard} role="alert" aria-live="polite">
          <div className={styles.successIcon} aria-hidden="true">✓</div>
          <h3 className={styles.stateTitle}>{t('callback.successTitle')}</h3>
          <p className={styles.stateDesc}>{t('callback.successDesc')}</p>
          <div className={styles.stateMeta}>
            <span>Номер: {phone}</span>
            {selectedCourse && <span>Курс: {selectedCourse}</span>}
          </div>
          <button
            type="button"
            className={`btn-secondary ${styles.newRequestBtn}`}
            onClick={handleResetForm}
          >
            Отправить еще одну заявку
          </button>
        </div>
      ) : submissionState === 'error' ? (
        <div className={styles.stateCard} role="alert" aria-live="assertive">
          <div className={styles.errorIcon} aria-hidden="true">✕</div>
          <h3 className={styles.stateTitle}>{t('callback.errorTitle')}</h3>
          <p className={styles.stateDesc}>{t('callback.errorDesc')}</p>
          <div className={styles.directCallBox}>
            <span>{t('callback.directCallAlternative')}</span>
            <a href={CONTACT.phone.href} className="btn-primary">
              Позвонить: {CONTACT.phone.display}
            </a>
          </div>
          <button
            type="button"
            className={`btn-secondary ${styles.retryBtn}`}
            onClick={() => setSubmissionState('idle')}
          >
            Попробовать снова
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className={styles.form}>
          {/* Required Phone Field */}
          <div className={styles.fieldGroup}>
            <label htmlFor={`${formId}-callback-phone`} className={styles.fieldLabel}>
              {t('callback.phoneLabel')}
            </label>
            <input
              ref={phoneInputRef}
              type="tel"
              id={`${formId}-callback-phone`}
              name="phone"
              autoComplete="tel"
              inputMode="tel"
              required
              className={`${styles.input} ${phoneError ? styles.inputError : ''}`}
              placeholder="+998 (90) 123-45-67"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handlePhoneBlur}
              aria-invalid={!!phoneError}
              aria-describedby={phoneError ? `${formId}-callback-phone-error` : undefined}
            />
            {phoneError && (
              <span id={`${formId}-callback-phone-error`} className={styles.errorText} role="alert">
                {phoneError}
              </span>
            )}
          </div>

          {/* Optional Name Field */}
          <div className={styles.fieldGroup}>
            <label htmlFor={`${formId}-callback-name`} className={styles.fieldLabel}>
              {t('callback.nameLabel')}
            </label>
            <input
              type="text"
              id={`${formId}-callback-name`}
              name="name"
              autoComplete="name"
              className={styles.input}
              placeholder={t('callback.namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Optional Course Selection Field */}
          <div className={styles.fieldGroup}>
            <label htmlFor={`${formId}-callback-course`} className={styles.fieldLabel}>
              {t('callback.courseLabel')}
            </label>
            <select
              id={`${formId}-callback-course`}
              name="course"
              className={styles.select}
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">{t('callback.courseDefault')}</option>
              {COURSES.map((c) => (
                <option key={c.id} value={tr(c.name)}>
                  {tr(c.name)}
                </option>
              ))}
            </select>
          </div>

          {/* Direct call alternative right at the form */}
          <div className={styles.directCallAlternative}>
            <span>{t('callback.directCallAlternative')} </span>
            <a href={CONTACT.phone.href} className={styles.directPhoneLink}>
              {CONTACT.phone.display}
            </a>
          </div>

          {/* Submit Button */}
          <button
            ref={submitButtonRef}
            type="submit"
            className={`btn-primary ${styles.submitBtn}`}
            disabled={submissionState === 'submitting'}
          >
            {submissionState === 'submitting' ? (
              <span className={styles.submittingContent}>
                <span className={styles.spinner} aria-hidden="true" />
                {t('callback.submitting')}
              </span>
            ) : (
              t('callback.submit')
            )}
          </button>

          {/* Privacy and consent notice */}
          <p className={styles.privacyNotice}>
            {t('callback.privacyNotice')}
          </p>
        </form>
      )}
    </div>
  );
};
