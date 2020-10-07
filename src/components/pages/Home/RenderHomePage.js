import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CityContext } from "../../../contexts/CityContext";
import CityCard from "../../common/CityCard.js";
import CardComparison from "../../common/CardComparison.js";
import Header from "../../common/Header.js";
import Hero from "../../common/Hero.js";
import { AutoComplete } from "../../common/AutoComplete.js";

function RenderHomePage() {
  const {
    cities,
    comparisonList,
    setComparisonList,
    addCity,
    removeCity,
    isComparing,
    setIsComparing,
    getData,
    weather
  } = useContext(CityContext);

  const [showStats, setShowStats] = useState(false);

  let history = useHistory();

  if (comparisonList.length <= 3) {
    return (
      <div className="home-page-container">
        <Header />
        <Hero />

        <AutoComplete
          addCity={addCity}
          cities={cities}
          setComparisonList={setComparisonList}
          getData={getData}
        />
        <div
          role="button"
          className="more-filters-button"
          onClick={() => history.push("/advanced-search")}
        >
          More Filters
        </div>
        {isComparing && (
          <div className="comparison-container">
            <div className="comparison">
              {comparisonList.map((data, index) => (
                <CardComparison
                  key={index}
                  removeCity={() => removeCity(index)}
                  showStats={showStats}
                  data={data}
                />
              ))}
            </div>
            <button
              className="compareButton"
              onClick={() => {
                setShowStats(true);
              }}
            >
              Compare Cities
            </button>
            <button
              className="moreInfoButton"
              onClick={() => {
                history.push("/dataviz");
              }}
            >
              More Info
            </button>
          </div>
        )}

        <div className="card-container">
          {cities.map((city, index) => (
            <CityCard
              key={index}
              city={city.location}
              image={city.image}
              index={index}
              setIsComparing={setIsComparing}
              addCity={addCity}
              getData={getData}
              cities={cities}
              weather={weather}
            />
          ))}
        </div>
      </div>
    );
  } else if (comparisonList.length > 3) {
    alert("Can only compare at most 3 cities!");
  }
}
export default RenderHomePage;
