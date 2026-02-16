/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faGolang } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import ListProject from "./list_project";
import { workProjectData }from "../data/work-project";
import { personalProjectData  } from "../data/personal-project";

import profileImage from "../assets/Retno_ardanari.jpg";
import { Link } from "react-router-dom";
import ModalLanguageEnglish from "../components/modal";
import ModalGerman from "../components/modalGerman";


function LandingPage() {
    const [ showModal, setShowModal ] = useState(false)
    const [ showDeutsch, setShowDeutsch ] = useState(false)

    return (
        <div className="h-screen relative bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 h-full w-full filter blur-sm p-5 bg-[url('/src/assets/bg-web.jpg')] bg-cover bg-center z-0">
            </div>
            <section className="absolute inset-0 mx-auto lg:w-1/2 sm:w-5/6 bg-[#f5f5eb] z-10 overflow-y-scroll h-full alegreya-font">
                <div className="relative z-0 bg-[url('/src/assets/jumbotron.jpg')] bg-cover bg-center w-full h-60 m-0 p-0">
                </div>
                <div className="h-40 sm:w-48 w-48 rounded-full mx-auto relative top-[-100px] p-3 text-center">
                    <img src={profileImage} className="w-100 rounded-full" alt="Retno Ardanari D R" />
                </div>
                <h3 className="text-center my-2">Retno Ardanari Dwi Rahmawati</h3>
                <summary className="p-7 text-justify">
                    I'm a Frontend & Fullstack Developer with experience in building web applications using React.js and backend development with Go language. Currently, I'm working as a Frontend Developer specializing in Odoo, focusing on custom modules and UI development using HTML, CSS, JavaScript, and Python. I enjoy solving problems through clean code and creating user-friendly interfaces. 
                </summary>
                <h1 className="px-7 mx-auto py-1 my-1 underline font-extrabold text-2xl text-[#b3907a]">Contact: </h1>
                <div className="px-7">
                        <a className="mx-1 block" href="https://github.com/retnoardanaridr" title="Github">
                            <FontAwesomeIcon icon={faDiscord} size="1x" /> https://github.com/retnoardanaridr
                        </a>
                        <a className="mx-1 block" href="http://github.com/retnoardanaridrsecond28/" title="Github">
                            <FontAwesomeIcon icon={faDiscord} size="1x" /> http://github.com/retnoardanaridrsecond28/
                        </a>
                        <a className="mx-1 block" href="https://www.linkedin.com/in/retno-ardanari-dwi-rahmawati/" title="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedinIn} size="1x" /> https://www.linkedin.com/in/retno-ardanari-dwi-rahmawati/
                        </a>
                        <a className="mx-1 block" href="https://wa.me/6282132412942">
                            <FontAwesomeIcon icon={faWhatsapp} size="1x" /> +6282132412942
                        </a>
                        <a className="mx-1 block" href="mailto:retnoardanari1728@gmail.com">
                            <FontAwesomeIcon icon={faMessage} size="1x" /> retnoardanari1728@gmail.com
                        </a>
                </div>
                <h1 className="px-7 mx-auto py-2 my-1 font-extrabold text-2xl text-[#b3907a] underline">About Me: </h1>
                <section className="px-7 mx-auto py-2 my-3 bg-[#c1b6a3] text-white rounded-lg w-11/12">
                    <h4 className="font-extrabold text-xl text-[#b3907a]">Education: </h4>
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold text-base">Muhammadiyah University of Ponorogo</p>
                            <p className="font-semibold text-sm">Bachelor of Engineering / Informatic Engineering</p>
                            <span>GPA 3.45/4.00</span>
                            <ul className="list-disc pl-6">
                                <li>Learn a programming language</li>
                                <li>Learn to build a website from zero</li>
                                <li>Structure database and data management</li>
                                <li>Computer and Networking</li>
                                <li>Mobile App built with Android Studio</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-sm">2018-2024</span>
                        </div>
                    </div>
                </section>
                <section className="px-7 mx-auto py-2 my-3 bg-[#c1b6a3] text-white rounded-lg w-11/12">
                    <h4 className="font-extrabold text-xl text-[#b3907a]">Work Experience: </h4>
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold text-base">PT Moiz Indonesia</p>
                            <p className="font-semibold text-sm">Odoo Frontend Developer</p>
                            <main>
                                <h6>Job Description: </h6>
                                <ul className="list-disc pl-6">
                                    <li><strong>Developed</strong> responsive front-end templates for web applications in Odoo using HTML(Odoo XML), SCSS/CSS, Javascript and Python.</li>
                                    <li><strong>Updated</strong> UI/UX for design Websites and E-commerce. </li> 
                                    <li><strong>Created</strong> Website company profile. </li> 
                                    <li><strong>Made</strong> reports as Pivot, Chart, and Process Data.</li>
                                    <li><strong>Maintenance</strong> website as fix bug, upgrade sistem, performance optimization.</li>
                                </ul>
                            </main>
                        </div>
                        <div>
                            <span className="text-sm">2023-Until Now</span>
                        </div>
                    </div>
                </section>
                <section className="px-7 mx-auto py-2 my-3 bg-[#c1b6a3] text-white rounded-lg w-11/12">
                    <h4 className="font-extrabold text-xl text-[#b3907a]">Training: </h4>
                    <article className="mb-3 flex justify-between">
                        <div>
                            <p className="font-semibold text-base">PT Dumbways ID</p>
                            <p className="text-sm">Fullstack Developer</p>
                            <ul className="list-disc pl-6">
                                <li>Build, creating E-commerce website</li>
                                <li>Implementation code from figma design to React JS and Go Language</li>
                                <li>Learn Data Management and How to integration with Axios JS</li>
                                <li>Learn MySQL & PostgreSQL</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-sm">7 Month</span>
                        </div>
                    </article>
                    <article className="flex justify-between">
                    <div>
                            <p className="font-semibold text-base">Dicoding Academy</p>
                            <p className="text-sm">Javascript Fundamental</p>
                            <ul className="list-disc pl-6">
                                <li>Learning Basic Javascript</li>
                                <li>Deployment AWS fundamental</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-sm">1 Month</span>
                        </div>
                    </article>
                </section>
                <h1 className="px-7 mx-auto py-1 my-1 underline font-extrabold text-2xl text-[#b3907a]">Skills: </h1>
                <article className="px-7 mx-auto py-2 my-3">
                    <h1 className="font-extrabold text-xl text-[#b3907a]">Languages: </h1>
                    <div className="pl-6">
                        <button className="block btn-link-decoration"><strong><FontAwesomeIcon icon={faCircleInfo} /> Indonesia:</strong> C2 (Native Speaker)</button>
                        <button className="block btn-link-decoration" title="Click to see certificates & achievements" onClick={() => setShowModal(true)}><strong><FontAwesomeIcon icon={faCircleInfo} /> English:</strong> B2 (upper-intermediate)</button>
                        <button className="block btn-link-decoration" title="Click to see certificates & achievements" onClick={() => setShowDeutsch(true)}><strong><FontAwesomeIcon icon={faCircleInfo} /> German:</strong> A2 (Basic)</button>
                    </div>
                </article>
                <article className="px-7 mx-auto py-2 my-3">
                    <h1 className="font-extrabold text-xl text-[#b3907a]">Programming Language: </h1>
                    <ul className="list-none pl-6">
                        <li><FontAwesomeIcon icon={faJs} size="1x" /> Javascript</li>
                        <li><FontAwesomeIcon icon={faGolang} size="1x" /> Go</li>
                        <li><FontAwesomeIcon icon={faPython} size="1x" /> Python</li>
                    </ul>
                </article>
                <article className="px-7 mx-auto py-2 my-3">
                    <h1 className="font-extrabold text-xl text-[#b3907a]">Markup, Framework, etc: </h1>
                    <ul className="list-none pl-6">
                        <li><FontAwesomeIcon icon={faHtml5} size="1x" /> HTML</li>
                        <li><FontAwesomeIcon icon={faCss} size="1x" /> CSS/SCSS</li>
                        <li><FontAwesomeIcon icon={faReact} size="1x" /> React JS</li>
                        <li><FontAwesomeIcon icon={faNodeJs} size="1x" /> Express JS</li>
                        <li><FontAwesomeIcon icon={faCircle} size="1x" /> Odoo Software</li>
                        <li><FontAwesomeIcon icon={faWind} size="1x" /> Tailwind</li>
                        <li><FontAwesomeIcon icon={faBootstrap} size="1x" /> Bootstrap</li>
                        <li><FontAwesomeIcon icon={faGit} size="1x" /> Git</li>
                    </ul>
                </article>
                <h1 className="px-7 mx-auto py-1 my-1 underline font-extrabold text-2xl text-[#b3907a]">Project Portofolio: </h1>
                <article id="bottom" className="px-7">
                    <ListProject 
                    workProject={
                        <>
                            {workProjectData.map((work) => (
                                <Link to={`/work-project/${work.id}`} className="item cursor-pointer" key={work.id}>
                                    <img className="w-25 mx-2" src={work.img} alt={work.title} />
                                    <h6>{work.title}</h6>
                                </Link>
                            ))}
                        </>
                    }
                    personalProject={
                        <>
                            {personalProjectData.map((personal) => (
                                <Link to={`/personal-project/${personal.id}`} className="item cursor-pointer" key={personal.id}>
                                    <img className="w-25 mx-2" src={personal.img} alt={personal.title} />
                                    <h6>{personal.title}</h6>
                                </Link>
                            ))}
                        </>
                    } />
                </article>
            </section>
            {showModal && (
                <ModalLanguageEnglish
                    show={showModal}
                    setShow={setShowModal}
                />
            )}
            {showDeutsch && (
                <ModalGerman 
                    showDeutsch={showDeutsch}
                    setShowDeutsch={setShowDeutsch}
                />
            )}
        </div>
    )

}


export default LandingPage;