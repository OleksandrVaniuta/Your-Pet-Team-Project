import NotiesCategoriesNav from 'components/NoticesCategoriesNav/NotiesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch';
import { PageTitle } from 'components/NoticesSearch/PageTitle.styled';
import { useState } from 'react';

export const NoticesPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState('');

  const handleNoticeSearch = search => {
    setPage(1);
    setSearch(search);
  };

  return (
    <div>
      <PageTitle>Find your favorite pet</PageTitle>
      <NoticesSearch handleSearch={handleNoticeSearch} />
      <NotiesCategoriesNav></NotiesCategoriesNav>
    </div>
  );
};
