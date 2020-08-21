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
    this.token = localStorage.getItem('TOKEN');
    this.userName = localStorage.getItem('USERNAME');
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidMount = () => {
    this.getLogs()
    if(this.token === null){
      window.location.href = '/login-page'
    }
  }

  getLogs = () => {
    const {
      selectAmbiente
    } = this.state
    console.log(selectAmbiente)
    axios 
      .get(`https://superlogsapi20200815150510.azurewebsites.net/api/Log?IdAmbiente=${selectAmbiente}&OrdenarPor=0&BuscarPor=0&PesquisaCampo=%20`)
      .then(({data}) => {
        console.log(data)
        this.setState({ logs: data });
      })
      .catch(error => {
        console.log(error)
      })
  }

  arquivarLog = () => {
    //alert("Arquivando log")
  }

  deletarLog = (log, index) => {
    console.log(index)
    let logs = this.state.logs
    axios.delete('https://superlogsapi20200815150510.azurewebsites.net/api/Log/' + log.idLog)
    .then((response) => {
      alert('Log excluído com sucesso!')
      logs.splice(index, 1);
      this.setState({logs})
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
                        {logs.map((log, index) =>{
                          let url = '/main/log-page/' + log.idLog
                          return (
                          <tr key={log.idLog}>
                            <td>
                              <Badge color="danger">{log.level}</Badge>
                            </td>
                            <td>{log.descricao}</td>
                            <td>{log.eventos}</td>
                            <td>
                              <Link to={url} >Detalhes</Link>
                            </td>
                            <td>
                              <i className="ni ni-folder-17 icon-util" onClick={() => this.arquivarLog(log)}></i>
                            </td>
                            <td style={{paddingTop: '10px'}}>
                              <i className="ni ni-fat-remove icon-util" onClick={() => this.deletarLog(log, index)} style={{fontSize: '2em'}}></i>
                            </td>
                          </tr>
                          )
                        })}
                          <tr>
                            <td>
                              <Badge color="danger">ERROR</Badge>
                            </td>
                            <td>Algum log de erro</td>
                            <td>1000</td>
                            <td>
                              <Link to="/main/log-page/7">Detalhes</Link>
                            </td>
                            <td>
                              <i className="ni ni-folder-17 icon-util" onClick={() => this.arquivarLog()}></i>
                            </td>
                            <td style={{paddingTop: '10px'}}>
                              <i className="ni ni-fat-remove icon-util" onClick={() => this.deletarLog()} style={{fontSize: '2em'}}></i>
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
