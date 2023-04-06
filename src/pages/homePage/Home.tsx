import React from "react";
import SupportAndPartners from "./sections/SupportAndPartners";
import BusinessModel from "./sections/BusinessModel";
import NewsFeed from "./sections/NewsFeed";

export default function Home() {
  return (
    <div>
      <SupportAndPartners />
      <BusinessModel />
      <NewsFeed />
    </div>
  );
}
