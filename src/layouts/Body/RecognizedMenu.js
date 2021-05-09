import "./RecognizedMenu.scss";

import { useSelector } from "react-redux";

export default function RecognizedMenu() {
  const recognizerList = useSelector((state) => state.recognizerList);
  return (
    <div className="row recognized-menu">
      {recognizerList.map((value) => (
        <div key={value.name} className="col-4 col-lg-2">
          <img src={value.image} alt={value.name}></img>
        </div>
      ))}
    </div>
  );
}
