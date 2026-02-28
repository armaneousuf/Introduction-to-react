function Books({ title, author, pages, year }) {
    return (
        <div className="global">
            <li>{title}</li>
            <li>{author}</li>
            <li>{pages}</li>
            <li>{year}</li>
        </div>
    )
}

export default Books