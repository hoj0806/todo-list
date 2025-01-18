import AddButton from "./components/AddButton";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className='bg-white-20 max-w-screen-2xl mx-auto'>
      <Header />
      <div className='h-11 flex border-solid'>
        <SearchBar />
        <AddButton />
      </div>
      {/* <AddButton /> */}
    </div>
  );
}

export default App;
