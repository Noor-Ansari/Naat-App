import { IonContent, IonSearchbar } from "@ionic/react";
import React, { useState } from "react";
import InfoBar from "../components/InfoBar";
import NaatsList from "../components/NaatsList";

import "./AllNaats.css";

function AllNaats() {
  const [input, setInput] = useState("");

  const handleInput = (e: any) => {
    setInput(e.target.value);
  };

  console.log(input);

  return (
    <>
      <InfoBar title="All Naats" />
      <div className="list-page">
        <IonSearchbar
          placeholder="Find your favourite naat..."
          className="ion-margin-top"
          value={input}
          onIonChange={handleInput}
        />
        <NaatsList input={input} />
      </div>
    </>
  );
}

export default AllNaats;
