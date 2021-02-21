import React, { useState } from "react";
import Progress from "./Progress";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);

  const fileTypes = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && fileTypes.includes(selected.type)) {
      setFile(selected);
      setErr(null);
    } else {
      setFile(null);
      setErr("please select an image file");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      {err && <div className="error">{err}</div>}
      {file && <div className="error">{file.name}</div>}
      {file && <Progress setFile={setFile} file={file} />}
    </form>
  );
};

export default UploadForm;
