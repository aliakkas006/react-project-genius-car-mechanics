
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/Home/NotFound/NotFound';
import ManageServices from './Pages/MangeServices/ManageServices';
import PrivateRoute from './Pages/Register/SignIn/PrivateRoute/PrivateRoute';
import SignIn from './Pages/Register/SignIn/SignIn';
import Servicing from './Pages/Servicing/Servicing/Servicing';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/signin">
              <SignIn />
            </Route>

            <PrivateRoute path="/servicing/:serviceId">
              <Servicing />
            </PrivateRoute>

            <Route path="/addService">
              <AddService />
            </Route>

            <Route path="/manageService">
              <ManageServices />
            </Route>

            <Route exact path="*">
              <NotFound />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
