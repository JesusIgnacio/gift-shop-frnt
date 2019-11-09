import React from 'react';
import {
  Link,
  Route
} from 'react-router-dom'
import GiftDetail from './GiftDetail'
class Catalog extends React.Component{
  render(){
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
                {this.props.gifts.map((gift) => (
                  <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                      <Link to={"/"+gift.partNumber}><img class="card-img-top" src={gift.fullImage} alt=""></img></Link>
                      <div class="card-body">
                        <h4 class="card-title">
                          <Link to={"/"+gift.partNumber}>{gift.name}</Link>
                        </h4>
                        <h5>${gift.prices.listPrice}</h5>
                      </div>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    </div>
                  </div>
                ))}              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;