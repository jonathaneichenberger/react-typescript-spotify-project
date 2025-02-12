import './Main.css'
import TopList from "./top-list-component/TopList"
import BottomList from "./bottom-list-component/BottomList"

const Main = () => {
  return (
    <div className="main">
      <TopList />
      <BottomList />
    </div>
  );
};

export default Main;
