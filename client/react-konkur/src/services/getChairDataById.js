import axios from 'axios';

async function getChairDataById(id, section) {
    base_url = "";
    try {
      const data = await axios.get(`${base_url}/chairs/${id}/${section}`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getChairDataById;    
