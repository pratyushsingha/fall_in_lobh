import React from "react";

export default function PreWindow({ children }: { children: React.ReactNode }) {
  return <div className=" scale-50 md:scale-100 origin-top-left  rounded-xl shadow-lg overflow-hidden">{children}</div>;
}



//  scale-50   border border-gray-300 rounded-lg shadow-lg