import React from 'react'

class LikeButton extends React.Component {
  static defaultProps = {
    colors: ['purple','blue','green','yellow','orange','red']
  }
    state = {
      likes: 0,
      curColor: null
    }

  handleClick = () => {
    let randomizer = Math.floor(Math.random() * this.props.colors.length + 1)
    this.setState({
      likes: this.state.likes + 1,
      curColor: this.props.colors[randomizer]
    })
  }

  render() {
    return(
      <div> 
        <button style={{backgroundColor: `${this.state.curColor}`}} onClick={this.handleClick}>{this.state.likes} Likes</button>
        {/* <button style={{backgroundColor: `${this.state.curColor}`}} onClick={this.handleClick}>{this.state.likes} Likes</button> */}
      </div>
    )
  }
}

export default LikeButton
