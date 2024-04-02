import {Button} from "@/UI-Components/sharedComponents/button";
import {Link} from "react-router-dom";


export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-4xl font-bold mb-4">Not Found!</h2>
            <p className="text-lg mb-6">Could not find the requested resource.</p>
            <Link to="/">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Return Home
                </Button>
            </Link>
        </div>
    );
}
