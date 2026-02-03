import { useState } from "react";
import { useData } from "../context/DataContext";

const SidebarItem = ({ label, children, level = 0 }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = children && Object.keys(children).length > 0;

  return (
    <div>
      <div
        className={`sidebar-item level-${level}`}
        onClick={() => hasChildren && setOpen(!open)}
      >
        {hasChildren && (
          <span className="arrow">{open ? "▾" : "▸"}</span>
        )}
        <span>{label}</span>
      </div>

      {open &&
        hasChildren &&
        Object.entries(children).map(([key, value]) => (
          <SidebarItem
            key={key}
            label={key}
            children={value}
            level={level + 1}
          />
        ))}
    </div>
  );
};

const Sidebar = () => {
  const { dataset } = useData();

  return (
    <div className="sidebar">
      <div className="sidebar-header">Homepage</div>

      {Object.entries(dataset.categories).map(([key, value]) => (
        <SidebarItem
          key={key}
          label={key}
          children={value}
          level={0}
        />
      ))}
    </div>
  );
};

export default Sidebar;
