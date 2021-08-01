import React from "react";
import Card, { Row } from "../../../containers/Card";

export default function Fact() {
  return (
    <div style={{ display: "flex" }}>
      <Card
        style={{
          flex: 3.5,
          paddingTop: 42,
          paddingLeft: 42,
          paddingBottom: 52,
          paddingRight: 32.5,
        }}
      >
        <Row>
          <p
            style={{
              fontSize: "18px",
              color: "#212543",
            }}
          >
            Сонгогдсон сэтгүүлчийн товч мэдээлэл
          </p>
        </Row>
        <Row style={{ marginTop: 28 }}>
          <div
            style={{
              borderRadius: "5px",
              display: "flex",
              background: "#FFF",
              filter: "drop-shadow(0px 0px 6px rgba(15, 0, 0, 0.6))",
              padding: "28.6px 27.8px 66.4px 34.7px",
            }}
          >
            <div style={{ flex: 1 }}>
              <img
                src="https://hasslefreemobility.hyvecrowd.com/images/avatar_default.png"
                alt="jImage"
                style={{
                  height: "110px",
                  width: "110px",
                  borderRadius: 100,
                }}
              />
            </div>

            <div
              style={{
                flex: 9,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                marginLeft: 11,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>Нэр:</p>
                <p>null овогтой null</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>Байгууллага:</p>
                <p>null</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p>Албан тушаал:</p>
                <p>null</p>
              </div>
            </div>
          </div>
        </Row>

        <Row style={{ marginTop: 43 }}>
          <p
            style={{
              fontSize: "18px",
              color: "#212543",
            }}
          >
            Сэтгүүлчид өгөх мэдээ
          </p>
        </Row>
        <Row>
          <div
            style={{
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              background: "#FFF",
              filter: "drop-shadow(0px 0px 6px rgba(15, 0, 0, 0.6))",
              padding: "28.6px 27.8px 66.4px 34.7px",
              marginTop: "27.7px",
            }}
          >
            <div style={{ width: "100%", display: "flex" }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, color: "#8c8c8c" }}>Товч мэдээлэл</p>
              </div>
              <div style={{ flex: 2.5 }}>
                <style>
                  {`textarea:focus {
                 outline: none;
               }`}
                </style>

                <textarea
                  style={{
                    width: "calc(100% - 20px)",
                    borderRadius: 15,
                    background: "#FFF",
                    boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.4)",
                    resize: "none",
                    padding: 10,
                  }}
                  rows={6}
                ></textarea>
              </div>
            </div>
            <div style={{ width: "100%", display: "flex", marginTop: 32 }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, color: "#8c8c8c" }}>Мэдээний төрөл</p>
              </div>
              <div style={{ flex: 2.5 }}>
                <input type="text" />
              </div>
            </div>
            <div style={{ width: "100%", display: "flex", marginTop: 32 }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, color: "#8c8c8c" }}>Хавсралт файл</p>
              </div>
              <div style={{ flex: 2.5 }}>
                <input type="file" />
              </div>
            </div>
            <div style={{ width: "100%", display: "flex", marginTop: 32 }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14, color: "#8c8c8c" }}>Яаралтай мэдээ</p>
              </div>
              <div style={{ flex: 2.5 }}>
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales">Тийм</label>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div
                style={{
                  background: "#d4938b",
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.4)",
                  borderRadius: "15px",
                  color: "#FFF",
                  padding: "12px 34px",
                  cursor: "pointer",
                }}
              >
                Илгээх
              </div>
            </div>
          </div>
        </Row>
      </Card>
      <div style={{ flex: 1, marginLeft: 35 }}>
        <Card style={{padding: "17px 12px"}}>
          <Row>
            <p>Холбоотой сэтгүүлчид</p>
          </Row>
        </Card>
        <Card style={{padding: "17px 12px", marginTop: 12}}>
          <Row>
            <p>Хадгалсан сэтгүүлчид</p>
          </Row>
        </Card>
      </div>
    </div>
  );
}
