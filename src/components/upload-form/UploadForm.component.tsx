import React, { ReactElement } from "react";
import { Form, Switch, Upload, Button, Slider } from "antd";
import { CloseOutlined, CheckOutlined, InboxOutlined } from "@ant-design/icons";
import { uploadFormService } from "./UploadForm.service";
import "./UploadForm.style.scss";

export default function UploadForm(): ReactElement {
  const [blur, setBlur] = React.useState<boolean>(false);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="form"
      onFinish={(values) => uploadFormService(values)}
      onFinishFailed={onFinishFailed}
      size="middle"
      initialValues={{
        "blur-level": 25,
      }}
    >
      <div className="filters">
        <h4 className="filters__title">Filtros disponiveís: </h4>

        <Form.Item name="gray" label="Gray">
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        </Form.Item>
        <Form.Item
          name="filters__blur"
          label="Blur"
          className="filters__blur-container"
        >
          <Switch
            onChange={(checked) => setBlur(checked)}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        </Form.Item>
        {blur ? (
          <Form.Item
            name="blur-level"
            label="Blur level"
            className="filters__slider"
          >
            <Slider step={5} disabled={false} />
          </Form.Item>
        ) : null}
      </div>

      <Form.Item
        required
        name="file"
        rules={[{ required: true, message: "Please input your image!" }]}
      >
        <Upload.Dragger
          name="file"
          multiple={true}
          accept="image/*"
          listType="picture-card"
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">Support for single PNG or JPG</p>
        </Upload.Dragger>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Filter image
        </Button>
      </Form.Item>
    </Form>
  );
}
