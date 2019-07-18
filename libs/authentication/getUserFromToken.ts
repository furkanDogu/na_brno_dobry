import jwt from "jwt-simple";

// to check if the token is expired
const getUserFromToken = (token: string | undefined) => {
  if (!token) return null;

  try {
    const decodedUser = jwt.decode(token, "karnimac");
    if (!decodedUser) return null;
    return decodedUser;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export default getUserFromToken;
