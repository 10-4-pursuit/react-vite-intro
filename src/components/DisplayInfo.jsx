const DisplayInfo = ({ onClick }) => {
  return (
    <div>
      <p>This is my info!</p>
      <p>And my first component!</p>
      <button onClick={onClick}>Unflush</button>
    </div>
  )
}

export default DisplayInfo