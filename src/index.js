import ReactDOM from "react-dom";
import './reset.css';
import './style.css';
import Header from './components/Header';
import Catalogo from "./components/Catalogo/Catalogo";
import Datas from "./components/Datas/Datas";

function App(){
  return (
    <>
      <Header></Header>
      <Catalogo></Catalogo>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('.root'));