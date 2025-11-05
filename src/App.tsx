import Sidebar from "./components/Sidebar";
import WidgetGrid from "./components/WidgetGrid";

function App() {
  return (
    <div className="max-h-screen min-w-screen flex bg-[#FBFBFB] text-black p-8 gap-8 overflow-hidden">
      <Sidebar />
      <WidgetGrid />
    </div>
  );
}

export default App;
