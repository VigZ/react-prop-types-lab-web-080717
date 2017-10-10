import React from "react"
import PropTypes from "prop-types"

class Product extends React.Component{
  render(){
    return(
      <div>
      <h1> {this.props.name} </h1>
      <h1> Speed: {this.props.producer} </h1>
      <h1> Has Watermark: {this.props.hasWatermark} </h1>
      <h1> Color: {this.props.color} </h1>
      <h1> Weight: {this.props.weight} </h1>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(["white","eggshell-white", "salmon"]).isRequired,
  weight:(prop, propertyName) =>{

     let weight = prop[propertyName];

     if (weight === undefined){
       return new Error('Weight is required');
     } else if (isNaN(weight)){
       return new Error('Weight has to be a number');
     }else if (weight < 80 || weight > 300 ){
       return new Error('Weight needs to between 80 and 300')
  }
}
}
export default Product// Code Product Component Here
