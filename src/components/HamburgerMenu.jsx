import './HamburgerMenu.css'

export const HamburgerMenu = ({ windowOpen, setWindowOpen }) => {


  function openMenu() {
    setWindowOpen(prev => !prev);
    console.log(windowOpen);
  }


  return (
    <>
      <label className="hamburger-menu">
        <input
          type="checkbox"
          onChange={openMenu}
        />
      </label>
    </>
  );
}