import { NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <header className="dark:bg-white shadow-lg text-[#111111]">
            <div className="container flex justify-between h-16 mx-auto">
                <div className="flex justify-center items-center">
                    <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2 btn bg-white shadow-none text-2xl ml-4 text-secondary">
                        Smart <span className="text-primary">Byteblaze</span>
                    </a>
                </div>
                <div className="flex gap-6 justify-center items-center mx-4">
                    <ul className="items-stretch font-bold hidden space-x-1 md:flex">
                        <li className="flex">
                            <NavLink to={`/`} rel="noopener noreferrer" href="#" className="flex items-center px-4">Home</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to={'/blogs'} rel="noopener noreferrer" href="#" className="flex items-center px-4">Blogs</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to={"/bookmarks"} rel="noopener noreferrer" href="#" className="flex items-center px-4 dark:text-violet-600 dark:border-violet-600">Bookmarks</NavLink>
                        </li>
                    </ul>
                    <div>
                        <label className="flex cursor-pointer gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>
                </div>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navber;