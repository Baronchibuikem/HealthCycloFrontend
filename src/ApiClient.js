import axios from "axios";

export default axios.create({
	baseURL:
		process.env.NODE_ENV === "development"
			? "http://127.0.0.1:8000"
			: "http://172.93.48.21:9876"
});

// export default axios.create({
// 	baseURL: "http://127.0.0.1:8000"
// });
