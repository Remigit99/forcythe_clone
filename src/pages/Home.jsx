import "../styles/homeStyle.css"
import CustomButtom from "../component/CustomButton"
import StartUps from "../component/StartUps"

const Home = () => {
  return (
    <main>
      <div className="container home__container">
        <header className="home__header">
          <h1>
            We build <span className="word_deco">products</span> that shape a better future
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
            {/* Success in <span className="word_deco">Motion</span> - Our Clients&apos; journey */}
          </h3>

          
        </div>

      </section>

      <section>
        <div className="container startup__container">
          <h3>
            Discover the <span className="word_deco">transformative stories</span> of startups that scaled
            new heights with us
          </h3>

          <>
            <StartUps />
          </>
        </div>
      </section>

      <section className="spark">
        <div className="container spark__container">

          <h3>
          From <span className="word_deco">Spark</span> to <span className="word_deco">Spotlight:</span> we take you every step of the way to success.
          </h3>
          <div className="spark__container-left">

          </div>
          <div className="spark__container-right"></div>
        </div>
      </section>

    </main>
  )
}

export default Home