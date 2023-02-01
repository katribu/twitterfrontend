
import './App.css';
import Feed from './components/Feed'
import UserFeed from './components/UserFeed'
import AddTweet from './components/AddTweet'
import {BrowserRouter,Switch,Route}  from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Feed}/>
        <Route path='/user/:username' component={UserFeed} />
        <Route path='/addtweet' component={AddTweet} />

      </Switch>

    </BrowserRouter>

  );
}

export default App;
