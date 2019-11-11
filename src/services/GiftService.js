const GIFT_API_URL = process.env.GIFT_API_URL || 'http://localhost:5000/api/gifts'

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