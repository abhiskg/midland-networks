import React from "react";
import SupportAndPartners from "./sections/SupportAndPartners";
import BusinessModel from "./sections/BusinessModel";
import NewsFeed from "./sections/NewsFeed";
import Services from "./sections/Services";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <SupportAndPartners />
      <BusinessModel />
      <NewsFeed />
    </div>
  );
}
