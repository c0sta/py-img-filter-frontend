import React from "react";

import UploadCard from "./components/upload-card/UploadCard.component";
import UploadForm from "./components/upload-form/UploadForm.component";
import "./styles/global.scss";

function App() {
  return (
    <div className="app">
      <UploadCard title="Add filters into your cool img">
        <UploadForm />
      </UploadCard>
    </div>
  );
}

export default App;

/**
 * ToDo
 * 1 - Criar form (Checkboxes for filter, Slider for Blur level, imgUpload)
 * 2 - Criar JSON cm as infos
 * 3 - Enviar para o beckend
 */
