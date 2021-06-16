import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="container bg-light text-dark">
      <div className="row justify-content-center">
        <nav className="navbar navbar-expand-lg">
          <div className="col-6 d-flex justify-content-start">
            <div>
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={
                      window.location.pathname === "/"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Search
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/SavedBooks"
                    className={
                      window.location.pathname === "/saved"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Saved Books
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
