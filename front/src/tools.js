export const userAuth = {
  get isAuthenticated() {
    return localStorage["access"] ? true : false;
    //return true;
  },

  get role() {
    // const payload = parseJwt(sessionStorage['access'])
    // return "journalist";
    return localStorage["role"];
  },

  authenticate(access, role) {
    localStorage.setItem("role", role);
    localStorage.setItem("access", access);
  },
  signout() {
    localStorage.removeItem("role");
    localStorage.removeItem("access");
    window.location.replace("/");
  },
};

export const roles = {
  journalist: "journalist",
  checker: "checker",
  source: "source",
  client: "client",
  admin: "admin",
};

