import React from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

function App() {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea id="editor" value={text} onChange={handleChange}></textarea>
      <ReactMarkdown id="preview">{text}</ReactMarkdown>
    </div>
  );
}

export default App;
