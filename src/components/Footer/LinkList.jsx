import React from 'react'
import './LinkList.scss'
// import { assistance } from "./datalinklist"; importer le bon
import { Link } from 'react-router-dom'

function LinkList({ title, tableau }) {
  const data = tableau // changer

  return (
    <section className="containerLink">
      <span className="bold">{title}</span> {/*pensez a renomer*/}
      <ul>
        {data.map((data) => (
          <li key={data.id}>
            <Link to={data.to} className="link">
              {data.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LinkList
