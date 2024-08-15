import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
