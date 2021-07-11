import React from "react";
import './Button.css';

class Button extends React.Component {
  render() {
    if(this.props.isFilled != undefined) {
      if(this.props.isFilled == false || this.props.isFilled == "false") return (
        <div className="Button Void" onClick={() => {if(this.props.action) this.props.action()}}>
          {this.props.children}
        </div>
      )
    }
    return (
      <div className="Button" onClick={() => {if(this.props.action) this.props.action()}}>
        {this.props.children}
      </div>
    )
  }
}

export default Button;