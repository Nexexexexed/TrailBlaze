import { Map } from "../../../features/index";
import styles from "./MapForm.module.scss";

const MapForm = () => {
  return (
    <div className={styles.map}>
      <Map />
    </div>
  );
};

export default MapForm;
