
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import About from './components/About';
import PokemonApp from './components/Cache';
import Cart from './components/Cart';
import Form from './components/Form';

import Home, {name} from './components/Home';
import LazyImage from './components/LazyImage';
import Products from './components/Products';
import CommentSection from './components/ErrorBoundary';
import Test1 from './components/Test1';
import PostsData from './components/PostsData';
// import Sorting from './components/Sorting';
// import Test from './components/Test';
// import ChefView from './features/chef/ChefView';
// import ClientView from './features/client/ClientView';
// import UserView from './features/user/UserView';

function App() {
  var city = "noida";
  return (
    <ErrorBoundary fallback={<p> something went wrong!</p>}>
    <div className="App">
      <PostsData />
      {/* <Test1/> */}
      {/* <LazyImage />
      <CommentSection /> */}
      {/* <Products /> */}
      {/* <Test/> */}
      {/* <PokemonApp />
      <Sorting />
      <Cart /> */}
      {/* <ClientView/>
      <ChefView/>
      <UserView/>
     <Home city={city}/>
     <About/>
     <Form/> */}
    </div>
    </ErrorBoundary>
  );
}

export default App;
