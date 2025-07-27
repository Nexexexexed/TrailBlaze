import { Marker, Popup } from "react-leaflet";
import type { PopupData } from "../model/types";
import styles from "./MarkerPopup.module.scss";

const popupUI = (popup: PopupData) => {
  return (
    <Marker key={popup.id} position={popup.coord}>
      <Popup>
        <h2>{popup.title}</h2>
        <p>{popup.text}</p>
        <img className={styles.popup_image} src={popup.imageUrl} />
      </Popup>
    </Marker>
  );
};

export default popupUI;
