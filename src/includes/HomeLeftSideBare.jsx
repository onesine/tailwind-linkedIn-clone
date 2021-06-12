const HomeLeftSideBare = () => {
    return (
        <div className="flex-none flex flex-col w-60">
            <div className="w-full overflow-hidden bg-white rounded-md shadow-sm">
                <div className="w-full h-12 bg-green-500 bg-cover" style={{backgroundImage: "url('/images/cover-profile.jpeg')"}}/>
                <div className="flex flex-col items-center justify-center pb-4 -mt-8 border-b-2">
                    <a href="#profile" className="active:outline-none"><img className="w-16 h-16 mb-6 rounded-full" src="/images/small-profile.jpeg" alt=""/></a>
                    <h3 className="font-semibold hover:underline"><a href="#onesine">Onesine Lewhe</a></h3>
                    <p className="text-sm text-gray-500">Développeur chez DMD</p>
                </div>
                <div>
                    <div className="divide-y-2">
                        <div className="py-4 text-xs text-gray-500">
                            <a href="#vue" className="flex items-center justify-between inline-block px-3 py-1 font-semibold active:outline-none hover:bg-gray-100">
                                <span>Vues de votre profile</span>
                                <span className="text-blue-600">5</span>
                            </a>
                            <a href="#vue" className="flex items-center justify-between inline-block px-3 py-1 font-semibold active:outline-none hover:bg-gray-100">
                                <span>Vues de votre post</span>
                                <span className="text-blue-600">27</span>
                            </a>
                        </div>

                        <a href="#premium" className="block px-3 py-4 text-xs hover:bg-gray-100">
                            <p className="text-gray-600">
                                Accédez à des infos et des outils exclusifs
                            </p>
                            <div className="flex items-center space-x-2">
                                <span className="inline-block w-3 h-3 bg-yellow-500 rounded"/>
                                <p className="font-semibold text-gray-800">Essai Premium gratuit d’un mois</p>
                            </div>
                        </a>

                        <a href="#my-items" className="block px-3 py-4 text-xs hover:bg-gray-100">
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>
                                <p className="font-semibold text-gray-800">Mes éléments</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="sticky top-20">
                <div className="w-full mt-2 overflow-hidden bg-white rounded-md shadow-sm">
                    <div className="flex flex-col p-3 text-xs font-semibold text-blue-500 border-b-2 space-y-2">
                        <a href="#group" className="focus:outline-none hover:underline">Groupes</a>
                        <div className="flex items-center justify-between">
                            <a href="#event" className="active:outline-none hover:underline">Evernements</a>
                            <a href="#plus" className="active:outline-none"><svg className="w-8 h-8 p-1 text-gray-500 rounded-full hover:bg-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg></a>
                        </div>
                        <a href="#hashtag" className="focus:outline-none hover:underline">Hashtags suivis</a>
                    </div>

                    <a href="#my-event" className="block px-3 py-3 text-sm hover:bg-gray-100">
                        <p className="font-semibold text-center text-gray-600">En découvrir plus</p>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default HomeLeftSideBare;