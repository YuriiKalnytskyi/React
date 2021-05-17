import './App.css';
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import UsersDetali from "./components/users/UsersDetali";
import UserPost from "./components/users/UserPost";
import UserComent from "./components/users/UserComent";


function App() {
  return (
    <div>

      <Router>
          <div><Link to={'/users'}>users</Link></div>

        <Switch>
          <Route exact path={'/users'} render={()=>{
              return <Users />
          }}/>
          <Route exact path={'/users/:id'} render={({match:{params:{id}}})=>{
              return <UsersDetali id={id} />
          }}/>
          <Route  exact path={'/users/:id/post'} render={({match:{url,params:{id}}})=>{
             return <UserPost userId = {id} url={url}  />
          }}/>
            <Route  path={'/users/:id/post/:userId/comments'} render={({match:{params:{userId}}})=>{
                return <UserComent userId={userId}/>
            }}/>



        </Switch>

      </Router>

    </div>
  );
}

export default App;
