import React from "react";
import { useScoreContext } from "../utils/Context";

function Cards() {
   const [state, dispatch] = useScoreContext();
   
   const clicked = (arr, value) => {
      for(let i = 0; i < arr.length; i++) {
         if(arr[i] === value) {
            return true;
         }
      }
      return false;
   }

   const shuffleArray = arr => {
      let newArr = arr.slice(0);

      for(let i = newArr.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }

      return newArr;
   }

   return (
      <div className="container">
         <div className="row">
               {state.total !== 12
               ? state.images.map((image, key) => (
                  <div className="col-md-3 images" key={key}>
                     <img src={image.image} alt=""
                     id={image.id}
                     className="click-item"
                     style={{backgroundColor: "black"}}
                     onClick={() => {
                        clicked(state.clicked, image.id) ? dispatch({type: "clicked", shuffle: shuffleArray(state.images)}) : dispatch({type: "notClicked", value: image.id, shuffle: shuffleArray(state.images)});
                     }} />
                  </div>
               ))
               : <div className=" col-md-12 text-center" style={{"color": "lime"}}>
                  <h1>You Won!</h1><hr />
                  <p>Press the button to play again!</p>
                  <button className="btn btn-danger restart-button"
                  onClick={() => dispatch({type: "restart", shuffle: shuffleArray(state.images)})}>Restart</button>
               </div>
               }
         </div>
      </div>
   )
}

export default Cards;