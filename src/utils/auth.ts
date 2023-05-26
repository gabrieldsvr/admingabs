import jwt_decode from "jwt-decode";


function isTokenValid(token) {
    if (token) {
        const decodedToken = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
            return true;
        }
    }

    return false;
}

export default isTokenValid;