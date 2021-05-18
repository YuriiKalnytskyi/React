import './App.css';
import Counter from "./component /counrer/Counter";
import {Link,Route, BrowserRouter as Router, Switch} from "react-router-dom";



function App() {
    return (
        <div className={'Container'}>
            <Router>
                <div> <Link to={"/counter"}>counter</Link></div>

                <Switch>
                    <Route path={'/counter'} render={()=>{
                        return <Counter/>
                    }} />
                </Switch>
            </Router>

        </div>
    );
}

export default App;
