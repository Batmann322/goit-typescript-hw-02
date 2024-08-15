import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import MyTopic from "../../articles-api";
import { Image } from "./App.types";
import css from "../App/App.module.css";

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (query === "") return;

    const getImages = async () => {
      setIsLoading(true);
      try {
        const newImages = await MyTopic(query, page);
        setImages((prevImages) => [...prevImages, ...newImages]);
        setError(null);
      } catch (err) {
        setError("Failed to load images");
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSearchSubmit = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Images Gallery</h1>
      <SearchBar onSubmit={handleSearchSubmit} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onImageClick={handleImageClick} />
          <LoadMoreBtn onClick={handleLoadMore} />
        </>
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
}
