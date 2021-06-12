const NewPost = () => {
    return (
        <div className="px-3 pt-3 bg-white border-2 rounded-md">
            <div className="flex items-center space-x-2">
                <img className="w-12 h-12 rounded-full" src="/images/small-profile.jpeg" alt=""/>
                <input className="flex-grow px-4 py-3 text-sm font-semibold placeholder-gray-600 border-2 rounded-full cursor-pointer hover:bg-gray-200 focus:outline-none" type="text" placeholder="Commencer un post"/>
            </div>

            <div className="flex items-center justify-between my-1 space-x-2">
                <a href="#photo" className="flex items-center block px-2 py-4 rounded-md space-x-2 hover:bg-gray-100">
                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                    <span className="text-sm font-semibold text-gray-600">Photo</span>
                </a>

                <a href="#video" className="flex items-center block px-2 py-4 rounded-md space-x-2 hover:bg-gray-100">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
                    <span className="text-sm font-semibold text-gray-600">Vidéo</span>
                </a>

                <a href="#event" className="flex items-center block px-2 py-4 rounded-md space-x-2 hover:bg-gray-100">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span className="text-sm font-semibold text-gray-600">Evénement</span>
                </a>

                <a href="#article" className="flex items-center block px-2 py-4 rounded-md space-x-2 hover:bg-gray-100">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                    <span className="text-sm font-semibold text-gray-600">Rédiger un article</span>
                </a>
            </div>
        </div>
    );
};

export default NewPost;