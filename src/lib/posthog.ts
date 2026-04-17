import posthog from 'posthog-js';

const viteEnv = (import.meta as ImportMeta & {
  env?: Record<string, string | boolean | undefined>;
}).env;

const envString = (value: string | boolean | undefined) => (typeof value === 'string' ? value : undefined);

const POSTHOG_API_KEY = envString(viteEnv?.VITE_POSTHOG_API_KEY) ?? 'phc_ureuAkjYDiEjJnpvQQYaHVnbbmXcmwpVcMFsjiH3qmfS';
const POSTHOG_API_HOST = envString(viteEnv?.VITE_POSTHOG_API_HOST) ?? 'https://us.i.posthog.com';
const QUIZ_VERSION = envString(viteEnv?.VITE_QUIZ_VERSION) ?? 'v1';

let isPostHogInitialized = false;

export function initPostHog() {
  if (isPostHogInitialized || !POSTHOG_API_KEY) return;

  posthog.init(POSTHOG_API_KEY, {
    api_host: POSTHOG_API_HOST,
    defaults: '2026-01-30',
    person_profiles: 'identified_only',
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: false,
    disable_session_recording: true,
  });

  if (viteEnv?.DEV === true) {
    posthog.debug(true);
    console.info('[posthog] initialized', {
      api_host: POSTHOG_API_HOST,
      has_api_key: Boolean(POSTHOG_API_KEY),
      version: QUIZ_VERSION,
    });
  }

  isPostHogInitialized = true;
}

type QuizStartedEvent = {
  subject: string;
  version: string;
};

type AnswerSubmittedEvent = {
  question_id: string | number;
  subject: string;
  version: string;
  is_correct: boolean;
};

type QuizCompletedEvent = {
  subject: string;
  version: string;
  score: number;
  total: number;
};

type QuizEventMap = {
  quiz_started: QuizStartedEvent;
  answer_submitted: AnswerSubmittedEvent;
  quiz_completed: QuizCompletedEvent;
};

export function captureQuizEvent<TEvent extends keyof QuizEventMap>(
  eventName: TEvent,
  properties: Omit<QuizEventMap[TEvent], 'version'>,
) {
  const payload = {
    ...properties,
    version: QUIZ_VERSION,
  } as QuizEventMap[TEvent];

  posthog.capture(eventName, payload);

  if (viteEnv?.DEV === true) {
    console.info(`[posthog] ${eventName}`, payload);
  }
}

export function captureFlowStepViewed(
  properties: {
    subject: string;
    step: 'subject_selection' | 'practice_options' | 'attempt_mode' | 'quiz_in_progress' | 'quiz_completed_screen';
  },
) {
  const payload = {
    ...properties,
    version: QUIZ_VERSION,
  };

  posthog.capture('quiz_flow_step_viewed', payload);

  if (viteEnv?.DEV === true) {
    console.info('[posthog] quiz_flow_step_viewed', payload);
  }
}

