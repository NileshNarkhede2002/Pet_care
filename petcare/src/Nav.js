import React from "react";
import{Link} from "react-router-dom";
function Nav() {
    return (
        
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                <Link to="/Home" class="navbar-brand ms-lg-5">
                    <h1 class="m-0 text-uppercase text-dark"><i class="bi bi-shop fs-1 text-primary me-3"></i>Pet Shop</h1>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <Link to="/Home" class="nav-item nav-link active">Home</Link>
                        <Link to="/About" class="nav-item nav-link">About</Link>
                        <Link to="/Service" class="nav-item nav-link">Service</Link>
                        <Link to="/Product" class="nav-item nav-link">Product</Link>
                        <div class="nav-item dropdown">
                            <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                            <div class="dropdown-menu m-0">
                                <Link to="/Offer" class="dropdown-item">Pricing Plan</Link>
                                <Link to="/Team" class="dropdown-item">The Team</Link>
                                <Link to="/Team" class="dropdown-item">Testimonial</Link>
                                <Link to="/Blog" class="dropdown-item">Blog Grid</Link>
                                <Link to="/Blog" class="dropdown-item">Blog Detail</Link>
                            </div>
                        </div>
                        <Link to="contact.html" class="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">Contact <i class="bi bi-arrow-right"></i></Link>
                    </div>
                </div>
            </nav>
      
    );
}
export default Nav;