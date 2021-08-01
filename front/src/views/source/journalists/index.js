import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { Row } from "../../../containers/Card";

export default function Journalists() {
  const [journalists, setJournalists] = useState([]);
  const getJournalists = () => {
    axios
      .get("/api/user/get/journalist")
      .then(({ data }) => {
        if ((data.status = "amjilttai")) {
          setJournalists(data.result);
        }
      })
      .catch((e) => {
        alert("please check your internet connection");
      });
  };
  useEffect(() => {
    getJournalists();
  }, []);

  return (
    <div>
      <Card style={{padding: "20px"}}>
        {journalists.map((journalist) => (
          <Row key={journalist._id}>
            <p>{journalist.username}</p>
          </Row>
        ))}
      </Card>
    </div>
  );
}
