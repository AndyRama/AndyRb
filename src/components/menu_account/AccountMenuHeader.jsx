import React from 'react'
import './AccountMenuHeader.scss'
import AccountMenuHeaderItem from './AccountMenuHeaderItem'
import { MenuBarIcon, MenuProfileIcon } from '../Icon/Icon'

const payload_disconnect = [
  { text: 'Inscription', bold: true },
  { text: 'Connexion', bold: false },
  {},
  { text: 'Hébergement de voyageur', bold: false },
  { text: 'Créer une expérience', bold: false },
  {},
  { text: 'Aide', bold: false },
]

const payload_connect = [
  { text: 'Messages', bold: true },
  { text: 'Notification', bold: true, notification: true },
  { text: 'Voyage', bold: true },
  { text: 'Favoris', bold: true },
  {},
  { text: 'Gérer mon compte', bold: true },
  { text: 'Créer une experience', bold: false },
  { text: 'Parrainer un hôte', bold: false },
  { text: 'Gérer mes annonces', bold: false },
  {},
  { text: 'Aide', bold: false },
]

function AccountMenuHeader() {
  const [displayMenuHeader, setDisplayMenuHeader] = React.useState(false)
  const handleClick = () => {
    setDisplayMenuHeader(!displayMenuHeader)
  }
  return (
    <div className="header-profile-menu-parent-button">
      <button onClick={handleClick} className="header-profile-menu-button">
        <button />
        <div>
          <MenuBarIcon />
        </div>
        <div>
          <MenuProfileIcon size={'16px'} />
        </div>
      </button>
      {displayMenuHeader ? <AccountMenuHeaderOnClick /> : <span />}
    </div>
  )
}

function AccountMenuHeaderOnClick() {
  // const [connected, setConnected] = React.useState()
  const connected = true
  const payload = connected ? payload_connect : payload_disconnect
  console.log(payload)
  const listMenu = payload.map((element) => {
    console.log(element)
    return (
      <AccountMenuHeaderItem
        text={element.text}
        bold={element.bold}
        notification={element.notification}
      />
    )
  })
  return <div className="header-profile-menu">{listMenu}</div>
}

export default AccountMenuHeader
