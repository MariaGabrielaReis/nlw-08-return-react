import { CloseButton } from '../CloseButton';

interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return (
    <header className="text-xl leading-6 ">
      {text}
      <CloseButton />
    </header>
  );
}
