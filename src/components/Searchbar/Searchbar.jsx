import { Formik } from 'formik';
import PropTypes from 'prop-types';
import {
  SearchHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonIcon,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSabmit }) => {
  return (
    <SearchHeader>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          if (values.query.trim()) {
            console.log('qwe');
            return onSabmit(values.query.trim());
          }
        }}
      >
        <SearchForm>
          <SearchFormInput
            name="query"
            placeholder="Search images and photos"
          />
          <SearchFormButton type="submit">
            <SearchFormButtonIcon aria-label="Search" />
          </SearchFormButton>
        </SearchForm>
      </Formik>
    </SearchHeader>
  );
};

Searchbar.propTypes = {
  onSabmit: PropTypes.func.isRequired,
};
