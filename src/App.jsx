import { useEffect } from "react";
import { useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import "./global.css";
import s from "./style.module.css";

import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
//import { TvShowlistItem } from "./components/TvShowlistItem/TvShowlistItem";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";
import { TvShowList } from "./components/TvShowList/TvShowList";

//TVShowAPI.fetchPopulars();

//TVShowAPI.fetchRecommendations(1402);

export function App() {
  //
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  // ---------------------------------------------------------------------------
  // fetch Polulars
  async function fetchPolulars() {
    const populars = await TVShowAPI.fetchPopulars();
    if (populars.length > 0) {
      setCurrentTVShow(populars[0]);
    }
  }
  useEffect(() => {
    fetchPolulars();
  }, []);

  // ---------------------------------------------------------------------------
  // fetch Recommendations
  async function fetchRecommendations(tvShowId) {
    const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
    if (recommendations.length > 0) {
      setRecommendationList(recommendations.slice(0, 10));
    }
  }
  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  // ---------------------------------------------------------------------------
  //function setRecommendation(tvShow) {
  //  alert(JSON.stringify(tvShow));
  //}

  console.log("recommendationList :", recommendationList);

  // ---------------------------------------------------------------------------
  //
  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-3">
            <Logo
              image={logo}
              title="Mon site web"
              subtitle="Ceci est un test"
            />
          </div>
          <div className="col-12 col-md-5">
            <input style={{ width: "100%" }} type="text"></input>
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommendations}>
        {recommendationList && recommendationList.length > 0 && (
          <TvShowList
            onClickItem={setCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}
