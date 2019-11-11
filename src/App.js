import React from 'react';
import ShopCatalog from './components/Catalog'
import GiftService from './services/GiftService'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gifts: []
    }
  }
  
  giftService = new GiftService();

  getGiftsData = async (id) => {
    let data = await this.giftService.getGifts();
    this.setState({gifts: data.data })
  }
  componentDidMount() {
    this.getGiftsData();
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