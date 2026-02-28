function Movies({title, director, year, rating}) {
    return (
        <div className="global">
            <li>{title}</li>
            <li>{director}</li>
            <li>{year}</li>
            <li>{rating}</li>
        </div>
    )
};

export default Movies