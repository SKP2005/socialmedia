import { Link } from "react-router-dom"
import "./login.scss"

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Dolorum ipsa aliquid qui doloremque aspernatur rerum rem.
             Nam quibusdam deleniti eaque doloribus eius obcaecati ex, sequi libero, excepturi 
             totam repudiandae dicta veritatis maiores reiciendis sunt odio autem 
             officiis ut ipsam molestias!
          </p>
          <span>Don't you have an accounr?</span>
          <Link to="/register">
          <button>Register</button>
          </Link>

        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
        </div>  
    </div>
  )
}

export default Login
