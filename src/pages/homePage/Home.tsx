import React from "react";
import SupportAndPartners from "./sections/SupportAndPartners";
import BusinessModel from "./sections/BusinessModel";
import NewsFeed from "./sections/NewsFeed";
import Services from "./sections/Services";

export default function Home() {
  return (
    <div>
      <Services />
      <SupportAndPartners />
      <BusinessModel />
      <NewsFeed />
    </div>
  );
}
