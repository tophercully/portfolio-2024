import TypingAnimation from "./components/LandingAnimation";
import { setPageTitle } from "./util/setPageTitle";

function App() {
  setPageTitle("Home");
  const textBlocks = [
    "Welcome!",
    "",
    "You've only been here for less than a second, (or insert time since load, maybe only count for as long as 5 seconds because the joke isn't that funny if it goes longer)",
    "but I know what you're thinking—",
    '"Wow, he has really fleshed out this website. Maybe he has too much free time?" ',
    "and you're right.",
    "If you're here you're probably thinking about hiring me, which I think is great!",
    "I would love to stop working on this website and get moving on some world-changing, life-improving, downright-useful product.",
    "Just say the word :)",
    "You can email me to tell me I'm hired",
    "Or you can take a look at my portfolio",
    " - Chris",
  ];

  return (
    <>
      <TypingAnimation
        text={textBlocks}
        typingSpeed={25}
        pauseDuration={600}
      />
    </>
  );
}

export default App;
