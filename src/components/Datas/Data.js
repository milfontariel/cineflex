import { Link } from "react-router-dom";

export default function Data({ info }) {
  const infoDatas = info.days;
  return (
    <>
      {infoDatas.map((data) => {
        return (
          <div key={data.date}>
            <p className="data">
              <span className="data-semana">{data.weekday}</span> - <span className="data-dia">{data.date}</span></p>
            <ul className="horarios">
              {data.showtimes.map((hora) => {
                return (
                  <Link to={`/sessao/${hora.id}`}>
                    <li>
                      <button className={`hora btn`}>{hora.name}</button>
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div>
        )
      })}
    </>
  )
}

