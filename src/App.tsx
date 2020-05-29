import React from "react";
import { Button, Card, Form, message, Col, Modal } from "antd";
import { ImageUpload } from "./components/image-upload/ImageUpload.component";
import { storage } from "./firebase/index";
import "./styles/global.scss";
import { UploadFile, UploadChangeParam } from "antd/lib/upload/interface";

function App() {
  const [fileName, setFileName] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (fileName)
      storage
        .ref("images")
        .child(fileName)
        .getDownloadURL()
        .then((url) => {
          console.log(url);
          setUrl(url);
          setVisible(!visible);
        });
  }, [fileName]);
  const handleMessages = (info: UploadChangeParam<UploadFile<any>>) => {
    const { status } = info.file;
    console.log("STATUS =>", status);
    if (status !== "uploading") {
      console.log("Uploading...", info.file);
    }
    if (status === "done") {
      setFileName(info.file.name);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed`);
    }
  };
  return (
    <>
      <Card className="App" title="Blurry your PNG" bordered>
        <Form className="form-container">
          <Form.Item required>
            <ImageUpload handler={handleMessages} />
          </Form.Item>
        </Form>
      </Card>
      <Modal
        style={{
          width: "auto",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
        title="Filtered Image"
        visible={visible}
        onCancel={() => setVisible(!visible)}
        onOk={() => setVisible(!visible)}
      >
        <img src={url} alt="descricao do mal" />
      </Modal>
    </>
  );
}

export default App;
