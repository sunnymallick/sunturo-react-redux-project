import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage";
import VehiclesPage from "./components/VehiclesPage";
import VehicleBooking from "./components/VehicleBooking";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/vehicles' exact>
            <VehiclesPage />
          </Route>
          <Route path='/login' exact>
            <LoginFormPage />
          </Route>
          <Route path='/signup' exact>
            <SignupFormPage />
          </Route>
          <Route path='/vehicles/:id' exact>
            <VehicleBooking />
          </Route>
          <Route path='/'>
            <p>404 Not Found</p>
          </Route>
        </Switch>
       )}
    </>
  );
}

export default App;
