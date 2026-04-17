import posthog from 'posthog-js';

const viteEnv = (import.meta as ImportMeta & {
  env?: Record<string, string | boolean | undefined>;
}).env;

const envString = (value: string | boolean | undefined) => (typeof value === 'string' ? value : undefined);

const POSTHOG_API_KEY = envString(viteEnv?.VITE_POSTHOG_API_KEY) ?? 'phc_ureuAkjYDiEjJnpvQQYaHVnbbmXcmwpVcMFsjiH3qmfS';
const POSTHOG_API_HOST = envString(viteEnv?.VITE_POSTHOG_API_HOST) ?? 'https://us.i.posthog.com';
const QUIZ_VERSION = envString(viteEnv?.VITE_QUIZ_VERSION) ?? 'v1';

const DEFAULT_ALLOWED_HOSTS = ['forest-management-quiz-sable.vercel.app'];

function parseHostAllowlist(raw: string | undefined) {
  if (!raw) return DEFAULT_ALLOWED_HOSTS;
  return raw
    .split(',')
    .map(host => host.trim().toLowerCase())
    .filter(Boolean);
}

const POSTHOG_ALLOWED_HOSTS = parseHostAllowlist(envString(viteEnv?.VITE_POSTHOG_ALLOWED_HOSTS));
const POSTHOG_ENABLE_LOCAL = viteEnv?.VITE_POSTHOG_ENABLE_LOCAL === true || viteEnv?.VITE_POSTHOG_ENABLE_LOCAL === 'true';

type PosthogInitState = 'not_attempted' | 'skipped' | 'initialized';
let posthogInitState: PosthogInitState = 'not_attempted';

function getHostname() {
  if (typeof window === 'undefined') return '';
  return window.location.hostname.toLowerCase();
}

function isPostHogAllowedForCurrentHost() {
  if (POSTHOG_ENABLE_LOCAL) return true;
  const hostname = getHostname();
  if (!hostname) return false;
  return POSTHOG_ALLOWED_HOSTS.includes(hostname);
}

function isPostHogReady() {
  return posthogInitState === 'initialized' && typeof posthog.capture === 'function';
}

export function initPostHog() {
  if (posthogInitState !== 'not_attempted' || !POSTHOG_API_KEY) return;

  if (!isPostHogAllowedForCurrentHost()) {
    if (viteEnv?.DEV === true) {
      console.info('[posthog] disabled on this host', {
        hostname: getHostname(),
        allowed_hosts: POSTHOG_ALLOWED_HOSTS,
        enable_local_override: POSTHOG_ENABLE_LOCAL,
      });
    }
    posthogInitState = 'skipped';
    return;
  }

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

  posthogInitState = 'initialized';
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
  if (!isPostHogReady()) return;

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
  if (!isPostHogReady()) return;

  const payload = {
    ...properties,
    version: QUIZ_VERSION,
  };

  posthog.capture('quiz_flow_step_viewed', payload);

  if (viteEnv?.DEV === true) {
    console.info('[posthog] quiz_flow_step_viewed', payload);
  }
}

