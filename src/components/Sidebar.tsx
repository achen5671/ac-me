import FlipCard from "./FlipCard";

const Sidebar = () => {
  return (
    <aside
      className="
        flex flex-col justify-between 
        p-6 
        w-[400px] 
        overflow-hidden
        max-h-screen
      "
      // border-r border-black
    >
      {/* Top Section */}
      <div className="flex flex-col items-start space-y-4">
        {/* <img
          src="/self-placeholder.png"
          alt="Profile"
          className="w-40 h-40 rounded-2xl border border-black object-cover"
        /> */}
        <FlipCard
          frontImage="self-placeholder.png"
          backImage="myself.png"
          size={160}
        />

        <h1 className="text-5xl font-extrabold leading-tight">Andy Chen</h1>

        <div className="leading-tight gap-12">
          <p className="text-lg text-gray-800 pb-4">Building Products 0 → 1</p>
          <p className="font-bold text-[#565656] pb-4">💻 Software Engineer</p>
          <a
            className="underline text-gray-500 text-sm cursor-pointer"
            href="Andy_Chen_Resume.pdf"
            download="Andy_Chen_Resume.pdf"
          >
            📄 resume
          </a>
        </div>
      </div>

      {/* Bottom Sticky Footer */}
      <p className="text-xs font-medium opacity-70">ac.me</p>
    </aside>
  );
};

export default Sidebar;
