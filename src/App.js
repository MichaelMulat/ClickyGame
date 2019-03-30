import React, { Component } from "react";
import NavBar from "./components/NavBar";
import MessageBar from "./components/MessageBar";
import CardContainer from "./components/CardContainer";
import puppyArray from "./puppies.json";

class App extends Component {
  state = {
    cardArray: puppyArray,
    score: 0,
    highScore: 1,
    clicked: [],
    message: ""
  };

  componentDidMount() {
    this.setState({
      message: "Click on a card to start the game. Don't click the same image twice!"
    })
    console.log(this.state.cardArray);
  }

  // shuffle cards
  shuffleCards = () => {
    this.setState({
      cardArray: puppyArray.sort((a, b) => {
        return 0.5 - Math.random();
      })
    });
  };

  //restart game
  restartGame = () => {
    this.setState({
      message: "Click on a card to start the game. Don't click the same image twice!",
      clicked: [],
      score: 0
    });
  };

  // when a card is linked
  handleClick = event => {
    const id = event.target.id;
    if (!this.state.clicked.includes(id)) {
      this.setState({
        clicked: this.state.clicked.concat(id),
        score: this.state.score + 1,
        message:
          "Great Job!"
      });
      this.shuffleCards();
    } else if (this.state.clicked.length === this.state.cardArray.length) {
      this.setState({
        message: "Awesome Job!!!"
      });
      this.restartGame();
    } else {
      this.setState({
        message: "GAME OVER"
      });
      this.restartGame();
    }
  };

  render() {
    return (
      <div>
        <NavBar score={this.state.score} highScore={this.state.highScore} />
        <MessageBar message={this.state.message}/>
        <CardContainer
          cardArray={this.state.cardArray}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
