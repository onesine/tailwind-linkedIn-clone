import {Menu} from "@headlessui/react";

const FilterPost = () => {
    return (
        <div className="relative">
            <Menu>
                <Menu.Button className="flex items-center block w-full my-2 space-x-2 focus:outline-none">
                    <div className="flex-grow">
                        <div className="w-full border-t-2"/>
                    </div>

                    <p className="flex items-center text-xs">
                        <span className="text-gray-500">Classer par:</span>
                        <strong className="flex items-center ml-0.5">
                            <span>Pertinence</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </strong>
                    </p>
                </Menu.Button>

                <Menu.Items className="absolute top-0 right-0 w-40 flex flex-col text-sm font-semibold text-gray-500 mt-7 bg-white py-1 shadow-sm rounded-b-lg rounded-l-lg border-2">
                    <Menu.Item>
                        {({active}) => (
                            <a href="#pertinence" className="px-4 py-2 -ml-0.5 hover:bg-gray-100 border-l-2 border-gray-600">Pertinence</a>
                        )}
                    </Menu.Item>

                    <Menu.Item>
                        {({active}) => (
                            <a href="#pertinence" className="px-4 py-2 -ml-0.5 hover:bg-gray-100 border-l-2 border-gray-600 border-opacity-0">Récent</a>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>

        </div>
    );
};

export default FilterPost;