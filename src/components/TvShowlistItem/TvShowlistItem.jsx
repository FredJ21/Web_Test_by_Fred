import s from "./style.module.css";
import { SMALL_COVER_BASE_URL } from "../../config";

export function TvShowlistItem({ tvShow, onClick }) {
  //
  //console.log("TvShowlistItem:", tvShow);
  //
  return (
    <div onClick={() => onClick(tvShow)} className={s.container}>
      <img
        alt={tvShow.backdrop_path}
        className={s.img}
        src={SMALL_COVER_BASE_URL + tvShow.backdrop_path}
      ></img>
      <div className={s.title}>{tvShow.name}</div>
    </div>
  );
}
