import type { LatLngTuple } from "leaflet";

export interface PopupData {
  id: string;
  coord: LatLngTuple;
  title: string;
  text: string;
  imageUrl?: string;
}

export interface PopupState {
  popups: PopupData[];
}
