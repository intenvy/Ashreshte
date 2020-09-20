import axios from 'axios';

async function getUniversities() {
    base_url = "";
    try {
      const data = await axios.get(`${base_url}/universities/`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getUniversities;    
