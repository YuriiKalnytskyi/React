import './App.css';
// import Users from "./components/users/users";
import Users2 from "./components/Us/users/users2";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Posts from "./components/Ps/posts/posts";

function App() {
  return (
    <div >
         <Router>
             {/*<Link to={'/users'}> to users</Link>*/}
             <Switch>
                 {/*<Route path={'/users'} render={()=>(<Users2/>)}/>*/}
             </Switch>
         </Router>
<Posts/>

    </div>
  );
}

export default App;
