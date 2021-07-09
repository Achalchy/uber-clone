import React from "react";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
const Header = () => {
  return (
    <div className="md:bg-black md:text-white bg-transparent  h-14 px-5 w-full flex items-center justify-around text-black">
      <div className="left flex items-center justify-between ">
        <div>
          <h1 className="brand font-mono font-bold  mr-20 md:ml-10 text-2xl md:text-3xl">
            uber
          </h1>
        </div>
        <div className="mr-5 md:block  hidden">
          <ListItem title="Ride" href="/" />
          <ListItem title="Drive" href="/" />
          <ListItem title="More" href="/" />
        </div>
      </div>
      <div className="right flex items-end justify-end ">
        <div className=" md:block hidden">
          <ListItem title="Help" href="/" />
          <ListItem title="Achal" href="/" />
        </div>
        <div className="flex justify-between items-center w-20">
          <AddCircleOutlineRoundedIcon className="text-black" />
          <PersonRoundedIcon className="text-black" />
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ title, href }) => {
  return (
    <>
      <a className="px-3 link" href={href}>
        {title}
      </a>
    </>
  );
};

export default Header;
