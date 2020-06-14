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

// reactstrap components
import { Row, Col, Badge } from "reactstrap";

class Log extends React.Component {
  render() {
    return (
      <>
        <button onClick={() => this.props.history.push('/main/logsList-page')}>
          Voltar
        </button>

        <Row className="pl-4 pr-4">
          <Col md="12">
            <h2>
              Error no 127.0.0.1 em 24;05/2019 10:15
            </h2>
          </Col>
        </Row>

        <Row className="pl-4 pr-4">
          <Col md="2">
            <Badge color="danger">ERROR</Badge>
          </Col>
          <Col md="4">
            <p className="display-4 ">Eventos: 1000</p>
          </Col>
          <Col md="6">
            <p className="display-4 ">Coletado por: Token do usuário José da Silva</p>
          </Col>
        </Row>

        <Row className="pl-4 pr-4">
          <Col md="12">
            <h3>
              Título
          </h3>
          </Col>

          <Col md="12">
            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </Col>

          <Col md="12">
            <h3>Detalhes</h3>
          </Col>

          <Col md="12">
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </Col>

        </Row>

      </>
    );
  }
}

export default Log;
