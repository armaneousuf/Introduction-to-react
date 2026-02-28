function Student(props) {
  console.log(props);
  return (
    <div className='student'>
      <p>Name: {props.name}</p>
      <p>Dept: {props.dept}</p>
      <p>Hobby: {props.hobby}</p>
    </div>
  )
}

export default Student;