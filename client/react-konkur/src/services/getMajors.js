import axios from 'axios';

async function getMajors() {
    base_url = "";
    try {
      const data = await axios.get(`${base_url}/majors/`)
      return data;
    } 
    catch(error) {
      console.log("error", error);
    }
  }

export default getMajors;    
