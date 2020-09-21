import axios from "axios";

async function getMajorById(id) {
	// base_url = "";
	try {
		//   const data = await axios.get(`${base_url}/majors/${id}`)
		const data = await axios.get(
			"https://run.mocky.io/v3/1afaba1d-5b4a-4765-b3e2-102471b82994"
		);
		return data;
	} catch (error) {
		console.log("error", error);
	}
}

export default getMajorById;
