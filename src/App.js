import "./App.scss";
import Header from "./layouts/Header";
import Body from "./layouts/Body";
import Footer from "./layouts/Footer";

export default function App() {
  return (
    <div className="all">
      <div className="header">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="main">
        <Body />
        <Footer />
      </div>
    </div>
  );
}
