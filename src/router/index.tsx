import { lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import withSuspense from "../helper/hocs/withSuspense";

const DynamicTest = lazy(() => import("../containers/test/TestContainer"));

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/test" exact>
          {withSuspense(DynamicTest, <></>)}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
