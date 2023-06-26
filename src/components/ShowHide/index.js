import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: '', secondName: '', className: 'head1'}

  firstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstName: 'Joe'})
    } else {
      this.setState({firstName: ''})
    }
  }

  secondName = () => {
    const {secondName} = this.state
    if (secondName === '') {
      this.setState({secondName: 'Jonas'})
    } else {
      this.setState({secondName: ''})
    }
  }

  render() {
    const {firstName, secondName} = this.state
    return (
      <div className="background">
        <h1 className="head">Show/Hide</h1>
        <div className="background1">
          <div className="back">
            <button className="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            <p className="heading">{firstName}</p>
          </div>
          <div className="back">
            <button className="button" onClick={this.secondName}>
              Show/Hide Lastname
            </button>
            <p className="heading">{secondName}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
