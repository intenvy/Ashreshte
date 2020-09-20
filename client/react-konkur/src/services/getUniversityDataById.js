import axios from 'axios';

async function getUniversityDataById(id, section) {
    try {
      const data = await axios.get(`/universities/${id}/${section}`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getUniversityDataById;    
