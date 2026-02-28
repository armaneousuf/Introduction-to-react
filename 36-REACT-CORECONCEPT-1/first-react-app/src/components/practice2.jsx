import Movies from './movies';

function Practice2() {
    const movies = [
      {
        id: 1,
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        rating: 9.3,
      },
      {
        id: 2,
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        rating: 9.0,
      },
      {
        id: 3,
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        rating: 8.8,
      },
      {
        id: 4,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994,
        rating: 8.9,
      },
      {
        id: 5,
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        year: 1994,
        rating: 8.8,
      },
    ];


    return (
        <div>
            <h1 className='flex'>List of Movies</h1>
            <ul>
                {movies.map((movie) => 
                <Movies key={movie.id} title={movie.title} director={movie.director} year={movie.year} rating={movie.rating}></Movies>
                )}
            </ul>
        </div>
    )
}

export default Practice2