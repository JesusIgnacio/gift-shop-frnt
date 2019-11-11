import React from 'react';
import {
  Link
} from 'react-router-dom'

class GiftCard extends React.Component{
  render(){
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <Link to={"/"+this.props.gift.partNumber}><img class="card-img-top" src={this.props.gift.fullImage} alt=""></img></Link>
          <div class="card-body">
            {this.props.gift.attributes.map(attr => 
              { if (attr['name'].toUpperCase()==='Marca'.toUpperCase())
            { return <h6 key={attr['name']}><b>{attr['value']}</b></h6>}
              }
            )}
            <br></br>
            <h6 class="card-title">
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