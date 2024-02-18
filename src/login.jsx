import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

export default function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const submit=(event)=>{
        event.preventDefalut();
        console.log("username:"+username);
        console.log("password:"+password);
    }


  return (
    <div className="container">
      <div className="row w-100 ">
        <div className="col col-lg-6 col-sm-12  ">
          <p>
            <i class="bi bi-amd h1"></i>
          </p>
          <p>
            <i class="bi bi-amd h1"></i>
          </p>
          <p>
            <i class="bi bi-amd h1"></i>
          </p>
          <p>
            <i class="bi bi-amd h1"></i>
          </p>
        </div>
        <div className="col col-lg-6 col-md-12 ">
          <form action={submit} className="border p-5 shadow p-3 mb-5 bg-white rounded">
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(p)=> setPassword(p.target.value)}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit" >
              Sign in
            </button>
            <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
          </form>
        </div>
      </div>
    </div>
  );
}
