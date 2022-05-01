import React, { lazy } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Product from "../../../component/Product/Product";
const Blog = lazy(() => import("./Blog"));
const DetailBlog = lazy(() =>
  import("../../../features/DetailBlog/DetailBlog")
);
function RouterBlog() {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <Blog />
        </Route>
        <Route exact path={`${path}/:san-pham-cua-hoc-vien`}>
          <Product />
        </Route>
        <Route exact path={`${path}/:link`}>
          <DetailBlog />
        </Route>
      </Switch>
    </>
  );
}

export default RouterBlog;
