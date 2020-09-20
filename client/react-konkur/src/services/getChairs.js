import axios from 'axios';

async function getChairs() {
    try {
      const data = await axios.get(`/chairs/`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getChairs;    
