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
  Col,
} from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginEmail: '',
      loginSenha: ''
    }
  }

  handleChange = (event) => this.setState({ [event.target.name]: event.target.value })

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  login = () => {
    /* axios 
      .post('https://localhost:5001/api/Usuario/register')
      .then(response => {
        //alert('success')
      })
      .catch(error => {
        console.log(error)
      }) */

    this.props.history.push('/main')
  }

  render() {
    let { loginEmail, loginSenha } = this.state

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
                      <Form role="form">
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
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="button"
                            onClick={this.login}
                          >
                            LOGIN
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
                        onClick={e => this.props.history.push('/register-page')}
                      >
                        <small>Criar Conta</small>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <footer className=" footer" style={{ backgroundColor: 'transparent' }}>
              <hr />
            </footer>
          </section>
        </main>

      </>
    );
  }
}

export default Login;
