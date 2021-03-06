import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import AllNaats from "./pages/AllNaats";
import Player from "./pages/Player";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <AllNaats />
        </Route>
        <Route path="/all-naats/:id">
          <Player />
        </Route>
        {/* <Route exact path="/all-naats">
          <AllNaats />
        </Route> */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
