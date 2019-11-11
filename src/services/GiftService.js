const GIFT_API_URL = 'https://gift-api.herokuapp.com/api/gifts';
class GiftService{
  
  getGiftDetail = async (id) => {
    const response = await fetch(`${GIFT_API_URL}/${id}`);
    const json = await response.json();
    return json;
  }
  
  getGifts = async () => {
    const response = await fetch(GIFT_API_URL);
    const json = await response.json();
    return json;
  }
}
export default GiftService;