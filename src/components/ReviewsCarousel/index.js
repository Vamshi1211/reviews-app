// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  rightArrowClicked = () => {
    const {reviewsList} = this.props
    const {length} = reviewsList
    const {index} = this.state

    if (length - 1 === index) {
      this.setState(prevState => ({index: prevState.index}))
    } else {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  leftArrowClicked = () => {
    // const {reviewsList} = this.props
    const {index} = this.state
    const firstIndex = 0

    if (firstIndex === index) {
      this.setState(prevState => ({index: prevState.index}))
    } else {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[index]

    return (
      <div className="app-container">
        <div className="arrow-image-container">
          <button
            type="button"
            className="arrow-button"
            onClick={this.leftArrowClicked}
            data-testid="leftArrow"
          >
            <img
              alt="left arrow"
              className="arrow-image"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          <div className="review-container">
            <h1 className="heading">Reviews</h1>
            <img src={imgUrl} alt={username} className="reviewer-image" />
            <p className="reviewer-name">{username}</p>
            <p className="reviewer-company">{companyName}</p>
            <p className="review-des"> {description}</p>
          </div>
          <button
            type="button"
            className="arrow-button"
            onClick={this.rightArrowClicked}
            data-testid="rightArrow"
          >
            <img
              alt="right arrow"
              className="arrow-image"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
