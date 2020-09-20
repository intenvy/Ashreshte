import axios from 'axios';

async function getUniversities() {
    try {
      const data = await axios.get(`/universities/`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getUniversities;    
