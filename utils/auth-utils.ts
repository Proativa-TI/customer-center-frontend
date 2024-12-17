import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  sub: string; // username
  groups: string[]; // roles
}

export const getUserRole = (): string | null => {
  const token = localStorage.getItem("jwt");
  if (token) {
    const decoded: JwtPayload = jwtDecode(token);
    return decoded.groups?.[0] || null; // Retorna a primeira role
  }
  return null;
};
