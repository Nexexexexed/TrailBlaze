import { MapContainer, TileLayer } from "react-leaflet";
//import styles from "./Map.module.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store/index";
import { type PopupData } from "../../entities/index";
import MarkerPopup from "../../entities/popups/ui/MarkerPopup";

const Map = () => {
  const popups = useSelector((state: RootState) => state.popups.popups);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {popups.map((popup: PopupData) => (
        <MarkerPopup {...popup} />
      ))}
    </MapContainer>
  );
};

export default Map;
