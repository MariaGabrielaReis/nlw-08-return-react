import { ArrowLeft } from 'phosphor-react';

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      type="button"
      onClick={onClick}
    >
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  );
}
