import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  //
  const starList = [];

  const StarSize = 30;

  const nbStarFill = Math.floor(rating);
  const nbStarHalf = rating - nbStarFill >= 0.5 ? 1 : 0;
  const nbStarEmpty = 5 - nbStarFill - nbStarHalf;

  for (let a = 0; a < nbStarFill; a++) {
    starList.push(<StarFill key={"starfill" + a} size={StarSize} />);
  }

  if (nbStarHalf) {
    starList.push(<StarHalf key={"starhalf"} size={StarSize} />);
  }

  for (let a = 0; a < nbStarEmpty; a++) {
    starList.push(<StarEmpty key={"starempty" + a} size={StarSize} />);
  }

  return <div className={s.container}>{starList}</div>;
}
