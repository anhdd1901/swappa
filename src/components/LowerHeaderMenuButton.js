import "./LowerHeaderMenuButton.scss";

export default function LowerHeaderMenuButton({ info }) {
  return (
    <button className={`lower-header-menu-button ${info.btnReponsive}`}>
      {info.btnIcon} {info.btnName}
      <ul>
        {info.list.map((value) => (
          <li key={value.name} className={`lower-header-menu-dropdown ${value.reponsive}`}>
            {value.icon} {value.name}
          </li>
        ))}
      </ul>
    </button>
  );
}
