import Sidebar from "./components/Sidebar";
import WidgetGrid from "./components/WidgetGrid";

// todo: review this and see why I couldnt figure the grid width out
// function App() {
//   return (
//     <div className="h-screen w-screen justify-center flex bg-[#FBFBFB] text-black p-8 gap-8">
//       <Sidebar />
//       <WidgetGrid />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="h-screen w-screen flex justify-center items-start bg-[#FBFBFB] text-black p-8 overflow-hidden">
//       <div className="flex gap-8 mx-auto">
//         <Sidebar />
//         <WidgetGrid />
//       </div>
//     </div>
//   );
// }

// max width + w full fix my issue with grid being full width
function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-start bg-[#FBFBFB] text-black p-8">
      <div className="flex gap-8 w-full h-full max-w-[1400px]">
        <Sidebar />

        {/* Grid container */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          <WidgetGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
