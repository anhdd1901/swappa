import "./FunctionButton.scss";

export default function FunctionButton({ largeBtn, type2, btnName, btnIcon }) {
  return (
    <div className={`${largeBtn ? "col-6 col-sm-5 col-4" : "col-6 col-sm-4 col-lg-3"} function-button`}>
      <button className={`${type2 ? "greenBtn" : "whiteBtn"} width`}>
        {btnName} {btnIcon}
      </button>
    </div>
  );
}
