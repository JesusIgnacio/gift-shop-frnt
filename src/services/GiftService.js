const GIFT_API_URL_DEV = 'http://localhost:5000/api/gifts'

class GiftService{
  
  getGiftDetail = async (id) => {
    const response = await fetch(`${GIFT_API_URL_DEV}/${id}`);
    const json = await response.json();
    return json;
  }
  
  getGifts = async () => {
    const response = await fetch(GIFT_API_URL_DEV);
    const json = await response.json();
    return json;
  }
}
export default GiftService;