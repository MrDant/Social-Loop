import { useLocalStorage } from "@vueuse/core";
import jwt_decode from "jwt-decode";
export function storeAuth({ token }: { token: string }) {
  useLocalStorage("token", "").value = token;
  navigateTo("/profil");
}

export function hasRole(role: String): boolean {
  if (!getTokenData()) {
    return false;
  }
  return (
    getTokenData()?.data.roles.includes(role) ||
    getTokenData()?.data.roles.includes("super")
  );
}

export function getToken() {
  return useLocalStorage("token", "");
}

export function getTokenData(): { exp: any; data: any } | null {
  try {
    return jwt_decode(getToken().value ?? "");
  } catch {
    return null;
  }
}
export function isConnected(): boolean {
  const token = getTokenData();
  if (!token || token.exp * 1000 < new Date().getTime()) {
    getToken().value = "";
    return false;
  }
  return true;
}
