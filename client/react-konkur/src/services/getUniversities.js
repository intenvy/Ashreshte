import axios from "axios";

async function getUniversities() {
	// base_url = "";
	try {
		//   const data = await axios.get(`${base_url}/universities/`)
		const data = await axios.get(
			"https://run.mocky.io/v3/f0f2b9da-a583-43f4-99aa-dff8849cd4ec"
		);
		return data;
	} catch (error) {
		console.log("error", error);
	}
}

export default getUniversities;
