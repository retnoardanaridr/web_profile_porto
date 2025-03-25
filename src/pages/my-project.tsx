import React from "react";
import ListProjectWebsite from "./list-project";


export default function MyProjectPortofolio() {
    return(
        <div className="h-screen p-5">
            <div className="w-3/4 mx-auto mt-5">
                <div>
                    <h2 className="alegreya-font font-bold text-xl">Portofolio</h2>
                    <p className="alegreya-font">This is a website project was I make.</p>
                </div>
                <ListProjectWebsite />
            </div>
        </div>
    )
}