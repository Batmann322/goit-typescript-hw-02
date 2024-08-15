import css from "../ImageModal/ImageModal.module.css";
import { Image } from "../App/App.types";

interface ImageModalProps {
  image: Image;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={css.conteiner} onClick={handleBackgroundClick}>
      <img src={image.url} alt={image.alt} />
      <button className={css.closeButton} onClick={onClose}>
        Close
      </button>
    </div>
  );
}
