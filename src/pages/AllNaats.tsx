import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import NaatsList from "../components/NaatsList";

import "./AllNaats.css";

function AllNaats() {
  const [input, setInput] = useState("");

  const handleInput = (e: any) => {
    setInput(e.target.value);
  };

  return (
    <>
      <IonHeader>
        <div className="info-bar">
          <IonText color="light" className="all-naats-title title" mode="md">
            All Naats
          </IonText>
        </div>
      </IonHeader>
      <IonSearchbar
        placeholder="Find your favourite naat..."
        className="ion-margin-vertical"
        value={input}
        onIonChange={handleInput}
      />
      <IonContent className="naats-page-container">
        <NaatsList input={input} />
      </IonContent>
    </>
  );
}

export default AllNaats;
