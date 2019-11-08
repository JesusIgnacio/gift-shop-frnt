import React from 'react';

class Catalog extends React.Component{
  render(){
    return (
      <div className="catalog">
        <div className="catalog-gift">
          <Gift/>
        </div>
      </div>
    );
  }
}
class Gift extends React.Component{
  render(){
    return (
      <div className="gift">
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