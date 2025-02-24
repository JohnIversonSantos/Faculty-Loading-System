import profilePic from '../public/vite.svg'


function Card(){

    return(
        <div className="card">
            <img className="card_image"src={profilePic} alt="Profile Picture"/>
            <h2 className='cardTitle'>John Iverson Santos</h2>
            <p className='cardText'>Lorem Ipsum dolor sit amet</p>
        </div>
    );
}

export default Card