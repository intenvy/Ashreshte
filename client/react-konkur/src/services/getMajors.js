import axios from 'axios';

async function getMajors() {
    try {
      const data = await axios.get(`/majors/`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getMajors;    
