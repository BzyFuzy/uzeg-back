import dots from "../../../assets/img/dots.png";
import avatar from "../../../assets/img/default.png";
import camera from "../../../assets/img/camera.png";
import { chat } from "../../../assets/icons";
import Card from "../../../containers/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
function splite(array, parts) {
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}
const Home = () => {
  const [news, setNews] = useState([]);
  const [profile, setProfile] = useState(null);
  const [onViewNews, setOnViewNews] = useState({
    isView: false,
    news: null,
  });
  useEffect(() => {
    fetchNews();
  }, []);
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchNews = () => {
    const token = localStorage.getItem("access");
    axios
      .get("/api/news/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        if (data.status === "amjilttai") {
          setNews(splite(data.result, 4));
        } else {
          alert("Please check internet connection");
        }
      });
  };
  const fetchProfile = () => {
    const token = localStorage.getItem("access");
    axios
      .get("/api/user/me/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        if (data.status === "amjilttai") {
          setProfile(data.result.profile);
        } else {
          alert("Please check internet connection");
        }
      });
  };

  console.log(onViewNews);
  return (
    <div className="jhome">
      <Card>
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div className="title">
            <p>Сэтгүүлчийн булан</p>
          </div>
          <img
            style={{
              marginTop: 43,
              marginRight: 37,
              marginBottom: 27,
              height: "10vh",
            }}
            src={dots}
            alt="dots"
          />
        </div>
        <div
          className="row"
          style={{
            paddingLeft: "50px",
            paddingRight: "100px",
          }}
        >
          <div style={{ flex: 1, marginRight: 44 }}>
            <img
              style={{ borderRadius: 5, width: "100%" }}
              src={
                profile
                  ? profile.profilePic
                    ? `/images/profile/${profile.profilePic}`
                    : avatar
                  : avatar
              }
              alt="avatar"
            />
          </div>

          <div style={{ width: "100%", flex: 3 }}>
            {profile ? (
              <div
                className="row"
                style={{
                  paddingTop: "12.5px",
                  paddingBottom: "25px",
                  borderTop: "1px solid #D4938B",
                  borderBottom: "1px solid #D4938B",
                  justifyContent: "space-between",
                }}
              >
                <p>
                  Овог нэр: {profile.lastname} овогтой {profile.firstname}
                </p>
                <p>Албан тушаал: {profile.position}</p>
                <p>Байгууллага: {profile.organization}</p>
              </div>
            ) : (
              <div
                className="row"
                style={{
                  paddingTop: "12.5px",
                  paddingBottom: "25px",
                  borderTop: "1px solid #D4938B",
                  borderBottom: "1px solid #D4938B",
                  justifyContent: "space-between",
                }}
              >
                <p>Овог нэр: - овогтой -</p>
                <p>Албан тушаал: -</p>
                <p>Байгууллага: -</p>
              </div>
            )}
            <div className="row">
              <p style={{ marginTop: 10, borderBottom: "1px solid #D4938B" }}>
                Намтар &nbsp;
              </p>
            </div>

            <div className="row" style={{ marginTop: 15 }}>
              <p style={{ fontSize: 12, lineHeight: "24px" }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy
              </p>
            </div>
            <div className="row">
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    marginTop: 10,
                    borderBottom: "1px solid #D4938B",
                    width: "fit-content",
                  }}
                >
                  Тогтмол бичдэг сэдвүүд: &nbsp;
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ marginTop: 10, borderBottom: "1px solid #D4938B" }}>
                  Ажлын туршлага: &nbsp;
                </p>
                <p style={{ marginTop: 10, fontSize: 12, lineHeight: "24px" }}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "flex-end" }}>
          <div
            style={{
              padding: "10.8px 33.3px 11.2px 42.7px",
              borderRadius: "40px 0px 0px 40px",
              background: "#d4938b",
              marginBottom: 43,
              marginTop: 53,
            }}
          >
            <img src={chat} alt="chat" />
          </div>
        </div>
      </Card>
      <Card style={{ marginTop: 23 }}>
        <div className="row">
          <div className="title">
            <p>Нийтэлсэн мэдээнүүд</p>
          </div>
        </div>
        {news.map((nr, i) => {
          return (
            <div
              key={"nr" + i}
              className="row"
              style={{ justifyContent: "space-evenly", marginTop: "40px" }}
            >
              {nr.map((n, ind) => {
                return (
                  <div key={n._id}>
                    <img
                      style={{ width: "25%", cursor: "pointer" }}
                      src={n.image || camera}
                      alt="camera"
                      onClick={(e) => setOnViewNews({ news: n, isView: true })}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </Card>
      {onViewNews.isView && (
        <NewsView
          news={onViewNews.news}
          onClose={() => setOnViewNews({ isView: false })}
        />
      )}
    </div>
  );
};

const NewsView = ({ news, onClose }) => {
  return (
    <div id="myModal" class="modal" style={{ display: "block" }}>
      {/* <div class="modal-content"> */}

      <Card style={{ padding: "10px 30px", paddingBottom: 20, margin: "auto", width: "80%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              fontSize: "22px",
              color: "#212543",
              marginBottom: 20,
              marginTop: 10,
              fontWeight: "bold"
            }}
          >
            {news.title}  {"/"+moment(news.created).format("YYYY-MM-DD HH:mm")+"/"}
          </p>
          <span class="close" onClick={() => onClose()}>
            &times;
          </span>
        </div>

        <div
          className="ck-content"
          dangerouslySetInnerHTML={{ __html: news.body }}
        />
      </Card>
      {/* </div> */}
    </div>
  );
};

export default Home;
