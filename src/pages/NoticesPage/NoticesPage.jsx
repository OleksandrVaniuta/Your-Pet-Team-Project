import axios from 'axios';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NotiesCategoriesNav from 'components/NoticesCategoriesNav/NotiesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import { PageTitle } from 'components/NoticesSearch/PageTitle.styled';
import { useEffect, useState } from 'react';

export const NoticesPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState('');
  const [notices, setNotices] = useState([]);

  const currentPath = window.location.pathname;
  const category = currentPath.split('/').pop();

  const handleNoticeSearch = search => {
    setPage(1);
    setSearch(search);
  };

  useEffect(() => {
    axios
      .get(`https://your-pet-backend-cmwy.onrender.com/api/notices/category/${category}`)
      .then(response => {
        setNotices(response.data.notices);   
      })
      .catch(error => {
        console.error('Error fetching notices:', error);
      });
  }, [category]);

  return (
    <div>
      <PageTitle>Find your favorite pet</PageTitle>
      <NoticesSearch handleSearch={handleNoticeSearch} />
      <NotiesCategoriesNav />
      <NoticesCategoriesList notice={notices}></NoticesCategoriesList>
    </div>
  );
};