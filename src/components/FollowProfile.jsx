import {LargeBlueButton} from "./Ui";

const FollowProfile = ({item}) => {
    return (
        <div className="pb-3 overflow-hidden border-2 rounded-lg hover:shadow-md">
            <img className="object-cover w-full h-16 rounded-t-lg" src={item.cover} alt=""/>

            <div className="flex flex-col justify-between h-full px-3 pb-4 -mt-12">
                <div className="text-center">
                    <a href="#profile" className="flex flex-col items-center justify-center focus:outline-none">
                        <img className="w-24 h-24 rounded-full" src={item.profile} alt=""/>
                        <h3 className="mt-2 font-semibold hover:underline">{item.full_name}</h3>
                    </a>
                    <p className="mt-1 text-sm text-center text-gray-500">{item.title}</p>
                </div>

                <div className="text-center">
                    {item.relations !== 0 && (
                        <a href="#relation" className="inline-block mt-1 text-xs text-gray-500 focus:outline-none hover:underline">{item.relations} relations en commun</a>
                    )}

                    <p className="w-full mt-2">
                        <LargeBlueButton>Se connecter</LargeBlueButton>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FollowProfile;