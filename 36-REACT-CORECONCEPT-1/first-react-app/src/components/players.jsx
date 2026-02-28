function Players({name, team, country, age, wins}) {
  return (
    <div className='student'>
      <h2>Name: {name}</h2>
      <p>Team: {team}</p>
      <p>Country: {country}</p>
      <p>Age: {age}</p>
      <p>Wins: {wins}</p>
    </div>
  )
}

export default Players