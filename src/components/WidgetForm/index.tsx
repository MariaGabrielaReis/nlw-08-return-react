import { CloseButton } from '../CloseButton';

import { useState } from 'react';

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from './steps/FeedbackTypeStep';
import { FeedbackContentStep } from './steps/FeedbackContentStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
        <FeedbackContentStep />
      )}
      <footer className="text-sm text-neutral-400">
        Made with ♥ by{' '}
        <a
          href="https://www.linkedin.com/in/mariagabrielareis/"
          className="underline underline-offset-2"
        >
          Maby
        </a>{' '}
        (and <a href="https://rocketseat.com.br">Rocketseat</a>)
      </footer>
    </div>
  );
}
