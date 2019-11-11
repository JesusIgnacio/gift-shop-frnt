import React from "react";
import GiftService from "../services/GiftService";

class GiftDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      giftDetail: []
    }
  }
  giftService = new GiftService();
  
  getGiftDetailData = async (id) => {
    let data = await this.giftService.getGiftDetail(id);
    this.setState({giftDetail: data.data});
  }

  componentWillMount() {
    var params = this.props.match.params;
    this.getGiftDetailData(params.id);
  }


  render(){
      return (
          <div class="container">
            <div class="row">
              <div class="col-lg-3">
              </div>
              <div class="col-lg-9">
                <div class="card mt-4">
                  <img class="card-img-top img-fluid" src={this.state.giftDetail.fullImage} alt=""></img>
                  <div class="card-body">
                    <h3 class="card-title">{this.state.giftDetail.name}</h3>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
              </div>
            </div>
          </div>
        ) 
  }
}

export default GiftDetail;