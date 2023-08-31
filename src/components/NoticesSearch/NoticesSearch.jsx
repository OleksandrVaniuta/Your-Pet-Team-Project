import { useFormik } from 'formik';
import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as SearcCrossIcon } from './icons/searchCross.svg';
import {
  MuiBtnSearc,
  MuiBtnSearcCross,
  MuiBtnWrapper,
  MuiFormDesctop,
  MuiFormMobile,
  MuiInputDesctop,
  MuiInputMobile,
} from './NoticesSearch.styled';
import { useMediaQuery } from '@mui/material';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

const NoticesSearch = ({ handleSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const formik = useFormik({
    initialValues: {
      search: search || '',
    },
    onSubmit: (values, actions) => {
      const { search } = values;
      if (search.trim() === '' || search.trim().length > 20) {
        toast.error('Invalid query');
      } else {
        handleSearch(search);
      }
    },
  });

  const handleReset = () => {
    handleSearch('');
    setSearchParams();
    formik.initialValues.search = '';
    formik.resetForm();
  };

  const isMobileScreen = useMediaQuery('(max-width: 767px)');
  return (
    <>
      {isMobileScreen ? (
        <MuiFormMobile
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
        >
          <MuiInputMobile
            id="search"
            name="search"
            type="text"
            placeholder="Search"
            onChange={formik.handleChange}
            value={formik.values.search}
          />
          <MuiBtnWrapper>
            <MuiBtnSearc type="submit">
              <SearchIcon onClick={() => handleSearch(formik.values.search)} />
            </MuiBtnSearc>{' '}
            {formik.values.search && (
              <MuiBtnSearcCross type="reset" onClick={handleReset}>
                <SearcCrossIcon />
              </MuiBtnSearcCross>
            )}
          </MuiBtnWrapper>
        </MuiFormMobile>
      ) : (
        <MuiFormDesctop
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
        >
          <MuiInputDesctop
            id="search"
            name="search"
            type="text"
            placeholder="Search"
            onChange={formik.handleChange}
            value={formik.values.search}
          />
          <MuiBtnWrapper>
            <MuiBtnSearc type="submit">
              <SearchIcon onClick={() => handleSearch(formik.values.search)} />
            </MuiBtnSearc>{' '}
            {formik.values.search && (
              <MuiBtnSearcCross type="reset" onClick={handleReset}>
                <SearcCrossIcon />
              </MuiBtnSearcCross>
            )}
          </MuiBtnWrapper>
        </MuiFormDesctop>
      )}
    </>
  );
};

export default NoticesSearch;
