import { React, useState, useEffect } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { addImages } from 'services/api';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showBtn, setShowBtn] = useState(true); // Додали новий стан

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);

    const fetchData = async () => {
      try {
        const result = await addImages(query, page);
        if (!result.hits.length) {
          setIsLoading(false);
          setShowBtn(false);
          return alert('Співпадінь не знайдено');
        }

        setImages(prevState => [...prevState, ...result.hits]);
        setTotalHits(result.totalHits);
        setIsLoading(false);
        setShowBtn(true);
      } catch (error) {
        setImages([]);
        setTotalHits(0);
        setIsLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSubmit = inputValue => {
    if (query === inputValue) {
      return alert(`Ви вже переглядаєте зображення для запиту "${query}"`);
    }

    setQuery(inputValue.toLowerCase());
    setPage(1);
    setImages([]);
    setTotalHits(0);
    setIsLoading(false);
    setError(null);
    setShowBtn(true);
  };

  const onLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    >
      <Searchbar onSabmit={handleSubmit} />

      {error && !isLoading && (
        <h1
          style={{
            margin: '25px auto',
          }}
        >
          {error.message}
        </h1>
      )}

      {!!images.length && <ImageGallery images={images} />}

      {isLoading && <Loader />}

      {!!images.length &&
        page < Math.ceil(totalHits / 12) &&
        !isLoading &&
        showBtn && <Button onClick={onLoadMoreClick} isLoading={isLoading} />}
    </div>
  );
};
