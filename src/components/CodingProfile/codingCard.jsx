import React from "react";

function CodingProfileCard({ name, rating, problem, contest, rank, link }) {
    return (
        <div class="box">
            <span></span>
            <div class="content">
                <h2>{name}</h2>
                <p>
                    Rating : {rating} <br></br>
                    <br></br>
                    Problem solved : {problem} <br></br>
                    No. of contests : {contest}
                    <br></br>
                    Best Rank : {rank} <br></br>
                </p>
                <a href={link} target="_blank">
                    Visit
                </a>
            </div>
        </div>
    );
}

export default CodingProfileCard;
