import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import Result from "./components/Result";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-amber-600 w-screen text-center py-4">
        <div className="flex items-center justify-center space-x-4">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.lQffxUVDMB_VF5jORGI1FAHaE8?pid=Api&P=0&h=180"
            alt="Logo"
            className="h-16 w-16 object-contain"
          />

          <div className="text-left">
            <h1 className="text-3xl font-bold">Polish-AI</h1>
            <h3 className="font-serif text-sm">Get Ai feedback instantly</h3>
          </div>
        </div>
      </div>

      <div className="w-screen text-center py-4">
        <div className="mx-4 my-2">
          <select name="type" id="" className="border-2 px-2 py-1 rounded-sm">
            <option value="resume">Resume</option>
            <option value="essay">Essay</option>
          </select>
        </div>
        <div>
          <textarea
            cols={100}
            rows={8}
            className="border-black border-1 p-2"
            placeholder="Paste your content here"
          ></textarea>
        </div>
        <button className="bg-blue-500 px-4 py-2 rounded-sm cursor-pointer">Submit</button>
      </div>

      <div className=" w-screen text-center py-4">
          <LoadingSpinner />
          <Result />
      </div>

    </div>
  );
}

export default App;
