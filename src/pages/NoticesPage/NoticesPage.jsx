import { Box } from '@mui/material';
import NoticesAddPetBtn from 'components/NoticesAddPetBtn/NoticesAddPetBtn';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NotiesCategoriesNav from 'components/NoticesCategoriesNav/NotiesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import { PageTitle } from 'components/NoticesSearch/PageTitle.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNoticesByCategory } from 'redux/notices/operations';
import {
  selectNotices,
  // , selectTotalPages
} from 'redux/notices/selectors';

export const NoticesPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const notices = useSelector(selectNotices);

  // хто робить пагінацію? це як отримати кількість сторінок загальну
  // const totalPages = useSelector(selectTotalPages);
  // console.log(totalPages);
  // --------------------------------------------------------------------

  const params = useParams();
  const category = params.category;

  const handleNoticeSearch = search => {
    setPage(1);
    setSearch(search);
  };

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
      <NoticesCategoriesList notice={notices}></NoticesCategoriesList>
    </div>
  );
};
