import { Box } from '@mui/material';
import NoticesAddPetBtn from 'components/NoticesAddPetBtn/NoticesAddPetBtn';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NotiesCategoriesNav from 'components/NoticesCategoriesNav/NotiesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import Pagination from 'components/Pagination/Pagination';
import { PageTitle } from 'components/NoticesSearch/PageTitle.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNoticesByCategory } from 'redux/notices/operations';
import { selectNotices } from 'redux/notices/selectors';

export const NoticesPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);

  const params = useParams();
  const category = params.category;

  const handleNoticeSearch = search => {
    setSearch(search);
  };

  const handlePagination = page => setPage(page);

  useEffect(() => {
    dispatch(
      fetchNoticesByCategory({
        category,
        search,
        page,
        limit: 8,
      })
    );
  }, [dispatch, page, category, search]);

  useEffect(() => {
    setPage(1);
  }, [category, search]);

  return (
    <div>
      <PageTitle>Find your favorite pet</PageTitle>
      <NoticesSearch handleSearch={handleNoticeSearch} />
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '42px',
        }}
      >
        <NotiesCategoriesNav />
        <NoticesAddPetBtn />
      </Box>
      <NoticesCategoriesList notices={notices}></NoticesCategoriesList>
      <Pagination 
      handlePagination={handlePagination}
      category={category}
      search={search}
      />
    </div>
  );
};
