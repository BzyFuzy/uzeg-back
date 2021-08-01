import woman from "../assets/img/woman.png";
import hlogo from "../assets/img/b-logo.png";
import { useState } from "react";
import axios from "axios";
import { userAuth } from "../tools";
import { useHistory } from "react-router-dom";
import RegisterForm from "./registerForm";
// bottom border calc(100% - 53.0px);
const HomePage = () => {
  const [screen, setScreen] = useState("home");
  return (
    <div className="home-wrapper">
      <div className="container">
        <div className="t-menu">
          <ul>
            <li onClick={() => setScreen("login")}>Нэвтрэх</li>
            <li onClick={() => setScreen("register")}>Бүртгүүлэх</li>
          </ul>
        </div>
        {screen === "login" ? (
          <LoginForm />
        ) : screen === "register" ? (
          <RegisterForm setScreen={setScreen}/>
        ) : (
          <HomeImages />
        )}
        <div className="f-menu-c">
          <div className="f-menu">
            <ul>
              <li>Гишүүнчлэл</li>
              <li>Холбоо барих</li>
              <li>Түгээмэл асуултууд</li>
              <li>Бидний тухай</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const formHandler = async (e) => {
    e.preventDefault();
    const reqBody = {
      username: formData.username,
      password: formData.password,
    };

    try {
      const loginReq = await axios.post("/api/user/login", reqBody);
      const jsonRes = await loginReq.data;
      if (jsonRes.status === "amjilttai") {
        userAuth.authenticate(jsonRes.result.token, jsonRes.result.user.role);
        history.push("/user");
      } else {
        alert("Нэвтрэх нэр нууц үг буруу байна");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="content">
      <div className="c-login">
        <img src={hlogo} alt="logo" />
        <p className="title">Нэвтрэх</p>
        <form onSubmit={formHandler}>
          <input
            type="text"
            placeholder="Нэвтрэх нэр"
            name="username"
            value={formData.username}
            onChange={({ target }) =>
              setFormData({ ...formData, [target.name]: target.value })
            }
          />
          <input
            type="password"
            placeholder="Нууц үг"
            name="password"
            value={formData.password}
            onChange={({ target }) =>
              setFormData({ ...formData, [target.name]: target.value })
            }
          />
          <input type="submit" value="nevtreh" style={{display: "none"}}/>
          <p>Нууц үг мартсан</p>
          <div
            className="c-button"
            style={{ marginTop: "60px", marginBottom: "40px" }}
          >
            <div className="button" onClick={formHandler}>
              Нэвтрэх
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// const RegisterForm = () => {
//   const iFormDAta = {
//     role: "",
//     username: "",
//     name: "",
//     password: "",
//     email: "",
//   };
//   const [formData, setFormData] = useState(iFormDAta);

//   const register = () => {
//     axios
//       .post("/api/user/register", formData)
//       .then(({ data }) => {
//         if ((data.status = "amjilttai")) {
//           setFormData(iFormDAta);
//           alert("success");
//         }
//       })
//       .catch((e) => {
//         alert("please check your internet connection");
//       });
//   };
//   return (
//     <div className="content">
//       <div className="c-login">
//         <img src={hlogo} alt="logo" />
//         <p className="title">Нэвтрэх</p>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             register();
//           }}
//         >
//           <input
//             type="text"
//             placeholder="Нэвтрэх нэр"
//             name="username"
//             value={formData.username}
//             onChange={({ target }) =>
//               setFormData({ ...formData, [target.name]: target.value })
//             }
//           />
//           <input
//             type="text"
//             placeholder="E-mail"
//             name="email"
//             value={formData.email}
//             onChange={({ target }) =>
//               setFormData({ ...formData, [target.name]: target.value })
//             }
//           />
//           <input
//             type="text"
//             placeholder="Name"
//             name="name"
//             value={formData.name}
//             onChange={({ target }) =>
//               setFormData({ ...formData, [target.name]: target.value })
//             }
//           />
//           <input
//             type="password"
//             placeholder="Нууц үг"
//             name="password"
//             value={formData.password}
//             onChange={({ target }) =>
//               setFormData({ ...formData, [target.name]: target.value })
//             }
//           />
//           <select
//             name="role"
//             value={formData.role}
//             onChange={({ target }) =>
//               setFormData({ ...formData, [target.name]: target.value })
//             }
//           >
//             <option value="">-</option>
//             <option value="journalist">Сэтгүүлч</option>
//             <option value="checker">Баримт шалгагч</option>
//             <option value="source">Эх сурвалж</option>
//           </select>
//           <input type="submit" value="Нэвтрэх" />
//         </form>
//       </div>
//     </div>
//   );
// };

const HomeImages = () => (
  <div className="content">
    <div className="img">
      <img src={woman} alt="woman" />
    </div>
    <div className="img">
      <img src={hlogo} alt="logo" />
    </div>
  </div>
);

export default HomePage;
