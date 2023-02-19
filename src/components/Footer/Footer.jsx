import React from 'react'
import './Footer.scss'
import LinkList from './LinkList'
import BottomFooter from './BottomFooter'
import {
  assistance,
  communaute,
  accueilEtVoyageur,
  aPropos,
} from './datalinklist'

function Footer() {
  return (
    <footer className="footer">
      <section className="resection">
        <LinkList title="Asistance" tableau={assistance} />
        <LinkList title="Communauté" tableau={communaute} />
        <LinkList title="Accueil et voyageur" tableau={accueilEtVoyageur} />
        <LinkList title="A Propos" tableau={aPropos} />
      </section>
      <BottomFooter />
    </footer>
  )
}

export default Footer
