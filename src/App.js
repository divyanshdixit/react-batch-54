
import './App.css';
import About from './components/About';
import Form from './components/Form';

import Home, {name} from './components/Home';
import ChefView from './features/chef/ChefView';
import ClientView from './features/client/ClientView';
import UserView from './features/user/UserView';

function App() {
  var city = "noida";
  return (
    <div className="App">
      <ClientView/>
      <ChefView/>
      <UserView/>
     <Home city={city}/>
     <About/>
     <Form/>
    </div>
  );
}

export default App;
