
import "../styles/StartUpStyle.css"



const StartUp = ({text, founder, img}) => {
  return (
    <div className="startup__main">
        <div className="startup__left">
            <p>
                {text}
            </p>

            <h5>{founder}</h5>
        </div>
        <div className="startup__right">
            <img src={img} alt={founder} />
        </div>
    </div>
  )
}

export default StartUp