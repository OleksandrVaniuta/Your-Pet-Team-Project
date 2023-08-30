import NoticesSearch from 'components/NoticesSearch';
import { useSearchParams } from 'react-router-dom';
import { PageTitle } from 'components/NoticesSearch/PageTitle.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from 'redux/News/operations';
import { selectNews } from '../../redux/News/selectors';
import { NewsList } from '../../components/NewsPage/NewsList/NewsList';

export const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  // console.log(search);

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
    <div>
      <PageTitle>News</PageTitle>
      <NoticesSearch handleSearch={handleNewsSearch} />
      <NewsList news={news} />
    </div>
  );
};
