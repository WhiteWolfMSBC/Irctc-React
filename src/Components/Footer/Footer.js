import React from 'react'

function Footer() {
    return (
        <div className="container-fluid mt-5">

            {/* NavBar */}

            <nav class="navbar1 navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse container-xl container-lg container-md container-sm container-xs" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
                            <li class="nav-item ms-5">
                                <a class="nav-link text-light fs-4 mt-3 fw-light" href="#">
                                    Get Connected with us on social networks
                                </a>
                            </li>
                            <li class="nav-item ms-5">
                                <a class="nav-link text-light fs-5 fw-semibold" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="spare p-3 icon icon-tabler icon-tabler-brand-facebook" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                                    </svg>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class=" nav-link text-light fs-5 fw-semibold" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="spare p-3 icon icon-tabler icon-tabler-brand-youtube" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="3" y="5" width="18" height="14" rx="4"></rect>
                                        <path d="M10 9l5 3l-5 3z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class=" nav-link text-light fs-5 fw-semibold" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="spare p-3 icon icon-tabler icon-tabler-brand-instagram" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                                        <circle cx="12" cy="12" r="3"></circle>
                                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                                    </svg>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light fs-5 fw-semibold" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="spare p-3 icon icon-tabler icon-tabler-brand-linkedin" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                                        <line x1="8" y1="11" x2="8" y2="16"></line>
                                        <line x1="8" y1="8" x2="8" y2="8.01"></line>
                                        <line x1="12" y1="16" x2="12" y2="11"></line>
                                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                    </svg>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light fs-5 fw-semibold" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="spare p-3 icon icon-tabler icon-tabler-brand-telegram" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                                    </svg>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light fs-5 fw-semibold" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="spare p-3 icon icon-tabler icon-tabler-brand-twitter" width="70" height="70" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Footer
