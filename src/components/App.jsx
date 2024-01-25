import { React, Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { addImages } from 'services/api';

// ______________________________________________
export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalHits: 0,
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true });

      try {
        const result = await addImages(query, page);

        this.setState(prevState => ({
          images:
            prevState.page === 1
              ? result.hits
              : [...prevState.images, ...result.hits],
          totalHits: result.totalHits,
          isLoading: false,
          error: null,
        }));
      } catch (error) {
        this.setState({
          images: [],
          totalHits: 0,
          isLoading: false,
          error: error,
        });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleSearch = query => {
    this.setState({
      query,
      images: [],
      page: 1,
      totalHits: 0,
      isLoading: false,
      error: null,
    });
  };

  render() {
    const { images, page, totalHits, isLoading, error } = this.state;
    const maxPage = Math.ceil(totalHits / 12);

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSabmit={this.handleSearch} />

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

        {!!images.length && page < maxPage && !isLoading && (
          <Button onClick={this.loadMore} isLoading={isLoading} />
        )}
      </div>
    );
  }
}
