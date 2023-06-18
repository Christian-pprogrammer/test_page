import logo from "../assets/pictures/mo.svg";
import s2 from '../assets/pictures/s2 (2).png'
import s4 from '../assets/pictures/s4.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HomeMiddle = () => {
  return (
    <div className="middle-bg">
      <header className="middle-header">
        <div className="middle-header-left">
          <img src={logo} alt="" />
          <h2>
            <span className="span-one">LOSANGELES</span>
            <span className="span-two">MOUNTAINS</span>
          </h2>
        </div>

        <div className="middle-header-right">
          <h4>01. HISTORY</h4>
          <h4>02. TEAM</h4>
        </div>
      </header>
      <main className="middle1">
        <div className="middleTitle">
          <div className="divTitle">
            <h1>01</h1>
            <div className="divContent">
              <h2>HISTORY</h2>
              <div className="point"></div>
            </div>
          </div>
          <p className="pragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            repellendus vero magnam, consectetur tenetur quia asperiores
            quisquam. Saepe tempora possimus facere. Autem necessitatibus libero
            laborum dignissimos nam optio, nulla voluptas facere architecto?
            Fuga earum quidem ducimus maiores, repellat quasi quae alias libero
            unde quas temporibus delectus doloremque exercitationem laboriosam
            quam?
          </p>
        </div>
      </main>

      <footer className="middle-footer">
        <Carousel showThumbs={false} width={"100%"}>
          <div className="carousel-container">
            <div>
              <img className="carousel-image" src={s2} />
            </div>
            <div>
              <img className="carousel-image" src={s4} />
            </div>
            <div>
              <img className="carousel-image" src={s2} />
            </div>
          </div>
          <div className="carousel-container">
            <div>
              <img className="carousel-image" src={s4} />
            </div>
            <div>
              <img className="carousel-image" src={s2} />
            </div>
            <div>
              <img className="carousel-image" src={s4} />
            </div>
          </div>
        </Carousel>
      </footer>
    </div>
  );
};

export default HomeMiddle;
