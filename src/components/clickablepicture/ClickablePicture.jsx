import React from 'react'
class ClickablePicture extends React.Component {
  state =  {
    curPicture: true
  }

  handleClick = () => {
    this.setState(state => ({
      curPicture: !state.curPicture
    }))
  }

  render() {
    return (
        <div>
          <h1> IMAGE SHOULD TOGGLE HERE </h1>
        </div>
    )
  }
}


export default ClickablePicture
