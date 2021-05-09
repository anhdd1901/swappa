import "./Comment.scss";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

export default function Comment({ info }) {
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const stars = [];
  for (let i = 1; i <= info.rate; i++)
    stars.push(
      <div key={i} className="col-auto padding">
        <i className="fas fa-plus-square"></i>
      </div>
    );
  return (
    <div className="col comment-block">
      <div className="row justify-content-between">
        <div className="col-auto comment-block-star">
          <div className="row margin">{stars}</div>
        </div>
        <div className="col-auto comment-block-time">
          {info.rate === 0 ? "" : timeAgo.format(info.postTime)}
        </div>
      </div>
      <div className="row">
        <div className="col comment-block-title">{info.title}</div>
      </div>
      <div className="row">
        <div className="col comment-block-content">{info.content}</div>
      </div>
      <div className="row">
        <div className="col comment-block-author">{info.author}</div>
      </div>
    </div>
  );
}
