import React from 'react';
import { render } from 'react-dom';

import RLDD from 'react-list-drag-and-drop/lib/RLDD';

import './index.css';

const bananas = require('./bananas.json');

export default class Example extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: bananas.bananas
    };

    this.itemRenderer = this.itemRenderer.bind(this);
    this.handleRLDDChange = this.handleRLDDChange.bind(this);
  }

  render() {
    const items = this.state.items;
    console.log(items);
    return (
      <div>
        <h1>react-list-drag-and-drop</h1>
        <p>
          <a href="https://www.npmjs.com/package/react-list-drag-and-drop">
            <img
              alt="npm install react-list-drag-and-drop"
              src="https://nodei.co/npm/react-list-drag-and-drop.png?mini=true"
            />
          </a>
        </p>
        <h2>Javascript Example 1: Draggable List of Bananas</h2>
        <p>Drag and drop items to re-order the list.</p>
        <RLDD
          cssClasses="example"
          items={items}
          itemRenderer={this.itemRenderer}
          onChange={this.handleRLDDChange}
        />
      </div>
    );
  }

  itemRenderer(item, index) {
    return (
      <div className="item">
        <p className="title">{item.title}</p>
        <p className="body">{item.body}</p>
        <div className="small">
          item.id: {item.id} - index: {index}
        </div>
      </div>
    );
  }

  handleRLDDChange(reorderedItems) {
    console.log(reorderedItems);
    this.setState({ items: reorderedItems });
  }
}

render(<Example />, document.getElementById('root'));

/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component {
    render() {
      return (
        <button 
            className="square" 
            onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
      constructor(props) {
          super(props);
          this.state={
              squares: Array(9).fill(null),
          };
      }

      handleClick(i) {
          const squares=this.state.squares.slice();
          squares[i]='X';
          this.setState({squares: squares});
      }

    renderSquare(i) {
      return (
        <Square 
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status /}</div>
            <ol>{/* TODO /}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  */