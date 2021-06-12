export const DetailButton = (props) => {
    return (
        <a href={props.href} className="inline-block active:outline-none">
            <div className="flex items-center px-2 text-gray-500 rounded-md space-x-2 hover:bg-gray-100">
                <span className="text-sm font-semibold">{props.children}</span>
                {props.iconShow ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                ) : null}
            </div>
        </a>
    );
};

export const TitleHomeRightSideBare = (props) => {
    return (
        <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-600">{props.children}</h3>
            <a href="#info">
                <svg className="w-8 h-8 p-2 text-gray-500 rounded-full hover:bg-gray-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
            </a>
        </div>
    );
};

export const GrayButton = (props) => {
    return (
        <a href={props.href} className="px-2 py-1 font-semibold text-gray-600 rounded hover:bg-gray-200">{props.children}</a>
    )
}

export const BlueButton = (props) => {
    return (
        <button className="px-4 py-0.5 mt-2 font-semibold text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-100 focus:outline-none">{props.children}</button>
    );
};

export const LargeBlueButton = (props) => {
    return (
        <button className="w-full py-0.5 mt-2 font-semibold text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-100 focus:outline-none">{props.children}</button>
    );
};