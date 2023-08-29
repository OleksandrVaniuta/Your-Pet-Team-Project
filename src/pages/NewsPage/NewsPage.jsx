import NoticesSearch from 'components/NoticesSearch';
import { PageTitle } from 'components/NoticesSearch/PageTitle.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from 'redux/News/operations';
import { selectNews } from '../../redux/News/selectors';
import { NewsList } from '../../components/NewsPage/NewsList/NewsList';

export const NewsPage = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  const handleNewsSearch = search => {
    setSearch(search);
  };

  useEffect(() => {
    dispatch(
      fetchNews({
        search,
        limit: 6,
      })
    );
  }, [dispatch, search]);

  return (
    <div>
      <PageTitle>News</PageTitle>
      <NoticesSearch handleSearch={handleNewsSearch} />
      <NewsList news={news} />
    </div>
  );
};
