const TimeDisplayer = ({ remainingTime }) => {

  console.log("me renderice timer");

  return (
    <span className="pokedex-time">{ remainingTime }</span>
  )
}

export default TimeDisplayer