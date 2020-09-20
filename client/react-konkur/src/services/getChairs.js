import axios from 'axios';

async function getChairs() {
    base_url = "";
    try {
      const data = await axios.get(`${base_url}/chairs/`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getChairs;    
