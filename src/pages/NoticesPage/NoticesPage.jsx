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
import { fetchNoticesByCategory } from 'redux/notices/operations';
import { selectNotices } from 'redux/notices/selectors';

export const NoticesPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);

  const params = useParams();
  const category = params.category;

  useEffect(() => {
    setPage(1);
  }, [category, search]);

  const queryParams = useMemo(
    () => ({
      category: category,
      search: search,
      page: page,
      limit: 8,
    }),
    [category, search, page]
  );

  const handleNoticeSearch = newSearch => setSearch(newSearch);

  const handlePagination = currentPage => setPage(currentPage);

  useEffect(() => {
    dispatch(fetchNoticesByCategory(queryParams));
  }, [dispatch, queryParams]);

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
        key={`${category}-${search}`}
      />
    </div>
  );
};
