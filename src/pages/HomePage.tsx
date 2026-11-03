import React from 'react';
import { Hero } from '../components/Hero';
import { CoursePreview } from '../components/CoursePreview';
import { Results } from '../components/Results';
import { TeachersProcess } from '../components/TeachersProcess';
import { Branches } from '../components/Branches';
import { FAQ } from '../components/FAQ';
import { CallbackForm } from '../components/CallbackForm';
import styles from './HomePage.module.css';
import { ScrollMotion } from '../components/ScrollMotion';

interface HomePageProps {
  onOpenCallbackModal: (courseName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenCallbackModal }) => {
  return (
    <main id="main-content" className={styles.main}>
      {/* 1. Hero with left offer and right authentic classroom photo */}
      <ScrollMotion />
      <Hero onOpenCallback={() => onOpenCallbackModal()} />

      {/* 2. Course finder directly after hero: equal priority, alphabetical by locale */}
      <CoursePreview />

      {/* 3. Consented, documented results (readable stories, NOT a carousel) */}
      <Results />

      {/* 4. Teachers & practical 3-step learning process */}
      <TeachersProcess />

      {/* 5. Verified branches (Druzhba Narodov & Medgorodok) */}
      <Branches />

      {/* 6. FAQ with native instant expansion */}
      <FAQ />

      {/* 7. Inline callback form section alongside direct phone alternative */}
      <section className={`section ${styles.callbackSection}`} id="contact">
        <div className={`container ${styles.callbackContainer}`}>
          <CallbackForm />
        </div>
      </section>
    </main>
  );
};
