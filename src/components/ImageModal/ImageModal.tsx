import css from "../ImageModal/ImageModal.module.css";
import Modal from "react-modal";
import React from "react";
import { Image } from "../../articles-api";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image | null;
}

export default function ImageModal({
  isOpen,
  onRequestClose,
  image,
}: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      {image && (
        <div className={css.modalContent}>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className={css.modalImg}
          />
          <p>{image.description}</p>
          <p>Likes: {image.likes}</p>
        </div>
      )}
    </Modal>
  );
}
