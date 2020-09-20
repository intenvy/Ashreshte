import axios from 'axios';

async function getUniversityById(id) {
    try {
      const data = await axios.get(`/universities/${id}`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getUniversityById;    
