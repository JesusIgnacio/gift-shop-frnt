import React from 'react';
import Giftcard from './GiftCard'

class Catalog extends React.Component{
  render(){
    return (
      <div className="catalog" class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
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