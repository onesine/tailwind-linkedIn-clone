import {Menu} from "@headlessui/react";

const ProfileDropdown = () => {
    return (
        <div className="relative">
            <Menu>
                <Menu.Button className="block flex flex-col items-center text-gray-500 px-4 py-2 hover:text-gray-800 focus:outline-none">
                    <img className="w-6 h-6 rounded-full" src="/images/small-profile.jpeg" alt=""/>
                    <div className="flex items-center h-6">
                        <span className="text-xs">Vous</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </div>
                </Menu.Button>

                <Menu.Items className="absolute w-64 top-2 right-0 mt-16 bg-white border-2 rounded-b-md rounded-l-md shadow-lg">
                    <Menu.Item>
                        {({ active }) => (
                            <div>
                                <div className="p-3">
                                    <a href="#profile" className="flex items-start space-x-2">
                                        <img className={`w-12 h-12 rounded-full`} src="/images/small-profile.jpeg" alt=""/>
                                        <div className="flex-grow">
                                            <h4 className="font-semibold">Onesine Lewhe</h4>
                                            <p className="text-gray-800 text-sm">Dévéloppeur chez DMD</p>
                                        </div>
                                    </a>

                                    <a href="#profile" className="w-full block text-center rounded-full text-sm border-2 border-blue-600 mt-3 font-semibold text-blue-600 hover:bg-blue-100 hover:border-4">Voir le profile</a>
                                </div>
                            </div>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <div className="px-3 py-2 border-t-2">
                                <h4 className="mb-2 text-gray-800 font-semibold">Compte</h4>
                                <div className="flex flex-col space-y-3">
                                    <a href="#preference" className="text-gray-500 text-sm hover:underline">Préférences et confidentialités</a>
                                    <a href="#help" className="text-gray-500 text-sm hover:underline">Aide</a>
                                    <a href="#language" className="text-gray-500 text-sm hover:underline">Langue</a>
                                </div>
                            </div>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <div className="px-3 py-2 border-t-2">
                                <h4 className="mb-2 text-gray-800 font-semibold">Gérer</h4>
                                <div className="flex flex-col space-y-3">
                                    <a href="#post-activity" className="text-gray-500 text-sm hover:underline">Posts et activités</a>
                                    <a href="#offers" className="text-gray-500 text-sm hover:underline">Compte offres d'emploi</a>
                                </div>
                            </div>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <div className="px-3 py-2 border-t-2">
                                <a href="#logout" className="text-gray-500 text-sm hover:underline">Déconnexion</a>
                            </div>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </div>
    );
};

export default ProfileDropdown;