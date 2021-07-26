import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import HomePage from "./components/HomePage";
import VehiclesPage from "./components/VehiclesPage";
import VehicleDetail from "./components/VehicleDetail";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import BookingsPage from "./components/BookingsPage";
import UserBookings from "./components/BookingsPage/UserBookings";

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
          <Route path='/:id/bookings' exact>
            <UserBookings />
          </Route>
          <Route path='/vehicles' exact>
            <VehiclesPage />
          </Route>
          <Route path='/signup' exact>
            <SignupFormPage />
          </Route>
          <Route path='/vehicles/:id' exact>
            <VehicleDetail />
          </Route>
          <Route path='/vehicles/:id/bookings' exact>
            <BookingsPage />
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
