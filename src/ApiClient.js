import axios from "axios";

export default axios.create({
	baseURL:
		process.env.NODE_ENV === "development"
			? "http://127.0.0.1:8000"
			: "https://healthdbbackend.herokuapp.com/"
});

// export default axios.create({
// 	baseURL: "http://127.0.0.1:8000"
// });
