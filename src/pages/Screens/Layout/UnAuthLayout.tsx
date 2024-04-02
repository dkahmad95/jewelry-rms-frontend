import Logo from "@/UI-Components/sharedComponents/logo";
import {Outlet} from "react-router";

export default function UnAuthLayout() {

    return (
        <main className="flex items-center justify-center w-full  ">
            <div className="relative mx-auto flex w-full  md:flex-grow  flex-col space-y-2.5 p-4 ">
                <div
                    className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:items-center  md:justify-center  md:h-36">
                    <div className="w-32  text-white w-auto">
                        <Logo/>
                    </div>
                </div>


               <Outlet/>

            </div>
        </main>
    );
}
