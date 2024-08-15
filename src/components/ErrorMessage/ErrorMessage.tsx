interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="ErrorMessage">
      <p>{message}</p>
    </div>
  );
}
