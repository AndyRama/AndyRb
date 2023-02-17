import Card from '../../components/Card/Card'
function Home() {
  return (
    <div>
      <h1>AndyRB</h1>
      <Card
        image="https://example.com/image.jpg"
        title="Beautiful Beach House"
        description="Relax and enjoy the sound of the waves in this stunning beachfront home."
        price={200}
      />
      <Card
        image="https://example.com/image.jpg"
        title="Beautiful Beach House"
        description="Relax and enjoy the sound of the waves in this stunning beachfront home."
        price={200}
      />
    </div>
  )
}

export default Home
