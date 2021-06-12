import {BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Nav from "./includes/Nav";
import Home from "./Pages/Home";
import MyNetwork from "./Pages/MyNetwork";
import Job from "./Pages/Job";
import Messaging from "./Pages/Messaging";
import Notification from "./Pages/Notification";
import MessagingBox from "./components/MessagingBox";

const App = () => {
    return (
        <Router>
            <div className="relative z-10">
                <MessagingBox/>
                <Nav/>

                <main className="container mx-auto mt-20">
                    <Switch>
                        <Route exact path="/feed">
                            <Home />
                        </Route>

                        <Route exact path="/my-network">
                            <MyNetwork />
                        </Route>

                        <Route exact path="/job">
                            <Job />
                        </Route>

                        <Route exact path="/messaging">
                            <Messaging />
                        </Route>

                        <Route exact path="/notifications">
                            <Notification />
                        </Route>

                        <Route exact path="*">
                            <Redirect to="/feed" />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;