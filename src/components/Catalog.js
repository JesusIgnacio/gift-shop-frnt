import React from 'react';
import Giftcard from './GiftCard'

class Catalog extends React.Component{
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
                {this.props.gifts.map((gift) => (
                  <Giftcard key={gift.uniqueID} gift={gift}/>
                ))}              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;