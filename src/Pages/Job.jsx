import {recommendations} from "../constants/all";

const Job = () => {

    const divideX = () => {
        return (
            <div className="h-8 border-l-2"/>
        )
    }

    return (
        <div className="flex flex-col pb-16 space-y-4">
            <div className="flex items-center justify-between py-3 pl-6 pr-3 bg-white border-2 rounded-lg shadow-sm">
                <div className="flex items-center space-x-2">
                    <div className="flex items-center py-1 pr-6 text-gray-500 space-x-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>
                        <span className="font-bold">Mes offres <br/> d'emploi</span>
                    </div>

                    {divideX()}

                    <div className="flex items-center px-6 py-1 text-gray-500 space-x-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" /></svg>
                        <span className="font-bold">Alertes <br/> Emploi</span>
                    </div>

                    {divideX()}

                    <div className="flex items-center px-6 py-1 text-gray-500 space-x-2">
                        <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"></path></svg>
                        <span className="font-bold">Salaire</span>
                    </div>

                    {divideX()}

                    <div className="flex items-center px-6 py-1 text-gray-500 space-x-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                        <span className="font-bold">Evaluation des <br/> compétences</span>
                    </div>

                    {divideX()}

                    <div className="flex items-center px-6 py-1 text-gray-500 space-x-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
                        <span className="font-bold">Préférences de <br/> candidature</span>
                    </div>
                </div>

                <div className="flex items-center px-3 py-1 text-blue-600 border-2 border-blue-600 space-x-2 rounded-xl">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                    <p className="font-bold text-center">Publier une <br/> offre <br/> d'emploi <br/> gratuitement</p>
                </div>
            </div>

            <div className="px-6 py-3 bg-blue-200 border-2 rounded-lg shadow-sm">
                <h2 className="text-2xl text-center text-gray-700 font-extralight">Quel poste recherchez-vous ?</h2>

                <div className="flex items-center my-6 space-x-4">
                    <div className="relative flex-grow">
                        <svg className="absolute w-6 h-6 mt-2 ml-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                        <input type="text" className="w-full px-12 py-2.5 text-sm text-gray-600 placeholder-gray-500 bg-white rounded focus:outline-none" placeholder="Chercher par intitulé de poste, compétence ou entreprise"/>
                    </div>

                    <div className="relative flex-grow">
                        <svg className="absolute w-6 h-6 mt-2 ml-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                        <input type="text" className="w-full px-12 py-2.5 text-sm text-gray-600 placeholder-gray-500 bg-white rounded focus:outline-none" placeholder="Ville, département ou code postal"/>
                    </div>
                    <button className="flex-none px-8 py-2 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-900 hover:text-opacity-90 ro">Recherche</button>
                </div>
            </div>

            <div className="px-6 py-3 bg-white border-2 rounded-lg shadow-sm">
                <h2 className="my-2 text-lg font-bold">Recherches d'emploi</h2>
                <div className="inline-block p-2 ml-2 border-2 rounded-lg">
                    <h4 className="text-sm font-semibold">développeur</h4>
                    <p className="mt-1 text-xs text-gray-500">
                        <span>Alerte activée</span>
                        <span> Bénin · Laravel News · PHP et 1 de plus</span>
                    </p>
                </div>
            </div>

            <div className="flex px-6 pt-3 pb-2 bg-white border-2 rounded-lg shadow-sm space-x-4">
                <img className="flex-none rounded-full w-14 h-14" src="/images/small-profile.jpeg" alt=""/>
                <div className="flex-grow">
                    <div className="flex justify-between">
                        <h1>Essayez Premium pour voir des postes qui vous correspondent</h1>
                        <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
                    </div>
                    <div className="flex items-center my-1 space-x-1">
                        <div className="flex items-center -space-x-3">
                            <img className="p-0.5 bg-white rounded-full w-8 h-8" src="/images/pre-1.jpeg" alt=""/>
                            <img className="p-0.5 bg-white rounded-full w-8 h-8" src="/images/pre-2.jpeg" alt=""/>
                            <img className="p-0.5 bg-white rounded-full w-8 h-8" src="/images/pre-3.jpeg" alt=""/>
                        </div>
                        <p className="text-sm text-gray-500">Alban et des millions de membres utilisent Premium</p>
                    </div>

                    <button className="font-bold text-blue-600 border-2 border-blue-600 rounded-full py-0.5 px-4 hover:bg-blue-100">Essai gratuit 1 mois</button>
                </div>
            </div>

            <div className="bg-white border-2 rounded-lg shadow-sm">
                <div className="px-6 pt-3 pb-6">
                    <h2 className="mt-2 text-lg font-bold">Recherches d'emploi</h2>
                    <p className="text-sm text-gray-500">Selon votre profil et votre historique de recherche</p>

                    <div className="grid grid-cols-4 gap-6 mt-4">
                        {recommendations.map((item, index) => (
                            <a key={index} href="#premium" className="flex flex-col justify-between block px-4 pt-6 pb-2 border-2 rounded-lg group hover:shadow-md">
                                <div>
                                    <div className="flex items-start justify-between">
                                        <img className="w-16 h-16" src={item.profile} alt=""/>
                                        <div className="flex text-gray-500 -space-x-1">
                                            <button className="hidden inline-block focus:outline-none group-hover:block">
                                                <svg className="w-10 h-10 p-2.5 rounded-full hover:bg-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" /><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" /></svg>
                                            </button>

                                            <button className="inline-block focus:outline-none">
                                                <svg className="w-10 h-10 p-2.5 rounded-full hover:bg-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="pt-2 pb-8">
                                        <h3 className="font-bold">{item.title}</h3>
                                        <div className="text-sm text-gray-500">
                                            <p>{item.company}</p>
                                            <p>{item.location}</p>
                                        </div>
                                    </div>

                                    {item.active && (
                                        <div className="flex items-center space-x-1.5 text-xs mt-2">
                                            <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                            <span className="font-semibold text-gray-500">Recrutement actif</span>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-8 text-xs text-gray-500">
                                    <p>
                                        <span>{item.date}</span>
                                        <span> • </span>
                                        <strong className="text-green-700">{item.candidates} candidats</strong> <br/>
                                    </p>

                                    {item.apply_easily && (
                                        <p className="flex items-center space-x-0.5 mt-1">
                                            <span>•</span>
                                            <svg className="w-3 h-3 text-blue-500" stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                                            <span>Postuler facilement</span>
                                        </p>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="py-4 text-center border-t-2">
                    <a className="font-semibold text-blue-600 px-2 py-1.5 rounded hover:bg-blue-100" href="#search">Rechercher d'autres offres d'emploi:</a>
                </div>
            </div>
        </div>
    );
};

export default Job;