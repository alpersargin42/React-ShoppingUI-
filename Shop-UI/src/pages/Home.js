import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Kadın</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Erkek</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Çocuk</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ev&Mobilya</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Süpermarket</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Kozmetik</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ayakkabı&Çanta</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Saat&Aksesuar</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Elektronik</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Spor&Outdoor</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Ara" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">ARA</button>
                        </form>
                    </div>
                </div>
            </nav>
            <br/>
            <div className="hero is-primary ">
                <div className="hero-body container">
                    <h1 className="title logreg">Ürünler</h1>
                </div>
            </div>
            <main>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                xmlns="http://www.w3.org/2000/svg" role="img"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" />
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">View
                                        </button>
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">Edit
                                        </button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                xmlns="http://www.w3.org/2000/svg" role="img"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" />
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">View
                                        </button>
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">Edit
                                        </button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                xmlns="http://www.w3.org/2000/svg" role="img"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" />
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">View
                                        </button>
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">Edit
                                        </button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                xmlns="http://www.w3.org/2000/svg" role="img"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" />
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">View
                                        </button>
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">Edit
                                        </button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                xmlns="http://www.w3.org/2000/svg" role="img"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" />
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">View
                                        </button>
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">Edit
                                        </button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                xmlns="http://www.w3.org/2000/svg" role="img"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" />
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">View
                                        </button>
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">Edit
                                        </button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                xmlns="http://www.w3.org/2000/svg" role="img"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" />
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">View
                                        </button>
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">Edit
                                        </button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                xmlns="http://www.w3.org/2000/svg" role="img"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" />
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">View
                                        </button>
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">Edit
                                        </button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <svg className="bd-placeholder-img card-img-top" width="100%" height="225"
                                xmlns="http://www.w3.org/2000/svg" role="img"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice"
                                focusable="false"><title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" />
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>

                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">View
                                        </button>
                                        <button type="button"
                                            className="btn btn-sm btn-outline-secondary">Edit
                                        </button>
                                    </div>
                                    <small className="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


        </Fragment >
    )
}