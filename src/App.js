import React from 'react';
import ShopCatalog from './components/Catalog'

const GIFT_API_URL_DEV = 'http://localhost:5000/api/gifts'
class App extends React.Component{
  state = {
    gifts: []
  }
  componentDidMount() {
    fetch(GIFT_API_URL_DEV)
    .then(res => res.json())
    .then((data) => this.setState({gifts: data.data}))
    .catch(console.log);
  }
  render(){
    return (
      <div className="app">
        <div class="mb-4" >
        </div>
        <ShopCatalog gifts={this.state.gifts}/>
      </div>
    );
  }
}

export default App;