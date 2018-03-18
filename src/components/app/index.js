import React, { Component } from "react";
import { Container, Header } from "./styles";

class App extends Component {
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
      <Container>
          <Header>Imposter Cafe Brunch Menu</Header>
          { this.state.menuItems.map((menuItem) => {
            const { name, description, cost } = menuItem;
            return (
              <div>
                {name}: {description} - Price: {cost}
              </div>
            )
          }) }
      </Container>
    );
  }
}

export default App;
