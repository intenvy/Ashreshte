import axios from 'axios';

async function getMajorById(id) {
    try {
      const data = await axios.get(`/majors/${id}`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getMajorById;    
