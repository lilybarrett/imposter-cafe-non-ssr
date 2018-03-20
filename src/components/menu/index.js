import React, { Component } from "react";
import { Container, Header } from "./styles";
import NavBar from "../nav-bar";
import { MenuItem, Bold } from "./styles";
import { Page } from "../../global";

class Menu extends Component {
  constructor () {
    super();
    this.state = {
      menuItems: []
    }
  }
  
  async componentDidMount() {
    const res = await fetch("/menu");
    const menu = await res.json();
    this.setState({ menuItems: menu.menuItems });
  }
  
  render() {
    return (
      <Page>
        <Container>
            <Header>Imposter Cafe Brunch Menu</Header>
            { this.state.menuItems.map((menuItem) => {
              const { name, description, cost } = menuItem;
              return (
                <MenuItem>
                  <Bold>{name}:</Bold> {description}
                  <p>Price: {cost}</p>
                </MenuItem>
              )
            }) }
        </Container>
      </Page>
    );
  }
}

export default Menu;
