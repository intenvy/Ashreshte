import axios from 'axios';

async function getChairById(id) {
    base_url = "";
    try {
      const data = await axios.get(`${base_url}/chairs/${id}/`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getChairById;    
