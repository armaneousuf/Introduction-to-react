export default function MovieCard(props) {
  const { title, releaseYear, isFavorite } = props;
  return(
    <div>
        <h2>{title} {isFavorite && "⭐"}</h2>
        <p>{releaseYear}</p>
    </div>
  );
}
