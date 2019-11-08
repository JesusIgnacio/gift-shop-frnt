import React from 'react';
import GiftCard from './GiftCard';

class Catalog extends React.Component{
  render(){
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="mb-4" >
            </div>
            <div class="row">
              {this.props.gifts.map((gift) => (
                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="card h-100">
                    <a href="#">
                      <img class="card-img-top" src={gift.fullImage} alt=""></img>
                    </a>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="#">{gift.name}</a>
                      </h4>
                      <h5>${gift.prices.listPrice}</h5>
                    </div>
                  </div>
                </div>
              ))

              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;