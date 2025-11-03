const Sidebar = () => {
  return (
    <aside className="w-64 flex flex-col space-y-6">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-2xl border border-black object-cover"
      />
      <h1 className="text-3xl font-extrabold leading-tight">Andy Chen</h1>
      <p className="text-sm text-gray-800 leading-tight">
        Software Engineer <br /> Building Products 0 → 1
      </p>
      <p className="text-xs font-medium opacity-70">andyportfolio.com</p>
    </aside>
  );
};

export default Sidebar;
