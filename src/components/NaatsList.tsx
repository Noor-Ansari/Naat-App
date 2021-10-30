import { IonList, IonText } from "@ionic/react";
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
      <div className="ion-text-center ion-margin-top">
        <IonText>
          <h1>No data found...</h1>
        </IonText>
      </div>
    );
  }

  return (
    <IonList className="list-page">
      {filteredNaatList.map(({ name, url }, idx) => (
        <div className="list-item" onClick={() => handleClick(name)}>
          <img src="assets/play screen.png" alt="icon" />
          <IonText>
            <p>{name}</p>
          </IonText>
        </div>
      ))}
    </IonList>
  );
};

export default NaatsList;
