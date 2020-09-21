import axios from "axios";

async function getUniversityById(id) {
	const base_url = "";
	try {
		// const data = await axios.get(`${base_url}/universities/${id}`);
		const data = await axios.get(
			// "https://run.mocky.io/v3/530dd466-3bdd-4013-b121-a66a9ffa8411"
			"https://run.mocky.io/v3/32e38d16-e4b1-4178-8a2a-9bc61644ac4d"
		);
		return data;
	} catch (error) {
		console.log("error", error);
	}
}

export default getUniversityById;
