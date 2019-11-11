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
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
              </div>
              <div className="col-lg-9">
                <div className="card mt-4">
                  <img className="card-img-top img-fluid" src={this.state.giftDetail.fullImage} alt=""></img>
                  <div className="card-body">
                    <h3 className="card-title">{this.state.giftDetail.name}</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
              </div>
            </div>
          </div>
        ) 
  }
}

export default GiftDetail;