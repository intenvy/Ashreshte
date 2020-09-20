import axios from 'axios';

async function getMajorDataById(id, section) {
    try {
      const data = await axios.get(`/majors/${id}/${section}`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getMajorDataById;    
