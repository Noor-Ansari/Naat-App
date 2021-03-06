import { useHistory, useParams } from "react-router-dom";
import naats from "../NaatsList";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { ArrowBack } from "react-ionicons";
import { IonButton, IonContent, IonText } from "@ionic/react";
import "./Player.css";

function Player() {
  const { id } = useParams() as any;
  const history = useHistory();
  const { name, url } = naats.filter(({ name }) => name === id)[0];
  const currentIndex = naats.findIndex(({ name }, idx) => name === id);

  const skipForward = () => {
    let nextIndex = currentIndex === naats.length - 1 ? 0 : currentIndex + 1;
    history.push(naats[nextIndex].name);
  };

  const skipBackward = () => {
    let prevIndex = currentIndex === 0 ? naats.length - 1 : currentIndex - 1;
    history.push(naats[prevIndex].name);
  };

  return (
    <div className="player-container">
      <div className="info-bar">
        <IonButton className="back-button" onClick={() => history.push("/")}>
          <ArrowBack color="#fff" />
        </IonButton>
        <IonText color="light" mode="md" className="title">
          Player
        </IonText>
      </div>
      <div className="display-image">
        <img src="assets/play screen.png" alt="display" />
      </div>

      <div className="audio-title">
        <IonText color="light" mode="md">
          {name}
        </IonText>
      </div>
      <AudioPlayer
        src={url}
        onClickPrevious={skipBackward}
        onClickNext={skipForward}
        showSkipControls={true}
        showJumpControls={false}
      />
    </div>
  );
}

export default Player;
