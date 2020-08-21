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

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginEmail: '',
      loginSenha: '',
      isLoading: false
    }
    this.token = localStorage.getItem('TOKEN');
    this.userName = localStorage.getItem('USERNAME');
  }

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value })

  componentDidMount() {
    if(this.token !== null){
      this.props.history.push('/main/logsList-page')
    }
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    this.refs.main.scrollTop = 0
  }

  login = (event) => {
    event.preventDefault()
    this.setState({ isLoading: true })
    const {
      loginEmail,
      loginSenha
    } = this.state

    axios
      .post(
        'https://superlogsapi20200815150510.azurewebsites.net/api/Usuario/login',
        {
          email: loginEmail,
          userName: '',
          password: loginSenha,
          confirmPassword: loginSenha
        }
      )
      .then(({data:{token, userName}}) => {
        this.setState({ isLoading: false })
        localStorage.setItem('TOKEN', token)
        localStorage.setItem('USERNAME', userName)
        this.props.history.push('/main')
      })
      .catch((error) => {
        this.setState({ isLoading: false })
        alert('Verifique se todos os dados estão corretos!')
      })
  }

  render() {
    let { loginEmail, loginSenha, isLoading } = this.state

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
                      <Form role="form" onSubmit={this.login}>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="email"
                              name="loginEmail"
                              value={loginEmail}
                              onChange={this.handleChange}
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
                              type="password"
                              autoComplete="off"
                              name="loginSenha"
                              value={loginSenha}
                              onChange={this.handleChange}
                              minLength={9}
                              required
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <>
                                <i className="fa fa-spinner fa-spin" />{' '}
                                Carregando{' '}
                              </>
                            ) : (
                              <> Login </>
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
                        href="#pablo"
                        onClick={(e) =>
                          this.props.history.push('/register-page')
                        }
                      >
                        <small>Criar Conta</small>
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

export default Login
