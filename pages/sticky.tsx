import StickyFooter from "../components/StickyFooter";

const sticky = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <h1 className="text-4xl text-center">React Sticky Footer Tutorial</h1>
        <div className="h-[400px] relative px-2 overflow-y-auto">
          <div className="h-[600px]">Another Container with Long content:</div>
          <StickyFooter />
        </div>
      </div>
    </div>
  );
};
export default sticky;
