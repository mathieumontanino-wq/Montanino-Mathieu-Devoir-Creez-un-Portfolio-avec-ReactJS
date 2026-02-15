import aboutImg from "../../assets/images/john-doe-about.jpg";

function About() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="about-card p-5 shadow-sm">

          <div className="row">

            {/* Colonne gauche */}
            <div className="col-12 col-lg-6">

              <h4 className="section-title">A propos</h4>
              <div className="section-line"></div>

              <img
                src={aboutImg}
                alt="John Doe en train de travailler"
                className="about-img mb-4"
              />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla at purus euismod, tempus metus luctus, pharetra nulla.
                Maecenas mattis elit.
              </p>

              <p>
                Pellentesque facilisis ultricies sapien, non finibus tortor
                porttitor ac. Nam a vulputate lorem. Nam ut mauris faucibus,
                commodo justo nec.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla at purus euismod, tempus metus luctus, pharetra nulla.
                Maecenas mattis elit.
              </p>

            </div>

            {/* Colonne droite */}
            <div className="col-12 col-lg-6">

              <h4 className="section-title">Mes compétences</h4>
              <div className="section-line"></div>

              {/* HTML */}
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>HTML5</span>
                  <span>90%</span>
                </div>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              {/* CSS */}
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>CSS3</span>
                  <span>80%</span>
                </div>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              {/* JS */}
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>JAVASCRIPT</span>
                  <span>70%</span>
                </div>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>

              {/* PHP */}
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>PHP</span>
                  <span>60%</span>
                </div>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>

              {/* React */}
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <span>REACT</span>
                  <span>50%</span>
                </div>
                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
