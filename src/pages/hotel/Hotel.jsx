import "./hotel.css";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
    },
    {
      src: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435",
    },
    {
      src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
    },
    {
      src: "https://images.unsplash.com/photo-1588861424526-28303cffbdd4?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774",
    },
    {
      src: "https://images.unsplash.com/photo-1584536318461-2ee56bc042f1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580",
    },
    {
      src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870",
    },
  ];

  // const handleOpen = (i) => {
  //   setSlideNumber(i);
  //   setOpen(true);
  // }

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

          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>

          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Chaing Mai</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Chaing Mai, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Chaing Mai–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>

              <div className="hotelDetailPrice">
                <h1>Perfect for 9-night stay!</h1>
                <span> Located in the real heart of Chaing Mai, this property has an
                excellent location score of 9.8!</span>
                <h2>
                  <b>$945</b> ( 9 Nights)
                </h2>
                <button>Book Now!</button>
              </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
