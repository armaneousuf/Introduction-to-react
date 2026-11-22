const styles = {
    card: {display: "flex", gap: '20px'},
    main: {border: '2px gray solid', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '10px'}
}

function Header() {
    const name = "Alex"
    const image = "https://via.placeholder.com/150"
  return (
    <header style={styles.card}>
      <h2>Name: {name}</h2>
      <img src={image} alt="demo image" />
    </header>
  );
}

function Details() {
    const job = "Software Developer"
    const email = "alex.demo@mail.com"
    const skills = "javascript, react, node"
    return(
        <div>
            <ul>
                <li>Job: {job}</li>
                <li>Email: {email}</li>
                <li>Skills: {skills}</li>
            </ul>
        </div>
    )
}

export default function BusinessCard() {
  return (
    <main style={styles.main}>
      <Header />
      <Details />
    </main>
  );
}
