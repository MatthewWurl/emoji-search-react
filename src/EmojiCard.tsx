import { Emoji } from "./types";

interface EmojiCardProps {
  emoji: Emoji;
}

const EmojiCard = ({ emoji }: EmojiCardProps) => {
  return <p>{emoji.symbol}</p>;
};

export default EmojiCard;
