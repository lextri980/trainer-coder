import { useLocation } from "react-router-dom";

export default function useQuery() {
  const location = useLocation();
  if (location.search) {
    const removeMark = location.search.split("?")[1].split("&");
    const query = removeMark.reduce((obj: any, str) => {
      let strParts = str.split("=");
      if (strParts[0] && strParts[1]) {
        obj[strParts[0].replace(/\s+/g, "")] = strParts[1].trim();
      }
      return obj;
    }, {});
    return query;
  } else {
    return {};
  }
}
