import logo from './logo.svg';
import './App.css';
import { AllMeetups } from './pages/AllMeetups';
import { NewMeetup } from './pages/NewMeetup';
import { Favorites } from './pages/Favorites';
import { Route, Switch } from 'react-router-dom';
import { MainNavigation } from './components/layout/MainNavigation';
import { Layout } from './components/layout/Layout';
function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetups />
          </Route>
          <Route path="/new-meetup">
            <NewMeetup />
          </Route>
          <Route path="/favorite">
            <Favorites />
          </Route>
        </Switch>
      </Layout>



    </div>
  );
}

export default App;
