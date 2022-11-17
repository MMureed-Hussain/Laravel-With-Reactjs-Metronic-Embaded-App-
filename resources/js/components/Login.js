import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login(props) {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/login', {
            email: email,
            password: password
        }).then(response => {
            console.log(response)
            navigate("/Board");
        })
    }
        return (
            <>
                <div id="kt_body" className="app-blank app-blank">
                    {/*begin::Theme mode setup on page load*/}
                    <script>var defaultThemeMode = "light"; var themeMode; if ( document.documentElement ) {'{'} if ( document.documentElement.hasAttribute("data-theme-mode")) {'{'} themeMode = document.documentElement.getAttribute("data-theme-mode"); {'}'} else {'{'} if ( localStorage.getItem("data-theme") !== null ) {'{'} themeMode = localStorage.getItem("data-theme"); {'}'} else {'{'} themeMode = defaultThemeMode; {'}'} {'}'} if (themeMode === "system") {'{'} themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; {'}'} document.documentElement.setAttribute("data-theme", themeMode); {'}'}</script>
                    {/*end::Theme mode setup on page load*/}
                    <div className="d-flex flex-column flex-root" id="kt_app_root">
                        {/*begin::Authentication - Sign-in */}
                        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
                            {/*begin::Body*/}
                            <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
                                {/*begin::Form*/}
                                <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                                    {/*begin::Wrapper*/}
                                    <div className="w-lg-500px p-10">
                                        {/*begin::Form*/}
                                        <form className="form w-100" noValidate="novalidate" id="kt_sign_in_form" data-kt-redirect-url="./Board" action="#">
                                            {/*begin::Heading*/}
                                            <div className="text-center mb-11">
                                                {/*begin::Title*/}
                                                <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
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
                                                <input type="email" 
                                                className="form-control bg-transparent"
                                                placeholder="Email" 
                                                name="email" autoComplete="off" 
                                                value={email}
                                                onChange={e=>setEmail(e.target.value)} 
                                                required />
                                                
                                                {/*end::Email*/}
                                            </div>
                                            {/*end::Input group=*/}
                                            <div className="fv-row mb-3">
                                                {/*begin::Password*/}
                                                <input
                                                className="form-control bg-transparent"
                                                type="password" 
                                                placeholder="Password" 
                                                name="password" autoComplete="off" 
                                                value={password}
                                                onChange={e=>setPassword(e.target.value)}
                                                 />
                                                {/*end::Password*/}
                                            </div>
                                            {/*end::Input group=*/}
                                            {/*begin::Wrapper*/}
                                            <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                                                <div></div>
                                                {/*begin::Link*/}
                                                <Link to="../../demo1/dist/authentication/layouts/corporate/reset-password.html" className="link-primary">Forgot Password ?</Link>
                                                {/*end::Link*/}
                                            </div>
                                            {/*end::Wrapper*/}
                                            {/*begin::Submit button*/}
                                            <div className="d-grid mb-10">
                                                <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
                                                    {/*begin::Indicator label*/}
                                                    <span className="indicator-label">Sign In</span>
                                                    {/*end::Indicator label*/}
                                                    {/*begin::Indicator progress*/}
                                                    <span className="indicator-progress">Please wait...
                                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                                    {/*end::Indicator progress*/}
                                                </button>
                                            </div>
                                            {/*end::Submit button*/}
                                            {/*begin::Sign up*/}
                                            <div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet?
                                                <Link className="link-primary" to="/Register">Sign up</Link></div>
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
                                    <Link to="/Welcome" className="mb-0 mb-lg-12">
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
                        {/*end::Authentication - Sign-in*/}
                    </div>
                    {/*end::Root*/}
                </div>
            </>
        )
    }
    if (document.getElementById('login')) {
        ReactDOM.render(<Login />, document.getElementById('login'));
    }
    export default Login;
