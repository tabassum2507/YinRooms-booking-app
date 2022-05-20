import "./hotel.css";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  return (
    <div className="hotel">
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Loveruk Stays</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocation} />
            <span> 5 BazaarStreet, Tower Nanak, Mumbai, India</span>
          </div>

          <span className="hotelDistance">
          Book a stay over $114 at this property and get a free airport taxi
          </span>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
