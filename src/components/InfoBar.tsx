import React from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

type Props = {
  title: string;
};

function InfoBar({ title }: Props) {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

export default InfoBar;
