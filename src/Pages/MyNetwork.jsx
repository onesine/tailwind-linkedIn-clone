import {useState} from "react";
import {followUsers, networkAsideLinks, popularPages} from "../constants/all";
import UsefulLink from "../components/UsefulLink";
import {BlueButton, GrayButton, LargeBlueButton} from "../components/Ui";
import FollowProfile from "../components/FollowProfile";

const MyNetwork = () => {
    const [showAll, setShowAll] = useState(true);

    const printData = showAll ? networkAsideLinks: [networkAsideLinks[0]];
    return (
        <div className="flex items-start space-x-6">
            <div className="flex-none w-[21.5rem] bg-white border-2 shadow-sm rounded-lg">
                <div className="py-4">
                    <h4 className="px-3 text-gray-">Géré mon réseau</h4>
                    <div className="mt-1">
                        {printData.map((item, index) => (
                            <a key={index} className="flex items-center justify-between px-5 py-2 text-gray-500 hover:bg-gray-200" href="#network">
                                <div className="flex items-center space-x-4">
                                    {item.icon}
                                    <span>{item.text}</span>
                                </div>
                                {(item.value !== 0) && (
                                    <span>{item.value}</span>
                                )}

                            </a>
                        ))}
                    </div>

                    <div className="px-3 mb-2">
                        <button onClick={() => setShowAll(!showAll)} className="flex items-center p-1 font-bold text-gray-500 rounded space-x-1 focus:outline-none hover:bg-gray-200">
                            <span>Voir {showAll ? 'moins' : 'plus'}</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
                        </button>
                    </div>

                    <div className="px-4 py-3 text-center border-t-2">
                        <h4 className="mb-2">Ajouter des contacts personnels</h4>
                        <p className="mb-4 text-xs text-gray-600">
                            Nous importons et stockons périodiquement vos <br/> contacts pour vous aider à vous connecter avec <br/> d’autres personnes. Vous décidez qui inviter et avec <br/> qui vous connecter.
                            <strong> <a href="#more" className="text-blue-600 hover:underline focus:outline-none">En savoir plus</a></strong>
                        </p>
                        <div>
                            <input className="w-full px-2 py-1 text-sm text-gray-700 placeholder-gray-700 border-2 border-gray-700 rounded" type="email" placeholder="johndoe@gmail.com"/>
                        </div>

                        <BlueButton>Continuer</BlueButton>

                        <p className="mt-4">
                            <a href="#more-option" className="text-sm text-gray-500">Plus d'options</a>
                        </p>
                    </div>

                    <div className="border-t-2">
                        <UsefulLink/>
                    </div>
                </div>
            </div>

            <div className="flex-grow">
                <p className="flex items-center justify-between p-4 bg-white border-2 rounded-lg">
                    <span>Aucune invitation en attente</span>
                    <GrayButton href="#manage">Gérer</GrayButton>
                </p>

                <div className="p-4 mt-4 bg-white border-2 rounded-lg">
                    <div className="flex items-center justify-between">
                        <h4>Des Ingénieurs logiciels que vous pourriez connaître</h4>
                        <GrayButton href="#see-all">Tout voir</GrayButton>
                    </div>

                    <div className="grid grid-cols-4 gap-3 mt-4">
                        {followUsers.map((item, index) => (
                            <FollowProfile key={index} item={item}/>
                        ))}
                    </div>

                    <div className="flex mt-8 items-center justify-between">
                        <h4>Personnes de votre secteur que vous pourriez connaître</h4>
                        <GrayButton href="#see-all">Tout voir</GrayButton>
                    </div>

                    <div className="grid grid-cols-4 gap-3 mt-4">
                        {followUsers.map((item, index) => (
                            <FollowProfile key={index} item={item}/>
                        ))}
                    </div>

                    <div className="flex mt-8 items-center justify-between">
                        <h4>Pages en vogue dans votre réseau</h4>
                        <GrayButton href="#see-all">Tout voir</GrayButton>
                    </div>

                    <div className="grid grid-cols-4 gap-3 mt-4">
                        {popularPages.map((item, index) => (
                            <FollowProfile key={index} item={item}/>
                        ))}
                    </div>

                    <div className="flex mt-8 items-center justify-between">
                        <h4>Personnes suggérées pour vous</h4>
                        <GrayButton href="#see-all">Tout voir</GrayButton>
                    </div>

                    <div className="grid grid-cols-4 gap-3 mt-4">
                        {followUsers.map((item, index) => (
                            <FollowProfile key={index} item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyNetwork;