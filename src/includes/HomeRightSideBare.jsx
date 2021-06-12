import {courses, news_to_follow} from "../constants/all";
import UsefulLink from "../components/UsefulLink";
import {DetailButton, TitleHomeRightSideBare} from "../components/Ui";

const HomeRightSideBare = () => {
    return (
        <div className="flex-none w-80">
            <div className="p-3 bg-white rounded-md shadow-sm w-full">

                <TitleHomeRightSideBare>Ajoutez à votre fil d'actualité</TitleHomeRightSideBare>

                {news_to_follow.map((item, index) => (
                    <div key={index} className="flex my-4 space-x-3">
                        <img className="w-12 h-12 bg-gray-300 rounded-full" src={item.profile} alt=""/>

                        <div>
                            <h4 className="text-sm font-semibold text-gray-700">{item.full_name}</h4>

                            <p className="flex items-center text-xs font-light text-gray-400">
                                {item.situation}
                            </p>

                            <a href="#follow" className="inline-block mt-1">
                                <div className="flex items-center px-4 py-1 text-gray-500 border-2 border-gray-400 rounded-full hover:bg-gray-100">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                    <span>Suivre</span>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}

                <DetailButton href="#new" iconShow={true}>Voir toutes les suggestions</DetailButton>
            </div>

            <div className="py-3 mt-2 bg-white rounded-md shadow-sm w-full">

                <div className="px-3">
                    <TitleHomeRightSideBare>Les cours les plus vus aujourd'hui</TitleHomeRightSideBare>
                </div>

                <div className="my-4">
                    {courses.map((item, index) => (
                        <a key={index} href="#item" className="relative flex block px-3 py-1 text-sm group space-x-3 hover:bg-gray-200">
                            <svg className="absolute top-0 right-0 hidden mt-3 mr-2 text-gray-600 group-hover:inline-block" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.707 4.707L12 13.414 10.586 12l5.707-5.707L13 3h8v8l-3.293-3.293z"></path></g></svg>
                            <div className="flex items-start space-x-1">
                                <h3>{index + 1}.</h3>
                                <div>
                                    <span className="font-semibold">{item.title}</span>
                                    <p className="text-xs text-gray-400">{item.by}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="px-3">
                    <DetailButton href="#new" iconShow={true}>Afficher plus sur LinkedIn Learning</DetailButton>
                </div>
            </div>

            <UsefulLink/>
        </div>
    )
};

export default HomeRightSideBare;