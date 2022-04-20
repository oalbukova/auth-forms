// react redux
import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {useDispatch} from "../../services/hooks";
import {verify} from "../../services/actions/verify";

// pages
import Registration from "../../pages/registration";
import PreLogin from "../../pages/pre-login";

// styles
import styles from "./app.module.css";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect((): any => {
   if (window.location.pathname === "/register-verify") {
     const key = window.location.search.substring(5)
     dispatch(verify(key))
   }
  }, [window.location])


  return (<div className={styles.app}>
      <Switch>
        <Route path="/registration" children={<Registration/>}/>
        <Route path="/pre-login" children={<PreLogin />} />
        {/*<Route path="/login" children={<Login />} />*/}
      </Switch>
    </div>);
};

export default App;
