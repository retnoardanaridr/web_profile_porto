import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

import { personalProjectData } from "../data/personal-project";

export default function PersonalProjectDetail() {
    const { id } = useParams();
    const project = personalProjectData.find((item) => item.id === Number(id));
    if (!project) {
        return <div className="text-center p-4">Project not found.</div>
    }
    return (
        <div className="h-screen relative bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 h-full w-full filter blur-sm p-5 bg-[url('/src/assets/bg-web.jpg')] bg-cover bg-center z-0">
            </div>
            <section className="absolute inset-0 mx-auto lg:w-1/2 sm:w-5/6 bg-[#f5f5eb] z-10 overflow-y-scroll h-full alegreya-font">
                <header className="flex justify-between my-4 mx-7">
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowLeftLong} size="2x" color="#b3907a" />
                    </Link>
                    <h3 className="text-[#b3907a]">Retno Ardanari D R</h3>
                </header>
                <article className="mx-5">
                    <img src={project.img} alt="Project" /> 
                    <h1 className="text-center m-4 text-xl font-bold text-[#b3907a]">{project.title}</h1>
                    <h2 className="text-[#b3907a] text-xl">Description</h2>
                    <p className="text-justify">{project.descriptionEn}</p>
                    <h2 className="text-[#b3907a] text-xl">Stack Tech</h2>
                    <ul className="list-disc pl-6">
                        {project.stackTech.map((tech:string, index:number) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </article>
            </section>
        </div>
    )
}