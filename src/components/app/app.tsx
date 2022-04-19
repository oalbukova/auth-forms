// react redux
import React from "react";
import {Route, Switch} from "react-router-dom";

// pages
import Registration from "../../pages/registration";

// styles
import styles from "./app.module.css";

const App = (): JSX.Element => {

  return (<div className={styles.app}>
      <Switch>
        <Route path="/registration" children={<Registration/>}/>
      </Switch>
    </div>);
};

export default App;
