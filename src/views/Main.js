/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import LogsList from './LogsList.js'
import Log from './Log.js'

class Main extends React.Component {
  render() {
    return (
      <>
        <Row style={{backgroundColor:'#fba440'}}>
          <Col md="12" >
            <p className="display-4 ml-4 mt-3 ">Bem vindo usuário, seu token é: fiugwfbwuywfbfwe</p>
          </Col>
        </Row>

        <BrowserRouter>
          <Switch>
          <Route
              path="/main/logsList-page"
              exact
              render={props => <LogsList {...props} />}
            />
            <Route
              path="/main/log-page"
              exact
              render={props => <Log {...props} />}
            />
            <Redirect to="/main/logsList-page" />
          </Switch>
        </BrowserRouter>

      </>
    );
  }
}

export default Main;