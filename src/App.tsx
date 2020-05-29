import React from "react";
import { Card, Form, message, Modal, Checkbox } from "antd";
import { ImageUpload } from "./components/image-upload/ImageUpload.component";
import { storage } from "./firebase/index";
import "./styles/global.scss";
import { UploadFile, UploadChangeParam } from "antd/lib/upload/interface";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

function App() {
  const [fileName, setFileName] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [filter, setFilter] = React.useState("");
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
          setVisible(true);
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
          <Form.Item label="Filtros: ">
            <Checkbox
              onChange={(event: CheckboxChangeEvent) =>
                setFilter(event.target.value)
              }
              value="blur"
            >
              Blur
            </Checkbox>
            <Checkbox
              onChange={(event: CheckboxChangeEvent) =>
                setFilter(event.target.value)
              }
              value="gray"
            >
              Gray
            </Checkbox>
          </Form.Item>
          <Form.Item required>
            <ImageUpload filter={filter} handler={handleMessages} />
          </Form.Item>
        </Form>
      </Card>
      {url ? (
        <Modal
          width={"auto"}
          title="Filtered Image"
          visible={visible}
          onCancel={() => setVisible(!visible)}
          onOk={() => setVisible(!visible)}
        >
          <img src={url} alt="descricao do mal" />
        </Modal>
      ) : null}
    </>
  );
}

export default App;
