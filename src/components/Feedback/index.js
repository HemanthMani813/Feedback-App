// Write your React code here.
import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {isfeedBack: true}

  onClicked = () => {
    this.setState({isfeedBack: false})
  }

  renderFeedBack = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-container">
        <div className="card">
          <h1>How satisfied are you with our customer support performance</h1>
          <ul>
            {emojis.map(item => (
              <li key={item.id}>
                <button type="button" onClick={this.onClicked}>
                  <img src={item.imageUrl} alt={item.name} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="card">
          <h1>Thank You</h1>
          <img src={loveEmojiUrl} alt="love emoji" />
        </div>
      </div>
    )
  }

  render() {
    const {isfeedBack} = this.state
    return (
      <div>{isfeedBack ? this.renderFeedBack() : this.renderThankYou()}</div>
    )
  }
}
export default Feedback
