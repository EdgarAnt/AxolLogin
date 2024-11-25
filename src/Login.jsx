import axolotito from './assets/Axolotito.png';

function Login() {
    return (
        <div className="card">
            <img src={axolotito} alt="Axolotito" />
            <h2 className="card-tittle">Login</h2>
            <p className="card-text">Welcome to Axol :D</p>
            <form className="card-form">
                <input 
                    type="text" 
                    placeholder="Username" 
                    className="card-input" 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="card-input" 
                />
                <button className="card-button" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;
