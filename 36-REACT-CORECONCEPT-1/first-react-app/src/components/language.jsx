
function Language(props) {
  return (
    <div className='student'>
      <p>English: {props.level}</p>
      <p>Math: {props.level}</p>
      <p>Physics: {props.level}</p>
    </div>
  )
}

export default Language