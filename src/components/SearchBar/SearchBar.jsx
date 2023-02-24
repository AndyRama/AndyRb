import React, { useState } from 'react'
import './SearchBar.scss'

function SearchBar() {
  const [search, setSearch] = useState('')
  const [ShowDestination, setShowDestination] = useState(false)

  return (
    <div className="search-bar">
      <div className="destination-container">
        <label htmlFor="input-localisation" className="button-destination">
          <div>
            <div>Destination</div>
            <input
              type="text"
              id="input-localisation"
              placeholder="N'importe òu"
              value={search}
              autoCapitalize="off"
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => {
                document.querySelector('.btn-search-text').style.display =
                  'block'
                setShowDestination(true)
              }}
              onBlur={() => {
                document.querySelector('.btn-search-text').style.display =
                  'none'
                setShowDestination(false)
              }}
            />
          </div>
        </label>
      </div>
    </div>
  )
}

export default SearchBar
