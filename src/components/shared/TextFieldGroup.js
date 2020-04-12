import React, { Component } from 'react'

import PropTypes from 'prop-types';
import classnames from "classnames";

class TextFieldGroup extends Component {
    constructor(props){
        super(props);
    }

    //This will not be called on first time Rendering
  //Only be called on subsequent Rendering and used check
  //If any change in property or not. In case of change in Prop
  //We need to take the action like updating the state etc.
  componentWillReceiveProps(nextProps) {
    debugger;
    console.log(nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    debugger;
    if (nextProps.value !== this.props.value) {
      return true;
    } else {
      return false;
    }
  }





    render() {
        return (
            <div>
                <div class="form-group"> 
               <input type={this.props.type} 
               className={classnames("form-control form-control-lg", {
                "is-invalid": this.props.error
              })}//if there s a error then apply is-invalid class
      
               placeholder={this.props.placeholder} 
               name={this.props.name} 
               value={this.props.value} 
               onChange={this.props.onChange}/> 
               <small class="form-text text-muted">{this.props.info}</small> 
               {this.props.error && <div className="invalid-feedback">{ this.props.error}</div>}  
            </div> 
            
            </div>
        )
    }
}

TextFieldGroup.propTypes={
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    value:PropTypes.string,
    info:PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

TextFieldGroup.defaultProps = {
    type: "text"
  };

  


export default TextFieldGroup;
