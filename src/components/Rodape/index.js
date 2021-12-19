export default function Rodape({info}){
  return (
    <div className="rodape">
      <div className="miniatura-filme">
        <img src={info.posterURL} alt=" " />
      </div>
      <ul className="info">
        {
          !info.hasOwnProperty(`hasOwn`)
          ? <li>{info.title}</li>
          : <><li>{info.title}</li> <li>{`${info.weekday} - ${info.name}`}</li></>
        }
      </ul>
    </div>
  )
}