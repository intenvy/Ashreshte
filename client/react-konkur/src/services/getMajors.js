import axios from "axios";

async function getMajors() {
	// base_url = "";
	try {
		//   const data = await axios.get(`${base_url}/majors/`)
		const data = await axios.get(
			// "https://run.mocky.io/v3/e42c03b3-89a1-4110-af03-15db3906a3ca"
			"https://run.mocky.io/v3/7e011dda-f472-4a54-9e7f-989400194916"
		);
		return data;
	} catch (error) {
		console.log("error", error);
	}
}

export default getMajors;
