import React from "react";

function Table() {
    return (
        <>
            {/*begin::Main*/}
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                {/*begin::Content wrapper*/}
                <div className="d-flex flex-column flex-column-fluid">
                    {/*begin::Toolbar*/}
                    <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                        {/*begin::Toolbar container*/}
                        <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                            {/*begin::Page title*/}
                            <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                                {/*begin::Title*/}
                                <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Tables</h1>
                                {/*end::Title*/}
                                {/*begin::Breadcrumb*/}
                                <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                                    {/*begin::Item*/}
                                    <li className="breadcrumb-item text-muted">
                                        <a href="../../demo1/dist/index.html" className="text-muted text-hover-primary">Home</a>
                                    </li>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <li className="breadcrumb-item">
                                        <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                    </li>
                                    {/*end::Item*/}
                                    {/*begin::Item*/}
                                    <li className="breadcrumb-item text-muted">Widgets</li>
                                    {/*end::Item*/}
                                </ul>
                                {/*end::Breadcrumb*/}
                            </div>
                            {/*end::Page title*/}
                            {/*begin::Actions*/}
                            <div className="d-flex align-items-center gap-2 gap-lg-3">
                                {/*begin::Filter menu*/}
                                <div className="m-0">
                                    {/*begin::Menu toggle*/}
                                    <a href="#" className="btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-primary fw-bold" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                                        <span className="svg-icon svg-icon-6 svg-icon-muted me-1">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="currentColor" />
                                            </svg>
                                        </span>
                                        {/*end::Svg Icon*/}Filter</a>
                                    {/*end::Menu toggle*/}
                                    {/*begin::Menu 1*/}
                                    <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_633f0a5b25dcc">
                                        {/*begin::Header*/}
                                        <div className="px-7 py-5">
                                            <div className="fs-5 text-dark fw-bold">Filter Options</div>
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Menu separator*/}
                                        <div className="separator border-gray-200"></div>
                                        {/*end::Menu separator*/}
                                        {/*begin::Form*/}
                                        <div className="px-7 py-5">
                                            {/*begin::Input group*/}
                                            <div className="mb-10">
                                                {/*begin::Label*/}
                                                <label className="form-label fw-semibold">Status:</label>
                                                {/*end::Label*/}
                                                {/*begin::Input*/}
                                                <div>
                                                    <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_633f0a5b25dcc" data-allow-clear="true">
                                                        <option></option>
                                                        <option value="1">Approved</option>
                                                        <option value="2">Pending</option>
                                                        <option value="2">In Process</option>
                                                        <option value="2">Rejected</option>
                                                    </select>
                                                </div>
                                                {/*end::Input*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="mb-10">
                                                {/*begin::Label*/}
                                                <label className="form-label fw-semibold">Member Type:</label>
                                                {/*end::Label*/}
                                                {/*begin::Options*/}
                                                <div className="d-flex">
                                                    {/*begin::Options*/}
                                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" value="1" />
                                                        <span className="form-check-label">Author</span>
                                                    </label>
                                                    {/*end::Options*/}
                                                    {/*begin::Options*/}
                                                    <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                        <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                                                        <span className="form-check-label">Customer</span>
                                                    </label>
                                                    {/*end::Options*/}
                                                </div>
                                                {/*end::Options*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Input group*/}
                                            <div className="mb-10">
                                                {/*begin::Label*/}
                                                <label className="form-label fw-semibold">Notifications:</label>
                                                {/*end::Label*/}
                                                {/*begin::Switch*/}
                                                <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                    <input className="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
                                                    <label className="form-check-label">Enabled</label>
                                                </div>
                                                {/*end::Switch*/}
                                            </div>
                                            {/*end::Input group*/}
                                            {/*begin::Actions*/}
                                            <div className="d-flex justify-content-end">
                                                <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                                                <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                                            </div>
                                            {/*end::Actions*/}
                                        </div>
                                        {/*end::Form*/}
                                    </div>
                                    {/*end::Menu 1*/}
                                </div>
                                {/*end::Filter menu*/}
                                {/*begin::Secondary button*/}
                                {/*end::Secondary button*/}
                                {/*begin::Primary button*/}
                                <a href="#" className="btn btn-sm fw-bold btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Create</a>
                                {/*end::Primary button*/}
                            </div>
                            {/*end::Actions*/}
                        </div>
                        {/*end::Toolbar container*/}
                    </div>
                    {/*end::Toolbar*/}
                    {/*begin::Content*/}
                    <div id="kt_app_content" className="app-content flex-column-fluid">
                        {/*begin::Content container*/}
                        <div id="kt_app_content_container" className="app-container container-xxl">
                            {/*begin::Row*/}
                            <div className="row g-5 g-xl-8">
                                {/*begin::Col*/}
                                <div className="col-xl-6">
                                    {/*begin::Tables Widget 1*/}
                                    <div className="card card-xl-stretch mb-xl-8">
                                        {/*begin::Header*/}
                                        <div className="card-header border-0 pt-5">
                                            <h3 className="card-title align-items-start flex-column">
                                                <span className="card-label fw-bold fs-3 mb-1">Tasks Overview</span>
                                                <span className="text-muted fw-semibold fs-7">Pending 10 tasks</span>
                                            </h3>
                                            <div className="card-toolbar">
                                                {/*begin::Menu*/}
                                                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                    <span className="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                                <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </button>
                                                {/*begin::Menu 1*/}
                                                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_633f0a5b29df3">
                                                    {/*begin::Header*/}
                                                    <div className="px-7 py-5">
                                                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                                                    </div>
                                                    {/*end::Header*/}
                                                    {/*begin::Menu separator*/}
                                                    <div className="separator border-gray-200"></div>
                                                    {/*end::Menu separator*/}
                                                    {/*begin::Form*/}
                                                    <div className="px-7 py-5">
                                                        {/*begin::Input group*/}
                                                        <div className="mb-10">
                                                            {/*begin::Label*/}
                                                            <label className="form-label fw-semibold">Status:</label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <div>
                                                                <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_633f0a5b29df3" data-allow-clear="true">
                                                                    <option></option>
                                                                    <option value="1">Approved</option>
                                                                    <option value="2">Pending</option>
                                                                    <option value="2">In Process</option>
                                                                    <option value="2">Rejected</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="mb-10">
                                                            {/*begin::Label*/}
                                                            <label className="form-label fw-semibold">Member Type:</label>
                                                            {/*end::Label*/}
                                                            {/*begin::Options*/}
                                                            <div className="d-flex">
                                                                {/*begin::Options*/}
                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                                    <input className="form-check-input" type="checkbox" value="1" />
                                                                    <span className="form-check-label">Author</span>
                                                                </label>
                                                                {/*end::Options*/}
                                                                {/*begin::Options*/}
                                                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                    <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                                                                    <span className="form-check-label">Customer</span>
                                                                </label>
                                                                {/*end::Options*/}
                                                            </div>
                                                            {/*end::Options*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="mb-10">
                                                            {/*begin::Label*/}
                                                            <label className="form-label fw-semibold">Notifications:</label>
                                                            {/*end::Label*/}
                                                            {/*begin::Switch*/}
                                                            <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                                <input className="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
                                                                <label className="form-check-label">Enabled</label>
                                                            </div>
                                                            {/*end::Switch*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Actions*/}
                                                        <div className="d-flex justify-content-end">
                                                            <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                                                            <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                                                        </div>
                                                        {/*end::Actions*/}
                                                    </div>
                                                    {/*end::Form*/}
                                                </div>
                                                {/*end::Menu 1*/}
                                                {/*end::Menu*/}
                                            </div>
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Body*/}
                                        <div className="card-body py-3">
                                            {/*begin::Table container*/}
                                            <div className="table-responsive">
                                                {/*begin::Table*/}
                                                <table className="table align-middle gs-0 gy-5">
                                                    {/*begin::Table head*/}
                                                    <thead>
                                                        <tr>
                                                            <th className="p-0 w-50px"></th>
                                                            <th className="p-0 min-w-200px"></th>
                                                            <th className="p-0 min-w-100px"></th>
                                                            <th className="p-0 min-w-40px"></th>
                                                        </tr>
                                                    </thead>
                                                    {/*end::Table head*/}
                                                    {/*begin::Table body*/}
                                                    <tbody>
                                                        <tr>
                                                            <th>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img src="assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                                                                    </span>
                                                                </div>
                                                            </th>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Top Authors</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">Successful Fellas</span>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex flex-column w-100 me-2">
                                                                    <div className="d-flex flex-stack mb-2">
                                                                        <span className="text-muted me-2 fs-7 fw-bold">70%</span>
                                                                    </div>
                                                                    <div className="progress h-6px w-100">
                                                                        <div className="progress-bar bg-primary" role="progressbar" style={{width:"70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-end">
                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                    <span className="svg-icon svg-icon-2">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img src="assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                                                                    </span>
                                                                </div>
                                                            </th>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">Most Successful</span>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex flex-column w-100 me-2">
                                                                    <div className="d-flex flex-stack mb-2">
                                                                        <span className="text-muted me-2 fs-7 fw-bold">50%</span>
                                                                    </div>
                                                                    <div className="progress h-6px w-100">
                                                                        <div className="progress-bar bg-primary" role="progressbar" style={{width:"50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-end">
                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                    <span className="svg-icon svg-icon-2">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img src="assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                                                                    </span>
                                                                </div>
                                                            </th>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">New Users</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">Awesome Users</span>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex flex-column w-100 me-2">
                                                                    <div className="d-flex flex-stack mb-2">
                                                                        <span className="text-muted me-2 fs-7 fw-bold">80%</span>
                                                                    </div>
                                                                    <div className="progress h-6px w-100">
                                                                        <div className="progress-bar bg-primary" role="progressbar" style={{width:"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-end">
                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                    <span className="svg-icon svg-icon-2">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img src="assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                                                                    </span>
                                                                </div>
                                                            </th>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">Best Customers</span>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex flex-column w-100 me-2">
                                                                    <div className="d-flex flex-stack mb-2">
                                                                        <span className="text-muted me-2 fs-7 fw-bold">90%</span>
                                                                    </div>
                                                                    <div className="progress h-6px w-100">
                                                                        <div className="progress-bar bg-primary" role="progressbar" style={{width:"90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-end">
                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                    <span className="svg-icon svg-icon-2">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img src="assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                                                                    </span>
                                                                </div>
                                                            </th>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Bestseller Theme</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">Amazing Templates</span>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex flex-column w-100 me-2">
                                                                    <div className="d-flex flex-stack mb-2">
                                                                        <span className="text-muted me-2 fs-7 fw-bold">70%</span>
                                                                    </div>
                                                                    <div className="progress h-6px w-100">
                                                                        <div className="progress-bar bg-primary" role="progressbar" style={{width:"70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="text-end">
                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                    <span className="svg-icon svg-icon-2">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    {/*end::Table body*/}
                                                </table>
                                                {/*end::Table*/}
                                            </div>
                                            {/*end::Table container*/}
                                        </div>
                                        {/*end::Body*/}
                                    </div>
                                    {/*endW::Tables Widget 1*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-xl-6">
                                    {/*begin::Tables Widget 2*/}
                                    <div className="card card-xl-stretch mb-5 mb-xl-8">
                                        {/*begin::Header*/}
                                        <div className="card-header border-0 pt-5">
                                            <h3 className="card-title align-items-start flex-column">
                                                <span className="card-label fw-bold fs-3 mb-1">Latest Arrivals</span>
                                                <span className="text-muted mt-1 fw-semibold fs-7">More than 100 new products</span>
                                            </h3>
                                            <div className="card-toolbar">
                                                {/*begin::Menu*/}
                                                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                    <span className="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                                <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </button>
                                                {/*begin::Menu 1*/}
                                                <div className="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_633f0a5b2af33">
                                                    {/*begin::Header*/}
                                                    <div className="px-7 py-5">
                                                        <div className="fs-5 text-dark fw-bold">Filter Options</div>
                                                    </div>
                                                    {/*end::Header*/}
                                                    {/*begin::Menu separator*/}
                                                    <div className="separator border-gray-200"></div>
                                                    {/*end::Menu separator*/}
                                                    {/*begin::Form*/}
                                                    <div className="px-7 py-5">
                                                        {/*begin::Input group*/}
                                                        <div className="mb-10">
                                                            {/*begin::Label*/}
                                                            <label className="form-label fw-semibold">Status:</label>
                                                            {/*end::Label*/}
                                                            {/*begin::Input*/}
                                                            <div>
                                                                <select className="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_633f0a5b2af33" data-allow-clear="true">
                                                                    <option></option>
                                                                    <option value="1">Approved</option>
                                                                    <option value="2">Pending</option>
                                                                    <option value="2">In Process</option>
                                                                    <option value="2">Rejected</option>
                                                                </select>
                                                            </div>
                                                            {/*end::Input*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="mb-10">
                                                            {/*begin::Label*/}
                                                            <label className="form-label fw-semibold">Member Type:</label>
                                                            {/*end::Label*/}
                                                            {/*begin::Options*/}
                                                            <div className="d-flex">
                                                                {/*begin::Options*/}
                                                                <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                                    <input className="form-check-input" type="checkbox" value="1" />
                                                                    <span className="form-check-label">Author</span>
                                                                </label>
                                                                {/*end::Options*/}
                                                                {/*begin::Options*/}
                                                                <label className="form-check form-check-sm form-check-custom form-check-solid">
                                                                    <input className="form-check-input" type="checkbox" value="2" checked="checked" />
                                                                    <span className="form-check-label">Customer</span>
                                                                </label>
                                                                {/*end::Options*/}
                                                            </div>
                                                            {/*end::Options*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Input group*/}
                                                        <div className="mb-10">
                                                            {/*begin::Label*/}
                                                            <label className="form-label fw-semibold">Notifications:</label>
                                                            {/*end::Label*/}
                                                            {/*begin::Switch*/}
                                                            <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                                <input className="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
                                                                <label className="form-check-label">Enabled</label>
                                                            </div>
                                                            {/*end::Switch*/}
                                                        </div>
                                                        {/*end::Input group*/}
                                                        {/*begin::Actions*/}
                                                        <div className="d-flex justify-content-end">
                                                            <button type="reset" className="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
                                                            <button type="submit" className="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
                                                        </div>
                                                        {/*end::Actions*/}
                                                    </div>
                                                    {/*end::Form*/}
                                                </div>
                                                {/*end::Menu 1*/}
                                                {/*end::Menu*/}
                                            </div>
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Body*/}
                                        <div className="card-body py-3">
                                            {/*begin::Table container*/}
                                            <div className="table-responsive">
                                                {/*begin::Table*/}
                                                <table className="table align-middle gs-0 gy-5">
                                                    {/*begin::Table head*/}
                                                    <thead>
                                                        <tr>
                                                            <th className="p-0 w-50px"></th>
                                                            <th className="p-0 min-w-150px"></th>
                                                            <th className="p-0 min-w-150px"></th>
                                                            <th className="p-0 min-w-125px"></th>
                                                            <th className="p-0 min-w-40px"></th>
                                                        </tr>
                                                    </thead>
                                                    {/*end::Table head*/}
                                                    {/*begin::Table body*/}
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img src="assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Top Authors</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">Successful Fellas</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-danger fw-semibold me-1">Angular</span>
                                                                <span className="badge badge-light-info fw-semibold me-1">PHP</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="text-muted fw-bold">4600 Users</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                    <span className="svg-icon svg-icon-2">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img src="assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">Most Successful</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-danger fw-semibold me-1">HTML</span>
                                                                <span className="badge badge-light-info fw-semibold me-1">CSS</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="text-muted fw-bold">7200 Users</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                    <span className="svg-icon svg-icon-2">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img src="assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">New Users</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">Awesome Users</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-danger fw-semibold me-1">React</span>
                                                                <span className="badge badge-light-info fw-semibold me-1">SASS</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="text-muted fw-bold">890 Users</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                    <span className="svg-icon svg-icon-2">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img src="assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">Best Customers</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-danger fw-semibold me-1">Java</span>
                                                                <span className="badge badge-light-info fw-semibold me-1">PHP</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="text-muted fw-bold">6370 Users</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                    <span className="svg-icon svg-icon-2">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label">
                                                                        <img src="assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Bestseller Theme</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">Amazing Templates</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="badge badge-light-danger fw-semibold me-1">Python</span>
                                                                <span className="badge badge-light-info fw-semibold me-1">MySQL</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <span className="text-muted fw-bold">354 Users</span>
                                                            </td>
                                                            <td className="text-end">
                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                    <span className="svg-icon svg-icon-2">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                        </svg>
                                                                    </span>
                                                                    {/*end::Svg Icon*/}
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    {/*end::Table body*/}
                                                </table>
                                                {/*end::Table*/}
                                            </div>
                                            {/*end::Table container*/}
                                        </div>
                                        {/*end::Body*/}
                                    </div>
                                    {/*end::Tables Widget 2*/}
                                </div>
                                {/*end::Col*/}
                            </div>
                            {/*end::Row*/}
                            {/*begin::Row*/}
                            <div className="row g-5 g-xl-8">
                                {/*begin::Col*/}
                                <div className="col-xl-6">
                                    {/*begin::Tables Widget 3*/}
                                    <div className="card card-xl-stretch mb-xl-8">
                                        {/*begin::Header*/}
                                        <div className="card-header border-0 pt-5">
                                            <h3 className="card-title align-items-start flex-column">
                                                <span className="card-label fw-bold fs-3 mb-1">Files</span>
                                                <span className="text-muted mt-1 fw-semibold fs-7">Over 100 pending files</span>
                                            </h3>
                                            <div className="card-toolbar">
                                                {/*begin::Menu*/}
                                                <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                    {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                                    <span className="svg-icon svg-icon-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                                <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                                <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                    {/*end::Svg Icon*/}
                                                </button>
                                                {/*begin::Menu 3*/}
                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                                    {/*begin::Heading*/}
                                                    <div className="menu-item px-3">
                                                        <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                                                    </div>
                                                    {/*end::Heading*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Create Invoice</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link flex-stack px-3">Create Payment
                                                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference"></i></a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Generate Bill</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                                        <a href="#" className="menu-link px-3">
                                                            <span className="menu-title">Subscription</span>
                                                            <span className="menu-arrow"></span>
                                                        </a>
                                                        {/*begin::Menu sub*/}
                                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Plans</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Billing</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Statements</a>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                            {/*begin::Menu separator*/}
                                                            <div className="separator my-2"></div>
                                                            {/*end::Menu separator*/}
                                                            {/*begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <div className="menu-content px-3">
                                                                    {/*begin::Switch*/}
                                                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                                                        {/*begin::Input*/}
                                                                        <input className="form-check-input w-30px h-20px" type="checkbox" value="1" checked="checked" name="notifications" />
                                                                        {/*end::Input*/}
                                                                        {/*end::Label*/}
                                                                        <span className="form-check-label text-muted fs-6">Recuring</span>
                                                                        {/*end::Label*/}
                                                                    </label>
                                                                    {/*end::Switch*/}
                                                                </div>
                                                            </div>
                                                            {/*end::Menu item*/}
                                                        </div>
                                                        {/*end::Menu sub*/}
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3 my-1">
                                                        <a href="#" className="menu-link px-3">Settings</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                </div>
                                                {/*end::Menu 3*/}
                                                {/*end::Menu*/}
                                            </div>
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Body*/}
                                        <div className="card-body py-3">
                                            {/*begin::Table container*/}
                                            <div className="table-responsive">
                                                {/*begin::Table*/}
                                                <table className="table align-middle gs-0 gy-3">
                                                    {/*begin::Table head*/}
                                                    <thead>
                                                        <tr>
                                                            <th className="p-0 w-50px"></th>
                                                            <th className="p-0 min-w-150px"></th>
                                                            <th className="p-0 min-w-140px"></th>
                                                            <th className="p-0 min-w-120px"></th>
                                                            <th className="p-0 min-w-40px"></th>
                                                        </tr>
                                                    </thead>
                                                    {/*end::Table head*/}
                                                    {/*begin::Table body*/}
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label bg-light-success">
                                                                        {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                                                        <span className="svg-icon svg-icon-2x svg-icon-success">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                                                                                <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                                                                                <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Top Authors</a>
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">ReactJs, HTML</td>
                                                            <td className="text-end text-muted fw-bold">4600 Users</td>
                                                            <td className="text-end text-dark fw-bold fs-6 pe-0">5.4MB</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label bg-light-danger">
                                                                        {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                        <span className="svg-icon svg-icon-2x svg-icon-danger">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                                <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Python, MySQL</td>
                                                            <td className="text-end text-muted fw-bold">7200 Users</td>
                                                            <td className="text-end text-dark fw-bold fs-6 pe-0">2.8MB</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label bg-light-info">
                                                                        {/*begin::Svg Icon | path: icons/duotune/finance/fin006.svg*/}
                                                                        <span className="svg-icon svg-icon-2x svg-icon-info">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="currentColor" />
                                                                                <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">New Users</a>
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">Laravel, Metronic</td>
                                                            <td className="text-end text-muted fw-bold">890 Users</td>
                                                            <td className="text-end text-dark fw-bold fs-6 pe-0">1.5MB</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label bg-light-warning">
                                                                        {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                        <span className="svg-icon svg-icon-2x svg-icon-warning">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                                                                                <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">AngularJS, C#</td>
                                                            <td className="text-end text-muted fw-bold">4600 Users</td>
                                                            <td className="text-end text-dark fw-bold fs-6 pe-0">5.4MB</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="symbol symbol-50px me-2">
                                                                    <span className="symbol-label bg-light-primary">
                                                                        {/*begin::Svg Icon | path: icons/duotune/abstract/abs042.svg*/}
                                                                        <span className="svg-icon svg-icon-2x svg-icon-primary">
                                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z" fill="currentColor" />
                                                                                <path opacity="0.3" d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z" fill="currentColor" />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                                                            </td>
                                                            <td className="text-end text-muted fw-bold">ReactJS, Ruby</td>
                                                            <td className="text-end text-muted fw-bold">354 Users</td>
                                                            <td className="text-end text-dark fw-bold fs-6 pe-0">500KB</td>
                                                        </tr>
                                                    </tbody>
                                                    {/*end::Table body*/}
                                                </table>
                                                {/*end::Table*/}
                                            </div>
                                            {/*end::Table container*/}
                                        </div>
                                        {/*begin::Body*/}
                                    </div>
                                    {/*end::Tables Widget 3*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-xl-6">
                                    {/*begin::Tables Widget 4*/}
                                    <div className="card card-xl-stretch mb-5 mb-xl-8">
                                        {/*begin::Header*/}
                                        <div className="card-header border-0 pt-5">
                                            <h3 className="card-title align-items-start flex-column">
                                                <span className="card-label fw-bold fs-3 mb-1">New Members</span>
                                                <span className="text-muted mt-1 fw-semibold fs-7">More than 400 new members</span>
                                            </h3>
                                            <div className="card-toolbar">
                                                <ul className="nav">
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_4_tab_1">Month</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_4_tab_2">Week</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4" data-bs-toggle="tab" href="#kt_table_widget_4_tab_3">Day</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Body*/}
                                        <div className="card-body py-3">
                                            <div className="tab-content">
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade show active" id="kt_table_widget_4_tab_1">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table align-middle gs-0 gy-3">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-140px"></th>
                                                                    <th className="p-0 min-w-120px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px">
                                                                            <img src="assets/media/avatars/300-14.jpg" alt="" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brad Simmons</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Movie Creator</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Rating</span>
                                                                        <div className="rating">
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-icon btn-light-twitter btn-sm me-3">
                                                                            <i className="bi bi-twitter fs-4"></i>
                                                                        </a>
                                                                        <a href="#" className="btn btn-icon btn-light-facebook btn-sm">
                                                                            <i className="bi bi-facebook fs-4"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px">
                                                                            <img src="assets/media/avatars/300-5.jpg" alt="" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Jessie Clarcson</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">HTML, CSS Coding</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Rating</span>
                                                                        <div className="rating">
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-icon btn-light-twitter btn-sm me-3">
                                                                            <i className="bi bi-twitter fs-4"></i>
                                                                        </a>
                                                                        <a href="#" className="btn btn-icon btn-light-facebook btn-sm">
                                                                            <i className="bi bi-facebook fs-4"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px">
                                                                            <img src="assets/media/avatars/300-20.jpg" alt="" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Lebron Wayde</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">ReactJS Developer</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Rating</span>
                                                                        <div className="rating">
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-icon btn-light-twitter btn-sm me-3">
                                                                            <i className="bi bi-twitter fs-4"></i>
                                                                        </a>
                                                                        <a href="#" className="btn btn-icon btn-light-facebook btn-sm">
                                                                            <i className="bi bi-facebook fs-4"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px">
                                                                            <img src="assets/media/avatars/300-23.jpg" alt="" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Natali Trump</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">UI/UX Designer</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Rating</span>
                                                                        <div className="rating">
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-icon btn-light-twitter btn-sm me-3">
                                                                            <i className="bi bi-twitter fs-4"></i>
                                                                        </a>
                                                                        <a href="#" className="btn btn-icon btn-light-facebook btn-sm">
                                                                            <i className="bi bi-facebook fs-4"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px">
                                                                            <img src="assets/media/avatars/300-10.jpg" alt="" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Kevin Leonard</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Art Director</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Rating</span>
                                                                        <div className="rating">
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-icon btn-light-twitter btn-sm me-3">
                                                                            <i className="bi bi-twitter fs-4"></i>
                                                                        </a>
                                                                        <a href="#" className="btn btn-icon btn-light-facebook btn-sm">
                                                                            <i className="bi bi-facebook fs-4"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade" id="kt_table_widget_4_tab_2">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table align-middle gs-0 gy-3">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-140px"></th>
                                                                    <th className="p-0 min-w-120px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px">
                                                                            <img src="assets/media/svg/avatars/043-boy-18.svg" alt="" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Kevin Leonard</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Art Director</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Rating</span>
                                                                        <div className="rating">
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-icon btn-light-twitter btn-sm me-3">
                                                                            <i className="bi bi-twitter fs-4"></i>
                                                                        </a>
                                                                        <a href="#" className="btn btn-icon btn-light-facebook btn-sm">
                                                                            <i className="bi bi-facebook fs-4"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px">
                                                                            <img src="assets/media/svg/avatars/014-girl-7.svg" alt="" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Natali Trump</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">UI/UX Designer</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Rating</span>
                                                                        <div className="rating">
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-icon btn-light-twitter btn-sm me-3">
                                                                            <i className="bi bi-twitter fs-4"></i>
                                                                        </a>
                                                                        <a href="#" className="btn btn-icon btn-light-facebook btn-sm">
                                                                            <i className="bi bi-facebook fs-4"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px">
                                                                            <img src="assets/media/svg/avatars/018-girl-9.svg" alt="" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Jessie Clarcson</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">HTML, CSS Coding</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Rating</span>
                                                                        <div className="rating">
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-icon btn-light-twitter btn-sm me-3">
                                                                            <i className="bi bi-twitter fs-4"></i>
                                                                        </a>
                                                                        <a href="#" className="btn btn-icon btn-light-facebook btn-sm">
                                                                            <i className="bi bi-facebook fs-4"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px">
                                                                            <img src="assets/media/svg/avatars/001-boy.svg" alt="" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brad Simmons</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Movie Creator</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Rating</span>
                                                                        <div className="rating">
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-icon btn-light-twitter btn-sm me-3">
                                                                            <i className="bi bi-twitter fs-4"></i>
                                                                        </a>
                                                                        <a href="#" className="btn btn-icon btn-light-facebook btn-sm">
                                                                            <i className="bi bi-facebook fs-4"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade" id="kt_table_widget_4_tab_3">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table align-middle gs-0 gy-3">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-140px"></th>
                                                                    <th className="p-0 min-w-120px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px">
                                                                            <img src="assets/media/svg/avatars/018-girl-9.svg" alt="" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Jessie Clarcson</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">HTML, CSS Coding</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Rating</span>
                                                                        <div className="rating">
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-icon btn-light-twitter btn-sm me-3">
                                                                            <i className="bi bi-twitter fs-4"></i>
                                                                        </a>
                                                                        <a href="#" className="btn btn-icon btn-light-facebook btn-sm">
                                                                            <i className="bi bi-facebook fs-4"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px">
                                                                            <img src="assets/media/svg/avatars/047-girl-25.svg" alt="" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Lebron Wayde</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">ReactJS Developer</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Rating</span>
                                                                        <div className="rating">
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-icon btn-light-twitter btn-sm me-3">
                                                                            <i className="bi bi-twitter fs-4"></i>
                                                                        </a>
                                                                        <a href="#" className="btn btn-icon btn-light-facebook btn-sm">
                                                                            <i className="bi bi-facebook fs-4"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px">
                                                                            <img src="assets/media/svg/avatars/014-girl-7.svg" alt="" />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Natali Trump</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">UI/UX Designer</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Rating</span>
                                                                        <div className="rating">
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                            <div className="rating-label me-2 checked">
                                                                                <i className="bi bi-star-fill fs-5"></i>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-icon btn-light-twitter btn-sm me-3">
                                                                            <i className="bi bi-twitter fs-4"></i>
                                                                        </a>
                                                                        <a href="#" className="btn btn-icon btn-light-facebook btn-sm">
                                                                            <i className="bi bi-facebook fs-4"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                            </div>
                                        </div>
                                        {/*end::Body*/}
                                    </div>
                                    {/*end::Tables Widget 4*/}
                                </div>
                                {/*end::Col*/}
                            </div>
                            {/*end::Row*/}
                            {/*begin::Row*/}
                            <div className="row g-5 g-xl-8">
                                {/*begin::Col*/}
                                <div className="col-xl-6">
                                    {/*begin::Tables Widget 5*/}
                                    <div className="card card-xl-stretch mb-xl-8">
                                        {/*begin::Header*/}
                                        <div className="card-header border-0 pt-5">
                                            <h3 className="card-title align-items-start flex-column">
                                                <span className="card-label fw-bold fs-3 mb-1">Latest Products</span>
                                                <span className="text-muted mt-1 fw-semibold fs-7">More than 400 new products</span>
                                            </h3>
                                            <div className="card-toolbar">
                                                <ul className="nav">
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1 active" data-bs-toggle="tab" href="#kt_table_widget_5_tab_1">Month</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_5_tab_2">Week</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4" data-bs-toggle="tab" href="#kt_table_widget_5_tab_3">Day</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Body*/}
                                        <div className="card-body py-3">
                                            <div className="tab-content">
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade show active" id="kt_table_widget_5_tab_1">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr className="border-0">
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-140px"></th>
                                                                    <th className="p-0 min-w-110px"></th>
                                                                    <th className="p-0 min-w-50px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-45px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brad Simmons</a>
                                                                        <span className="text-muted fw-semibold d-block">Movie Creator</span>
                                                                    </td>
                                                                    <td className="text-end text-muted fw-bold">React, HTML</td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-success">Approved</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-45px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                                                                        <span className="text-muted fw-semibold d-block">Most Successful</span>
                                                                    </td>
                                                                    <td className="text-end text-muted fw-bold">Python, MySQL</td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-warning">In Progress</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-45px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">New Users</a>
                                                                        <span className="text-muted fw-semibold d-block">Awesome Users</span>
                                                                    </td>
                                                                    <td className="text-end text-muted fw-bold">Laravel,Metronic</td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-primary">Success</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-45px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                                                                        <span className="text-muted fw-semibold d-block">Movie Creator</span>
                                                                    </td>
                                                                    <td className="text-end text-muted fw-bold">AngularJS, C#</td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-danger">Rejected</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-45px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Bestseller Theme</a>
                                                                        <span className="text-muted fw-semibold d-block">Best Customers</span>
                                                                    </td>
                                                                    <td className="text-end text-muted fw-bold">ReactJS, Ruby</td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-warning">In Progress</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade" id="kt_table_widget_5_tab_2">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr className="border-0">
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-140px"></th>
                                                                    <th className="p-0 min-w-110px"></th>
                                                                    <th className="p-0 min-w-50px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-45px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/brand-logos/plurk.svg" className="h-50 align-self-center" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brad Simmons</a>
                                                                        <span className="text-muted fw-semibold d-block">Movie Creator</span>
                                                                    </td>
                                                                    <td className="text-end text-muted fw-bold">React, HTML</td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-success">Approved</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-45px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                                                                        <span className="text-muted fw-semibold d-block">Most Successful</span>
                                                                    </td>
                                                                    <td className="text-end text-muted fw-bold">Python, MySQL</td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-warning">In Progress</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-45px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                                                                        <span className="text-muted fw-semibold d-block">Movie Creator</span>
                                                                    </td>
                                                                    <td className="text-end text-muted fw-bold">AngularJS, C#</td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-danger">Rejected</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade" id="kt_table_widget_5_tab_3">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr className="border-0">
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-140px"></th>
                                                                    <th className="p-0 min-w-110px"></th>
                                                                    <th className="p-0 min-w-50px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-45px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/brand-logos/kickstarter.svg" className="h-50 align-self-center" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Bestseller Theme</a>
                                                                        <span className="text-muted fw-semibold d-block">Best Customers</span>
                                                                    </td>
                                                                    <td className="text-end text-muted fw-bold">ReactJS, Ruby</td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-warning">In Progress</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-45px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/brand-logos/bebo.svg" className="h-50 align-self-center" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                                                                        <span className="text-muted fw-semibold d-block">Movie Creator</span>
                                                                    </td>
                                                                    <td className="text-end text-muted fw-bold">AngularJS, C#</td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-danger">Rejected</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-45px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/brand-logos/vimeo.svg" className="h-50 align-self-center" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">New Users</a>
                                                                        <span className="text-muted fw-semibold d-block">Awesome Users</span>
                                                                    </td>
                                                                    <td className="text-end text-muted fw-bold">Laravel,Metronic</td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-primary">Success</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-45px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/brand-logos/telegram.svg" className="h-50 align-self-center" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Popular Authors</a>
                                                                        <span className="text-muted fw-semibold d-block">Most Successful</span>
                                                                    </td>
                                                                    <td className="text-end text-muted fw-bold">Python, MySQL</td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-warning">In Progress</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                            </div>
                                        </div>
                                        {/*end::Body*/}
                                    </div>
                                    {/*end::Tables Widget 5*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-xl-6">
                                    {/*begin::Table Widget 6*/}
                                    <div className="card card-xl-stretch mb-5 mb-xl-8">
                                        {/*begin::Header*/}
                                        <div className="card-header border-0 pt-5">
                                            <h3 className="card-title align-items-start flex-column">
                                                <span className="card-label fw-bold fs-3 mb-1">Authors Earnings</span>
                                                <span className="text-muted mt-1 fw-semibold fs-7">More than 400 new authors</span>
                                            </h3>
                                            <div className="card-toolbar">
                                                <ul className="nav">
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_6_tab_1">Month</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_6_tab_2">Week</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bold px-4 active" data-bs-toggle="tab" href="#kt_table_widget_6_tab_3">Day</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Body*/}
                                        <div className="card-body py-3">
                                            <div className="tab-content">
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade" id="kt_table_widget_6_tab_1">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table align-middle gs-0 gy-3">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-140px"></th>
                                                                    <th className="p-0 min-w-120px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/avatars/001-boy.svg" className="h-75 align-self-end" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brad Simmons</a>
                                                                        <span className="text-muted fw-semibold d-block">Successful Fellas</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Paid</span>
                                                                        <span className="text-dark fw-bold d-block fs-5">$200,500</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-primary fs-7 fw-bold">+28%</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/avatars/018-girl-9.svg" className="h-75 align-self-end" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Jessie Clarcson</a>
                                                                        <span className="text-muted fw-semibold d-block">HTML, CSS Coding</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Paid</span>
                                                                        <span className="text-dark fw-bold d-block fs-5">$1,200,000</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-warning fs-7 fw-bold">+52%</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/avatars/047-girl-25.svg" className="h-75 align-self-end" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Jessie Clarcson</a>
                                                                        <span className="text-muted fw-semibold d-block">PHP, Laravel, VueJS</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Paid</span>
                                                                        <span className="text-dark fw-bold d-block fs-5">$1,200,000</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-danger fs-7 fw-bold">+52%</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/avatars/014-girl-7.svg" className="h-75 align-self-end" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Natali Trump</a>
                                                                        <span className="text-muted fw-semibold d-block">UI/UX Designer</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Paid</span>
                                                                        <span className="text-dark fw-bold d-block fs-5">$3,400,000</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-success fs-7 fw-bold">-34%</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/avatars/043-boy-18.svg" className="h-75 align-self-end" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Kevin Leonard</a>
                                                                        <span className="text-muted fw-semibold d-block">Art Director</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Paid</span>
                                                                        <span className="text-dark fw-bold d-block fs-5">$35,600,000</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-info fs-7 fw-bold">+230%</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade" id="kt_table_widget_6_tab_2">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table align-middle gs-0 gy-3">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-140px"></th>
                                                                    <th className="p-0 min-w-120px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/avatars/018-girl-9.svg" className="h-75 align-self-end" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Jessie Clarcson</a>
                                                                        <span className="text-muted fw-semibold d-block">HTML, CSS Coding</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Paid</span>
                                                                        <span className="text-dark fw-bold d-block fs-5">$1,200,000</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-warning fs-7 fw-bold">+52%</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/avatars/014-girl-7.svg" className="h-75 align-self-end" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Natali Trump</a>
                                                                        <span className="text-muted fw-semibold d-block">UI/UX Designer</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Paid</span>
                                                                        <span className="text-dark fw-bold d-block fs-5">$3,400,000</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-success fs-7 fw-bold">-34%</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/avatars/001-boy.svg" className="h-75 align-self-end" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brad Simmons</a>
                                                                        <span className="text-muted fw-semibold d-block">Successful Fellas</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Paid</span>
                                                                        <span className="text-dark fw-bold d-block fs-5">$200,500</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-primary fs-7 fw-bold">+28%</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade show active" id="kt_table_widget_6_tab_3">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table align-middle gs-0 gy-3">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-140px"></th>
                                                                    <th className="p-0 min-w-120px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/avatars/047-girl-25.svg" className="h-75 align-self-end" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Jessie Clarcson</a>
                                                                        <span className="text-muted fw-semibold d-block">HTML, CSS Coding</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Paid</span>
                                                                        <span className="text-dark fw-bold d-block fs-5">$1,200,000</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-danger fs-7 fw-bold">+52%</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/avatars/014-girl-7.svg" className="h-75 align-self-end" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Natali Trump</a>
                                                                        <span className="text-muted fw-semibold d-block">UI/UX Designer</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Paid</span>
                                                                        <span className="text-dark fw-bold d-block fs-5">$3,400,000</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-success fs-7 fw-bold">-34%</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/avatars/043-boy-18.svg" className="h-75 align-self-end" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Kevin Leonard</a>
                                                                        <span className="text-muted fw-semibold d-block">Art Director</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Paid</span>
                                                                        <span className="text-dark fw-bold d-block fs-5">$35,600,000</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-info fs-7 fw-bold">+230%</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label">
                                                                                <img src="assets/media/svg/avatars/001-boy.svg" className="h-75 align-self-end" alt="" />
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brad Simmons</a>
                                                                        <span className="text-muted fw-semibold d-block">Successful Fellas</span>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Paid</span>
                                                                        <span className="text-dark fw-bold d-block fs-5">$200,500</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-primary fs-7 fw-bold">+28%</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                                                                            <span className="svg-icon svg-icon-2">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="currentColor" />
                                                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="currentColor" />
                                                                                </svg>
                                                                            </span>
                                                                            {/*end::Svg Icon*/}
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                            </div>
                                        </div>
                                        {/*end::Body*/}
                                    </div>
                                    {/*end::Tables Widget 6*/}
                                </div>
                                {/*end::Col*/}
                            </div>
                            {/*end::Row*/}
                            {/*begin::Row*/}
                            <div className="row g-5 g-xl-8">
                                {/*begin::Col*/}
                                <div className="col-xl-6">
                                    {/*begin::Table Widget 7*/}
                                    <div className="card card-xl-stretch mb-xl-8">
                                        {/*begin::Header*/}
                                        <div className="card-header border-0 pt-5">
                                            <h3 className="card-title align-items-start flex-column">
                                                <span className="card-label fw-bold fs-3 mb-1">Latest Orders</span>
                                                <span className="text-muted mt-1 fw-semibold fs-7">More than 100 new orders</span>
                                            </h3>
                                            <div className="card-toolbar">
                                                <ul className="nav">
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_7_tab_1">Month</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_7_tab_2">Week</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4" data-bs-toggle="tab" href="#kt_table_widget_7_tab_3">Day</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Body*/}
                                        <div className="card-body py-3">
                                            <div className="tab-content">
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade show active" id="kt_table_widget_7_tab_1">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table align-middle gs-0 gy-3">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-140px"></th>
                                                                    <th className="p-0 min-w-120px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-success">
                                                                                {/*begin::Svg Icon | path: icons/duotune/coding/cod002.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-success">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M18 22C19.7 22 21 20.7 21 19C21 18.5 20.9 18.1 20.7 17.7L15.3 6.30005C15.1 5.90005 15 5.5 15 5C15 3.3 16.3 2 18 2H6C4.3 2 3 3.3 3 5C3 5.5 3.1 5.90005 3.3 6.30005L8.7 17.7C8.9 18.1 9 18.5 9 19C9 20.7 7.7 22 6 22H18Z" fill="currentColor" />
                                                                                        <path d="M18 2C19.7 2 21 3.3 21 5H9C9 3.3 7.7 2 6 2H18Z" fill="currentColor" />
                                                                                        <path d="M9 19C9 20.7 7.7 22 6 22C4.3 22 3 20.7 3 19H9Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Media Device</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Voice and video recorder</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-muted fw-semibold d-block fs-8">Ordered</span>
                                                                        <span className="text-dark fw-bold d-block fs-7">5 day ago</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-success fs-7 fw-bold">Delivered</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-danger">
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-danger">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Special Meal</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Quona Rice</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-muted fw-semibold d-block fs-8">Ordered</span>
                                                                        <span className="text-dark fw-bold d-block fs-7">2 day ago</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-danger fs-7 fw-bold">Delivered</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-primary">
                                                                                {/*begin::Svg Icon | path: icons/duotune/maps/map004.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-primary">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="currentColor" />
                                                                                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">New Users</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Awesome Users</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-muted fw-semibold d-block fs-8">Ordered</span>
                                                                        <span className="text-dark fw-bold d-block fs-7">4 day ago</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-primary fs-7 fw-bold">Delivered</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-warning">
                                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-warning">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                                                                                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Best Customers</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-muted fw-semibold d-block fs-8">Ordered</span>
                                                                        <span className="text-dark fw-bold d-block fs-7">1 day ago</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-warning fs-7 fw-bold">Delivered</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-info">
                                                                                {/*begin::Svg Icon | path: icons/duotune/art/art007.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-info">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M20.859 12.596L17.736 13.596L10.388 20.944C10.2915 21.0406 10.1769 21.1172 10.0508 21.1695C9.9247 21.2218 9.78953 21.2486 9.65302 21.2486C9.5165 21.2486 9.3813 21.2218 9.25519 21.1695C9.12907 21.1172 9.01449 21.0406 8.918 20.944L2.29999 14.3229C2.10543 14.1278 1.99619 13.8635 1.99619 13.588C1.99619 13.3124 2.10543 13.0481 2.29999 12.853L11.853 3.29999C11.9495 3.20341 12.0641 3.12679 12.1902 3.07452C12.3163 3.02225 12.4515 2.9953 12.588 2.9953C12.7245 2.9953 12.8597 3.02225 12.9858 3.07452C13.1119 3.12679 13.2265 3.20341 13.323 3.29999L21.199 11.176C21.3036 11.2791 21.3797 11.4075 21.4201 11.5486C21.4605 11.6898 21.4637 11.8391 21.4295 11.9819C21.3953 12.1247 21.3249 12.2562 21.2249 12.3638C21.125 12.4714 20.9989 12.5514 20.859 12.596Z" fill="currentColor" />
                                                                                        <path d="M14.8 10.184C14.7447 10.1843 14.6895 10.1796 14.635 10.1699L5.816 8.69997C5.55436 8.65634 5.32077 8.51055 5.16661 8.29469C5.01246 8.07884 4.95035 7.8106 4.99397 7.54897C5.0376 7.28733 5.18339 7.05371 5.39925 6.89955C5.6151 6.7454 5.88334 6.68332 6.14498 6.72694L14.963 8.19692C15.2112 8.23733 15.435 8.36982 15.59 8.56789C15.7449 8.76596 15.8195 9.01502 15.7989 9.26564C15.7784 9.51626 15.6642 9.75001 15.479 9.92018C15.2939 10.0904 15.0514 10.1846 14.8 10.184ZM17 18.6229C17 19.0281 17.0985 19.4272 17.287 19.7859C17.4755 20.1446 17.7484 20.4521 18.0821 20.6819C18.4158 20.9117 18.8004 21.0571 19.2027 21.1052C19.605 21.1534 20.0131 21.103 20.3916 20.9585C20.7702 20.814 21.1079 20.5797 21.3758 20.2757C21.6437 19.9716 21.8336 19.607 21.9293 19.2133C22.025 18.8195 22.0235 18.4085 21.925 18.0154C21.8266 17.6223 21.634 17.259 21.364 16.9569L19.843 15.257C19.7999 15.2085 19.7471 15.1697 19.688 15.1432C19.6289 15.1167 19.5648 15.1029 19.5 15.1029C19.4352 15.1029 19.3711 15.1167 19.312 15.1432C19.2529 15.1697 19.2001 15.2085 19.157 15.257L17.636 16.9569C17.2254 17.4146 16.9988 18.0081 17 18.6229ZM10.388 20.9409L17.736 13.5929H1.99999C1.99921 13.7291 2.02532 13.8643 2.0768 13.9904C2.12828 14.1165 2.2041 14.2311 2.29997 14.3279L8.91399 20.9409C9.01055 21.0381 9.12539 21.1152 9.25188 21.1679C9.37836 21.2205 9.51399 21.2476 9.65099 21.2476C9.78798 21.2476 9.92361 21.2205 10.0501 21.1679C10.1766 21.1152 10.2914 21.0381 10.388 20.9409Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Strawberry Boxes</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">From Spain</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-muted fw-semibold d-block fs-8">Ordered</span>
                                                                        <span className="text-dark fw-bold d-block fs-7">7 day ago</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-info fs-7 fw-bold">Delivered</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade" id="kt_table_widget_7_tab_2">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table align-middle gs-0 gy-3">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-140px"></th>
                                                                    <th className="p-0 min-w-120px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-info">
                                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs042.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-info">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z" fill="currentColor" />
                                                                                        <path opacity="0.3" d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Strawberry Boxes</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">From Spain</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-muted fw-semibold d-block fs-8">Ordered</span>
                                                                        <span className="text-dark fw-bold d-block fs-7">4 week ago</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-info fs-7 fw-bold">Delivered</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-danger">
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-danger">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Special Meal</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Quona Rice</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-muted fw-semibold d-block fs-8">Ordered</span>
                                                                        <span className="text-dark fw-bold d-block fs-7">2 week ago</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-danger fs-7 fw-bold">Delivered</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-warning">
                                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-warning">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                                                                                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Best Customers</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-muted fw-semibold d-block fs-8">Ordered</span>
                                                                        <span className="text-dark fw-bold d-block fs-7">5 week ago</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-warning fs-7 fw-bold">Delivered</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade" id="kt_table_widget_7_tab_3">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table align-middle gs-0 gy-3">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-140px"></th>
                                                                    <th className="p-0 min-w-120px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-success">
                                                                                {/*begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-success">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor" />
                                                                                        <path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor" />
                                                                                        <path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Media Device</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Voice and video recorder</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-muted fw-semibold d-block fs-8">Ordered</span>
                                                                        <span className="text-dark fw-bold d-block fs-7">3 month ago</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-success fs-7 fw-bold">Delivered</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-danger">
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-danger">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Special Meal</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Quona Rice</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-muted fw-semibold d-block fs-8">Ordered</span>
                                                                        <span className="text-dark fw-bold d-block fs-7">5 month ago</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-danger fs-7 fw-bold">Delivered</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-warning">
                                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-warning">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                                                                                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Active Customers</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">Best Customers</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-muted fw-semibold d-block fs-8">Ordered</span>
                                                                        <span className="text-dark fw-bold d-block fs-7">6 month ago</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-warning fs-7 fw-bold">Delivered</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-info">
                                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs042.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-info">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M18 21.6C16.6 20.4 9.1 20.3 6.3 21.2C5.7 21.4 5.1 21.2 4.7 20.8L2 18C4.2 15.8 10.8 15.1 15.8 15.8C16.2 18.3 17 20.5 18 21.6ZM18.8 2.8C18.4 2.4 17.8 2.20001 17.2 2.40001C14.4 3.30001 6.9 3.2 5.5 2C6.8 3.3 7.4 5.5 7.7 7.7C9 7.9 10.3 8 11.7 8C15.8 8 19.8 7.2 21.5 5.5L18.8 2.8Z" fill="currentColor" />
                                                                                        <path opacity="0.3" d="M21.2 17.3C21.4 17.9 21.2 18.5 20.8 18.9L18 21.6C15.8 19.4 15.1 12.8 15.8 7.8C18.3 7.4 20.4 6.70001 21.5 5.60001C20.4 7.00001 20.2 14.5 21.2 17.3ZM8 11.7C8 9 7.7 4.2 5.5 2L2.8 4.8C2.4 5.2 2.2 5.80001 2.4 6.40001C2.7 7.40001 3.00001 9.2 3.10001 11.7C3.10001 15.5 2.40001 17.6 2.10001 18C3.20001 16.9 5.3 16.2 7.8 15.8C8 14.2 8 12.7 8 11.7Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Strawberry Boxes</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">From Spain</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-muted fw-semibold d-block fs-8">Ordered</span>
                                                                        <span className="text-dark fw-bold d-block fs-7">4 month ago</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="badge badge-light-info fs-7 fw-bold">Delivered</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                            </div>
                                        </div>
                                        {/*end::Body*/}
                                    </div>
                                    {/*end::Tables Widget 7*/}
                                </div>
                                {/*end::Col*/}
                                {/*begin::Col*/}
                                <div className="col-xl-6">
                                    {/*begin::Table Widget 8*/}
                                    <div className="card card-xl-stretch mb-5 mb-xl-8">
                                        {/*begin::Header*/}
                                        <div className="card-header border-0 pt-5">
                                            <h3 className="card-title align-items-start flex-column">
                                                <span className="card-label fw-bold fs-3 mb-1">Latest Products</span>
                                                <span className="text-muted mt-1 fw-semibold fs-7">More than 100 new orders</span>
                                            </h3>
                                            <div className="card-toolbar">
                                                <ul className="nav">
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_8_tab_1">Month</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1" data-bs-toggle="tab" href="#kt_table_widget_8_tab_2">Week</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4" data-bs-toggle="tab" href="#kt_table_widget_8_tab_3">Day</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/*end::Header*/}
                                        {/*begin::Body*/}
                                        <div className="card-body py-3">
                                            <div className="tab-content">
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade show active" id="kt_table_widget_8_tab_1">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table align-middle gs-0 gy-3">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-120px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-danger">
                                                                                {/*begin::Svg Icon | path: icons/duotune/coding/cod002.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-danger">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M18 22C19.7 22 21 20.7 21 19C21 18.5 20.9 18.1 20.7 17.7L15.3 6.30005C15.1 5.90005 15 5.5 15 5C15 3.3 16.3 2 18 2H6C4.3 2 3 3.3 3 5C3 5.5 3.1 5.90005 3.3 6.30005L8.7 17.7C8.9 18.1 9 18.5 9 19C9 20.7 7.7 22 6 22H18Z" fill="currentColor" />
                                                                                        <path d="M18 2C19.7 2 21 3.3 21 5H9C9 3.3 7.7 2 6 2H18Z" fill="currentColor" />
                                                                                        <path d="M9 19C9 20.7 7.7 22 6 22C4.3 22 3 20.7 3 19H9Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">School Music Festival</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">by Rose Liam</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-dark fw-bold d-block fs-7">4:20PM, 03 Sep</span>
                                                                        <span className="text-muted fw-semibold d-block fs-8">Date</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-warning">
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-warning">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Maths Championship</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">By Tom Gere</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-dark fw-bold d-block fs-7">10:05PM, 25 Oct</span>
                                                                        <span className="text-muted fw-semibold d-block fs-8">Date</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-info">
                                                                                {/*begin::Svg Icon | path: icons/duotune/maps/map004.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-info">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="currentColor" />
                                                                                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Who Knows Geography</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">By Zoey Dylan</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-dark fw-bold d-block fs-7">3:22PM, 07 Sep</span>
                                                                        <span className="text-muted fw-semibold d-block fs-8">Date</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-primary">
                                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-primary">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                                                                                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Napoleon Days</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">By Luke Owen</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-dark fw-bold d-block fs-7">1:20PM, 02 Dec</span>
                                                                        <span className="text-muted fw-semibold d-block fs-8">Date</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-success">
                                                                                {/*begin::Svg Icon | path: icons/duotune/art/art007.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-success">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M20.859 12.596L17.736 13.596L10.388 20.944C10.2915 21.0406 10.1769 21.1172 10.0508 21.1695C9.9247 21.2218 9.78953 21.2486 9.65302 21.2486C9.5165 21.2486 9.3813 21.2218 9.25519 21.1695C9.12907 21.1172 9.01449 21.0406 8.918 20.944L2.29999 14.3229C2.10543 14.1278 1.99619 13.8635 1.99619 13.588C1.99619 13.3124 2.10543 13.0481 2.29999 12.853L11.853 3.29999C11.9495 3.20341 12.0641 3.12679 12.1902 3.07452C12.3163 3.02225 12.4515 2.9953 12.588 2.9953C12.7245 2.9953 12.8597 3.02225 12.9858 3.07452C13.1119 3.12679 13.2265 3.20341 13.323 3.29999L21.199 11.176C21.3036 11.2791 21.3797 11.4075 21.4201 11.5486C21.4605 11.6898 21.4637 11.8391 21.4295 11.9819C21.3953 12.1247 21.3249 12.2562 21.2249 12.3638C21.125 12.4714 20.9989 12.5514 20.859 12.596Z" fill="currentColor" />
                                                                                        <path d="M14.8 10.184C14.7447 10.1843 14.6895 10.1796 14.635 10.1699L5.816 8.69997C5.55436 8.65634 5.32077 8.51055 5.16661 8.29469C5.01246 8.07884 4.95035 7.8106 4.99397 7.54897C5.0376 7.28733 5.18339 7.05371 5.39925 6.89955C5.6151 6.7454 5.88334 6.68332 6.14498 6.72694L14.963 8.19692C15.2112 8.23733 15.435 8.36982 15.59 8.56789C15.7449 8.76596 15.8195 9.01502 15.7989 9.26564C15.7784 9.51626 15.6642 9.75001 15.479 9.92018C15.2939 10.0904 15.0514 10.1846 14.8 10.184ZM17 18.6229C17 19.0281 17.0985 19.4272 17.287 19.7859C17.4755 20.1446 17.7484 20.4521 18.0821 20.6819C18.4158 20.9117 18.8004 21.0571 19.2027 21.1052C19.605 21.1534 20.0131 21.103 20.3916 20.9585C20.7702 20.814 21.1079 20.5797 21.3758 20.2757C21.6437 19.9716 21.8336 19.607 21.9293 19.2133C22.025 18.8195 22.0235 18.4085 21.925 18.0154C21.8266 17.6223 21.634 17.259 21.364 16.9569L19.843 15.257C19.7999 15.2085 19.7471 15.1697 19.688 15.1432C19.6289 15.1167 19.5648 15.1029 19.5 15.1029C19.4352 15.1029 19.3711 15.1167 19.312 15.1432C19.2529 15.1697 19.2001 15.2085 19.157 15.257L17.636 16.9569C17.2254 17.4146 16.9988 18.0081 17 18.6229ZM10.388 20.9409L17.736 13.5929H1.99999C1.99921 13.7291 2.02532 13.8643 2.0768 13.9904C2.12828 14.1165 2.2041 14.2311 2.29997 14.3279L8.91399 20.9409C9.01055 21.0381 9.12539 21.1152 9.25188 21.1679C9.37836 21.2205 9.51399 21.2476 9.65099 21.2476C9.78798 21.2476 9.92361 21.2205 10.0501 21.1679C10.1766 21.1152 10.2914 21.0381 10.388 20.9409Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">The School Art Leads</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">By Ellie Cole</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-dark fw-bold d-block fs-7">6:20PM, 07 Sep</span>
                                                                        <span className="text-muted fw-semibold d-block fs-8">Date</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade" id="kt_table_widget_8_tab_2">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table align-middle gs-0 gy-3">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-120px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-info">
                                                                                {/*begin::Svg Icon | path: icons/duotune/maps/map004.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-info">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="currentColor" />
                                                                                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Who Knows Geography</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">By Zoey Dylan</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-dark fw-bold d-block fs-7">3:22PM, 07 Sep</span>
                                                                        <span className="text-muted fw-semibold d-block fs-8">Date</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-warning">
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-warning">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Maths Championship</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">By Tom Gere</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-dark fw-bold d-block fs-7">10:05PM, 25 Oct</span>
                                                                        <span className="text-muted fw-semibold d-block fs-8">Date</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-danger">
                                                                                {/*begin::Svg Icon | path: icons/duotune/coding/cod002.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-danger">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M18 22C19.7 22 21 20.7 21 19C21 18.5 20.9 18.1 20.7 17.7L15.3 6.30005C15.1 5.90005 15 5.5 15 5C15 3.3 16.3 2 18 2H6C4.3 2 3 3.3 3 5C3 5.5 3.1 5.90005 3.3 6.30005L8.7 17.7C8.9 18.1 9 18.5 9 19C9 20.7 7.7 22 6 22H18Z" fill="currentColor" />
                                                                                        <path d="M18 2C19.7 2 21 3.3 21 5H9C9 3.3 7.7 2 6 2H18Z" fill="currentColor" />
                                                                                        <path d="M9 19C9 20.7 7.7 22 6 22C4.3 22 3 20.7 3 19H9Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">School Music Festival</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">by Rose Liam</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-dark fw-bold d-block fs-7">4:20PM, 03 Sep</span>
                                                                        <span className="text-muted fw-semibold d-block fs-8">Date</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                                {/*begin::Tap pane*/}
                                                <div className="tab-pane fade" id="kt_table_widget_8_tab_3">
                                                    {/*begin::Table container*/}
                                                    <div className="table-responsive">
                                                        {/*begin::Table*/}
                                                        <table className="table align-middle gs-0 gy-3">
                                                            {/*begin::Table head*/}
                                                            <thead>
                                                                <tr>
                                                                    <th className="p-0 w-50px"></th>
                                                                    <th className="p-0 min-w-150px"></th>
                                                                    <th className="p-0 min-w-120px"></th>
                                                                </tr>
                                                            </thead>
                                                            {/*end::Table head*/}
                                                            {/*begin::Table body*/}
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-warning">
                                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen025.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-warning">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                                        <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Maths Championship</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">By Tom Gere</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-dark fw-bold d-block fs-7">10:05PM, 25 Oct</span>
                                                                        <span className="text-muted fw-semibold d-block fs-8">Date</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-info">
                                                                                {/*begin::Svg Icon | path: icons/duotune/maps/map004.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-info">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="currentColor" />
                                                                                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Who Knows Geography</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">By Zoey Dylan</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-dark fw-bold d-block fs-7">3:22PM, 07 Sep</span>
                                                                        <span className="text-muted fw-semibold d-block fs-8">Date</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-primary">
                                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-primary">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor" />
                                                                                        <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Napoleon Days</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">By Luke Owen</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-dark fw-bold d-block fs-7">1:20PM, 02 Dec</span>
                                                                        <span className="text-muted fw-semibold d-block fs-8">Date</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="symbol symbol-50px me-2">
                                                                            <span className="symbol-label bg-light-danger">
                                                                                {/*begin::Svg Icon | path: icons/duotune/coding/cod002.svg*/}
                                                                                <span className="svg-icon svg-icon-2x svg-icon-danger">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" d="M18 22C19.7 22 21 20.7 21 19C21 18.5 20.9 18.1 20.7 17.7L15.3 6.30005C15.1 5.90005 15 5.5 15 5C15 3.3 16.3 2 18 2H6C4.3 2 3 3.3 3 5C3 5.5 3.1 5.90005 3.3 6.30005L8.7 17.7C8.9 18.1 9 18.5 9 19C9 20.7 7.7 22 6 22H18Z" fill="currentColor" />
                                                                                        <path d="M18 2C19.7 2 21 3.3 21 5H9C9 3.3 7.7 2 6 2H18Z" fill="currentColor" />
                                                                                        <path d="M9 19C9 20.7 7.7 22 6 22C4.3 22 3 20.7 3 19H9Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">School Music Festival</a>
                                                                        <span className="text-muted fw-semibold d-block fs-7">by Rose Liam</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <span className="text-dark fw-bold d-block fs-7">4:20PM, 03 Sep</span>
                                                                        <span className="text-muted fw-semibold d-block fs-8">Date</span>
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary">
                                                                            <i className="bi bi-three-dots fs-5"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                            {/*end::Table body*/}
                                                        </table>
                                                    </div>
                                                    {/*end::Table*/}
                                                </div>
                                                {/*end::Tap pane*/}
                                            </div>
                                        </div>
                                        {/*end::Body*/}
                                    </div>
                                    {/*end::Tables Widget 8*/}
                                </div>
                                {/*end::Col*/}
                            </div>
                            {/*end::Row*/}
                            {/*begin::Tables Widget 9*/}
                            <div className="card mb-5 mb-xl-8">
                                {/*begin::Header*/}
                                <div className="card-header border-0 pt-5">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="card-label fw-bold fs-3 mb-1">Members Statistics</span>
                                        <span className="text-muted mt-1 fw-semibold fs-7">Over 500 members</span>
                                    </h3>
                                    <div className="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a user">
                                        <a href="#" className="btn btn-sm btn-light btn-active-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                            <span className="svg-icon svg-icon-3">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                    <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                                </svg>
                                            </span>
                                            {/*end::Svg Icon*/}New Member</a>
                                    </div>
                                </div>
                                {/*end::Header*/}
                                {/*begin::Body*/}
                                <div className="card-body py-3">
                                    {/*begin::Table container*/}
                                    <div className="table-responsive">
                                        {/*begin::Table*/}
                                        <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                            {/*begin::Table head*/}
                                            <thead>
                                                <tr className="fw-bold text-muted">
                                                    <th className="w-25px">
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="checkbox" value="1" data-kt-check="true" data-kt-check-target=".widget-9-check" />
                                                        </div>
                                                    </th>
                                                    <th className="min-w-200px">Authors</th>
                                                    <th className="min-w-150px">Company</th>
                                                    <th className="min-w-150px">Progress</th>
                                                    <th className="min-w-100px text-end">Actions</th>
                                                </tr>
                                            </thead>
                                            {/*end::Table head*/}
                                            {/*begin::Table body*/}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input widget-9-check" type="checkbox" value="1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-45px me-5">
                                                                <img src="assets/media/avatars/300-14.jpg" alt="" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Ana Simmons</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">HTML, JS, ReactJS</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block fs-6">Intertico</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Web, UI/UX Design</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="d-flex flex-column w-100 me-2">
                                                            <div className="d-flex flex-stack mb-2">
                                                                <span className="text-muted me-2 fs-7 fw-bold">50%</span>
                                                            </div>
                                                            <div className="progress h-6px w-100">
                                                                <div className="progress-bar bg-primary" role="progressbar" style={{width:"50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-end flex-shrink-0">
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                        <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input widget-9-check" type="checkbox" value="1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-45px me-5">
                                                                <img src="assets/media/avatars/300-2.jpg" alt="" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Jessie Clarcson</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">C#, ASP.NET, MS SQL</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block fs-6">Agoda</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Houses & Hotels</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="d-flex flex-column w-100 me-2">
                                                            <div className="d-flex flex-stack mb-2">
                                                                <span className="text-muted me-2 fs-7 fw-bold">70%</span>
                                                            </div>
                                                            <div className="progress h-6px w-100">
                                                                <div className="progress-bar bg-danger" role="progressbar" style={{width:"70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-end flex-shrink-0">
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                        <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input widget-9-check" type="checkbox" value="1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-45px me-5">
                                                                <img src="assets/media/avatars/300-5.jpg" alt="" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Lebron Wayde</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">PHP, Laravel, VueJS</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block fs-6">RoadGee</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Transportation</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="d-flex flex-column w-100 me-2">
                                                            <div className="d-flex flex-stack mb-2">
                                                                <span className="text-muted me-2 fs-7 fw-bold">60%</span>
                                                            </div>
                                                            <div className="progress h-6px w-100">
                                                                <div className="progress-bar bg-success" role="progressbar" style={{width:"60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-end flex-shrink-0">
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                        <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input widget-9-check" type="checkbox" value="1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-45px me-5">
                                                                <img src="assets/media/avatars/300-20.jpg" alt="" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Natali Goodwin</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">Python, PostgreSQL, ReactJS</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block fs-6">The Hill</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Insurance</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="d-flex flex-column w-100 me-2">
                                                            <div className="d-flex flex-stack mb-2">
                                                                <span className="text-muted me-2 fs-7 fw-bold">50%</span>
                                                            </div>
                                                            <div className="progress h-6px w-100">
                                                                <div className="progress-bar bg-warning" role="progressbar" style={{width:"50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-end flex-shrink-0">
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                        <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input widget-9-check" type="checkbox" value="1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-45px me-5">
                                                                <img src="assets/media/avatars/300-23.jpg" alt="" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Kevin Leonard</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">HTML, JS, ReactJS</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block fs-6">RoadGee</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Art Director</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="d-flex flex-column w-100 me-2">
                                                            <div className="d-flex flex-stack mb-2">
                                                                <span className="text-muted me-2 fs-7 fw-bold">90%</span>
                                                            </div>
                                                            <div className="progress h-6px w-100">
                                                                <div className="progress-bar bg-info" role="progressbar" style={{width:"90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-end flex-shrink-0">
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                        <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                                {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                        <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                            <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                                {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                                <span className="svg-icon svg-icon-3">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                        <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/}
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            {/*end::Table body*/}
                                        </table>
                                        {/*end::Table*/}
                                    </div>
                                    {/*end::Table container*/}
                                </div>
                                {/*begin::Body*/}
                            </div>
                            {/*end::Tables Widget 9*/}
                            {/*begin::Tables Widget 10*/}
                            <div className="card mb-5 mb-xl-8">
                                {/*begin::Header*/}
                                <div className="card-header border-0 pt-5">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="card-label fw-bold fs-3 mb-1">New Products</span>
                                        <span className="text-muted mt-1 fw-semibold fs-7">Over 500 new products</span>
                                    </h3>
                                    <div className="card-toolbar">
                                        {/*begin::Menu*/}
                                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                            <span className="svg-icon svg-icon-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                        <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                        <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                        <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                    </g>
                                                </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                        </button>
                                        {/*begin::Menu 2*/}
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu separator*/}
                                            <div className="separator mb-3 opacity-75"></div>
                                            {/*end::Menu separator*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Ticket</a>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Customer</a>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                                {/*begin::Menu item*/}
                                                <a href="#" className="menu-link px-3">
                                                    <span className="menu-title">New Group</span>
                                                    <span className="menu-arrow"></span>
                                                </a>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu sub*/}
                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Member Group</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                </div>
                                                {/*end::Menu sub*/}
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Contact</a>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu separator*/}
                                            <div className="separator mt-3 opacity-75"></div>
                                            {/*end::Menu separator*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <div className="menu-content px-3 py-3">
                                                    <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                                </div>
                                            </div>
                                            {/*end::Menu item*/}
                                        </div>
                                        {/*end::Menu 2*/}
                                        {/*end::Menu*/}
                                    </div>
                                </div>
                                {/*end::Header*/}
                                {/*begin::Body*/}
                                <div className="card-body pt-3">
                                    {/*begin::Table container*/}
                                    <div className="table-responsive">
                                        {/*begin::Table*/}
                                        <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                            {/*begin::Table head*/}
                                            <thead>
                                                <tr className="border-0">
                                                    <th className="p-0"></th>
                                                    <th className="p-0 min-w-150px"></th>
                                                    <th className="p-0 min-w-200px"></th>
                                                    <th className="p-0 min-w-150px"></th>
                                                    <th className="p-0 min-w-100px text-end"></th>
                                                </tr>
                                            </thead>
                                            {/*end::Table head*/}
                                            {/*begin::Table body*/}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-45px me-5">
                                                                <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Emma Smith</a>
                                                                <a href="#" className="text-muted text-hover-primary fw-semibold text-muted d-block fs-7">
                                                                    <span className="text-dark">Email</span>: smith@kpmg.com</a>
                                                            </div>
                                                            {/*end::Name*/}
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$560,000</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td className="text-muted fw-semibold text-end">Laravel, Metronic</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-success">Approved</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-45px me-5">
                                                                <span className="symbol-label bg-light-danger text-danger fw-bold">M</span>
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Melody Macy</a>
                                                                <a href="#" className="text-muted text-hover-primary fw-semibold text-muted d-block fs-7">
                                                                    <span className="text-dark">Email</span>: melody@altbox.com</a>
                                                            </div>
                                                            {/*end::Name*/}
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$2,000,000</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td className="text-muted fw-semibold text-end">ReactJs, HTML</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-warning">In Progress</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-45px me-5">
                                                                <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Max Smith</a>
                                                                <a href="#" className="text-muted text-hover-primary fw-semibold text-muted d-block fs-7">
                                                                    <span className="text-dark">Email</span>: max@kt.com</a>
                                                            </div>
                                                            {/*end::Name*/}
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$760,000</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td className="text-muted fw-semibold text-end">Python, MySQL</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-danger">Success</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-45px me-5">
                                                                <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Sean Bean</a>
                                                                <a href="#" className="text-muted text-hover-primary fw-semibold text-muted d-block fs-7">
                                                                    <span className="text-dark">Email</span>: sean@dellito.com</a>
                                                            </div>
                                                            {/*end::Name*/}
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$257,000</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td className="text-muted fw-semibold text-end">ReactJS, Ruby</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-info">Rejected</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            {/*begin::Avatar*/}
                                                            <div className="symbol symbol-45px me-5">
                                                                <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                                            </div>
                                                            {/*end::Avatar*/}
                                                            {/*begin::Name*/}
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brian Cox</a>
                                                                <a href="#" className="text-muted text-hover-primary fw-semibold text-muted d-block fs-7">
                                                                    <span className="text-dark">Email</span>: brian@exchange.com</a>
                                                            </div>
                                                            {/*end::Name*/}
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$560,000</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td className="text-muted fw-semibold text-end">AngularJS, C#</td>
                                                    <td className="text-end">
                                                        <span className="badge badge-light-primary">In Progress</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            {/*end::Table body*/}
                                        </table>
                                        {/*end::Table*/}
                                    </div>
                                    {/*end::Table container*/}
                                </div>
                                {/*begin::Body*/}
                            </div>
                            {/*end::Tables Widget 10*/}
                            {/*begin::Tables Widget 11*/}
                            <div className="card mb-5 mb-xl-8">
                                {/*begin::Header*/}
                                <div className="card-header border-0 pt-5">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="card-label fw-bold fs-3 mb-1">New Arrivals</span>
                                        <span className="text-muted mt-1 fw-semibold fs-7">Over 500 new products</span>
                                    </h3>
                                    <div className="card-toolbar">
                                        <a href="#" className="btn btn-sm btn-light-primary">
                                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr075.svg*/}
                                            <span className="svg-icon svg-icon-2">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                    <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                                </svg>
                                            </span>
                                            {/*end::Svg Icon*/}New Member</a>
                                    </div>
                                </div>
                                {/*end::Header*/}
                                {/*begin::Body*/}
                                <div className="card-body py-3">
                                    {/*begin::Table container*/}
                                    <div className="table-responsive">
                                        {/*begin::Table*/}
                                        <table className="table align-middle gs-0 gy-4">
                                            {/*begin::Table head*/}
                                            <thead>
                                                <tr className="fw-bold text-muted bg-light">
                                                    <th className="ps-4 min-w-325px rounded-start">Product</th>
                                                    <th className="min-w-125px">Price</th>
                                                    <th className="min-w-125px">Deposit</th>
                                                    <th className="min-w-200px">Agent</th>
                                                    <th className="min-w-150px">Status</th>
                                                    <th className="min-w-200px text-end rounded-end"></th>
                                                </tr>
                                            </thead>
                                            {/*end::Table head*/}
                                            {/*begin::Table body*/}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-5">
                                                                <img src="assets/media/stock/600x400/img-26.jpg" className="" alt="" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Sant Extreanet Solution</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">HTML, JS, ReactJS</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$2,790</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$520</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Rejected</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Bradly Beal</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Insurance</span>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-light-primary fs-7 fw-bold">Approved</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-5">
                                                                <img src="assets/media/stock/600x400/img-3.jpg" className="" alt="" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Telegram Development</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">C#, ASP.NET, MS SQL</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$4,790</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$240</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Rejected</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Chris Thompson</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">NBA Player</span>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-light-danger fs-7 fw-bold">In Progress</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-5">
                                                                <img src="assets/media/stock/600x400/img-9.jpg" className="" alt="" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Payroll Application</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">PHP, Laravel, VueJS</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$4,390</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$593</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Rejected</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Zoey McGee</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Ruby Developer</span>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-light-success fs-7 fw-bold">Success</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-5">
                                                                <img src="assets/media/stock/600x400/img-18.jpg" className="" alt="" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">HR Management System</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">Python, PostgreSQL, ReactJS</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$7,990</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$980</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Rejected</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Brandon Ingram</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Insurance</span>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-light-info fs-7 fw-bold">Rejected</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-5">
                                                                <img src="assets/media/stock/600x400/img-8.jpg" className="" alt="" />
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Telegram Mobile</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">HTML, JS, ReactJS</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$5,790</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$750</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Rejected</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Natali Trump</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Insurance</span>
                                                    </td>
                                                    <td>
                                                        <span className="badge badge-light-warning fs-7 fw-bold">Approved</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            {/*end::Table body*/}
                                        </table>
                                        {/*end::Table*/}
                                    </div>
                                    {/*end::Table container*/}
                                </div>
                                {/*begin::Body*/}
                            </div>
                            {/*end::Tables Widget 11*/}
                            {/*begin::Tables Widget 12*/}
                            <div className="card mb-5 mb-xl-8">
                                {/*begin::Header*/}
                                <div className="card-header border-0 pt-5">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="card-label fw-bold fs-3 mb-1">Member Statistics</span>
                                        <span className="text-muted mt-1 fw-semibold fs-7">Over 500 new members</span>
                                    </h3>
                                    <div className="card-toolbar">
                                        {/*begin::Menu*/}
                                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                            <span className="svg-icon svg-icon-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                        <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                        <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                        <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                    </g>
                                                </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                        </button>
                                        {/*begin::Menu 2*/}
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu separator*/}
                                            <div className="separator mb-3 opacity-75"></div>
                                            {/*end::Menu separator*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Ticket</a>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Customer</a>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                                {/*begin::Menu item*/}
                                                <a href="#" className="menu-link px-3">
                                                    <span className="menu-title">New Group</span>
                                                    <span className="menu-arrow"></span>
                                                </a>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu sub*/}
                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Member Group</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                </div>
                                                {/*end::Menu sub*/}
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Contact</a>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu separator*/}
                                            <div className="separator mt-3 opacity-75"></div>
                                            {/*end::Menu separator*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <div className="menu-content px-3 py-3">
                                                    <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                                </div>
                                            </div>
                                            {/*end::Menu item*/}
                                        </div>
                                        {/*end::Menu 2*/}
                                        {/*end::Menu*/}
                                    </div>
                                </div>
                                {/*end::Header*/}
                                {/*begin::Body*/}
                                <div className="card-body py-3">
                                    {/*begin::Table container*/}
                                    <div className="table-responsive">
                                        {/*begin::Table*/}
                                        <table className="table align-middle gs-0 gy-4">
                                            {/*begin::Table head*/}
                                            <thead>
                                                <tr className="fw-bold text-muted bg-light">
                                                    <th className="ps-4 min-w-300px rounded-start">Agent</th>
                                                    <th className="min-w-125px">Earnings</th>
                                                    <th className="min-w-125px">Comission</th>
                                                    <th className="min-w-200px">Company</th>
                                                    <th className="min-w-150px">Rating</th>
                                                    <th className="min-w-200px text-end rounded-end"></th>
                                                </tr>
                                            </thead>
                                            {/*end::Table head*/}
                                            {/*begin::Table body*/}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-5">
                                                                <span className="symbol-label bg-light">
                                                                    <img src="assets/media/svg/avatars/001-boy.svg" className="h-75 align-self-end" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brad Simmons</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">HTML, JS, ReactJS</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$8,000,000</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Pending</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$5,400</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Intertico</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Web, UI/UX Design</span>
                                                    </td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                        </div>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7 mt-1">Best Rated</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2">View</a>
                                                        <a href="#" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4">Edit</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-5">
                                                                <span className="symbol-label bg-light">
                                                                    <img src="assets/media/svg/avatars/047-girl-25.svg" className="h-75 align-self-end" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Lebron Wayde</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">PHP, Laravel, VueJS</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$8,750,000</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$7,400</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Agoda</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Houses & Hotels</span>
                                                    </td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                        </div>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7 mt-1">Above Avarage</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2">View</a>
                                                        <a href="#" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4">Edit</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-5">
                                                                <span className="symbol-label bg-light">
                                                                    <img src="assets/media/svg/avatars/006-girl-3.svg" className="h-75 align-self-end" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brad Simmons</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">HTML, JS, ReactJS</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$8,000,000</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">In Proccess</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$2,500</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Rejected</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">RoadGee</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                        </div>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7 mt-1">Best Rated</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2">View</a>
                                                        <a href="#" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4">Edit</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-5">
                                                                <span className="symbol-label bg-light">
                                                                    <img src="assets/media/svg/avatars/014-girl-7.svg" className="h-75 align-self-end" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Natali Trump</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">HTML, JS, ReactJS</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$700,000</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Pending</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$7,760</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">The Hill</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Insurance</span>
                                                    </td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                        </div>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7 mt-1">Avarage</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2">View</a>
                                                        <a href="#" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4">Edit</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="symbol symbol-50px me-5">
                                                                <span className="symbol-label bg-light">
                                                                    <img src="assets/media/svg/avatars/020-girl-11.svg" className="h-75 align-self-end" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="d-flex justify-content-start flex-column">
                                                                <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Jessie Clarcson</a>
                                                                <span className="text-muted fw-semibold text-muted d-block fs-7">HTML, JS, ReactJS</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$1,320,000</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Pending</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$6,250</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Intertico</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Web, UI/UX Design</span>
                                                    </td>
                                                    <td>
                                                        <div className="rating">
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                            <div className="rating-label me-2 checked">
                                                                <i className="bi bi-star-fill fs-5"></i>
                                                            </div>
                                                        </div>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7 mt-1">Best Rated</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2">View</a>
                                                        <a href="#" className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4">Edit</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            {/*end::Table body*/}
                                        </table>
                                        {/*end::Table*/}
                                    </div>
                                    {/*end::Table container*/}
                                </div>
                                {/*begin::Body*/}
                            </div>
                            {/*end::Tables Widget 12*/}
                            {/*begin::Tables Widget 13*/}
                            <div className="card mb-5 mb-xl-8">
                                {/*begin::Header*/}
                                <div className="card-header border-0 pt-5">
                                    <h3 className="card-title align-items-start flex-column">
                                        <span className="card-label fw-bold fs-3 mb-1">Recent Orders</span>
                                        <span className="text-muted mt-1 fw-semibold fs-7">Over 500 orders</span>
                                    </h3>
                                    <div className="card-toolbar">
                                        {/*begin::Menu*/}
                                        <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
                                            <span className="svg-icon svg-icon-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <rect x="5" y="5" width="5" height="5" rx="1" fill="currentColor" />
                                                        <rect x="14" y="5" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                        <rect x="5" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                        <rect x="14" y="14" width="5" height="5" rx="1" fill="currentColor" opacity="0.3" />
                                                    </g>
                                                </svg>
                                            </span>
                                            {/*end::Svg Icon*/}
                                        </button>
                                        {/*begin::Menu 2*/}
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu separator*/}
                                            <div className="separator mb-3 opacity-75"></div>
                                            {/*end::Menu separator*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Ticket</a>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Customer</a>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                                {/*begin::Menu item*/}
                                                <a href="#" className="menu-link px-3">
                                                    <span className="menu-title">New Group</span>
                                                    <span className="menu-arrow"></span>
                                                </a>
                                                {/*end::Menu item*/}
                                                {/*begin::Menu sub*/}
                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                    {/*begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Member Group</a>
                                                    </div>
                                                    {/*end::Menu item*/}
                                                </div>
                                                {/*end::Menu sub*/}
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Contact</a>
                                            </div>
                                            {/*end::Menu item*/}
                                            {/*begin::Menu separator*/}
                                            <div className="separator mt-3 opacity-75"></div>
                                            {/*end::Menu separator*/}
                                            {/*begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <div className="menu-content px-3 py-3">
                                                    <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                                </div>
                                            </div>
                                            {/*end::Menu item*/}
                                        </div>
                                        {/*end::Menu 2*/}
                                        {/*end::Menu*/}
                                    </div>
                                </div>
                                {/*end::Header*/}
                                {/*begin::Body*/}
                                <div className="card-body py-3">
                                    {/*begin::Table container*/}
                                    <div className="table-responsive">
                                        {/*begin::Table*/}
                                        <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                                            {/*begin::Table head*/}
                                            <thead>
                                                <tr className="fw-bold text-muted">
                                                    <th className="w-25px">
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input" type="checkbox" value="1" data-kt-check="true" data-kt-check-target=".widget-13-check" />
                                                        </div>
                                                    </th>
                                                    <th className="min-w-150px">Order Id</th>
                                                    <th className="min-w-140px">Country</th>
                                                    <th className="min-w-120px">Date</th>
                                                    <th className="min-w-120px">Company</th>
                                                    <th className="min-w-120px">Total</th>
                                                    <th className="min-w-120px">Status</th>
                                                    <th className="min-w-100px text-end">Actions</th>
                                                </tr>
                                            </thead>
                                            {/*end::Table head*/}
                                            {/*begin::Table body*/}
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input widget-13-check" type="checkbox" value="1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">56037-XDER</a>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Brasil</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Code: PH</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">05/28/2020</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Code: Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Intertico</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Web, UI/UX Design</span>
                                                    </td>
                                                    <td className="text-dark fw-bold text-hover-primary fs-6">$3560</td>
                                                    <td>
                                                        <span className="badge badge-light-success">Approved</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input widget-13-check" type="checkbox" value="1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">05822-FXSP</a>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Belarus</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Code: BY</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">04/18/2021</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Code: Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Agoda</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Houses & Hotels</span>
                                                    </td>
                                                    <td className="text-dark fw-bold text-hover-primary fs-6">$4850</td>
                                                    <td>
                                                        <span className="badge badge-light-warning">In Progress</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input widget-13-check" type="checkbox" value="1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">4472-QREX</a>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Phillipines</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Code: BH</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">07/23/2019</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Code: Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">RoadGee</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Transportation</span>
                                                    </td>
                                                    <td className="text-dark fw-bold text-hover-primary fs-6">$8376</td>
                                                    <td>
                                                        <span className="badge badge-light-danger">Success</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input widget-13-check" type="checkbox" value="1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">00347-BCLQ</a>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Argentina</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Code: BR</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">12/21/2021</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Code: Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">The Hill</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Insurance</span>
                                                    </td>
                                                    <td className="text-dark fw-bold text-hover-primary fs-6">$9486</td>
                                                    <td>
                                                        <span className="badge badge-light-info">Rejected</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                                                            <input className="form-check-input widget-13-check" type="checkbox" value="1" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">59486-XDER</a>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Agoda</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Code: BT</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">05/28/2020</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Code: Paid</span>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">Phillipines</a>
                                                        <span className="text-muted fw-semibold text-muted d-block fs-7">Transportation</span>
                                                    </td>
                                                    <td className="text-dark fw-bold text-hover-primary fs-6">$8476</td>
                                                    <td>
                                                        <span className="badge badge-light-primary">Approved</span>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen019.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor" />
                                                                    <path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                            {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor" />
                                                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                        <a href="#" className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor" />
                                                                    <path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            {/*end::Table body*/}
                                        </table>
                                        {/*end::Table*/}
                                    </div>
                                    {/*end::Table container*/}
                                </div>
                                {/*begin::Body*/}
                            </div>
                            {/*end::Tables Widget 13*/}
                        </div>
                        {/*end::Content container*/}
                    </div>
                    {/*end::Content*/}
                </div>
                {/*end::Content wrapper*/}
                {/*begin::Footer*/}
                <div id="kt_app_footer" className="app-footer">
                    {/*begin::Footer container*/}
                    <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                        {/*begin::Copyright*/}
                        <div className="text-dark order-2 order-md-1">
                            <span className="text-muted fw-semibold me-1">2022&copy;</span>
                            <a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
                        </div>
                        {/*end::Copyright*/}
                        {/*begin::Menu*/}
                        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                            <li className="menu-item">
                                <a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
                            </li>
                            <li className="menu-item">
                                <a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
                            </li>
                            <li className="menu-item">
                                <a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</a>
                            </li>
                        </ul>
                        {/*end::Menu*/}
                    </div>
                    {/*end::Footer container*/}
                </div>
                {/*end::Footer*/}
            </div>
            {/*end:::Main*/}
        </>
    )

}

export default Table;