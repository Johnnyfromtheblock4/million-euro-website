import React from "react";

const PixelList = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Pixel List</h1>
      <p className="text-center text-muted mb-5">
        A public list of all purchased pixels and related projects.
      </p>

      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark text-center">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Package</th>
              <th>Pixel Count</th>
              <th>Link</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {/* EXAMPLE ROW 1 */}
            <tr>
              <td className="text-center">1</td>
              <td>John Doe Portfolio</td>
              <td>Landing Page</td>
              <td className="text-center">1</td>
              <td>
                <a
                  href="https://johndoe.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  johndoe.dev
                </a>
              </td>
              <td className="text-center">x: 120 · y: 340</td>
              <td className="text-center">
                <span className="badge bg-success">Active</span>
              </td>
            </tr>

            {/* EXAMPLE ROW 2 */}
            <tr>
              <td className="text-center">2</td>
              <td>Startup XYZ</td>
              <td>Multi-Page Website</td>
              <td className="text-center">10</td>
              <td>
                <a
                  href="https://startupxyz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  startupxyz.com
                </a>
              </td>
              <td className="text-center">x: 450 · y: 210</td>
              <td className="text-center">
                <span className="badge bg-success">Active</span>
              </td>
            </tr>

            {/* EXAMPLE ROW 3 */}
            <tr>
              <td className="text-center">3</td>
              <td>My SaaS Project</td>
              <td>Full Website + DB</td>
              <td className="text-center">50</td>
              <td>
                <a
                  href="https://mysaas.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mysaas.io
                </a>
              </td>
              <td className="text-center">x: 700 · y: 580</td>
              <td className="text-center">
                <span className="badge bg-warning text-dark">
                  In Development
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-muted small mt-3">
        Pixel locations are approximate and represent the top-left position of
        the purchased area.
      </p>
    </div>
  );
};

export default PixelList;
