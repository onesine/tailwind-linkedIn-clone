const UsefulLink = () => {
    return (
        <div className="w-full sticky top-20 text-xs text-gray-500 mt-5">
            <div className="flex flex-wrap items-center justify-center space-x-4 leading-loose">
                <a href="#item" className="hover:text-blue-500 hover:underline">Infos</a>
                <a href="#item" className="hover:text-blue-500 hover:underline">Accessibilité</a>
                <a href="#item" className="hover:text-blue-500 hover:underline">Assistance clientèle</a>
                <a href="#item" className="hover:text-blue-500 hover:underline">
                    <div className="flex">
                        <span>Condition générales et confidentialité</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </a>
                <a href="#item" className="hover:text-blue-500 hover:underline">Préférences Pubs</a>
                <a href="#item" className="hover:text-blue-500 hover:underline">Publicité</a>
                <a href="#item" className="hover:text-blue-500 hover:underline">
                    <div className="flex">
                        <span>Solution professionnelles</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </a>
                <a href="#item" className="hover:text-blue-500 hover:underline">Télécharger l'application linkedIn</a>
                <a href="#item" className="hover:text-blue-500 hover:underline">Plus</a>
            </div>

            <p className="mt-4 flex items-center text-gray-700 justify-center">
                <span className="text-blue-500 font-semibold">Linked</span>
                <svg className="w-4 h-4 text-blue-500" stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                <span className="ml-0.5">LinkedIn corporation © 2021</span>
            </p>
        </div>
    );
};

export default UsefulLink;