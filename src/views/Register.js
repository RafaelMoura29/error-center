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
import axios from 'axios'
import api from '../utils/api'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from 'reactstrap'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      registerNome: '',
      registerEmail: '',
      registerSenha: '',
      registerConfirmarSenha: '',
      isLoading: false
    }
  }

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value })

  componentDidMount() {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }

  register = (event) => {
    event.preventDefault()
    this.setState({ isLoading: true })
    const {
      registerNome,
      registerEmail,
      registerSenha,
      registerConfirmarSenha
    } = this.state

    if (registerSenha !== registerConfirmarSenha) {
      return alert('Confira se as senhas são iguais!')
    }

    axios
      .post(
        'https://superlogsapi20200815150510.azurewebsites.net/api/Usuario/register',
        {
          email: registerEmail,
          userName: registerNome,
          password: registerSenha,
          confirmPassword: registerConfirmarSenha
        },
        {
          headers: { 'Access-Control-Allow-Origin': '*' }
        }
      )
      .then(({ data: { token, userName } }) => {
        this.setState({ isLoading: false })
        alert('Cadastro realizado com sucesso!')
        localStorage.setItem('TOKEN', token)
        localStorage.setItem('USERNAME', userName)
        this.props.history.push('/main')
      })
      .catch((error) => {
        this.setState({ isLoading: false })
        console.log(error)
        alert(
          'A senha deve conter caracteres especiais, números e letras! Caso sua senha esteja correta tente novamente em instantes'
        )
      })
  }

  render() {
    let {
      registerEmail,
      registerNome,
      registerSenha,
      registerConfirmarSenha,
      isLoading
    } = this.state
    return (
      <>
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-warning">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container>
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-3">
                      <div className="text-center">
                        <p className="h1">Super Logs</p>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <Form onSubmit={this.register} role="form">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Nome"
                              name="registerNome"
                              value={registerNome}
                              onChange={this.handleChange}
                              type="text"
                              minLength={1}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              name="registerEmail"
                              value={registerEmail}
                              onChange={this.handleChange}
                              type="email"
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Senha"
                              autoComplete="off"
                              name="registerSenha"
                              value={registerSenha}
                              onChange={this.handleChange}
                              type="password"
                              minLength={9}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Confirmar Senha"
                              autoComplete="off"
                              name="registerConfirmarSenha"
                              value={registerConfirmarSenha}
                              onChange={this.handleChange}
                              type="password"
                              minLength={9}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            disabled={isLoading}
                            type="submit"
                          >
                            {isLoading ? (
                              <>
                                <i className="fa fa-spinner fa-spin" />{' '}
                                Carregando{' '}
                              </>
                            ) : (
                              <> Criar conta </>
                            )}
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="."
                        onClick={(e) => this.props.history.push('/login-page')}
                      >
                        <small>Fazer Login</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <footer
              className=" footer"
              style={{ backgroundColor: 'transparent' }}
            >
              <hr />
            </footer>
          </section>
        </main>
      </>
    )
  }
}

export default Register
