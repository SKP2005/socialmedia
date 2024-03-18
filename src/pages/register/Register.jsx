import { Link } from "react-router-dom"
import "./register.scss"

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Hello Social</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Dolorum ipsa aliquid qui doloremque aspernatur rerum rem.
             Nam quibusdam deleniti eaque doloribus eius obcaecati ex, sequi libero, excepturi 
             totam repudiandae dicta veritatis maiores reiciendis sunt odio autem 
             officiis ut ipsam molestias!
          </p>
          <span>Don't you have an accounr?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>

        </div>
        <div className="right">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="text" placeholder="Name" />
                <button>Register</button>
            </form>
        </div>
        </div>  
    </div>
  )
}

export default Register
