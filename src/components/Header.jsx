import "../fun.css";

export default function Header() {
  const handleHover = () => {
    const audio = new Audio("/audio/quack.mp3");
    audio.load();
    audio.play();
  };

  return (
    <header className="header">
      <img
        width="75"
        className="rubber-duck"
        src="assets/rubber-duck.webp"
        alt="rubber duck"
        onMouseEnter={handleHover}
      />
      <h1 className="rainbow-text">Yet Another Survey !</h1>
    </header>
  );
}
