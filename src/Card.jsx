import './App.css'
const Card = ({ icon, title, description }) => {
    return (
        <div className="card">
            <div className='cardHeader'>
                <img src={icon} alt="" />
                <h1>{title}</h1>

            </div>
            <p>{description}</p>
        </div>
    )
}

export default Card