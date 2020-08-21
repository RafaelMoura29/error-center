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
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js'
// reactstrap components
import {
  Navbar,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

class DemoNavbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    let headroom = new Headroom(document.getElementById('navbar-main'))
    // initialise
    headroom.init()
    console.log(this.props)
  }
  state = {
    collapseClasses: '',
    collapseOpen: false
  }

  onExiting = () => {
    this.setState({
      collapseClasses: 'collapsing-out'
    })
  }

  onExited = () => {
    this.setState({
      collapseClasses: ''
    })
  }

  logout = (event) => {
    event.preventDefault()
    localStorage.removeItem('TOKEN')
    localStorage.removeItem('USERNAME')
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <UncontrolledDropdown>
                <DropdownToggle caret color="secondary">
                  Bem vindo(a) {this.props.userName}!
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    href="#"
                    onClick={() => {
                      prompt('Seu token é', this.props.token)
                    }}
                  >
                    token
                  </DropdownItem>
                  <DropdownItem href="#" onClick={this.logout}>
                    Sair
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Container>
          </Navbar>
        </header>
      </>
    )
  }
}

export default DemoNavbar
