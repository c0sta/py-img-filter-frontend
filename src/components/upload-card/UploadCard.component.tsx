import React, { ReactElement, ReactChild } from "react";
import { Card } from "antd";
interface Props {
  children: ReactChild;
  title: string;
}

export default function UploadCard({ children, title }: Props): ReactElement {
  return (
    <Card
      title={title}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 30,
      }}
    >
      {children}
    </Card>
  );
}
