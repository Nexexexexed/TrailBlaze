import { useState } from "react";
import type { AddingPopup, PopupData } from "../../entities/popups/model/types";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { addPopup } from "../../entities/popups/model/popupSlice";
//import styles from "./Input.module.scss";

const Input = () => {
  const dispatch: AppDispatch = useDispatch();

  const [newPopup, setNewPopup] = useState<AddingPopup>({
    Xcoord: 0,
    Ycoord: 0,
    title: "",
    text: "",
    imageUrl: "",
  });

  const savePopup = () => {
    const { title, text, imageUrl, Xcoord, Ycoord } = newPopup;
    const popupData: PopupData = {
      id: Date.now().toString(),
      title,
      text,
      imageUrl,
      coord: [Xcoord, Ycoord],
    };
    dispatch(addPopup(popupData));
    setNewPopup({ Xcoord: 0, Ycoord: 0, title: "", text: "", imageUrl: "" });
  };

  return (
    <div>
      <input
        onChange={(e) =>
          setNewPopup((prev) => ({ ...prev, title: e.target.value }))
        }
        type="text"
        placeholder="Title"
        value={newPopup.title}
      ></input>
      <input
        type="text"
        placeholder="Text"
        value={newPopup.text}
        onChange={(e) =>
          setNewPopup((prev) => ({ ...prev, text: e.target.value }))
        }
      ></input>
      <input
        type="url"
        placeholder="Image URL"
        value={newPopup.imageUrl}
        onChange={(e) =>
          setNewPopup((prev) => ({ ...prev, imageUrl: e.target.value }))
        }
      ></input>
      <input
        type="number"
        placeholder="X coordinate"
        value={newPopup.Xcoord}
        onChange={(e) =>
          setNewPopup((prev) => ({
            ...prev,
            Xcoord: parseFloat(e.target.value),
          }))
        }
      ></input>
      <input
        type="number"
        placeholder="Y coordinate"
        value={newPopup.Ycoord}
        onChange={(e) =>
          setNewPopup((prev) => ({
            ...prev,
            Ycoord: parseFloat(e.target.value),
          }))
        }
      ></input>
      <button onClick={savePopup}>Confirm</button>
    </div>
  );
};

export default Input;
