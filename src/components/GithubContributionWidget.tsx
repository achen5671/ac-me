import React, { useEffect, useState } from "react";

// const GitHubContributionWidget = ({ username = "achen5671" }) => {
//   const [svg, setSvg] = useState("");

//   useEffect(() => {
//     const fetchContributions = async () => {
//       try {
//         const res = await fetch(
//           `https://github.com/users/${username}/contributions`
//         );
//         if (!res.ok) throw new Error("Failed to fetch contributions");

//         const text = await res.text();
//         setSvg(text);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchContributions();
//   }, [username]);

//   return (
//     <div className="w-full h-full rounded-3xl border border-[#D1D1D6] overflow-hidden shadow-lg p-4 bg-white">
//       <h2 className="text-lg font-semibold mb-2">GitHub Contributions</h2>
//       <div
//         className="overflow-auto"
//         dangerouslySetInnerHTML={{ __html: svg }}
//       />
//     </div>
//   );
// };

// const GitHubContributionWidget = ({ username = "andy-chen" }) => {
//   return (
//     <div className="w-full h-full rounded-3xl border border-[#D1D1D6] overflow-hidden shadow-lg p-4 bg-white flex flex-col">
//       <h2 className="text-lg font-semibold mb-2">GitHub Contributions</h2>
//       <img
//         src={`https://ghchart.rshah.org/achen5671`}
//         alt="GitHub Contributions"
//         className="w-full h-auto"
//       />
//     </div>
//   );
// };

export default GitHubContributionWidget;
