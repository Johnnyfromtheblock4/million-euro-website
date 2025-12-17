const DatabaseExample = () => {
  return (
    <>
      <div className="container my-5 text-center">
        <h1>Full Website with Database Example</h1>
        <p className="text-muted">
          Example of a web application with backend and database integration.
        </p>
      </div>

      {/* FAKE APP HEADER */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand">Web App Dashboard</span>
          <span className="text-light small">Logged in as Admin</span>
        </div>
      </nav>

      {/* PAGE INTRO */}
      <section className="container my-5 text-center">
        <h1>Name of your company</h1>
        <p className="text-muted">
          This is an example of a website with database
        </p>
      </section>

      {/* DASHBOARD STATS */}
      <section className="container mb-5">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5>Total Users</h5>
                <h2 className="fw-bold">128</h2>
                <p className="text-muted">Data loaded from database</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5>Active Projects</h5>
                <h2 className="fw-bold">24</h2>
                <p className="text-muted">Managed dynamically</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <h5>Messages</h5>
                <h2 className="fw-bold">56</h2>
                <p className="text-muted">Stored in database</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA TABLE */}
      <section className="container mb-5">
        <h2 className="mb-3">Database Records</h2>
        <p className="text-muted">
          Below is an example of data retrieved from a database and displayed in
          a table.
        </p>

        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>john@example.com</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>jane@example.com</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mark Brown</td>
                <td>mark@example.com</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CRUD EXPLANATION */}
      <section className="container mb-5">
        <h2>What You Can Do</h2>
        <ul className="text-muted">
          <li>Create, edit, and delete database records</li>
          <li>User authentication and authorization</li>
          <li>Admin dashboard and user roles</li>
          <li>Forms connected to backend APIs</li>
          <li>Real-time updates (optional)</li>
        </ul>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2>Need a Custom Web Application?</h2>
          <p className="text-muted mt-2">
            This is just a visual example. Your project can be fully customized
            based on your business needs.
          </p>
          <a href="/contact" className="btn btn-dark btn-lg mt-3">
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-light py-3">
        <div className="container text-center">
          <small>
            © {new Date().getFullYear()} Example App. All rights reserved.
          </small>
        </div>
      </footer>
    </>
  );
};

export default DatabaseExample;
