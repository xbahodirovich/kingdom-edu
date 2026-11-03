import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { I18nProvider } from './i18n/I18nContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileContactBar } from './components/MobileContactBar';
import { CallbackForm } from './components/CallbackForm';
import './App.css';

import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { AboutPage } from './pages/AboutPage';
import { CorporatePage } from './pages/CorporatePage';
import { KindergartenPage } from './pages/KindergartenPage';
import { VacanciesPage } from './pages/VacanciesPage';
import { ContactsPage } from './pages/ContactsPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export function AppContent() {
  const [modalCourse, setModalCourse] = useState<string | undefined>(undefined);
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false);

  const handleOpenCallback = (courseName?: string) => {
    setModalCourse(courseName);
    setIsCallbackModalOpen(true);
  };

  const handleCloseCallback = () => {
    setIsCallbackModalOpen(false);
  };

  return (
    <div className="app-layout">
      <ScrollToTop />

      {/* Accessible skip link */}
      <a href="#main-content" className="visually-hidden" style={{ top: 10, left: 10, zIndex: 9999 }}>
        Перейти к основному содержимому
      </a>

      {/* Header */}
      <Header onOpenCallback={handleOpenCallback} />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<HomePage onOpenCallbackModal={handleOpenCallback} />} />

        {/* Courses directory — both modern route and preserved useful legacy URL */}
        <Route path="/courses" element={<CoursesPage onOpenCallbackModal={handleOpenCallback} />} />
        <Route path="/kurses.html" element={<CoursesPage onOpenCallbackModal={handleOpenCallback} />} />

        {/* Distinct verified course details — modern route & preserved legacy single course URL */}
        <Route path="/courses/:slug" element={<CourseDetailPage onOpenCallbackModal={handleOpenCallback} />} />
        <Route path="/kurs-single.html" element={<CourseDetailPage onOpenCallbackModal={handleOpenCallback} />} />

        {/* Secondary pages with preserved reachable legacy URLs */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about.html" element={<AboutPage />} />

        <Route path="/corporate" element={<CorporatePage />} />
        <Route path="/company.html" element={<CorporatePage />} />

        <Route path="/kindergarten" element={<KindergartenPage />} />

        <Route path="/vacancies" element={<VacanciesPage />} />
        <Route path="/vocany.html" element={<VacanciesPage />} />

        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/contacts.html" element={<ContactsPage />} />

        {/* Fallback */}
        <Route path="*" element={<HomePage onOpenCallbackModal={handleOpenCallback} />} />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Contact Bar */}
      <MobileContactBar
        isModalOpen={isCallbackModalOpen}
      />

      {/* Global Accessible Callback Modal Dialog */}
      {isCallbackModalOpen && (
        <div
          className="modal-backdrop"
          onClick={handleCloseCallback}
          role="presentation"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <CallbackForm
              isModal
              initialCourse={modalCourse}
              onClose={handleCloseCallback}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <AppContent />
      </I18nProvider>
    </BrowserRouter>
  );
}

export default App;
