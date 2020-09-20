import axios from 'axios';

async function getUniversityById(id) {
    base_url = "";
    try {
      const data = await axios.get(`${base_url}/universities/${id}`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getUniversityById;    
