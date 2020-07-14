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
import React from 'react'
import { Link } from 'react-router-dom'

// reactstrap components
import {
  Row,
  Input,
  Col,
  Table,
  Button,
  Container,
  Card,
  Badge
} from 'reactstrap'

class LogsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectAmbiente: 'Produção',
      selectTipoOrdenagem: 'Ordenar por',
      selectTipoBusca: 'selectTipoBusca',
      inputBusca: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidMount = () => {
    this.getLogs()
  }

  getLogs = () => {
    console.log('Implementação do código para listagem dos logs!')
  }

  render() {
    return (
      <>
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div
              className="shape shape-style-1 alpha-4"
              style={{
                background: 'linear-gradient(35deg, #fb6340 0, #fbb140 100%)'
              }}
            >
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
                      <Input
                        type="select"
                        name="selectAmbiente"
                        onChange={this.handleChange}
                        value={this.state.selectAmbiente}
                      >
                        <option value="Produção">Produção</option>
                        <option value="Homologação">Homologação</option>
                        <option value="Dev">Dev</option>
                      </Input>
                    </Col>

                    <Col md="3" className="mt-3">
                      <Input
                        type="select"
                        name="selectTipoOrdenagem"
                        onChange={this.handleChange}
                        value={this.state.selectTipoOrdenagem}
                      >
                        <option value="Ordenar por">Ordenar por</option>
                        <option value="Level">Level</option>
                        <option value="Frequência">Frequência</option>
                      </Input>
                    </Col>

                    <Col md="3" className="mt-3">
                      <Input
                        type="select"
                        name="selectTipoBusca"
                        onChange={this.handleChange}
                        value={this.state.selectTipoBusca}
                      >
                        <option value="Buscar por">Buscar por</option>
                        <option value="Level">Level</option>
                        <option value="Descrição">Descrição</option>
                        <option value="Origem">Origem</option>
                      </Input>
                    </Col>

                    <Col md="3" className="mt-3">
                      <Input
                        type="text"
                        name="inputBusca"
                        onChange={this.handleChange}
                        value={this.state.inputBusca}
                      />
                    </Col>
                  </Row>

                  <Row className="pl-4 pr-4 pb-4">
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
                    <Col md="12">
                      <Table striped bordered hover responsive="md">
                        <thead style={{ backgroundColor: '#ddd' }}>
                          <tr>
                            <th style={{ width: '5%' }}></th>
                            <th style={{ width: '15%' }}>Level</th>
                            <th style={{ width: '50%' }}>Log</th>
                            <th style={{ width: '20%' }}>Eventos</th>
                            <th style={{ width: '10%' }}></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Input type="checkbox" style={{ margin: 0 }} />
                            </td>
                            <td>
                              <Badge color="danger">ERROR</Badge>
                            </td>
                            <td>Algum log de erro</td>
                            <td>1000</td>
                            <td>
                              <Link to="/main/log-page">Detalhes</Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Input type="checkbox" style={{ margin: 0 }} />
                            </td>
                            <td>
                              <Badge color="danger">ERROR</Badge>
                            </td>
                            <td>Algum log de erro</td>
                            <td>1000</td>
                            <td>
                              <Link to="/main/log-page">Detalhes</Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Input type="checkbox" style={{ margin: 0 }} />
                            </td>
                            <td>
                              <Badge color="danger">ERROR</Badge>
                            </td>
                            <td>Algum log de erro</td>
                            <td>1000</td>
                            <td>
                              <Link to="/main/log-page">Detalhes</Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Input type="checkbox" style={{ margin: 0 }} />
                            </td>
                            <td>
                              <Badge color="danger">ERROR</Badge>
                            </td>
                            <td>Algum log de erro</td>
                            <td>1000</td>
                            <td>
                              <Link to="/main/log-page">Detalhes</Link>
                            </td>
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
    )
  }
}

export default LogsList
