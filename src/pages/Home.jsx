// import { useEffect, useState } from "react"
import "../styles/homeStyle.css"
import CustomButtom from "../component/CustomButton"
import StartUps from "../component/StartUps"
import Spark from "../component/Spark"
import Footer from "../component/Footer"
import b2bIcon from "../assets/icons/layers-three.svg"
import aiArt from "../assets/images/ai_art.webp"
import cryptoTokens from "../assets/images/crypto_tokens.webp"
import cryptoAssets from "../assets/images/crypto_asset.webp"
import SampleOdometer from "../component/SampleOdometer"

// import Odometer from "react-odometerjs"

const Home = () => {

  // const [projectVlue, setProjectValue] = useState(1234)

//   useEffect(() => {
//     const timeoutId = setTimeout(() => setProjectValue(4321), 2000);
//     return () => {
//         clearTimeout(timeoutId);
//     };
// }, []);

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

          <h3 className="subTitle2">
            {/* Success in <span className="word_deco">Motion</span> - Our Clients&apos; journey */}
          </h3>


        </div>

      </section>

      <section>
        <div className="container startup__container">
          <h3 className="subTitle2">
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

          <h3 className="subTitle2">
            From <span className="word_deco">Spark</span> to <span className="word_deco">Spotlight:</span> we take you every step of the way to success.
          </h3>
          <div className="spark__container-left">
            <Spark />

          </div>
          {/* <div className="spark__container-right"></div> */}
        </div>
      </section>

      <section>
        <div className="container b2b__container">

          <h3 className="subTitle2 word_deco">
            Your best call for B2B/B2C product innovation
          </h3>

          <div className="b2b__items">

            <article className="b2b__item">
              <div className="b2b__icon">
                <img src={b2bIcon} alt="b2b__icon" />
              </div>

              <div className="b2b__item-h">
                <h4>
                  Experience
                </h4>
              </div>

              <div>
                <p className="parag3">
                  Decades of collective wisdom. Leverage our extensive experience
                  to avoid common pitfalls and accelerate your business growth.
                </p>
              </div>
            </article>


            <article className="b2b__item">
              <div className="b2b__icon">
                <img src={b2bIcon} alt="b2b__icon" />
              </div>

              <div className="b2b__item-h">
                <h4>
                  Quick Support
                </h4>
              </div>

              <div>
                <p className="parag3">
                  We are your reliable partner, always there when you
                  need us, ensuring smooth operations at every stage of your growth.
                </p>
              </div>
            </article>


            <article className="b2b__item">
              <div className="b2b__icon">
                <img src={b2bIcon} alt="b2b__icon" />
              </div>

              <div className="b2b__item-h">
                <h4>
                  Cost Savings
                </h4>
              </div>

              <div>
                <p className="parag3">
                  Maximising impact, minimising costs efficiency is key. We provide
                  cost-effective solutions without compromising on quality.
                </p>
              </div>
            </article>
          </div>

        </div>

      </section>


      <section className="stats">
        <div className="container stats__container">
          <h3 className="subTitle3">
            We build solutions that help <span className="word_deco">businesses</span> of all sizes to <span className="word_deco">scale</span>
          </h3>

          <div className="stats__main">

            <div className="stat">
              <h4>
            <SampleOdometer num="01" />  +
              </h4>
              <p> Clients</p>
            </div>


            <div className="stat">
              <h4> 
            <SampleOdometer num="021"/>  +
                </h4>
              <p> Projects</p>
            </div>

            <div className="stat">
              <h4> 
            <SampleOdometer num="69"/>  +
              </h4>
              <p> Team Leads</p>
            </div>

            <div className="stat">
              <h4> 
            <SampleOdometer num="21" />  +
                 </h4>
              <p>Glorious Years</p>
            </div>

          </div>
        </div>
      </section>

      <section className="blog">

        <div className="container blog__container">

          <div className="blog__header">
            <h3 className="subTitle2">
              Read our articles, news and product blog
            </h3>

            <CustomButtom title="Book a Call" />
          </div>

          <div className="blog__main">

            <article className="blog__articles">
              <div className="blog__img">
                <img src={aiArt} alt="crypto_tokens" />
              </div>

              <div className="blog__content">
                <h5> Blog </h5>

                <p className="parag3">The Reformist May 29th, 2024  </p>

                <h3> Will AI take over Art? </h3>
              </div>
            </article>


            <article className="blog__articles">
              <div className="blog__img">
                <img src={cryptoTokens} alt="crypto_assets" />
              </div>

              <div className="blog__content">
                <h5> Blog </h5>

                <p className="parag3">The Reformist May 29th, 2024  </p>

                <h3> Cryptocurrency vs Tokens </h3>
              </div>
            </article>

            <article className="blog__articles">
              <div className="blog__img">
                <img src={cryptoAssets} alt="crypto_assets" />
              </div>

              <div className="blog__content">
                <h5> Blog </h5>

                <p className="parag3">The Reformist May 29th, 2024  </p>

                <h3> Cryptocurrency and Crypto assets</h3>
              </div>
            </article>


          </div>
        </div>

      </section>


      <section className="join">
        <div className="container join__container">
          <h2 className="joinTitle word_deco">
            Ready to Scale?
          </h2>
          <h2 style={{ textAlign: "center", fontSize: 42, fontWeight: 500 }}>
            Join successful brands that chose

          </h2>
          <h2 className="joinTitle">
            us as their <span className="word_deco">growth accelerator </span>
          </h2>

          <div className="btn_join">

            <CustomButtom title="Book a Call" />
          </div>
        </div>

      </section>

      <Footer/>
    </main>
  )
}

export default Home