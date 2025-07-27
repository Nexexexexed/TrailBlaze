import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import type { PopupData } from "../model/types";
import styles from "./MarkerPopup.module.scss";
import orangeIconUrl from "../../../../public/marker.png";

const orangeIcon = new L.Icon({
  iconUrl: orangeIconUrl,
  iconSize: [40, 40],

  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const popupUI = (popup: PopupData) => {
  return (
    <Marker position={popup.coord} icon={orangeIcon}>
      <Popup>
        <h2>{popup.title}</h2>
        <p>{popup.text}</p>
        <img className={styles.popup_image} src={popup.imageUrl} />
      </Popup>
    </Marker>
  );
};

export default popupUI;
