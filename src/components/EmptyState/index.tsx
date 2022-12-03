import { Button } from "../Button";
import { EmptyItem } from "../EmptyItem";
import { ContentDefault, Message } from "./styles";

interface EmptyStateProps {
  message?: string;
  textButton?: string;
  onClickButton?: () => void;
}

export function EmptyState({
  message,
  textButton,
  onClickButton,
}: EmptyStateProps) {
  return (
    <ContentDefault>
      <Message>
        <EmptyItem message={message} />
      </Message>

      {textButton && onClickButton && (
        <Button onClick={onClickButton}>{textButton}</Button>
      )}
    </ContentDefault>
  );
}
