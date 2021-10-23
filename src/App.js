// importing react router dom!
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CreateBlog from "./Components/Create Blog/CreateBlog";
import Feed from "./Components/Feed/Feed";
import SpecificBlog from "./Components/Specific Blog/Specific_blog";
import LoginSignup from "./Components/Login Signup/LoginSignup"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path = "/dashboard">
            <Feed/>
          </Route>
          <Route path = "/blog/:id">
            <SpecificBlog/>
          </Route>
          <Route path = "/create-blog">
            <CreateBlog/>
          </Route>
          <Route path = "/login-signup">
            <LoginSignup/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
