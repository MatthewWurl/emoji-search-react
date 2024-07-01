import "./App.css";
import { FC, useState } from "react";
import emojis from "./json/emojis.json";

interface Emoji {
  title: string;
  symbol: string;
  keywords: string;
}

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
      <div className="emojis">
        {emojis.map((emoji: Emoji) => (
          <p>{emoji.symbol}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
