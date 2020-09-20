import axios from 'axios';

async function getMajorDataById(id, section) {
    base_url = "";
    try {
      const data = await axios.get(`${base_url}/majors/${id}/${section}`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getMajorDataById;    
