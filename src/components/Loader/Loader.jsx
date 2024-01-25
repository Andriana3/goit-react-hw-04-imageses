import { Blocks } from 'react-loader-spinner';
import { LoaderStl } from './Loader.styled';

export const Loader = ({ onClick, isLoading }) => {
  return (
    <>
      <LoaderStl>
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      </LoaderStl>
    </>
  );
};
