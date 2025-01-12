import { useState } from 'react'
import starks from "../assets/icons/starks.svg"
// import x from "../assets/icons/x.svg"
import stacai from "../assets/icons/stacai.svg"
import iwaria from "../assets/icons/iwaria.svg"
// import x from "../assets/icons/x.svg"
import "../styles/StartUpStyle.css"
import StartUp from './StartUp'

import DR from "../assets/images/dr_mand.png"


const StartUps = () => {

  const [activeTab, setActiveTab] = useState("starks")

  const handleActiveTab = (tab) => {
    setActiveTab(tab)
  }
  return (
    <div>
      <div className="tabs">
        <button onClick={() => handleActiveTab("starks")}>
          <img src={starks} alt="starks_logo" />
          Starks
        </button>
        <button onClick={() => handleActiveTab("exPros")}>
          <img src={starks} alt="exPros_logo" />

        </button>
        <button onClick={() => handleActiveTab("stacai")}>
          <img src={stacai} alt="stacai_logo" />

        </button>
        <button onClick={() => handleActiveTab("iwaria")}>
          <img className="iwaria" src={iwaria} alt="iwaria_logo" />

        </button>
        <button onClick={() => handleActiveTab("beaupreneur")}>
          <img src={stacai} alt="beaupreneur_logo" />

        </button>
      </div>

      <div>
        {activeTab === "starks" &&

          <StartUp
            text="Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally."
            founder="John, Management"
            img={DR}
          />
        }


        {activeTab === "exPros" && 
        <StartUp
        text="The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!"
        founder="Testimony, Co-founder"
        img={DR}
      />
        }


        {activeTab === "stacai" && 
            <StartUp
            text="Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way."
            founder="Edwin, Former CTO"
            img={DR}
          />
        }
        {activeTab === "iwaria" && 
          <StartUp
          text="The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before."
          founder="Iwaria, Founder"
          img={DR}
        />
        }
        {activeTab === "beaupreneur" && 
          <StartUp
          text="I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts."
          founder="Christiana, Founder"
          img={DR}
        />
        }
      </div>

    </div>
  )
}

export default StartUps;