import { FiveStarRating } from "../FiveStartRating/FiveStartRating";
import s from "./style.module.css";

export function TVShowDetail({ tvShow }) {
  const vote_average = tvShow.vote_average / 2;

  return (
    <>
      <div className={s.title}>{tvShow.name}</div>
      <div className={s.rating_container}>
        <FiveStarRating rating={vote_average} />
        <div className={s.rating}>{vote_average}</div>
      </div>

      <div className={s.overview}>{tvShow.overview}</div>
    </>
  );
}
