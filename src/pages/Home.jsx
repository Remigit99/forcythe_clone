import "../styles/homeStyle.css"
import CustomButtom from "../component/CustomButton"
import StartUps from "../component/StartUps"

const Home = () => {
  return (
    <main>
      <div className="container home__container">
        <header className="home__header">
          <h1>
            We build <span>products</span> that shape a better future
          </h1>

          <p>
            We’re the architects of digital excellence across industries.
            We redefine business with cutting-edge digital strategies that
            invokes sector-wide transformation.
          </p>

          <CustomButtom title="Book a Call" />
        </header>
      </div>

      <section className="client">
        <div className="container client__container">

          <h3>
            Success in <span>Motion</span> - Our Clients&apos; journey
          </h3>

          
        </div>

      </section>

      <section>
        <div className="container">
          <h3>
            Discover the <span>transformative stories</span> of startups that scaled
            new heights with us
          </h3>

          <>
            <StartUps />
          </>
        </div>
      </section>

    </main>
  )
}

export default Home