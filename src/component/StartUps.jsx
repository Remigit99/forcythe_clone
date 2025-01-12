import {useState} from 'react'
import starks from "../assets/icons/starks.svg"
// import x from "../assets/icons/x.svg"
import stacai from "../assets/icons/stacai.svg"
import iwaria from "../assets/icons/iwaria.svg"
// import x from "../assets/icons/x.svg"
import "../styles/StartUpStyle.css"

const StartUps = () => {

  const [activeTab, setActiveTab] = useState("starks")

  const handleActiveTab = (tab) =>{
    setActiveTab(tab)
  }
  return (
    <div>
      <div className="tabs">
        <button onClick={handleActiveTab("starks")}>
          <img src={starks} alt="starks_logo" />
          Starks
        </button>
        <button onClick={handleActiveTab("exPros")}>
        <img src={starks} alt="exPros_logo" />

        </button>
          <button onClick={handleActiveTab("stacai")}>
          <img src={stacai} alt="stacai_logo" />

          </button>
        <button onClick={handleActiveTab("iwaria")}>
        <img className="iwaria" src={iwaria} alt="iwaria_logo" />

        </button>
        <button onClick={handleActiveTab("beaupreneur")}>
        <img src={stacai} alt="beaupreneur_logo" />

        </button>
        </div>

        <div>
          {activeTab === "starks" && <p>Active Bar is Starks</p>}
          {/* {activeTab === "exPros" && <p>Active Bar is exPros</p>}
          {activeTab === "iwaria" && <p>Active Bar is iwaria</p>} */}
        </div>

    </div>
  )
}

export default StartUps;