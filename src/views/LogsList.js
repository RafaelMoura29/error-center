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
import { Link } from "react-router-dom";

// reactstrap components
import {
  Row,
  Input,
  Col,
  Table,
  Button,
  Container,
  Card
} from "reactstrap";

class LogsList extends React.Component {
  render() {
    return (
      <>
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 alpha-4" style={{ background: 'linear-gradient(35deg, #fb6340 0, #fbb140 100%)' }}>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>
          <section className="section" style={{ backgroundColor: '#eee' }}>
            <Container>
              <Card className="card-profile shadow main-card">
                <div className="px-4">

                  <Row className="pl-4 pr-4 pb-4">

                    <Col md="3" className="mt-3">
                      <Input type="select" >
                        <option>Produção</option>
                        <option>Homologação</option>
                        <option>Dev</option>
                      </Input>
                    </Col>

                    <Col md="3" className="mt-3">
                      <Input type="select" >
                        <option>Ordenar por</option>
                        <option>Level</option>
                        <option>Frequência</option>
                      </Input>
                    </Col>

                    <Col md="3" className="mt-3">
                      <Input type="select">
                        <option>Buscar por</option>
                        <option>Level</option>
                        <option>Descrição</option>
                        <option>Origem</option>
                      </Input>
                    </Col>

                    <Col md="3" className="mt-3">
                      <Input type="text" />
                    </Col>

                  </Row>

                  <Row className="pl-4 pr-4 pb-4" >
                    <Col md="12">
                      <Button color="primary" type="button" disabled>
                        Arquivar
  </Button>

                      <Button color="danger" type="button" disabled>
                        Apagar
  </Button>
                    </Col>

                  </Row>

                  <Row className="pl-4 pr-4">

                    <Col md="12" >
                      <Table striped bordered hover responsive="md">
                        <thead style={{ backgroundColor: '#ddd' }}>
                          <tr>
                            <th style={{ width: '5%' }}></th>
                            <th style={{ width: '15%' }}>Level</th>
                            <th style={{ width: '60%' }}>Log</th>
                            <th style={{ width: '20%' }}>Eventos</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr onClick={() => this.props.history.push('/main/log-page')}>
                            <td >
                            </td>
                            <td>321</td>
                            <td>Algum log de erro</td>
                            <td>1000</td>
                          </tr>
                          <tr onClick={() => this.props.history.push('/main/log-page')}>
                            <td >
                            </td>
                            <td>321</td>
                            <td>Algum log de erro</td>
                            <td>1000</td>
                          </tr>
                          <tr onClick={() => this.props.history.push('/main/log-page')}>
                            <td >
                            </td>
                            <td>321</td>
                            <td>Algum log de erro</td>
                            <td>1000</td>
                          </tr>
                          <tr onClick={() => this.props.history.push('/main/log-page')}>
                            <td >
                            </td>
                            <td>321</td>
                            <td>Algum log de erro</td>
                            <td>1000</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>

                  </Row>

                </div>
              </Card>
            </Container>
          </section>
        </main>



      </>
    );
  }
}

export default LogsList;
