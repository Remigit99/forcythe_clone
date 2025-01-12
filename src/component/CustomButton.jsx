

const CustomButton = ({title, customStyle}) => {
  return (
    <div>
        <button className={`btn ${customStyle}`}>
            {title}
        </button>
    </div>
  )
}

export default CustomButton