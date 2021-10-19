import './App.css';
import { Container} from "@material-ui/core"
// import useStyles from './styles'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { set } from 'mongoose';


function App() {


  // const classes = useStyles(); 

  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/auth" exact component={Auth}/>
      </Switch>
    </Container>
    </BrowserRouter>
  );
}

export default App;
