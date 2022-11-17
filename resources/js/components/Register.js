import React from 'react';
import { Link } from 'react-router-dom';



function Register() {

    return (
        <>
            <div id="kt_body" className="app-blank app-blank" >
                {/*begin::Theme mode setup on page load*/}
                <script>var defaultThemeMode = "light"; var themeMode; if ( document.documentElement ) {'{'} if ( document.documentElement.hasAttribute("data-theme-mode")) {'{'} themeMode = document.documentElement.getAttribute("data-theme-mode"); {'}'} else {'{'} if ( localStorage.getItem("data-theme") !== null ) {'{'} themeMode = localStorage.getItem("data-theme"); {'}'} else {'{'} themeMode = defaultThemeMode; {'}'} {'}'} if (themeMode === "system") {'{'} themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; {'}'} document.documentElement.setAttribute("data-theme", themeMode); {'}'}</script>
                {/*end::Theme mode setup on page load*/}
                {/*begin::Root*/}
                <div className="d-flex flex-column flex-root" id="kt_app_root">
                    {/*begin::Authentication - Sign-up */}
                    <div className="d-flex flex-column flex-lg-row flex-column-fluid ">
                        {/*begin::Body*/}
                        <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
                            {/*begin::Form*/}
                            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                                {/*begin::Wrapper*/}
                                <div className="w-lg-500px p-10">
                                    {/*begin::Form*/}
                                    <form className="form w-100" noValidate="novalidate" id="kt_sign_up_form" data-kt-redirect-url="/Login" action="#">
                                        {/*begin::Heading*/}
                                        <div className="text-center mb-11">
                                            {/*begin::Title*/}
                                            <h1 className="text-dark fw-bolder mb-3">Sign Up</h1>
                                            {/*end::Title*/}
                                            {/*begin::Subtitle*/}
                                            <div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
                                            {/*end::Subtitle=*/}
                                        </div>
                                        {/*begin::Heading*/}
                                        {/*begin::Login options*/}
                                        <div className="row g-3 mb-9">
                                            {/*begin::Col*/}
                                            <div className="col-md-6">
                                                {/*begin::Google link=*/}
                                                <Link to="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                                                    <img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-15px me-3" />Sign in with Google</Link>
                                                {/*end::Google link=*/}
                                            </div>
                                            {/*end::Col*/}
                                            {/*begin::Col*/}
                                            <div className="col-md-6">
                                                {/*begin::Google link=*/}
                                                <Link to="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                                                    <img alt="Logo" src="assets/media/svg/brand-logos/apple-black.svg" className="theme-light-show h-15px me-3" />
                                                    <img alt="Logo" src="assets/media/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show h-15px me-3" />Sign in with Apple</Link>
                                                {/*end::Google link=*/}
                                            </div>
                                            {/*end::Col*/}
                                        </div>
                                        {/*end::Login options*/}
                                        {/*begin::Separator*/}
                                        <div className="separator separator-content my-14">
                                            <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
                                        </div>
                                        {/*end::Separator*/}
                                        {/*begin::Input group=*/}
                                        <div className="fv-row mb-8">
                                            {/*begin::Email*/}
                                            <input type="text" placeholder="Email" name="email" autoComplete="off" className="form-control bg-transparent" />
                                            {/*end::Email*/}
                                        </div>
                                        {/*begin::Input group*/}
                                        <div className="fv-row mb-8" data-kt-password-meter="true">
                                            {/*begin::Wrapper*/}
                                            <div className="mb-1">
                                                {/*begin::Input wrapper*/}
                                                <div className="position-relative mb-3">
                                                    <input className="form-control bg-transparent" type="password" placeholder="Password" name="password" autoComplete="off" />
                                                    <span className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
                                                        <i className="bi bi-eye-slash fs-2"></i>
                                                        <i className="bi bi-eye fs-2 d-none"></i>
                                                    </span>
                                                </div>
                                                {/*end::Input wrapper*/}
                                                {/*begin::Meter*/}
                                                <div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                                                    <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                                    <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                                    <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                                    <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                                                </div>
                                                {/*end::Meter*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                            {/*begin::Hint*/}
                                            <div className="text-muted">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
                                            {/*end::Hint*/}
                                        </div>
                                        {/*end::Input group=*/}
                                        {/*end::Input group=*/}
                                        <div className="fv-row mb-8">
                                            {/*begin::Repeat Password*/}
                                            <input placeholder="Repeat Password" name="confirm-password" type="password" autoComplete="off" className="form-control bg-transparent" />
                                            {/*end::Repeat Password*/}
                                        </div>
                                        {/*end::Input group=*/}
                                        {/*begin::Accept*/}
                                        <div className="fv-row mb-8">
                                            <label className="form-check form-check-inline">
                                                <input className="form-check-input" type="checkbox" name="toc" value="1" />
                                                <span className="form-check-label fw-semibold text-gray-700 fs-base ms-1">I Accept the
                                                    <Link to="#" className="ms-1 link-primary">Terms</Link></span>
                                            </label>
                                        </div>
                                        {/*end::Accept*/}
                                        {/*begin::Submit button*/}
                                        <div className="d-grid mb-10">
                                            <button type="submit" id="kt_sign_up_submit" className="btn btn-primary">
                                                {/*begin::Indicator label*/}
                                                <span className="indicator-label">Sign up</span>
                                                {/*end::Indicator label*/}
                                                {/*begin::Indicator progress*/}
                                                <span className="indicator-progress">Please wait...
                                                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                {/*end::Indicator progress*/}
                                            </button>
                                        </div>
                                        {/*end::Submit button*/}
                                        {/*begin::Sign up*/}
                                        <div className="text-gray-500 text-center fw-semibold fs-6">Already have an Account?
                                            <Link className="link-primary fw-semibold" to ="/Login">Sign in</Link></div>
                                        {/*end::Sign up*/}
                                    </form>
                                    {/*end::Form*/}
                                </div>
                                {/*end::Wrapper*/}
                            </div>
                            {/*end::Form*/}
                            {/*begin::Footer*/}
                            <div className="d-flex flex-center flex-wrap px-5">
                                {/*begin::Links*/}
                                <div className="d-flex fw-semibold text-primary fs-base">
                                    <Link to="../../demo1/dist/pages/team.html" className="px-5" target="_blank">Terms</Link>
                                    <Link to="../../demo1/dist/pages/pricing/column.html" className="px-5" target="_blank">Plans</Link>
                                    <Link to="../../demo1/dist/pages/contact.html" className="px-5" target="_blank">Contact Us</Link>
                                </div>
                                {/*end::Links*/}
                            </div>
                            {/*end::Footer*/}
                        </div>
                        {/*end::Body*/}
                        {/*begin::Aside*/}
                        <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{ backgroundImage: "url(assets/media/misc/auth-bg.png)" }}>
                            {/*begin::Content*/}
                            <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
                                {/*begin::Logo*/}
                                <Link to="Welcome" className="mb-0 mb-lg-12">
                                    <img alt="Logo" src="assets/media/logos/custom-1.png" className="h-60px h-lg-75px" />
                                </Link>
                                {/*end::Logo*/}
                                {/*begin::Image*/}
                                <img className="d-none d-lg-block mx-auto w-275px w-md-50 w-xl-500px mb-10 mb-lg-20" src="assets/media/misc/auth-screens.png" alt="" />
                                {/*end::Image*/}
                                {/*begin::Title*/}
                                <h1 className="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">Fast, Efficient and Productive</h1>
                                {/*end::Title*/}
                                {/*begin::Text*/}
                                <div className="d-none d-lg-block text-white fs-base text-center">In this kind of post,
                                    <Link to="#" className="opacity-75-hover text-warning fw-bold me-1">the blogger</Link>introduces a person they’ve interviewed
                                    <br />and provides some background information about
                                    <Link to="#" className="opacity-75-hover text-warning fw-bold me-1">the interviewee</Link>and their
                                    <br />work following this is a transcript of the interview.</div>
                                {/*end::Text*/}
                            </div>
                            {/*end::Content*/}
                        </div>
                        {/*end::Aside*/}
                    </div>
                    {/*end::Authentication - Sign-up*/}
                </div>
                {/*end::Root*/}
            </div>
        </>
    )

}

if (document.getElementById('register')) {
    ReactDOM.render(<Register />, document.getElementById('register'));
}

export default Register;