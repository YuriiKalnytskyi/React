import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Users from "./components/dz_2/Us/Users/Users";
import UsersDetali from "./components/dz_2/Us/UsersDetali/UsersDetali";

function App() {
    return (
        <div>
            <Router>
                <div><Link to={'/users'}> users</Link></div>
                <Switch>
                    <Route exact path={'/users'} render={()=><Users/>}/>

                    <Route path={'/users/:id'} render={({match:{params:{id}}})=>{
                        return <UsersDetali id={id}/>
                    }}/>

                </Switch>
            </Router>

        </div>
    );
}

export default App;
