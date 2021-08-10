import { Navbar } from "../../components/Navbar";
import { Featured } from "../../components/Featured";
import "./style.scss";
import { List } from "../../components/List";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured type="Movies"/>
      <List />
      {/* <List />
      <List />
      <List /> */}
    </div>
  );
};

