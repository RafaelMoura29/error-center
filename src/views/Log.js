import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1" style={{backgroundColor: '#eee'}}>
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>
          <section className="section" style={{backgroundColor: '#eee'}}>
            <Container>
              <Card className="card-profile shadow" style={{ marginTop: '-500px' }}>
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/team-4-800x800.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-left">
                        <div>
                          <Link to="/main/logsList">{'<- voltar'}</Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-6">
                    <h3>
                      Error no 127.0.0.1 em 24;05/2019 10:15
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Coletado por: Token do usuário José da Silva
                    </div>
                    <div className="h6 font-weight-300">
                      <i className="ni business_briefcase-24 mr-2" />
                      Eventos - 1000
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-justify">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <h3 className=" text-primary font-weight-light mb-2">
                          Título
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <h3 className=" text-primary font-weight-light mb-2">
                          Detalhes
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Profile;