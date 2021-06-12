const MessagingBox = () => {
    return (
        <div className="fixed bottom-0 right-0 z-30 p-2 bg-white border-2 rounded-t-lg shadow-xl w-80">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <img className="w-8 h-8 rounded-full" src="/images/small-profile.jpeg" alt=""/>
                        <div className="absolute bottom-0 right-0 mt-4 w-2.5 h-2.5 bg-green-700 border-2 border-white rounded-full"/>
                    </div>
                    <h4 className="text-sm font-bold">Méssagerie</h4>
                </div>
                <div className="flex items-center text-gray-500 space-x-1">
                    <button className="focus:outline-none">
                        <svg className="w-8 h-8 p-2 rounded-full hover:bg-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                    </button>

                    <button className="focus:outline-none">
                        <svg className="w-8 h-8 p-2 rounded-full hover:bg-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                    </button>
                    <button className="focus:outline-none">
                        <svg className="w-8 h-8 p-2 rounded-full hover:bg-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessagingBox;