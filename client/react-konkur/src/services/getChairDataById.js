import axios from 'axios';

async function getChairDataById(id, section) {
    try {
      const data = await axios.get(`/chairs/${id}/${section}`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getChairDataById;    
