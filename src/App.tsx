import "./App.css";
import { FC, useState } from "react";

const App: FC = () => {
  const [_, setEmojiQuery] = useState("");

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmojiQuery(event.target.value);
  };

  return (
    <div className="container">
      <h1>Emoji Search 🔎</h1>
      <input
        type="text"
        placeholder="Search for an emoji..."
        onChange={handleQueryChange}
      />
    </div>
  );
};

export default App;
