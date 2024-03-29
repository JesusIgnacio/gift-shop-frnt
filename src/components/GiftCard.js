import React from 'react';
import {
  Link
} from 'react-router-dom'

class GiftCard extends React.Component{
  render(){
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <Link to={"/"+this.props.gift.partNumber}><img className="card-img-top" src={this.props.gift.fullImage} alt=""></img></Link>
          <div className="card-body">
            <h6 ><b>{this.props.gift.name.substring(this.props.gift.name.indexOf('|')+1)}</b></h6>
            <br></br>
            <h6 className="card-title">
              <Link to={"/"+this.props.gift.partNumber}>{this.props.gift.name}</Link>
            </h6><br></br>
            <h5>${this.props.gift.prices.listPrice}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default GiftCard;