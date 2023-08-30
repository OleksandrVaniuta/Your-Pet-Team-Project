import css from './NewsList.module.css';
import { NewsItem } from '../NewsItem/NewsItem';

export const NewsList = ({ news }) => {
  return (
    <div>
      <ul className={css.news_list}>
        {news.map(elem => (
          <NewsItem key={elem._id} element={elem} />
        ))}
      </ul>
    </div>
  );
};
