import "./App.css";
import { FC, useEffect, useState } from "react";

interface Emoji {
  symbol: string;
  keywords: string[];
}

const App: FC = () => {
  const [emojiData, setEmojiData] = useState<Emoji[]>([]);
  const [emojiQuery, setEmojiQuery] = useState("");

  useEffect(() => {
    fetch("https://unpkg.com/emojilib@3.0.12/dist/emoji-en-US.json")
      .then((res) => res.json())
      .then((data) => {
        const formattedData: Emoji[] = Object.entries(data).map(([x, y]) => ({
          symbol: x,
          keywords: y as string[],
        }));

        console.log(formattedData);

        setEmojiData(formattedData);
      })
      .catch((error) => console.error(error));
  }, []);

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
      {/* <div className="emojis">
        {emojis.map((emoji: Emoji, index: number) => (
          <p key={index}>{emoji.symbol}</p>
        ))}
      </div> */}
    </div>
  );
};

export default App;
