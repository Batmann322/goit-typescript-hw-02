import { Image } from "../App/App.types";

interface ImageCardProps {
  image: Image;
}

export default function ImageCard({ image }: ImageCardProps) {
  return (
    <div>
      <img src={image.url} alt={image.alt} />
      <p>{image.description}</p>
      <p>{image.author}</p>
    </div>
  );
}
