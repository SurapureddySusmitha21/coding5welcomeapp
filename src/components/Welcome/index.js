// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {issubButton: false}

  buutonText = () => {
    this.setState(prevsState => ({issubButton: !prevsState.issubButton}))
  }

  getClickBtn = () => {
    const {issubButton} = this.state
    return issubButton ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buutonText = this.getClickBtn()

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="happy-paragrph">Thank you! Happy Learing</p>
        <div className="">
          <button
            type="button"
            className="subscribe-btn"
            onClick={this.buutonText}
          >
            {buutonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
