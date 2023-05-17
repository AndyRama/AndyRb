import './Host.scss'
import HostHeaderCard from './HostHeaderCard'
import HostHosting from './HostHosting'
import HostExperiences from './HostExperiences'
import HostGift from './HostGift'

const Host = () => {
  return (
    <>
      <header className="h__header">
        <HostHeaderCard />
      </header>
      <main className="h__main">
        <HostExperiences />
        <HostGift />
        <HostHosting />
        <div
          style={{
            width: '100%',
            minHeight: '5rem',
            textAlign: 'center',
          }}
        ></div>
      </main>
    </>
  )
}

export default Host
