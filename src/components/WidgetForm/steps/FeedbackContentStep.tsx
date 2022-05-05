import { FeedbackType, feedbackTypes } from '..';
import { Title } from '../Title';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <>
      <Title
        text={feedbackTypeInfo.title}
        image={feedbackTypeInfo.image}
        onClickBackButton={onFeedbackRestartRequested}
      />
      <div className="flex py-8 gap-2 w-full">aaaaa</div>
    </>
  );
}
