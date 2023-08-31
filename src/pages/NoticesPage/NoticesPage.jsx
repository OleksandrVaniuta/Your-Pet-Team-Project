import { Box } from '@mui/material';
import NoticesAddPetBtn from 'components/NoticesAddPetBtn/NoticesAddPetBtn';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NotiesCategoriesNav from 'components/NoticesCategoriesNav/NotiesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import Pagination from 'components/Pagination/Pagination';
import { PageTitle } from 'components/NoticesSearch/PageTitle.styled';
import { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNoticesByCategory, fetchNoticesFavorite, fetchNoticesMyAds } from 'redux/notices/operations';
import { selectNotices } from 'redux/notices/selectors';
import { NoticesWrapper } from './NoticesPage.styled';

const NoticesPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);

  const params = useParams();
  const category = params.category;
  
  useEffect(() => {
    setPage(1);
  }, [category, search]);
  
  const queryParams = useMemo(() => ({
    category: category,
    search: search,
    page: page,
    limit: 8,
  }), [category, search, page]);

  const queryParamsPrivat = useMemo(() => ({
    search: search,
    page: page,
    limit: 8,
  }), [search, page]);

  const handleNoticeSearch = newSearch => setSearch(newSearch);

  const handlePagination = currentPage => setPage(currentPage);

  useEffect(() => {
    // setTimeout(() => {
      if (['sell', 'lost-found', 'in-good-hands'].includes(category)) {
        dispatch(
          fetchNoticesByCategory(queryParams)
        );        
      }
      else if (category === 'favorite-ads') {
        dispatch(
          fetchNoticesFavorite(queryParamsPrivat)
        );
      }
      else if (category === 'my-ads') {
        dispatch(
          fetchNoticesMyAds(queryParamsPrivat)
        );
      }
    // }, 500);
  }, [dispatch, queryParams, queryParamsPrivat, category]);

  return (
    <NoticesWrapper>
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
        key={`${category}-${search}`}
      />
    </NoticesWrapper>
  );
};

export default NoticesPage;
