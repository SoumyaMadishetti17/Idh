import { useData } from "../context/DataContext";

const Header = () => {
  const { switchDataset } = useData();

  return (
    <div className="topbar">
      <div className="logo">IndiaDataHub</div>

      <input
        className="search"
        placeholder="Search indicators, datasets..."
      />

      <select onChange={(e) => switchDataset(e.target.value)}>
        <option value="DEFAULT">India & States</option>
        <option value="IMF">IMF</option>
      </select>
    </div>
  );
};

export default Header;
