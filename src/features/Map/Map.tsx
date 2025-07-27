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
        attribution='&copy; <a href="https://carto.com/">Carto</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {popups.map((popup: PopupData) => (
        <MarkerPopup {...popup} key={popup.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
