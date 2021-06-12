import HomeLeftSideBare from "../includes/HomeLeftSideBare";
import NewPost from "../includes/NewPost";
import FilterPost from "../includes/FilterPost";
import News from "../includes/News";
import HomeRightSideBare from "../includes/HomeRightSideBare";

const Home = () => {
    return (
        <div className="flex space-x-6">
            <HomeLeftSideBare/>

            <div className="flex-grow">
                <NewPost/>

                <FilterPost/>

                <News/>
            </div>

            <HomeRightSideBare/>
        </div>
    );
};

export default Home;