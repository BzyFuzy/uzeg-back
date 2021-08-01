import hlogo from "../assets/img/b-logo.png";
import React, { useState } from "react";
import axios from "axios";
import { userAuth } from "../tools";
import { useHistory } from "react-router-dom";
const iProfileData = {
  firstname: "",
  lastname: "",
  position: "",
  organization: "",
};
const RegisterForm = ({ setScreen }) => {
  const iFormDAta = {
    role: "",
    username: "",
    name: "",
    password: "",
    email: "",
  };
  const [formData, setFormData] = useState(iFormDAta);
  const [inNextStep, setInNextStep] = useState(false);
  const register = () => {
    setInNextStep(true);
  };
  const nextStep = () => {
    setScreen("login");
  };
  return inNextStep ? (
    formData.role === "journalist" ? (
      <Journalist loginData={formData} nextStep={nextStep} />
    ) : <div className="content">
    <div className="c-login c-register">
      <img src={hlogo} alt="logo" />
      <div
        style={{
          display: "flex",
          marginTop: "25px",
          textAlign: "center",
          width: "80%",
          alignSelf: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontFamily: "Montserrat",
            fontWeight: "normal",
            fontSize: "27px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Developing...
        </p>
        <div
          className="c-button"
          style={{ marginTop: "60px", marginBottom: "40px" }}
        >
          <div
            className="button"
            onClick={(e) => {
              e.preventDefault();
              setInNextStep(false);
            }}
          >
            Буцах
          </div>
        </div>
      </div>
    </div>
  </div>
  ) : (
    <div className="content">
      <div className="c-login c-register">
        <img src={hlogo} alt="logo" />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            register();
          }}
          autoComplete="off"
        >
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
            type="text"
            placeholder="E-mail"
            name="email"
            value={formData.email}
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
          <select
            name="role"
            value={formData.role}
            onChange={({ target }) =>
              setFormData({ ...formData, [target.name]: target.value })
            }
          >
            <option value="">-</option>
            <option value="journalist">Сэтгүүлч</option>
            <option value="checker">Баримт шалгагч</option>
            <option value="source">Эх сурвалж</option>
          </select>
          <div className="c-button">
            <div
              className="button"
              onClick={(e) => {
                e.preventDefault();
                register();
              }}
            >
              Үргэлжлүүлэх
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const Journalist = ({ loginData }) => {
  const [formData, setFormData] = useState(iProfileData);
  const [selectedFile, setSelectedFile] = useState(null);
  const [onSuccess, setOnSuccess] = useState(false);
  const [successData, setSuccessData] = useState({
    token: "",
    role: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ loginData, profile: formData });
    axios
      .post("/api/user/register/journalist", { loginData, profile: formData })
      .then(({ data }) => {
        if ((data.status = "amjilttai")) {
          console.log(data);
          setSuccessData({
            token: data.result.token,
            role: data.result.user.role,
          });
          uploadImage(data.result.token);
        }
      })
      .catch((e) => {
        alert("please check your internet connection");
      });
  };

  const uploadImage = (token) => {
    const fileData = new FormData();
    fileData.append("file", selectedFile, selectedFile.name);
    axios
      .post("/api/user/upload/profile", fileData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if ((res.data.status = "amjilttai")) {
          setOnSuccess(true);
        }
      })
      .catch((e) => console.log(e));
  };
  if (onSuccess) {
    return <Success token={successData.token} role={successData.role} />;
  } else {
    return (
      <div className="content">
        <div className="c-login c-register">
          <img src={hlogo} alt="logo" />
          <form onSubmit={onSubmit} autoComplete="off">
            <input
              type="text"
              placeholder="Овог"
              name="lastname"
              value={formData.lastname}
              onChange={({ target }) =>
                setFormData({ ...formData, [target.name]: target.value })
              }
            />
            <input
              type="text"
              placeholder="Нэр"
              name="firstname"
              value={formData.firstname}
              onChange={({ target }) =>
                setFormData({ ...formData, [target.name]: target.value })
              }
            />
            <input
              type="file"
              name="profile_image"
              accept="image/*"
              placeholder="Зураг"
              onChange={(event) => {
                setSelectedFile(event.target.files[0]);
              }}
            />

            <input
              type="text"
              placeholder="Байгууллага"
              name="organization"
              value={formData.organization}
              onChange={({ target }) =>
                setFormData({ ...formData, [target.name]: target.value })
              }
            />
            <input
              type="text"
              placeholder="Албан тушаал"
              name="position"
              value={formData.position}
              onChange={({ target }) =>
                setFormData({ ...formData, [target.name]: target.value })
              }
            />
            <div className="c-button">
              <div className="button" onClick={onSubmit}>
                Үргэлжлүүлэх
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

const Success = ({ token, role }) => {
  const history = useHistory();
  return (
    <div className="content">
      <div className="c-login c-register">
        <img src={hlogo} alt="logo" />
        <div
          style={{
            display: "flex",
            marginTop: "25px",
            textAlign: "center",
            width: "80%",
            alignSelf: "center",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontFamily: "Montserrat",
              fontWeight: "normal",
              fontSize: "27px",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Бүртгэл амжилттай хийгдлээ.
            <br />
            Танд баярлалаа
          </p>
          <div
            className="c-button"
            style={{ marginTop: "60px", marginBottom: "40px" }}
          >
            <div
              className="button"
              onClick={(e) => {
                e.preventDefault();
                userAuth.authenticate(token, role);
                history.push("/user");
              }}
            >
              Үргэлжлүүлэх
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
