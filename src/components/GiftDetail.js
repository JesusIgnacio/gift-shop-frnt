import React from "react";

const GIFT_API_URL_DEV = 'http://localhost:5000/api/gifts'

class GiftDetail extends React.Component{
  state = {
    giftDetail: {}
  }
  componentDidMount() {
    const params = this.props.match.params;
    fetch(`${GIFT_API_URL_DEV}/${params.id}`)
    .then(res => res.json())
    .then((data) => this.setState({giftDetail: data.data}))
    .catch(console.log);
  }
  render(){
      return (
        <div class="container">
          <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
              <div class="card mt-4">
                <img class="card-img-top img-fluid" src={this.state.giftDetail.fullImage} alt=""></img>
                <div class="card-body">
                  <h3 class="card-title">{this.state.giftDetail.name}</h3>
                  <h4>$24.99</h4>
                </div>
              </div>
              <div class="card card-outline-secondary my-4">
                <div class="card-header">
                  Gift Description
                </div>
                <div class="card-body">
                <p class="card-text"> {this.state.giftDetail.longDescription}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3"></div>
          </div>
        </div>
      )  
  }
}

export default GiftDetail;