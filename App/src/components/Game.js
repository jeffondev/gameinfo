import React from "react";
import './Game.css';

function Game({title,star,summary,image, genres}) {         
    return (
        <div className="game">
            <img src={image} alt={title} title={title} />
            <div className="game__data">
                <h3 className="game__title">
                    {title}    
                </h3>    
                <h5 className="game__star">
                    {[...Array(star)].map((n, index) => {
                        return (
                            <img src="https://e7.pngegg.com/pngimages/253/169/png-clipart-star-star.png"/>
                        )
                    })}
                </h5>
                <ul className="game__genres">
                    {genres.map((genre, index) => {
                        return <li key={index} className="game__genr">{genre}</li>;
                    })}
                </ul>
                <p className="game__summary">{summary.slice(0, 180)}...</p>
            </div>  
        </div>
    )
}

export default Game;