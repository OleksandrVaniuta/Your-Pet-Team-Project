import css from './NewsItem.module.css';

export const NewsItem = ({ element }) => {
  const { _id: id, imgUrl, title, text, date, url } = element;
  const dateObject = new Date(date);

  const day = dateObject.getUTCDate();
  const month = dateObject.getUTCMonth() + 1;
  const year = dateObject.getUTCFullYear();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  return (
    <li key={id} className={css.news_item}>
      <article>
        <img src={imgUrl} alt={title} className={css.news_img} />
        <div className={css.news_info}>
          <p className={css.news_title}>{title}</p>
          <p className={css.news_text}>{text}</p>
          <div className={css.news_more}>
            <p className={css.news_date}>{formattedDate}</p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className={css.news_link}
            >
              Read more
            </a>
          </div>
        </div>
      </article>
    </li>
  );
};
