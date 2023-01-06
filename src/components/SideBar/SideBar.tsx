import { useMemo } from "react";
import style from "./SideBar.module.scss";
import yogaIcon from "../../assets/icons/SideBarIcons/yoga-icon.svg";
import bikeIcon from "../../assets/icons/SideBarIcons/bike-icon.svg";
import bodybuildingIcon from "../../assets/icons/SideBarIcons/bodybuilding-icon.svg";
import swimmingIcon from "../../assets/icons/SideBarIcons/swimming-icon.svg";

function SideBar() {
  const icons = useMemo(() => [
    { icon: yogaIcon, link: "/yoga", alt: "yoga" },
    { icon: bikeIcon, link: "/bike", alt: "bike" },
    { icon: bodybuildingIcon, link: "/bodybuilding", alt: "bodybuilding" },
    { icon: swimmingIcon, link: "/swimming", alt: "swimming" },
  ], []);

  return (
    <div className={style.SideBar}>
      {icons.map((item, index) => (
        <button key={index}>
          <img src={item.icon} alt={item.alt} />
        </button>
      ))}
    </div>
  );
}

export default SideBar;