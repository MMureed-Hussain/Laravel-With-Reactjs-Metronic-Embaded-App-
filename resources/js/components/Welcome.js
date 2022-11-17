import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <>
            <div id="kt_body" className="app-blank app-blank bgi-size-cover bgi-position-center bgi-no-repeat">
                {/*begin::Theme mode setup on page load*/}
                <script>var defaultThemeMode = "light"; var themeMode; if ( document.documentElement ) {'{'} if ( document.documentElement.hasAttribute("data-theme-mode")) {'{'} themeMode = document.documentElement.getAttribute("data-theme-mode"); {'}'} else {'{'} if ( localStorage.getItem("data-theme") !== null ) {'{'} themeMode = localStorage.getItem("data-theme"); {'}'} else {'{'} themeMode = defaultThemeMode; {'}'} {'}'} if (themeMode === "system") {'{'} themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; {'}'} document.documentElement.setAttribute("data-theme", themeMode); {'}'}</script>
                {/*end::Theme mode setup on page load*/}
                {/*begin::Root*/}
                <div className="d-flex flex-column flex-root" id="kt_app_root" style={{backgroundImage:"url('assets/media/auth/bg8.jpg')"}}>
                    {/*begin::Page bg image*/}
                    {/*end::Page bg image*/}
                    {/*begin::Authentication - Signup Welcome Message */}
                    <div className="d-flex flex-column flex-center flex-column-fluid">
                        {/*begin::Content*/}
                        <div className="d-flex flex-column flex-center text-center p-10">
                            {/*begin::Wrapper*/}
                            <div className="card card-flush w-md-650px py-5">
                                <div className="card-body py-15 py-lg-20">
                                    {/*begin::Logo*/}
                                    <div className="mb-7">
                                        <Link to="/#" className="">
                                            <img alt="Logo" src="./resources/icons/download.jpg" className="h-40px" />
                                        </Link>
                                    </div>
                                    {/*end::Logo*/}
                                    {/*begin::Title*/}
                                    <h1 className="fw-bolder text-gray-900 mb-5">Welcome to Trello</h1>
                                    {/*end::Title*/}
                                    {/*begin::Text*/}
                                    <div className="fw-semibold fs-6 text-gray-500 mb-7">This is your opportunity to get creative and make a name
                                        <br />that gives readers an idea</div>
                                    {/*end::Text*/}
                                    {/*begin::Illustration*/}
                                    <div className="mb-0">
                                        <img src="assets/media/auth/welcome.png" className="mw-100 mh-300px theme-light-show" alt="" />
                                        <img src="assets/media/auth/welcome-dark.png" className="mw-100 mh-300px theme-dark-show" alt="" />
                                    </div>
                                    {/*end::Illustration*/}
                                    {/*begin::Link*/}
                                    <div className="mb-0">
                                        <Link className="btn btn-sm btn-primary" to="/Register">New User</Link>
                                              <h5>or</h5>
                                        <Link className="btn btn-sm btn-primary" to="/Login">Login</Link>
                                    </div>
                                    {/*end::Link*/}
                                </div>
                            </div>
                            {/*end::Wrapper*/}
                        </div>
                        {/*end::Content*/}
                    </div>
                    {/*end::Authentication - Signup Welcome Message*/}
                </div>
                {/*end::Root*/}
            </div>

        </>
    )
}

export default Welcome;