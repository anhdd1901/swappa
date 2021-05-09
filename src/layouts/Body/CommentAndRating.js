import "./CommentAndRating.scss";
import CommentRow from "./CommentRow";

import { useSelector } from "react-redux";

export default function CommentAndRating() {
  let rateTitle = [
    {
      rate: 1,
      title: "Worst",
    },
    {
      rate: 2,
      title: "Poor",
    },
    {
      rate: 3,
      title: "Average",
    },
    {
      rate: 4,
      title: "Good",
    },
    {
      rate: 5,
      title: "Excellent",
    },
  ];
  const comments = useSelector((state) => state.comments);
  const averageRate = Math.round(
    comments.reduce((total, value) => total + value.rate, 0) / comments.length
  );
  const stars = [];  
  for (let i = 1; i <= averageRate; i++)
    stars.push(
      <div key={i} className="col-auto">
        <i className="fas fa-plus-square"></i>
      </div>
    );

  return (
    <div className="row comment-row">
      <div className="col-4 col-md-3 col-lg-2">
        <div className="row justify-content-center rate-title">
          {rateTitle.filter((value) => value.rate === averageRate)[0].title}
        </div>
        <div className="row rate-star justify-content-center">{stars}</div>
        <div className="row number-of-reviewers justify-content-center">
          <p className="col-auto padding margin" style={{ marginRight: "2px" }}>
            Base on
          </p>
          <p
            className="col-auto padding margin"
            style={{ borderBottom: "1px solid rgba(25, 25, 25, 0.6)" }}
          >{`${comments.length} reviewer(s)`}</p>
        </div>
        <div className="row justify-content-center align-items-end trustpilot">
          <i className="fas fa-star col-auto padding"></i>
          <p className="col-auto margin padding" style={{ marginLeft: "3px" }}>
            Trustpilot
          </p>
        </div>
      </div>
      <CommentRow length={1}/>
      <CommentRow length={2}/>
      <CommentRow length={3}/>
    </div>
  );
}
