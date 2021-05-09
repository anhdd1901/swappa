import "./SponsorMenu.scss";
import { useSelector } from "react-redux";

export default function SponsorMenu() {
  const sponsorList = useSelector((state) => state.sponsorList);
  return (
    <div className="row sponsor-menu justify-content-center">
      {sponsorList.map((value) => (
        <div key={value.name} className="col-6 col-sm-4 col-lg-2">
          <button className="width sponsorBtn">
            <img src={value.image} alt={value.name}></img>
          </button>
        </div>
      ))}
    </div>
  );
}
