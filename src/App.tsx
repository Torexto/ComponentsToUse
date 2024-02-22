import ThemeToggler from "./components/ThemeToggler";

function App() {
  return (
    <div className="dark:bg-slate-600 bg-slate-300 grid h-screen w-full place-items-center">
      <ThemeToggler />
    </div>
  );
}

export default App;
