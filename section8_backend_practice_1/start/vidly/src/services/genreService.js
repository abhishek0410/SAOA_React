import http from "./httpService";
export function getGenres() {
  console.log("Calling the backend services");
  return http.get("http://localhost:3900/api/genres");
}
