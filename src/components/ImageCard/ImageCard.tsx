import { Image } from "../../articles-api";

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <div onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}
