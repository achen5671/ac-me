const Sidebar = () => {
  return (
    <aside
      className="flex flex-col space-y-6 p-4"
      style={{
        width: "400px",
      }}
    >
      {/* todo: give option to make this round or square */}
      {/* todo: make this so it doesnt shrink on window resize */}
      <img
        src="/self-placeholder.png"
        alt="Profile"
        className="w-50 h-50 rounded-2xl border border-black object-cover"
      />
      <h1 className="text-5xl font-extrabold leading-tight">Andy Chen</h1>
      <p className="text-lg text-gray-800 leading-tight">
        Software Engineer <br /> Building Products 0 → 1
      </p>
      {/* <p className="text-xs font-medium opacity-70">andyportfolio.com</p> */}
      <p className="text-xs font-medium opacity-70">ac.me</p>
    </aside>
  );
};

export default Sidebar;
