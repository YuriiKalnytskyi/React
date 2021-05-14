import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Users from "./components/dz_2/Us/Users/Users";
import UsersDetali from "./components/dz_2/Us/UsersDetali/UsersDetali";
import UsersJson from "./components/dz_1/Us/Users/UsersJson";
import UsersDirailJson from "./components/dz_1/Us/UsersDitailJson/UsersDirailJson";
import UsersPost from "./components/dz_1/Us/UsersDitailJson/UsersPost";

function App() {
    return (
        <div>
            <Router>
                <div><Link to={'/users'}> users</Link></div>
                <div><Link to={'/usersJson'}>usersJson</Link></div>
                <Switch>

                    <Route exact path={'/users'} render={(props)=>{
                        console.log(props)
                        return <Users item={props}/>
                    }}/>
                    <Route path={'/users/:id'} render={({match:{params:{id}}})=>{
                        return <UsersDetali id={id}/>
                    }}/>


                    <Route exact path={'/usersJson'} render={()=>{
                        return <UsersJson  />
                    }}/>
                    <Route exact path={'/usersJson/:id'} render={({match:{params:{id}}})=>{
                        return <UsersDirailJson id={id}/>
                    }}/>

                    <Route exact path={'/usersJson/:id/post'} render={({match: {params: {id}}}) => {
                        return <UsersPost id={id}/>
                    }}/>




                </Switch>
            </Router>

        </div>
    );
}

export default App;
