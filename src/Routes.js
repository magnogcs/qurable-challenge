import React from "react";
import { HomePage, ItemDetails } from "../src/Views";
import Header from "../src/Components/Header";
import { Section } from "../src/Components/ThemeComponents";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { history } from "../src/Helpers";
const Routes = () => {
  return (
    <BrowserRouter history={history} forceRefresh>
      <Header />
      <Section>
        <Switch>
          <Route exact path="/items" component={HomePage} />
          <Route path="/items/:id" component={ItemDetails} />
          <Redirect from="*" to="/items" />
        </Switch>
      </Section>
    </BrowserRouter>
  );
};

export default Routes;
