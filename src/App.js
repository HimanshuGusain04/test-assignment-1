import './styles/index.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './screens/Home';
import User from './screens/User';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REQUEST_API_DATA } from './actions';
import Loading from './components/Loading';

function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.loading)

  useEffect(() => {
      dispatch({type: REQUEST_API_DATA})
  }, []);

  return (
    <div className="App">
      {isLoading ?
      <Loading /> 
      :
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users/:id" exact component={User} />
        </Switch>
      </Router>
      }
    </div>
  );
}

export default App;
