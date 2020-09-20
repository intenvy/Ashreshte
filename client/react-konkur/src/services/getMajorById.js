import axios from 'axios';

async function getMajorById(id) {
    base_url = "";
    try {
      const data = await axios.get(`${base_url}/majors/${id}`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getMajorById;    
