/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import QuizContainer from './components/QuizContainer';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <main className="min-h-screen bg-indigo-600 selection:bg-indigo-100 selection:text-indigo-900">
      <QuizContainer />
      <Analytics />
    </main>
  );
}
