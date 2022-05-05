import { BackButton } from '../BackButton';
import { CloseButton } from '../CloseButton';

interface TitleProps {
  text: string;
  image?: {
    source: string;
    alt: string;
  };
  onClickBackButton?: () => void;
}

export function Title({ text, image, onClickBackButton }: TitleProps) {
  return (
    <header className="text-xl leading-6 ">
      {image && <BackButton onClick={onClickBackButton!} />}

      <span className="flex items-center gap-2">
        {image && (
          <img src={image!.source} alt={image!.alt} className="w-6 h-6" />
        )}
        {text}
      </span>
      <CloseButton />
    </header>
  );
}
