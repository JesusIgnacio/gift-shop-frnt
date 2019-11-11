import React from 'react';
import {
  Link
} from 'react-router-dom'

class GiftCard extends React.Component{
  render(){
    return (
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <Link to={"/"+this.props.gift.partNumber}><img class="card-img-top" src={this.props.gift.fullImage} alt=""></img></Link>
          <div class="card-body">
            {this.props.gift.attributes.map(attr => 
              { if (attr['name'].toUpperCase()==='Marca'.toUpperCase())
                { return <h8><b>{attr['value']}</b></h8>}
              }
            )}
            <br></br>
            <h7 class="card-title">
              <Link to={"/"+this.props.gift.partNumber}>{this.props.gift.name}</Link>
            </h7><br></br>
            <h6>${this.props.gift.prices.listPrice}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default GiftCard;