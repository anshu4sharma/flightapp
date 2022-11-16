import { Link } from "react-router-dom";
function Navbar() {
    return (
        <header className="text-gray-600 body-font shadow-sm">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Link to={'/'} className="ml-3 text-2xl">InstaFly</Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;