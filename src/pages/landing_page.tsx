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
                <h3 className="text-center my-2 font-bold">Retno Ardanari Dwi Rahmawati</h3>
                <h3 className="text-center my-2 font-bold">Software Developer || Fullstack Developer || Odoo Developer</h3>
                <summary className="p-7 text-justify">
                    Software Developer with over 3 years of professional experience developing and maintaining web applications,
implementing business requirements, and delivering scalable business solutions. Experienced in JavaScript, React,
Python, Odoo-ERP, REST APIs, PostgreSQL, and modern web development practices, with additional full-stack
training using React.js and Go. Passionate about building clean, user-friendly applications, continuously learning new
technologies, and contributing to collaborative, international engineering teams. 
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
                <h1 className="px-7 mx-auto py-2 my-1 font-extrabold text-2xl text-[#b3907a]">Work Experience </h1>
                <section className="px-7 mx-auto py-2 my-3 bg-[#9c8665] text-white rounded-lg w-11/12">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold text-base">PT Moiz Indonesia</p>
                            <p className="font-semibold text-sm">Web and Odoo Developer</p>
                            <main>
                                <h6>Job Description: </h6>
                                <ul className="list-disc pl-6">
                                    <li><strong>Developed</strong> and <strong>customised</strong> responsive frontend templates for business web applications using XML, SCSS/CSS, JavaScript, and Python within the Odoo framework.</li>
                                    <li><strong>Improved</strong> user interface and user experience across corporate websites and e-commerce platforms by implementing responsive frontend solutions.</li> 
                                    <li><strong>Designed</strong> and <strong>developed</strong> company websites, interactive dashboards, reports, and automated business solutions to improve operational efficiency.</li> 
                                    <li><strong>Implemented</strong> and <strong>customised</strong> business workflows across website, sales, purchasing, and HR systems based on business requirements.</li>
                                    <li><strong>Maintained</strong> and <strong>enhanced</strong> existing business application modules by troubleshooting issues, fixing bugs, and implementing system improvements within the Odoo platform.</li>
                                </ul>
                            </main>
                        </div>
                        <div>
                            <span className="text-sm">2023-Until Now</span>
                        </div>
                    </div>
                </section>
                <h1 className="px-7 mx-auto py-2 my-1 font-extrabold text-2xl text-[#b3907a]">Education </h1>
                <section className="px-7 mx-auto py-2 my-3 bg-[#9c8665] text-white rounded-lg w-11/12">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold text-base">Muhammadiyah University of Ponorogo</p>
                            <p className="font-semibold text-sm">Bachelor of Engineering / Informatic Engineering</p>
                            <span>GPA 3.45/4.00</span>
                            <ul className="list-disc pl-6">
                                <li>Studied software engineering, web development, database systems, and computer networking.</li>
                                <li>Built web applications from scratch using modern web technologies.</li>
                                <li>Designed relational database structures and implemented data management concepts.</li>
                                <li>Developed Android mobile applications using Android Studio.</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-sm">2018-2024</span>
                        </div>
                    </div>
                </section>
                <h1 className="px-7 mx-auto py-2 my-1 font-extrabold text-2xl text-[#b3907a]">Training </h1>
                <section className="px-7 mx-auto py-2 my-3 bg-[#9c8665] text-white rounded-lg w-11/12">
                    <article className="mb-3 flex justify-between">
                        <div>
                            <p className="font-semibold text-base">PT Dumbways ID</p>
                            <p className="text-sm">Fullstack Developer Training</p>
                            <ul className="list-disc pl-6">
                                <li>Completed a 7-month Full Stack Web Development training focused on React.js, Go, and modern web technologies.</li>
                                <li>Built responsive e-commerce web applications by implementing UI designs from Figma using React.js.</li>
                                <li>Developed backend services and REST APIs using Go and integrated frontend applications with Axios.</li>
                                <li>Worked with MySQL and PostgreSQL for database design, management, and data integration.</li>
                                <li>Collaborated in developing a full-stack e-commerce application following industry development practices.</li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-sm">7 Month</span>
                        </div>
                    </article>
                    <article className="flex justify-between">
                    <div>
                            <p className="font-semibold text-base">Dicoding Academy</p>
                            <p className="text-sm">Backend Developer Basic Training</p>
                            <ul className="list-disc pl-6">
                                <li>Strengthened JavaScript fundamentals including ES6, DOM manipulation, asynchronous programming, and problem-solving.</li>
                                <li>Learned fundamental AWS cloud services and deployment concepts for modern web applications.</li>
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
                        <button className="block btn-link-decoration" title="Click to see certificates & achievements" onClick={() => setShowDeutsch(true)}><strong><FontAwesomeIcon icon={faCircleInfo} /> German:</strong> B1 (Early)</button>
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