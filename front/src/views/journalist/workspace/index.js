import React, { useState } from "react";
import Card from "../../../containers/Card";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

const API_URL = window.location.origin.toString();
const UPLOAD_ENDPOINT = "api/photos/upload";
export default function WorkSpace() {
  const [content, setContent] = useState({ body: "", title: "" });
  return (
    <div>
      <Card
        style={{
          padding: "32.5px 42px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            color: "#212543",
            marginBottom: 20,
          }}
        >
          Мэдээ нэмэх
        </p>
        <TextEditor onSubmit={(data) => setContent(data)} />
      </Card>

      <Card style={{ marginTop: 10, padding: "32.5px 42px" }}>
        <h1>{content.title}</h1>
        <div
          className="ck-content"
          dangerouslySetInnerHTML={{ __html: content.body }}
        ></div>
      </Card>
    </div>
  );
}
const iniState = {
  title: "",
  category: "",
};
const TextEditor = ({ onSubmit }) => {
  const [formData, setFormData] = useState(iniState);
  const [uImage, setUImage] = useState("");
  const [body, setBody] = useState(
    `<h2>The three greatest things you learn from traveling</h2><p>Like all the great things on earth traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.</p><p>&nbsp;</p><figure class="image image-style-side"><img src="/news/image/file-1627275234669.jpg"><figcaption>&nbsp;</figcaption></figure><h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p><blockquote><p>The real voyage of discovery consists not in seeking new landscapes, but having new eyes.</p><p><strong>Marcel Proust</strong></p></blockquote><h3>Improvisation</h3><p>Life doesn't allow us to execute every single plan perfectly. This especially seems to be the case when you travel. You plan it down to every minute with a big checklist; but when it comes to executing it, something always comes up and you’re left with your improvising skills. You learn to adapt as you go. Here’s how my travel checklist looks now:</p><ul><li>buy the ticket&nbsp;</li><li>start your adventure&nbsp;</li></ul><h3>Confidence</h3><p>Going to a new place can be quite terrifying. While change and uncertainty makes us scared, traveling teaches us how ridiculous it is to be afraid of something before it happens. The moment you face your fear and see there was nothing to be afraid of, is the moment you discover bliss.</p>`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    publisher({ ...formData, body, image: uImage });
  };

  const publisher = (data) => {
    const token = localStorage.getItem("access");
    axios
      .post("/api/news/", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        if (data.status === "amjilttai") {
          onSubmit({ ...formData, body });
          setFormData(iniState);
          setBody("");
          alert("Amjilttai niitlegdlee");
        } else {
          alert("Please check internet connection");
        }
      });
  };

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("file", file);
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000");
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              body: body,
              // mode: "no-cors"
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({
                  default: `/news/image/${res.filename}`,
                });
                setUImage(`/news/image/${res.filename}`);
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        style={{ marginBottom: "10px", padding: "10px 5px" }}
        type="text"
        placeholder="Гарчиг"
        name="title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        style={{ marginBottom: "10px", padding: "10px 5px" }}
        type="text"
        placeholder="Категори"
        name="category"
        value={formData.category}
        onChange={({ target }) =>
          setFormData({ ...formData, category: target.value })
        }
      />
      <CKEditor
        editor={ClassicEditor}
        data={body}
        config={{
          extraPlugins: [uploadPlugin],
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setBody(data);
        }}
      />
      <button
        style={{
          cursor: "pointer",
          alignSelf: "flex-end",
          marginTop: 20,
          background: "#d4938b",
          color: "#FFF",
          border: "none",
          padding: "5px 20px",
          borderRadius: 5,
        }}
        type="submit"
      >
        Нийтлэх
      </button>
    </form>
  );
};
