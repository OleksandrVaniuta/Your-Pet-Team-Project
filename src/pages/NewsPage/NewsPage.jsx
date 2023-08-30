import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NewsWrapper } from './NewsPage.styled';

import NoticesSearch from 'components/NoticesSearch';
import { PageTitle } from 'components/NoticesSearch/PageTitle.styled';
import { NewsList } from '../../components/NewsPage/NewsList/NewsList';
// import Pagination from 'components/Pagination/Pagination';

import { fetchNews } from 'redux/News/operations';
import { selectNews } from '../../redux/News/selectors';

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  const handleNewsSearch = search => {
    if (search) {
      setSearchParams({ search, page: 1 });
    } else {
      setSearchParams({ page: 1 });
    }
  };

  useEffect(() => {
    dispatch(
      fetchNews({
        search: search || '',
        page: page || 1,
        limit: 6,
      })
    );
  }, [dispatch, search, page]);

  return (
    <NewsWrapper>
      <PageTitle>News</PageTitle>
      <NoticesSearch handleSearch={handleNewsSearch} />
      <NewsList news={news} />
      {/* <Pagination /> */}
    </NewsWrapper>
  );
};

export default NewsPage;
