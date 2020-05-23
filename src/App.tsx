import React from "react";
import postData from "./services/api";
import { Checkbox, Button, Upload, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./styles/global.scss";
// const props = {
//   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
//   defaultFileList: [
//     {
//       uid: "1",
//       name: "xxx.png",
//       status: "done",
//       response: "Server Error 500", // custom error message to show
//       url: "http://www.baidu.com/xxx.png",
//     },
//     {
//       uid: "2",
//       name: "yyy.png",
//       status: "done",
//       url: "http://www.baidu.com/yyy.png",
//     },
//     {
//       uid: "3",
//       name: "zzz.png",
//       status: "error",
//       response: "Server Error 500", // custom error message to show
//       url: "http://www.baidu.com/zzz.png",
//     },
//   ],
// };

function App() {
  const [url, setUrl] = React.useState<string>("");
  const [filter, setFilter] = React.useState<string>("");
  const [imageName, setImageName] = React.useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(url, filter);
    let filteredData = postData("/image-upload", {
      imgName: imageName,
      imgUrl: url,
      filter,
    });
    // console.log(filteredData);
  };

  return (
    <Card className="App" title="Blurry your cool PNG/JPG" bordered>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        className="form-container"
      >
        <Upload
          name="file"
          listType="picture-card"
          action="https://www.shitpostbot.com/resize/585/400?img=%2Fimg%2Fsourceimages%2Fssbb-luigi-mod-wallace-5a6ba2e1d4465.jpeg"
        >
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
        <Checkbox
          onChange={(e: any) => setFilter(e.target.checked)}
          name="blur"
        >
          Blur
        </Checkbox>

        <Checkbox
          onChange={(e: any) => setFilter(e.target.checked)}
          name="enhance"
        >
          Enhance
        </Checkbox>

        <Button type="primary">Salvar</Button>
      </form>
    </Card>
  );
}

export default App;
