import React from 'react';

class Catalog extends React.Component{
  render(){
    return (
      <div className="catalog">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-4" >
              </div>
              <div class="row">
                <Gift/>
                <Gift/>
                <Gift/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Gift extends React.Component{
  render(){
    return (
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            {/* <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a> */}
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Item One</a>
              </h4>
              <h5>$24.99</h5>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
            </div>
          </div>
        </div>
    );
  }
}
class Shop extends React.Component{
  render(){
    return (
      <div className="shop">
        <div className="shop-catalog">
          <Catalog/>
        </div>
      </div>
    );
  }
}

export default Shop;