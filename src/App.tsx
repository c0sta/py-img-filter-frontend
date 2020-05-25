import React from "react";
import postData from "./services/api";
import { Checkbox, Button, Upload, Card, message, Form, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "./styles/global.scss";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";

const props = {
  name: "file",
  multiple: true,
  action: "http://127.0.0.1:5000/upload",
};

function App() {
  // const [url, setUrl] = React.useState<string>("");
  const [filter, setFilter] = React.useState<string>("");
  // const [imageName, setImageName] = React.useState<string>("");
  const [images, setImages] = React.useState<UploadFile<any>[]>([]);

  const handleSubmit = (values: any) => {
    const filter = values.checkboxgroup[0];
    console.log(filter);
    const fd = new FormData();
    // fd.append("image", images, "somestupidname");
    // let filteredData = postData("/upload", fd);
    // console.log(filteredData);
  };

  return (
    <Card className="App" title="Blurry your cool PNG/JPG" bordered>
      <Form
        onFinish={(values) => console.log("AAAAAAA", values)}
        className="form-container"
      >
        <Upload
          {...props}
          // listType="picture-card"
          onChange={(info: UploadChangeParam<UploadFile<any>>) => {
            const { status } = info.file;
            console.log("STATUS =>", status);
            if (status !== "uploading") {
              console.log("Uploading...", info.file);
            }
            if (status === "done") {
              message.success(`${info.file.name} file uploaded successfully`);
              setImages([...images, info.file]);
              console.log(" STATE =>", images);
            } else if (status === "error") {
              message.error(`${info.file.name} file upload failed`);
            }
          }}
        >
          <Button>
            <UploadOutlined /> Click to Upload
          </Button>
        </Upload>
        <Form.Item name="checkboxgroup " label="Filters: ">
          <Checkbox.Group>
            <Checkbox
              onChange={(e: any) => setFilter(e.target.checked)}
              value="blur"
              style={{ lineHeight: "32px" }}
            >
              Blur
            </Checkbox>
            <Checkbox
              onChange={(e: any) => setFilter(e.target.checked)}
              value="enhance"
              style={{ lineHeight: "32px" }}
            >
              Enhance
            </Checkbox>
            <Checkbox
              value="distort"
              onChange={(e: any) => setFilter(e.target.checked)}
              style={{ lineHeight: "32px" }}
            >
              Distort
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button htmlType="submit" type="primary">
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default App;
