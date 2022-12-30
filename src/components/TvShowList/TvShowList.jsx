import { TvShowlistItem } from "../TvShowlistItem/TvShowlistItem";
import s from "./style.module.css";

export function TvShowList({ onClickItem, tvShowList }) {
  return (
    <>
      <div className={s.title}> recommendation :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={s.tv_show_list_item}>
              <TvShowlistItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </>
  );
}
