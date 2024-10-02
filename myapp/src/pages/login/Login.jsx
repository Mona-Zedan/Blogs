import "./login.css"
export default function Login() {
  return (
    <div className="login">
          <pan className="loginTitle">Login</pan>
         <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter your email...."></input>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password...."></input>
            <button className="loginButton">Login</button>   
            <span>Don't you have an account?<link to="/register">Register</link></span>  
         </form>
            <button className="loginRegisterButton">Register</button>
    </div>
  )
}
