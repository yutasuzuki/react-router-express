import React, {Component} from 'react'

export default class Counter extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <p>increment!!</p>
        <p>Count: {this.state.count}</p>
        <button onClick={e => this.increment()}>Increment</button>
      </div>
    )
  }
}
