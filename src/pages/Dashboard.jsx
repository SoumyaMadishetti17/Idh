import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="layout">
        <Sidebar />
        <Table />
      </div>
    </>
  );
};

export default Dashboard;
