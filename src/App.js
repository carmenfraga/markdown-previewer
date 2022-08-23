import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";
import markdownText from "./markdown.md";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(markdownText)
      .then((response) => response.text())
      .then((responseText) => {
        setText(responseText);
      });
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="px-4 text-center">
      <h1 className="mb-4">My Markdown Previewer</h1>
      <textarea id="editor" value={text} onChange={handleChange}></textarea>
      <ReactMarkdown id="preview">{text}</ReactMarkdown>
    </div>
  );
}

export default App;
