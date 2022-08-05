import "./App.css";
import openModal, { openModalAccount } from "./components/openModal";

function App() {
  function handleOpenModal() {
    openModal();
  }
  function handleOpenModalTwo() {
    openModalAccount();
  }

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Abrir Modal</button>
      <button onClick={handleOpenModalTwo}>Abrir Modal</button>
    </div>
  );
}

export default App;
