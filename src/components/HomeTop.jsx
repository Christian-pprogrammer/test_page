import logo from '../assets/pictures/mo.svg'

const HomeTop = () => {
  return (
    <>
      <div className="top-bg">
        <header className="top-header">
          <img className="img" src={logo} alt="" />
          <div>
            <h4>01. HISTORY</h4>
            <h4>02. TEAM</h4>
          </div>
        </header>
        <footer></footer>
      </div>
    </>
  );
};

export default HomeTop;
