import Destinations from "@/components/ui/Homepage/Destinations";
import Hero from "@/components/ui/Homepage/Hero";
import RecentPost from "@/components/ui/Homepage/RecentPost";
import SearchForm from "@/components/ui/Homepage/SearchForm";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <SearchForm />
      <RecentPost />
      <Destinations />
    </>
  );
};

export default page;
