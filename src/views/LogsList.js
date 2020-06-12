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
import {
  Row,
  Input,
  Col
} from "reactstrap";

class LogsList extends React.Component {
  render() {
    return (
      <>
        <Row className="ml-4 mr-4">

          <Col md="3" className="mt-3">
            <Input
              type="select"
            >
              <option>Produção</option>
              <option>Homologação</option>
              <option>Dev</option>
            </Input>
          </Col>

          <Col md="3" className="mt-3">
            <Input
              type="select"
            >
              <option>Ordenar por</option>
              <option>Level</option>
              <option>Frequência</option>
            </Input>
          </Col>

          <Col md="3" className="mt-3">
            <Input
              type="select"
            >
              <option>Buscar por</option>
              <option>Level</option>
              <option>Descrição</option>
              <option>Origem</option>
            </Input>
          </Col>

          <Col md="3" className="mt-3">
            <Input
              type="text"
            >
            </Input>
          </Col>

        </Row>


      </>
    );
  }
}

export default LogsList;
