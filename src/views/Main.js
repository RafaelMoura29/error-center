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
import DemoNavbar from "components/Navbars/DemoNavbar.js";

import LogsList from "./LogsList.js";
import Log from "./Log.js";

import "./style.css";

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      log: {}
    }
    this.token = localStorage.getItem('TOKEN');
    this.userName = localStorage.getItem('USERNAME');
  }

  componentDidMount(){
    if(this.token === null){
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <>
        <DemoNavbar history={this.props.history} token={this.token} userName={this.userName}/>
        {/* <Row id="row-navbar">
          <Col md="12" >
            <p className="mt-3 " style={{ fontSize: '1.4em' }}>Bem vindo usuário, seu token é: fiugwfbwuywfbfwe</p>
          </Col>
        </Row> */}

        <BrowserRouter>
          <Switch>
            <Route path="/main/logsList-page" exact component={LogsList} />
            <Route path="/main/log-page/:idLog" exact component={Log} />
            <Redirect to="/main/logsList-page" />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Main;
