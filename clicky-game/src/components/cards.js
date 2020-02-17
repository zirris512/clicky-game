import React from "react";
import images from "../assets/images";
import { useScoreContext } from "../utils/Context";

function Cards() {
    const [_, dispatch] = useScoreContext();

    // function checkImage(arr, img) {
    //     arr.push(img);

    //     for(let i = arr.length - 2; i > 0; i--) {
    //         if (arr[i] === arr.length - 1) {
    //             return dispatch({type: "clicked"});
    //         }
    //     }
    //     dispatch({type: "notClicked"});
    //     console.log(arr);
    // };

    return (
        <div className="container">
            <div className="row">
                {images.map((image, index) => (
                    <div className="col-3 images">
                        <img src={image} alt=""
                        className="click-item"
                        style={{backgroundColor: "black"}}
                        onClick={() => dispatch({image: image})}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;