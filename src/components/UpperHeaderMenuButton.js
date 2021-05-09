import "./UpperHeaderMenuButton.scss";

export default function UpperHeaderMenuButton({
  dropdownButton,
  currentShownStatus,
  showDropdownMenu,
  type2,
  content,
}) {
  return (
    <button
      onClick={() => {
        if (dropdownButton) showDropdownMenu(!currentShownStatus);
      }}
      className={`width upper-header-menu-button ${
        type2 ? "upper-header-menu-button-2" : ""
      }`}
    >
      {content}
    </button>
  );
}
