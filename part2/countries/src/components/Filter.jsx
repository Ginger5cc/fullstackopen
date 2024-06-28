import ShowTarget from "./ShowTarget"

const Filter = ({findP, data, setTarget, handleClick}) => {

    const filtered = data.filter(n=> n.name.common.toLowerCase().includes(findP))

    if (findP == null || findP =='' ) {
        setTarget(null)
        return null
    } else if (filtered.length > 10) {
      return <p>Too many matches, specify another filter</p>
    } else if (filtered.length == 1) {
      setTarget(null)
      return <ShowTarget target={filtered} />
    } else {return (
      <div>
        {filtered.map(n=> (
          <div key={n.name.common} style={{ display: 'flex'}}>
          <p key={n.name.common}>{n.name.common} </p>
          <button id={n.name.common} style={{float: 'left'}} onClick={handleClick}>show</button>
          </div>
        ))}
      </div>
    )} 
  }  

  export default Filter