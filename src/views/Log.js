import React from 'react'

// reactstrap components
import { Card, Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      log: {}
    }
    this.token = localStorage.getItem('TOKEN')
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
    this.getLog()
  }

  getLog = () => {
    const {
      match: { params }
    } = this.props
    const idLog = params.idLog
    axios
      .get(
        'https://superlogsapi20200815150510.azurewebsites.net/api/Log/' + idLog,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${this.token}`
          }
        }
      )
      .then(({ data }) => {
        let dataLog = data.data
        if (data.idTipoLog === 1) {
          data.tipo = 'Debug'
        } else if (data.idTipoLog === 2) {
          data.tipo = 'Warning'
        } else {
          data.tipo = 'Error'
        }
        this.setState({ log: data })
      })
      .catch((error) => {
      })
  }

  render() {
    let { log } = this.state
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
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require(`assets/img/theme/${
                              log.tipo || 'Loading'
                            }.jpg`)}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    ></Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-left">
                        <div>
                          <Link
                            style={{ position: 'absolute', left: '1px' }}
                            to="/main/logsList"
                          >
                            {'<- voltar'}
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-6">
                    <h3>
                      Error no {log.host} em {log.data}
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Coletado por: {log.tokenUsuario}
                    </div>
                    <div className="h6 font-weight-300">
                      <i className="ni business_briefcase-24 mr-2" />
                      Eventos - {log.eventos}
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-justify">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <h3 className=" text-primary font-weight-light mb-2">
                          Título
                        </h3>
                        <p>{log.titulo}</p>
                        <h3 className=" text-primary font-weight-light mb-2">
                          Detalhes
                        </h3>
                        <p>{log.descricao}</p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
      </>
    )
  }
}

export default Profile
