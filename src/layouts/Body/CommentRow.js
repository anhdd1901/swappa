import "./CommentRow.scss";
import Comment from "./../../components/Comment";

import { useSelector } from "react-redux";

export default function CommentRow({ length }) {
  const comments = useSelector((state) => state.comments);
  const commentArrayLength = Math.floor(
    comments.length % length === 0
      ? comments.length / length
      : comments.length / length + 1
  );
  const commentArray = [];
  const empty = {
    rate: 0,
    title: "",
    content: "",
    author: "",
    postTime: 0,
  };
  for (let i = 0; i < commentArrayLength; i++)
    if (length === 3)
      commentArray.push([
        comments[i * length],
        i * length + 1 < comments.length ? comments[i * length + 1] : empty,
        i * length + 2 < comments.length ? comments[i * length + 2] : empty,
      ]);
    else
      commentArray.push([
        comments[i * length],
        i * length + 1 < comments.length ? comments[i * length + 1] : empty,
      ]);
  return (
    <div
      className={`col comment-row ${
        length === 1
          ? "d-md-none"
          : length === 2
          ? "d-none d-md-block d-lg-none"
          : "d-none d-lg-block"
      }`}
    >
      <div
        id={length === 1 ? "slide1" : length === 2 ? "slide2" : "slide3"}
        className="carousel slide row align-items-center comments"
        data-bs-ride="carousel"
      >
        <button
          className="col-auto"
          type="button"
          data-bs-target={length === 1 ? "#slide1" : length === 2 ? "#slide2" : "#slide3"}
          data-bs-slide="prev"
        >
          <i className="fas fa-chevron-circle-left"></i>
        </button>

        <div className="carousel-inner col">
          {length === 1
            ? comments.map((value, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  style={{ padding: "0px 10.5px 0px 10.5px" }}
                >
                  <div className="row">
                    <Comment info={value} />
                  </div>
                </div>
              ))
            : commentArray.map((value, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  style={{ padding: "0px 10.5px 0px 10.5px" }}
                >
                  <div className="row">
                    <Comment info={value[0]} />
                    <Comment info={value[1]} />
                    {length === 3 ? <Comment info={value[2]} /> : ""}
                  </div>
                </div>
              ))}
        </div>

        <button
          className="col-auto"
          type="button"
          data-bs-target={length === 1 ? "#slide1" : length === 2 ? "#slide2" : "#slide3"}
          data-bs-slide="next"
        >
          <i className="fas fa-chevron-circle-right"></i>
        </button>
      </div>
    </div>
  );
}
