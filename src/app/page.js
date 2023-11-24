import Image from "next/image";
import HomeHeader from "./components/HomeHeader";
import HomeSearch from "./components/HomeSearch";

const Page = () => {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
        />
        <HomeSearch />
      </div>
    </>
  );
};

export default Page;
