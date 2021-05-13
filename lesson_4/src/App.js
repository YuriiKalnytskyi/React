import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Characters from "./components/Caract/characters/characters";
import Inventorys from "./components/Inventor/inventorys/inventorys";
import InventoryDetali from "./components/Inventor/InventoryDetali/InventoryDetail";

function App() {
  return (
    <div >
      <Router>

        <div> <Link to={'/characters'}>futurama</Link></div>
        <div> <Link to={'/inventorys'}>inventor</Link></div>
        <Switch>
          <Route path={'/characters'} exact={true} render={()=> (<Characters/>)}/>

          <Route path={'/inventorys'} exact={true} render={({match:{url}})=> {
              return <Inventorys url={url}/>
          }}/>

          <Route path={'/inventorys/:id'} render={(props)=>{
            return <InventoryDetali item = {props}/>
          }}/>
        {/*  з оцим допомогли*/}


        </Switch>


      </Router>
      {/*<Characters/>*/}

    </div>
  );
}

export default App;
