import {useState} from "react"
// import CustomButtom from "./CustomButtom"
import "../styles/sparkStyle.css"
import cameraMan from "../assets/images/camera-man.svg"

const Spark = () => {
    const[activeTab, setActiveTab] = useState("idea");

    const handleActiveTab = (tab) =>{
        setActiveTab(tab)
    }

    
  return (
    <div className="spark__sec">
      <div className="spark__sec-left">
        
        <div className="spark__tabs">
          <button onClick={() => handleActiveTab("idea")}>
            Idea
          </button>
          <button onClick={() => handleActiveTab("design")}>
            
              Design
          </button>
          <button onClick={() => handleActiveTab("develop")}>
            
              Develop
          </button>
          <button onClick={() => handleActiveTab("launch")}>
          Launch
          </button>
        
        </div>

        <div className="spark__content">
            <h4 className="subTitle3"> Your vision is unique.</h4>
            <p className="parag3">
            Nurture Your Idea into a Blueprint for Success with our strategic insights and 
            industry expertise. Your vision is unique, let’s us shape it.
            </p >

            {/* <CustomButtom/> */}
        </div>
        
      </div>

      <div className="spark__sec-right"> 
        <img src={cameraMan} alt="camera_man" />
      </div>
 
    </div>
  )
}

export default Spark