import {articles} from "../constants/all";
import New from "../components/New";

const News = () => {
    return (
        <div className="flex flex-col space-y-4 mb-10">
            {articles.map((item, index) => (
                <New key={index} item={item}/>
            ))}
        </div>
    );
};

export default News;