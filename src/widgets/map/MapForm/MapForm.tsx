import { Map } from "../../../features/index";
import Input from "../../../features/Input/Input";
import styles from "./MapForm.module.scss";

const MapForm = () => {
  return (
    <div className={styles.map}>
      <div className={styles.sidebar}>
        <Input />
      </div>
      <div className={styles.mapWrapper}>
        <Map />
      </div>
    </div>
  );
};

export default MapForm;
