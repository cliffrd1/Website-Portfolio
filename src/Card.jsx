import profilePic from './assets/profile.png'

function Card (){
    return (
        <div className="card">
             <img className="card-image" src={profilePic} alt="profile picture"></img>
             <h2 className="card-title"> Clifford Ace Lagata</h2>
             <p className="card-text">I'm an IT 4th year Student</p>
        </div>
    );
}

export default Card