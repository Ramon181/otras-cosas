import style from "./Navigation.module.css";
import Link from "next/link";

const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Personajes",
    route: "/personajes",
  },
];

export const Navigation = () => {
  return (
    <div className={style.body_nav}>
      <div className={style.nav_main}>
        <h2>Logo Marvel</h2>
        <ul className={style.nav_item}>
          {links.map(({ label, route }) => (
            <li>
              <Link href={route} className={style.nav_link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
