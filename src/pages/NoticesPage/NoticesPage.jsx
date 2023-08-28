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
    setPage(1);
  }, [category, search]);

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
      <NotiesCategoriesNav />
      <NoticesCategoriesList notice={notices}></NoticesCategoriesList>
      <Pagination 
      handlePagination={handlePagination}
      category={category}
      search={search}
      />
    </div>
  );
};
