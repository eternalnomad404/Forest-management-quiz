/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import HciQuizContainer from './components/HciQuizContainer';
import QuizContainer from './components/QuizContainer';
import SubjectSelection, { SubjectKey } from './components/SubjectSelection';

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState<SubjectKey | null>(null);

  const renderContent = () => {
    if (selectedSubject === 'forest-management') {
      return <QuizContainer onBackToSubjects={() => setSelectedSubject(null)} />;
    }

    if (selectedSubject === 'human-computer-interactions') {
      return <HciQuizContainer onBackToSubjects={() => setSelectedSubject(null)} />;
    }

    return <SubjectSelection onSelectSubject={setSelectedSubject} />;
  };

  return (
    <main className="min-h-screen bg-indigo-600 selection:bg-indigo-100 selection:text-indigo-900">
      {renderContent()}
    </main>
  );
}
