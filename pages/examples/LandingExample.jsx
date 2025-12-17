const LandingExample = () => {
  return (
    <>
      <div className="container my-5 text-center">
        <h1>Landing Page Example</h1>
        <p className="text-muted">
          This is an example of a single-page landing or portfolio website.
        </p>
      </div>

      {/* HERO SECTION */}
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <h1 className="display-5 fw-bold">Name of your company</h1>
          <p className="lead mt-3">This is an example of a landing page</p>
          <div className="mt-4">
            <a href="#" className="btn btn-warning btn-lg me-2">
              Get Started
            </a>
            <a href="#" className="btn btn-outline-light btn-lg">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <h2>Who We Are</h2>
              <p className="text-muted">
                Here you can enter a description of your business, when was the
                company founded, and many other things.
              </p>
            </div>
            <div className="col-12 col-md-6 text-center">
              <div className="bg-secondary rounded" style={{ height: "220px" }}>
                {/* Placeholder for image */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Services</h2>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Service #1</h5>
                  <p className="card-text text-muted">
                    Descrption of the service you provide
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Service #2</h5>
                  <p className="card-text text-muted">
                    Descrption of the service you provide
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Service #3</h5>
                  <p className="card-text text-muted">
                    Descrption of the service you provide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-5">
        <div className="container text-center">
          <h2>Call to action</h2>
          <p className="text-muted mt-2">
            Here you can also add your social links
          </p>
          <a href="#" className="btn btn-dark btn-lg mt-3">
            <i class="fa-solid fa-phone"></i> Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-light py-3">
        <div className="container text-center">
          <small>
            © {new Date().getFullYear()} Example Company. All rights reserved.
          </small>
        </div>
      </footer>
    </>
  );
};

export default LandingExample;
