'use strict';

import React from 'react/addons';
import Shuffle from '../src/Shuffle';

const alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z']

const shuffled_alphabet = [
  "p", "x", "n", "a", "m", "g", "b", "y", "c", "e", 
  "o", "l", "q", "i", "h", "d", "z", "r", "k", "t", 
  "s", "v", "f", "j", "w", "u"]

const App = React.createClass({
  getInitialState() {
    return {
      children: alphabet,
      filtered: false
    }
  },
  filterChildren() {
    if (this.state.filtered === false) {
      let newChildren = this.state.children.filter(function(child,index){
        if (index % 2 ===0) {
          return child
        }
      });
      this.setState({
        children: newChildren,
        filtered: true
      });
    } else {
      this.setState({
        children: alphabet,
        filtered: false
      });
    }
  },
  render() {
    return (
      <div className="demo">
        <button type="button" onClick={this.filterChildren}>Filter Children</button>
        <Shuffle duration={500} fade={true}>
          {this.state.children.map(function(letter, index){
            var sox = shuffled_alphabet.indexOf(letter)
            console.log(index, letter, 'shuffle-order', sox)
            return (
              <div className="tile" key={letter} shuffleorder={sox}>
                <img
                  src={"http://placehold.it/100x100&text=" + sox+':'+letter} />
              </div>
            )
          })}
        </Shuffle>
      </div>
    )
  }
});

const content = document.getElementById('content');

React.render(<App/>, content)

