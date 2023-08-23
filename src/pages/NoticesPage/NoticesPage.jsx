import axios from 'axios';
import NotiesCategoriesNav from 'components/NoticesCategoriesNav/NotiesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import { PageTitle } from 'components/NoticesSearch/PageTitle.styled';
import { useEffect, useState } from 'react';

export const NoticesPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [notices, setNotices] = useState([]);

  const handleNoticeSearch = search => {
    setPage(1);
    setSearch(search);
  };

  // отримую данні які додали на sell
  useEffect(() => {
    axios
      .get(
        'https://your-pet-backend-cmwy.onrender.com/api/notices/category/sell'
      )
      .then(response => {
        setNotices(response.data);
      })
      .catch(error => {
        console.error('Error fetching notices:', error);
      });
  }, []);

  return (
    <div>
      <PageTitle>Find your favorite pet</PageTitle>
      <NoticesSearch handleSearch={handleNoticeSearch} />
      <NotiesCategoriesNav></NotiesCategoriesNav>
    </div>
  );
};
