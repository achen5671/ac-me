import Sidebar from "./components/Sidebar";
import WidgetGrid from "./components/WidgetGrid";

function App() {
  return (
    <div className="min-h-screen w-full flex bg-white text-black p-8 gap-8">
      <Sidebar />
      <WidgetGrid />
    </div>
  );
}

export default App;
