// react redux
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "../../services/hooks";
import { verify } from "../../services/actions/verify";

// pages
import Registration from "../../pages/registration";
import PreLogin from "../../pages/pre-login";
import Login from "../../pages/login";
import Main from "../../pages/main";

// components
import ProtectedRoute from "../protected-route";

// styles
import styles from "./app.module.css";
import Header from "../header";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect((): any => {
    if (window.location.pathname === "/register-verify") {
      const key = window.location.search.substring(5);
      dispatch(verify(key));
    }
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <Switch>
        <Route path="/registration" children={<Registration />} />
        <Route path="/pre-login" children={<PreLogin />} />
        <Route path="/login" children={<Login />} />
        <ProtectedRoute path="/" exact>
          <Main/>
        </ProtectedRoute>
      </Switch>
    </div>
  );
};

export default App;
