import React from "react";
import mystyle from "./FoodBox.module.css";

export default function FoodBox() {
  let func=()=>{
    let selectted = document.querySelector(".food")
    selectted.classList.add(`${mystyle.foodBg}`)
  }
  return (
    <>
    <div className="mb-5 mt-2">
      <div className={`d-inline-block ${mystyle.divWrapp} me-4 text-center`}>
        <img src="images/noshrimp.jpg" className={`pt-3 ${mystyle.images}`}/>
        <div className="fs-6">Shrimp</div>
      </div>
      <div className={`d-inline-block ${mystyle.divWrapp} me-4 text-center food`} onClick={()=>func()}>
        <img src="images/nofish.jpg" className={`pt-3 ${mystyle.images}`}/>
        <div>Fish</div>
      </div>
      <div className={`d-inline-block ${mystyle.divWrapp} me-4 text-center`}>
        <img src="images/noegg.jpg" className={`pt-3 ${mystyle.images}`}/>
        <div>Egg</div>
      </div>
    </div>
    <div className="mb-5 mt-2">
      <div className={`d-inline-block ${mystyle.divWrapp} me-4 text-center`}>
        <img src="images/nomilk.jpg" className={`pt-3 ${mystyle.images}`}/>
        <div className="fs-6">Milk</div>
      </div>
      <div className={`d-inline-block ${mystyle.divWrapp} me-4 text-center`}>
        <img src="images/nosuger.jpg" className={`pt-3 ${mystyle.images}`}/>
        <div>Suger</div>
      </div>
      <div className={`d-inline-block ${mystyle.divWrapp} me-4 text-center`}>
        <img src="images/spicy.jpg" className={`pt-3 ${mystyle.images}`}/>
        <div>Spicy</div>
      </div>
    </div>
    </>
  );
}
