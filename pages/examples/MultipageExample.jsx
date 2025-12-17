const MultipageExample = () => {
  return (
    <>
      <div className="container my-5 text-center">
        <h1>Multi-Page Website Example</h1>
        <p className="text-muted">
          This example shows a professional multi-page website structure.
        </p>
      </div>

      {/* FAKE HEADER / NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Your Company</span>

          <ul className="navbar-nav ms-auto flex-row gap-3">
            <li className="nav-item text-light">Home</li>
            <li className="nav-item text-light">About</li>
            <li className="nav-item text-light">Services</li>
            <li className="nav-item text-light">Contact</li>
          </ul>
        </div>
      </nav>

      {/* PAGE TITLE */}
      <section className="container my-5 text-center">
        <h1>Name of your company</h1>
        <p className="text-muted">
          This is an example of a multipage website
        </p>
      </section>

      {/* HOME PAGE SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2>Home Page</h2>
          <p className="text-muted">
            This page is usually the first impression of your business. It
            introduces your company, highlights your main value proposition, and
            guides users to the most important sections of the website.
          </p>
        </div>
      </section>

      {/* ABOUT PAGE SECTION */}
      <section className="py-5">
        <div className="container">
          <h2>About Page</h2>
          <p className="text-muted">
            Here you can tell your story: who you are, what your mission is,
            when the company was founded, and why customers should trust you.
          </p>
        </div>
      </section>

      {/* SERVICES PAGE SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2>Services Page</h2>
          <p className="text-muted">
            This page describes in detail the services you offer. Each service
            can have its own section or even its own dedicated page.
          </p>

          <ul className="text-muted">
            <li>Service description and benefits</li>
            <li>Pricing or packages</li>
            <li>Use cases and examples</li>
          </ul>
        </div>
      </section>

      {/* CONTACT PAGE SECTION */}
      <section className="py-5">
        <div className="container">
          <h2>Contact Page</h2>
          <p className="text-muted">
            This page allows users to get in touch with you using a contact
            form, email address, phone number, or social media links.
          </p>
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

export default MultipageExample;
