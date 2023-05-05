import './Host.scss'
import HostHeaderCard from './HostHeaderCard'
import HostHosting from './HostHosting'
import HostExperiences from './HostExperiences'
import HostGift from './HostGift'

const Host = () => {
  return (
    <>
      <header className="h__header">
        {/* <TmpHeaderMenu /> */}
        <HostHeaderCard />
      </header>
      <main className="h__main">
        <HostExperiences />
        <HostGift />
        <HostHosting />
        {/* <TmpInspiration /> */}
      </main>
    </>
  )
}

export default Host

// Composants temporaires, à remplacer par les vrais
const TmpHeaderMenu = () => (
  <div
    style={{
      position: 'fixed',
      width: '70vw',
      minHeight: '10vmin',
      backgroundColor: 'white',
      color: 'black',
      borderRadius: '50px',
      margin: '3vmin calc((100% - 70vw)/4)',
      display: 'grid',
      alignItems: 'center',
      justifyItems: 'center',
    }}
  >
    header menu
  </div>
)
const TmpFooter = () => (
  <div
    style={{
      width: '100%',
      minHeight: '5rem',
      textAlign: 'center',
    }}
  >
    footer
  </div>
)
const TmpInspiration = () => (
  <div
    style={{
      width: '100%',
      minHeight: '5rem',
      textAlign: 'center',
    }}
  >
    inspiration
  </div>
)
