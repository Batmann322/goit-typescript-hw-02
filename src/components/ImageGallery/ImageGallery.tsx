import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../../articles-api";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export default function ImageGallery({
  images,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={css.container}>
      {images.map((image) => (
        <li key={image.id} className={css.imageGalleryItem}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}
