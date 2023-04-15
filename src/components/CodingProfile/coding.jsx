import React from "react";
import "../CodingProfile/coding.css";
import CodingProfileCard from "../CodingProfile/codingCard";
import CodingProfileDetails from "../CodingProfile/codingdetails";

function CodingProfile() {
    const data = CodingProfileDetails;
    return (
        <>
            <section className="coding" id="coding">
                <div className="container">
                    <div className="heading">
                        <h4>CODING PROFILES</h4>
                    </div>

                    <div class="profile-card">
                        {data.map((profile, index) => {
                            return (
                                <CodingProfileCard {...profile} key={index} />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default CodingProfile;
