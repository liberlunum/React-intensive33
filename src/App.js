import "./App.css";
import Lesson02classComponent from "./homework/Lesson02classComponent";
import Lesson02functionComponent from "./homework/Lesson02functionComponent";

function App() {
  const books = [
    {
      id: 1,
      author: "Виктор Дашкевич",
      book: "граф Аверин",
    },
    {
      id: 2,
      author: "Лия Арден",
      book: "Мара и Морок",
    },
    {
      id: 3,
      author: "Холли Блэк",
      book: "Жестокий принц",
    },
    {
      id: 4,
      author: "Квон Гёыль",
      book: "Единственный конец злодейки - смерть",
    },
    {
      id: 5,
      author: "Тахира Мафи",
      book: "Разрушь меня",
    },
    {
      id: 6,
      author: "Линнетт Нони",
      book: "Мятежная королева",
    },
  ];
  return (
    <div className="App">
      <Lesson02classComponent />
      <Lesson02functionComponent books={books} />
    </div>
  );
}

export default App;
