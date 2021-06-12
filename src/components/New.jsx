import {DetailButton} from "./Ui";

const New = ({item}) => {
    return (
        <div className="bg-white rounded-md shadow-sm w-full pb-2">
            <div className="p-3">
                <div className="flex items-start space-x-2">
                    <img className={`w-12 h-12${item.rounded ? ' rounded-full' : (item.liked_by ? ' rounded-full' : '')}`} src={item.liked_by ? item.liked_by.profile : item.profile} alt=""/>
                    <div className="flex-grow flex justify-between">
                        <div>
                            <a href="#profile" className="text-sm font-semibold hover:text-blue-500 hover:underline">{item.liked_by ? item.liked_by.full_name : item.full_name}</a>
                            <div className="text-xs text-gray-600">
                                <p>{item.liked_by ? item.liked_by.title : item.followers}</p>
                                <p className="flex items-center">
                                    <span>{item.liked_by ? item.liked_by.date : item.date} • </span>
                                    <svg className="ml-0.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path></svg>
                                </p>
                            </div>
                        </div>

                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                    </div>
                </div>

                {!item.liked_by && (
                    <>
                        <p className="text-sm text-justify my-2">{item.description}</p>

                        {item.tags.length > 0 && (
                            <div className="text-sm font-semibold text-blue-600 space-x-1">
                                {item.tags.map((tag, index) => (
                                    <a key={index} href="#item" className="hover:underline">#{tag}</a>
                                ))}
                            </div>
                        )}


                        {item.translate && (
                            <button className="focus:outline-none text-sm font-semibold text-blue-600 hover:bg-blue-50 px-2 py-1 mt-1 rounded-md">Voir la traduction</button>
                        ) }
                    </>
                ) }
            </div>

            {!item.liked_by ? (
                <div>
                    <a href="#item" className="active:outline-none">
                        <img src={item.description_picture} alt=""/>
                        {item.picture_have_info && (
                            <div className="px-3 py-2 bg-blue-50 space-y-3">
                                <h4 className="text-sm font-semibold">{item.picture_info}</h4>
                                <p className="text-xs text-gray-600">{item.picture_other_info}</p>
                            </div>
                        )}
                    </a>
                    <div className="px-3 pt-3 pb-0.5">
                        {(item.like_icon || item.fil_icon || item.love_icon) && (
                            <div>
                                <div className="text-xs flex items-center space-x-1">
                                    {item.like_icon && (
                                        <a href="#like" className="active:focus:outline-none">
                                            <svg className="w-4 h-4 text-white bg-blue-500 rounded-full p-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
                                        </a>
                                    )}

                                    {item.fil_icon && (
                                        <a href="#fil" className="active:focus:outline-none">
                                            <svg className="w-4 h-4 text-white bg-yellow-500 rounded-full p-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" /></svg>
                                        </a>
                                    )}

                                    {item.love_icon && (
                                        <a href="#love" className="active:focus:outline-none">
                                            <svg className="w-4 h-4 text-white bg-red-500 rounded-full p-0.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                                        </a>
                                    )}

                                    {item.like_icon && (
                                        <div className="flex items-center space-x-2">
                                            <a href="#counter" className="hover:text-blue-500 hover:underline active:outline-none">
                                                <span>{item.like}</span>
                                            </a>
                                            {item.comments.length > 0 && (
                                                <>
                                                    <span>•</span>
                                                    <a href="#counter" className="hover:text-blue-500 hover:underline active:outline-none">
                                                        <span>{item.comments.length} commentaires</span>
                                                    </a>
                                                </>
                                            )}

                                        </div>
                                    )}
                                </div>

                                <hr className="mt-3"/>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="mx-3 border-2 rounded-md">
                    <div className="p-3">
                        <div className="flex items-start space-x-2">
                            <img className={`w-12 h-12${item.rounded ? ' rounded-full' : ''}`} src={item.profile} alt=""/>
                            <div className="flex-grow flex items-center justify-between">
                                <div>
                                    <a href="#profile" className="text-sm font-semibold hover:text-blue-500 hover:underline">{item.full_name}</a>
                                    <div className="text-xs text-gray-600">
                                        <p>{item.followers}</p>
                                        <p className="flex items-center">
                                            <span>{item.date} • </span>
                                            <svg className="ml-0.5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false"><path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path></svg>
                                        </p>
                                    </div>
                                </div>

                                <a href="#follow" className="text-blue-500 flex items-center font-semibold p-1 rounded hover:bg-blue-100">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                                    <span className="">Suivre</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <img className="mb-0.5" src={item.description_picture} alt=""/>
                </div>
            )}

            <div className="flex px-3 -ml-2 my-1 text-sm font-semibold text-gray-600 items-center">
                <a href="#jaime" className="flex items-center space-x-2 px-2 py-3 rounded-md hover:bg-gray-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                    <span>J'aime</span>
                </a>

                <a href="#comment" className="flex items-center space-x-2 px-2 py-3 rounded-md hover:bg-gray-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                    <span>Commenter</span>
                </a>

                <a href="#share" className="flex items-center space-x-2 px-2 py-3 rounded-md hover:bg-gray-200">
                    <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg>
                    <span>Partager</span>
                </a>

                <a href="#send" className="flex items-center space-x-2 px-2 py-3 rounded-md hover:bg-gray-200">
                    <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
                    <span>Envoyer</span>
                </a>
            </div>

            {item.comments.length > 0 && (
                <div className="px-3">
                    <div className="flex items-center space-x-2">
                        <img className="w-10 h-10 rounded-full" src="/images/small-profile.jpeg" alt=""/>
                        <div className="relative flex-grow">
                            <a href="#photo" className="absolute top-0 right-0 mt-0.5 mr-0.5 focus:outline-none">
                                <svg className="w-9 h-9 text-gray-500 hover:bg-gray-200 rounded-full p-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                            </a>
                            <a href="#smile" className="absolute top-0 right-0 mt-0.5 mr-11 focus:outline-none">
                                <svg className="w-9 h-9 text-gray-500 hover:bg-gray-200 rounded-full p-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </a>
                            <input className="w-full px-4 py-2 text-sm font-light placeholder-gray-600 border-2 border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400" type="text" placeholder="Ajouter un commentaire..."/>
                        </div>
                    </div>

                    <div className="text-gray-500 flex items-center my-3">
                        <h4 className="text-sm font-semibold">Les plus pertinents</h4>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </div>

                    {item.comments.map((comment, index) => (
                        <div key={index} className="flex items-start space-x-2">
                            <img className="w-10 h-10 flex-none rounded-full" src={comment.author.profile} alt=""/>
                            <div className="flex-grow">
                                <div className="bg-gray-200 px-3 py-2 rounded-b-lg rounded-r-lg">
                                    <div className="flex items-start justify-between">
                                        <a href="#profile" className="text-xs font-semibold hover:text-blue-500 hover:underline">{comment.author.full_name}</a>
                                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                                            <span>{comment.date}</span>
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
                                        </div>
                                    </div>
                                    <p className="w-full text-xs text-gray-500">{comment.author.title}</p>

                                    <p className="text-sm mt-4 text-justify">{comment.content}</p>

                                    {comment.translate && (
                                        <button className="focus:outline-none text-xs font-semibold text-blue-600 hover:underline mt-1 rounded-md">Voir la traduction</button>
                                    )}
                                </div>

                                <div className="flex items-center text-xs font-semibold mt-1 text-gray-500">
                                    <div className="flex items-center mr-2 space-x-2">
                                        <a href="#like" className="px-1 rounded-md hover:bg-gray-200">J'aime</a>
                                        <span>•</span>
                                        <a href="#like" className="flex items-center space-x-0.5 font-light text-gray-800">
                                            <svg className="w-4 h-4 bg-blue-500 text-white p-0.5 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
                                            <span>1</span>
                                        </a>
                                    </div>
                                    <div className="h-5 w-1 border-l-2"/>
                                    <div className="ml-2 space-x-2">
                                        <a href="#answer" className="px-1 rounded-md hover:bg-gray-200">Répondre</a>
                                        <span>•</span>
                                        <span href="#like" className="font-light text-gray-800">
                                                1 commentaires
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="mt-8">
                        <DetailButton href="#new" iconShow={false}>Afficher plus de commentaires</DetailButton>
                    </div>
                </div>
            )}
        </div>
    );
};

export default New;