import logo from "../assets/pictures/mo.svg";

const HomeBottom = () => {
  return (
    <div className="top-bg">
      <header className="bottom-main-header">
        <div className="bottom-header">
          <div className="divTitleTwo">
            <h1>02</h1>
            <div className="divContentTwo">
              <h2>CLIMB</h2>
              <div className="pointTwo"></div>
            </div>
          </div>
          <div className="paragraphTwo">
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              voluptatum molestiae dolorem dolorum vero voluptatem commodi
              veniam? Ut quia repellendus voluptatibus quidem maiores amet
              sapiente delectus nihil, maxime deserunt quod?
            </h4>
          </div>
        </div>
      </header>
      <main>
        <div className="main-header">
          <div className="main-top">
            <div className="main-visible main-padding">
              <h2>MOUNTAIN 1</h2>
            </div>
            <div className="main-padding">
              <h2>MOUNTAIN 2</h2>
            </div>
          </div>
          <div></div>
        </div>

        <div className="schedule">
          <h2>SCHEDULE</h2>

          <div className="list">
            <div className="dates">
              <p>25 Nov 2016</p>
              <p>25 Nov 2016</p>
              <p style={{ paddingBottom: "15px", paddingTop: "15px" }}>
                25 Nov 2016
              </p>
              <p style={{ paddingBottom: "15px", paddingTop: "15px" }}>
                25 Nov 2016
              </p>
            </div>
            <div className="places">
              <p>VESTBULUM viverra</p>
              <p>VESTBULUM viverra</p>
              <p style={{ paddingBottom: "15px", paddingTop: "15px" }}>
                VESTBULUM viverra
              </p>
              <p style={{ paddingBottom: "15px", paddingTop: "15px" }}>
                VESTBULUM viverra
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bottom-footer">
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
          <img src={logo} alt="" />
          <div style={{ fontSize: "10px" }}>
            <h2>LOSANGELES</h2>
            <h2>MOUNTAINS</h2>
          </div>
        </div>
        <div>
          <p style={{fontSize:"10px",letterSpacing:"1px"}}>COPYRIGHT 2016. ALL RIGHTS RESERVED</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeBottom;
