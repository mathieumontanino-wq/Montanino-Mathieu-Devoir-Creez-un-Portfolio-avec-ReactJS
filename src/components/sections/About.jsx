import aboutImg from "../../assets/images/john-doe-about.jpg";

function About() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="card shadow p-4">

          <div className="row">

            {/* Colonne gauche */}
            <div className="col-md-6">
              <h4 className="fw-bold border-bottom pb-2 mb-4">
                A propos
              </h4>

              <img
                src={aboutImg}
                alt="Photo de John Doe en train de travailler"
                className="img-fluid rounded mb-3"
              />

              <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at purus euismod, tempus metus luctus, pharetra nulla. Maecenas mattis elit.
              </p>
              <p>
               Pellentesque facilisis ultricies sapien, non finibus tortor porttitor ac. Nam a vulputate lorem. Nam ut mauris faucibus, commodo justo nec.
              </p>
              <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at purus euismod, tempus metus luctus, pharetra nulla. Maecenas mattis elit.
              </p>
            </div>

            {/* Colonne droite */}
            <div className="col-md-6">
              <h4 className="fw-bold border-bottom pb-2 mb-4">
                Mes compétences
              </h4>

              <div className="mb-3">
                <span>HTML5 90%</span>
                <div className="progress">
                  <div className="progress-bar bg-danger" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div className="mb-3">
                <span>CSS3 80%</span>
                <div className="progress">
                  <div className="progress-bar bg-info" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="mb-3">
                <span>JAVASCRIPT 70%</span>
                <div className="progress">
                  <div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
                </div>
              </div>

              <div className="mb-3">
                <span>PHP 60%</span>
                <div className="progress">
                  <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
                </div>
              </div>

              <div className="mb-3">
                <span>REACT 50%</span>
                <div className="progress">
                  <div className="progress-bar bg-primary" style={{ width: "50%" }}></div>
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
