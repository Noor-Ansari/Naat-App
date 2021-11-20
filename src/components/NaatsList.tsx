import {
  IonCard,
  IonContent,
  IonItem,
  IonList,
  IonText,
  IonVirtualScroll,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import naatList from "../NaatsList";
import "./NaatsList.css";

type Props = {
  input: string;
};

const NaatsList = ({ input }: Props) => {
  const filteredNaatList = naatList.filter((naat) => naat.name.includes(input));

  const history = useHistory();

  const handleClick = (name: string) => {
    history.push(`/all-naats/${name}`);
  };

  if (!filteredNaatList.length) {
    return (
      <div className="ion-text-center ion-margin-top no-data-found">
        <IonText>
          <h1>No data found...</h1>
        </IonText>
      </div>
    );
  }

  return (
    <IonList className="naat-list">
      {filteredNaatList.map(({ name, url }, idx) => (
        <IonItem
          className="list-item"
          color="primary"
          onClick={() => handleClick(name)}
        >
          <img src="assets/play screen.png" alt="icon" />
          <IonText>{name}</IonText>
        </IonItem>
      ))}
    </IonList>
  );
};

export default NaatsList;
