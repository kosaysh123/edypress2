import "../LoginRegister/LoginRegister.css";

function LoginRegister() {
  return (
    <>
      <div class="container KA-Login-Register mt-5">
        <div class="row">
          <div class="col-md-5">
            <form role="form">
              <fieldset>
                <p class="text-uppercase KA-text"> Login </p>

                <div class="form-group mb-4">
                  <input
                    type="email"
                    name="username"
                    id="username"
                    class="form-control input-lg"
                    placeholder="username"
                  />
                </div>
                <div class="form-group mb-4 ">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="KA-input-1 form-control input-lg"
                    placeholder="Password"
                  />
                  <img
                    class="KA-input-1-pass"
                    src=".//assiets/img/Vector.png"
                    alt=""
                  />
                </div>
                <div class="form-check mb-4">
                  <label class="form-check-label">
                    <input type="checkbox" class="form-check-input" />
                    Remember me
                  </label>
                </div>
                <div>
                  <input
                    type="submit"
                    class="btn btn-group-lg KA-btn-1 mb-4"
                    value="login"
                  />
                </div>
                <label class="form-check-label   KA-label-login">
                  {" "}
                  Lost your password?
                </label>
              </fieldset>
            </form>
          </div>
          <div class="col-md-5">
            <form role="form" method="post" action="register.php">
              <fieldset>
                <p class="text-uppercase pull-center KA-text-2"> Register</p>
                <div class="form-group">
                  <input
                    type="text"
                    name="email"
                    id="username"
                    class="form-control input-lg mb-3"
                    placeholder="Email*"
                  />
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    name="username"
                    id="email"
                    class="form-control input-lg mb-3"
                    placeholder="Username*"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form-control input-lg KA-input-2 mb-3"
                    placeholder="Password*"
                  />
                  <img
                    class="KA-input-1-pass-2"
                    src=".//assiets/img/Vector.png"
                    alt=""
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    class="form-control input-lg KA-input-3 mb-3"
                    placeholder="Confirm Password*"
                  />
                  <img
                    class="KA-input-1-pass-3"
                    src=".//assiets/img/Vector.png"
                    alt=""
                  />
                </div>

                <div>
                  <input
                    type="submit"
                    class="btn btn-group-lg  KA-btn-1 mb-4"
                    value="Register"
                  />
                </div>
              </fieldset>
            </form>
          </div>

          <div class="col-md-2"></div>
        </div>
      </div>
    </>
  );
}

export default LoginRegister;
