import { Store } from "antd/lib/form/interface";
import { api } from "../../services/api";
// tipar retorno do back (response)
export const uploadFormService = (data: Store) => {
  // console.log("DATA before upload", data);
  const response = api
    .post("/upload", data)
    .then((resp) => console.log(resp))
    .catch((err) => alert("Deu erro ao fazer o post!" + err));

  return response;
};
