import React from "react";
import styles from "../Home/Home.module.css";
import classes from "../Breakfast/Breakfast.module.css";
import Footer from "../../Components/Footer/Footer";
import CarouselContainer from "../../Components/CarouselContainer/CarouselContainer";
import { dinnerMeals,dinnerPopular ,dinnerOffer} from "../../data";
import Tablink from "../../Components/Tablink/Tablink";
import Cards from "../../Components/Breakfast/Cards/Cards";
import Card from "../../Components/Breakfast/Card/Card";
import Tab from "../../Components/Tab/Tab";
import Nav from "../../Components/Nav/Nav";
const Dinner = () => {
  return (
    <div className="App">
      <div className={`w-100 ${styles.containerWr}`}>
        <Nav/>
        <CarouselContainer
          desc1="Enjoy your Dinner"
          desc2="Control your daily needed calories"
          desc3="Regulate your meals!"
          desc4="Enjoy your Dinner"
          img1="dinnerMeal.jpg"
          img2="dinnerMeal.jpg"
          img3="dinnerMeal.jpg"
          img4="dinnerMeal.jpg"
        />
        <div
          className={`d-flex flex-column align-items-center  ${styles.part2Wr}`}
        >
          <Tab desc="Dinner" />
          <div className={` d-flex flex-column mt-5 ${classes.Div2} `}>
            <ul
              className="nav nav-pills  "
              id="pills-tab"
              role="tablist"
            >
              <Tablink
                id="All"
                contentselect="true"
                className={`active px-4  ${styles.activeOver} ${classes.activeOver1}`}
                desc="All(170)"
              />
              
            </ul>
            <div
              className={`tab-content w-100 my-4 ${styles.meals} ${classes.meals1}`}
              id="pills-tabContent"
            >
              <Cards className="show active" id="All" arrayimg={dinnerMeals} />
              
            </div>
          </div>
          <div className={`mb-3 ${styles.d3}`}>
            <div
              className={`d-flex justify-content-center align-items-center fw-bolder ${styles.workoutDiv}`}
            >
              <div className={classes.pDiv}>
                <p className={`mb-0 me-3`}>POPULAR</p>
              </div>
              <div
                style={{ flex: 1, height: "1.7px", backgroundColor: "#C7C7C7" }}
              />
            </div>
            <div className={` w-100 my-4 ${styles.meals} ${classes.meals1} `}>
              <Card arrayimg={dinnerPopular} />
            </div>
          </div>
          <div className={`mb-3 ${styles.d3}`}>
            <div
              className={`d-flex justify-content-center align-items-center fw-bolder ${styles.workoutDiv}`}
            >
              <div className={classes.pDiv}>
                <p className={`mb-0 me-3`}>TODAY'S OFFERS</p>
              </div>
              <div
                style={{ flex: 1, height: "1.7px", backgroundColor: "#C7C7C7" }}
              />
            </div>
            <div className={` w-100 my-4 ${styles.meals} ${classes.meals1} `}>
              <Card arrayimg={dinnerOffer} />
            </div>
          </div>
          <div className={`mb-3 ${styles.d3}`}>
            <div
              className={`d-flex justify-content-center align-items-center fw-bolder ${styles.workoutDiv}`}
            >
              <div className={classes.pDiv}>
                <p className={`mb-0 me-3`}>BEST DEALS</p>
              </div>
              <div
                style={{ flex: 1, height: "1.7px", backgroundColor: "#C7C7C7" }}
              />
            </div>
            <div className={` w-100 my-4 ${styles.meals} ${classes.meals1} `}>
              <Card arrayimg={dinnerPopular} />
            </div>
            <div className={` w-100 my-4 ${styles.meals} ${classes.meals1} `}>
              <Card arrayimg={dinnerOffer} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Dinner;
