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
import axios from 'axios'
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
      selectAmbiente: 1,
      selectTipoOrdenagem: 'Ordenar por',
      selectTipoBusca: 'selectTipoBusca',
      inputBusca: '',
      logs: []
    }
    this.token = localStorage.getItem('TOKEN')
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidMount = () => {
    this.getLogs()
  }

  getLogs = () => {
    const { selectAmbiente } = this.state
    axios
      .get(
        `https://superlogsapi20200815150510.azurewebsites.net/api/Log?IdAmbiente=${selectAmbiente}&OrdenarPor=0&BuscarPor=0&PesquisaCampo=%20`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${this.token}`
          }
        }
      )
      .then(({ data }) => {
        this.setState({ logs: data })
      })
      .catch((error) => {
      })
  }

  arquivarLog = (log, index) => {
    let logs = this.state.logs
    axios
      .get(
        'https://superlogsapi20200815150510.azurewebsites.net/api/Log/' +
          log.idLog,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${this.token}`
          }
        }
      )
      .then(({ data }) => {
        data.idStatus = 2
        axios
          .put(
            'https://superlogsapi20200815150510.azurewebsites.net/api/Log',
            data,
            {
              headers: {
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${this.token}`
              }
            }
          )
          .then((response) => {
            logs.splice(index, 1)
            this.setState({ logs })
            alert('Log arquivado com sucesso!')
          })
          .catch((error) => {
            alert(
              'Ocorreu um erro ao arquivar o log, tente novamente em instantes!'
            )
          })
      })
      .catch((error) => {
        alert(
          'Ocorreu um erro ao arquivar o log, tente novamente em instantes!'
        )
      })
  }

  deletarLog = (log, index) => {
    let logs = this.state.logs
    axios
      .delete(
        'https://superlogsapi20200815150510.azurewebsites.net/api/Log/' +
          log.idLog,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${this.token}`
          }
        }
      )
      .then((response) => {
        logs.splice(index, 1)
        this.setState({ logs })
        alert('Log excluído com sucesso!')
      })
      .catch((error) => {
        alert('Ocorreu um erro ao excluir o log, tente novamente em instantes!')
      })
  }

  render() {
    let { logs } = this.state
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
                        <option value="1">Produção</option>
                        <option value="2">Homologação</option>
                        <option value="3">Dev</option>
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

                  <Row className="pl-4 pr-4">
                    <Col md="12">
                      <Table striped bordered hover responsive="md">
                        <thead style={{ backgroundColor: '#ddd' }}>
                          <tr>
                            <th style={{ width: '15%' }}>Level</th>
                            <th style={{ width: '50%' }}>Log</th>
                            <th style={{ width: '15%' }}>Eventos</th>
                            <th style={{ width: '10%' }}></th>
                            <th style={{ width: '5%' }}></th>
                            <th style={{ width: '5%' }}></th>
                          </tr>
                        </thead>
                        <tbody>
                          {logs.map((log, index) => {
                            let url = '/main/log-page/' + log.idLog
                            let badge = 'info'
                            if (log.level === 'Error') {
                              badge = 'danger'
                            } else if (log.level === 'Warning') {
                              badge = 'warning'
                            }
                            
                            if (log.idStatus === 1) {
                              return (
                                <tr key={log.idLog}>
                                  <td>
                                    <Badge color={badge}>{log.level}</Badge>
                                  </td>
                                  <td>{log.descricao}</td>
                                  <td>{log.eventos}</td>
                                  <td>
                                    <Link to={url}>Detalhes</Link>
                                  </td>
                                  <td>
                                    <i
                                      className="ni ni-folder-17 icon-util"
                                      onClick={() => this.arquivarLog(log, index)}
                                    ></i>
                                  </td>
                                  <td style={{ paddingTop: '10px' }}>
                                    <i
                                      className="ni ni-fat-remove icon-util"
                                      onClick={() => this.deletarLog(log, index)}
                                      style={{ fontSize: '2em' }}
                                    ></i>
                                  </td>
                                </tr>
                              )
                            }
                            else {
                              return 
                            }
                            
                          })}
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
