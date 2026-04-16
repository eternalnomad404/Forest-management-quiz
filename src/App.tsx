/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { track } from '@vercel/analytics';
import HciQuizContainer from './components/HciQuizContainer';
import QuizContainer from './components/QuizContainer';
import SubjectSelection, { SubjectKey } from './components/SubjectSelection';

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState<SubjectKey | null>(null);

  useEffect(() => {
    track('quiz_subject_selection_viewed', {});
  }, []);

  const handleSelectSubject = (subject: SubjectKey) => {
    track('quiz_subject_selected', {
      subject: subject === 'forest-management' ? 'forest_management' : 'human_computer_interactions',
    });
    setSelectedSubject(subject);
  };

  const renderContent = () => {
    if (selectedSubject === 'forest-management') {
      return <QuizContainer onBackToSubjects={() => setSelectedSubject(null)} />;
    }

    if (selectedSubject === 'human-computer-interactions') {
      return <HciQuizContainer onBackToSubjects={() => setSelectedSubject(null)} />;
    }

    return <SubjectSelection onSelectSubject={handleSelectSubject} />;
  };

  return (
    <main className="min-h-screen bg-indigo-600 selection:bg-indigo-100 selection:text-indigo-900">
      {renderContent()}
    </main>
  );
}
