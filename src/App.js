
import './App.css';
import Feed from './components/Feed'
import UserFeed from './components/UserFeed';
import {BrowserRouter,Switch,Route}  from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Feed}/>
        <Route path='/user/:username' component={UserFeed} />

      </Switch>

    </BrowserRouter>

  );
}

export default App;
