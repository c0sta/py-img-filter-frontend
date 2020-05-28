import React, { ReactElement } from "react";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";

interface PropsI {
  handler: (info: UploadChangeParam<UploadFile<any>>) => void;
}
export function ImageUpload({ handler }: PropsI): ReactElement {
  return (
    <Upload.Dragger
      name="file"
      action="http://127.0.0.1:5000/upload"
      accept="image/png,image/jpg"
      listType="picture-card"
      onChange={handler}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">Support for single PNG or JPG</p>
    </Upload.Dragger>
  );
}
