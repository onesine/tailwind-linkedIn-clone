import {NavLink, useLocation} from "react-router-dom";
import ProfileDropdown from "../components/ProfileDropdown";

const Nav = () => {
    const location = useLocation();

    return (
        <nav className="w-full bg-white fixed top-0 shadow-sm z-30">
            <div className="container mx-auto flex justify-between">
                <div className="flex items-center space-x-2">
                    <svg className="w-10 h-10 text-blue-500" stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                    <div className="relative">
                        <svg className="w-5 h-5 ml-3 mt-2.5 absolute text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                        <input className="bg-blue-50 py-2 pl-10 pr-4 rounded placeholder-gray-600 focus:outline-none" type="text" placeholder="Recherche"/>
                    </div>
                </div>
                <div className="flex items-center divide-x-2">
                    <div className="flex items-center">
                        <NavLink to="/feed" className={`nav-link ${location.pathname === '/feed' ? 'nav-link-active' : 'nav-link-base'}`}>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                            <div className="flex items-center h-6">
                                <span className="text-xs">Accueil</span>
                            </div>
                        </NavLink>

                        <NavLink to="/my-network" className={`nav-link ${location.pathname === '/my-network' ? 'nav-link-active' : 'nav-link-base'}`}>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" /></svg>
                            <div className="flex items-center h-6">
                                <span className="text-xs">Réseau</span>
                            </div>
                        </NavLink>

                        <NavLink to="/job" className={`nav-link ${location.pathname === '/job' ? 'nav-link-active' : 'nav-link-base'}`}>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" /><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" /></svg>
                            <div className="flex items-center h-6">
                                <span className="text-xs">Emplois</span>
                            </div>
                        </NavLink>

                        <NavLink to="/messaging" className={`nav-link ${location.pathname === '/messaging' ? 'nav-link-active' : 'nav-link-base'}`}>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" /></svg>
                            <div className="flex items-center h-6">
                                <span className="text-xs">Messagerie</span>
                            </div>
                        </NavLink>

                        <NavLink to="/notifications" className={`nav-link ${location.pathname === '/notifications' ? 'nav-link-active' : 'nav-link-base'}`}>
                            <span className="absolute ml-4 top-0.5 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
                            <div className="flex items-center h-6">
                                <span className="text-xs">Notifications</span>
                            </div>
                        </NavLink>

                        <ProfileDropdown/>
                    </div>

                    <div className="flex items-center pl-2">
                        <a href="#menu" className="block flex flex-col items-center text-gray-500 py-2 hover:text-gray-800">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            <div className="flex items-center h-6">
                                <span className="text-xs">Produits</span>
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </div>
                        </a>

                        <a href="#free" className="inline-block text-xs text-center text-yellow-800 py-2 px-3 hover:text-yellow-900 hover:underline">Essai Premium gratuit <br/> d'un moi</a>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Nav;