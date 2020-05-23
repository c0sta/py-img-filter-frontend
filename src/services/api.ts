import axios from "axios";

interface ImageDataInterface {
  filter: string;
  imgName: string;
  imgUrl: string;
}

export default function postData(path: string, body: ImageDataInterface) {
  const api = axios.create({
    baseURL: "https://localhost:5000",
  });
  console.log(body);
  const { filter, imgName, imgUrl } = body;
  const data = api
    .post(`${path}`, { filter, imgName, imgUrl })
    .then((response: any) => {
      return response;
    })
    .catch((err) => console.log(err));
  console.log("DATA =>", data);
  return { msg: "coolcoolcoolcool" };
}
