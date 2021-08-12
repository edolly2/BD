import {} from 'react-icons/';
import { BrowserRouter as Route, Switch, Router } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     <Header/>
     <Footer/>
    </div>
  );
}

export default App;
