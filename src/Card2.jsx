const Card = ({ image, title, desc }) => {
    return (
        <div className="single-card ">
            <img src={`../src/assets/${image}.png`} />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    );
};

export default Card;