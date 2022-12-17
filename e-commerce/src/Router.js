
import { Route, Redirect ,Switch} from 'react-router-dom';

import { useContext } from "react";
import AuthContext from "./Components/Store/Auth-context";


import HomePage from './pages/HomePage';
import Layout from "./Components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import UserProfile from "./Components/Profile/UserProfile";

const  Router = ()=>{ 
  const authCtx = useContext(AuthContext);
    return (
      <div>
        <Layout>
          <Switch>
            {!authCtx.isLoggedIn && (
              <Route path="/auth">
                <AuthPage />
              </Route>
            )}

            <Route path="/profile">
              {authCtx.isLoggedIn && <UserProfile />}
              {!authCtx.isLoggedIn && <Redirect to="/auth" />}
            </Route>

            <Route path="/*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Layout>
        {authCtx.isLoggedIn && (<HomePage/>)}
      </div>
    );
}

export default Router;