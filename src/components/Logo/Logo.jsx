import s from "./style.module.css";

export function Logo({ image, title, subtitle }) {
  return (
    <>
      <div className={s.container}>
        <img alt={image} src={image} className={s.img}></img>
        <span className={s.title}> {title}</span>
      </div>
      <span className={s.subtitle}>{subtitle}</span>
    </>
  );
}
