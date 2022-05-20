import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import SearchedItem from "../../components/searchedItem/SearchedItem";

function List() {
  const location = useLocation();
  console.log(location);

  const [date, setDate] = useState(location.state.date);
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);

  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="lsItem">
              <label>Check-In-Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )}  to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsoptions">
                <div className="lsOptionItem">
                  <span className="lsoptionText">
                    Min Price <small>(per night)</small>
                  </span>
                  <input className="lsOptionInput" type="number" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsoptionText">
                    Max Price <small>(per night)</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsoptionText">Adult</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={1}
                    placeholder={options.adult}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsoptionText">Children</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={0}
                    placeholder={options.children}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsoptionText">Room</span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    min={1}
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>

            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchedItem />
            <SearchedItem />
            <SearchedItem />
            <SearchedItem />
            <SearchedItem />
            <SearchedItem />
            <SearchedItem />
            <SearchedItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
