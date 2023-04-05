import type { NextPage } from "next";
import FixedFooter from "../components/FixedFooter";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="container mx-auto flex h-[2000px]">
        <h1 className="text-4xl text-center">React Sticky Footer Tutorial</h1>
      </div>
      <FixedFooter />
    </div>
  );
};

export default Home;
