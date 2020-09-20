import axios from 'axios';

async function getChairById(id) {
    try {
      const data = await axios.get(`/chairs/${id}/`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getChairById;    
