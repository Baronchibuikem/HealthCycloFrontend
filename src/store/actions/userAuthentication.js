import {
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	LOGOUT_FAIL,
	REGISTER_FAIL,
	REGISTER_SUCCESS
} from "./actionTypes";
import route from "../../ApiClient";

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
	// // uSER LOADING
	// dispatch({ type: USER_LOADING });
	route
		.get("/api/v1/account/users/", tokenConfig(getState))
		.then(res => {
			dispatch({ type: USER_LOADED, payload: res.data });
		})
		.catch(() => {
			dispatch({ type: AUTH_ERROR });
		});
};

// LOGIN USER
export const login = ({ email, password }) => (dispatch, getState) => {
	const body = JSON.stringify({ email, password });
	route
		.post("/api/v1/account/auth/login", body, tokenConfig(getState))
		.then(res => {
			dispatch({ type: LOGIN_SUCCESS, payload: res.data });
			console.log("WELCOME to payload", res.data);
		})
		.catch(() => {
			dispatch({ type: LOGIN_FAIL });
		});
};

// Register user
export const register = ({
	fullname,
	designation,
	organization,
	purpose_of_data,
	password,
	email
}) => dispatch => {
	const config = { headers: { "Content-Type": "application/json" } };
	const body = JSON.stringify({
		fullname,
		designation,
		organization,
		purpose_of_data,
		password,
		email
	});

	route
		.post("/api/v1/account/auth/register", body, config)
		.then(res => {
			dispatch({ type: REGISTER_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: REGISTER_FAIL });
		});
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
	route
		.post("/api/v1/account/auth/logout", null, tokenConfig(getState))
		.then(() => {
			dispatch({
				type: LOGOUT_SUCCESS
			});
		})
		.catch(err => {
			dispatch({
				type: LOGOUT_FAIL
			});
		});
};

// Setup config with token - helper function

export const tokenConfig = getState => {
	// Get token
	const token = getState().userAuth.token;

	// Headers
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};

	if (token) {
		config.headers["Authorization"] = `Token ${token}`;
	}

	return config;
};
