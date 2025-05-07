import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import React from "react";

function LandingPage() {
    return (
        <div className="h-screen relative bg-cover bg-center overflow-hidden">
            <div className="absolute inset-0 h-full w-full filter blur-sm p-5 bg-[url('/src/assets/bg-web.jpg')] bg-cover bg-center z-0">
            </div>
            <section className="absolute inset-0 mx-auto lg:w-1/2 sm:w-4/5 bg-[#f5f5eb] z-10 overflow-x-scroll h-full alegreya-font">
                <div className="relative z-0 bg-[url('/src/assets/jumbotron.jpg')] bg-cover bg-center w-full h-60 m-0 p-0">
                </div>
                <div className="bg-babypeach h-40 w-40 rounded-full mx-auto p-3 text-center">
                    <h2>gambar</h2>
                    <img src="" alt="" />
                </div>
                <h3 className="text-center my-2">Retno Ardanari Dwi Rahmawati</h3>
                <div className="flex justify-center">
                    <span className="mx-1">
                        <FontAwesomeIcon icon={faDiscord} size="1x" />
                    </span>
                    <span className="mx-1">
                        <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
                    </span>
                    <span className="mx-1">
                        <FontAwesomeIcon icon={faMessage} size="1x" />
                    </span>
                    <span className="mx-1">
                        <FontAwesomeIcon icon={faPhone} size="1x" />
                    </span>
                </div>
                <summary className="p-7 text-justify">I'm Frontend || Fullstack Developer. I have experience in Fullstack position with stack tech React Js and backend using Go language.
                    And currently working in Odoo Frontend Developer, with stack tech Odoo software. As Odoo developer, I use HTML,CSS,JS and Python. 
                </summary>
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
                                    <li><strong>Created</strong> Website company profile, Made reports as Pivot, Chart, and Process Data. </li> 
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
                    <ul className="list-disc pl-6">
                        <li><strong>Indonesia:</strong> C2 (Native Speaker)</li>
                        <li><strong>English:</strong> B2 (upper-intermediate)</li>
                        <li><strong>German:</strong> A2 (Basic)</li>
                    </ul>
                </article>
                <article className="px-7 mx-auto py-2 my-3">
                    <h1 className="font-extrabold text-xl text-[#b3907a]">Programming Language: </h1>
                    <ul className="list-disc pl-6">
                        <li>Javascript</li>
                        <li>Go</li>
                        <li>Python</li>
                    </ul>
                </article>
                <article className="px-7 mx-auto py-2 my-3">
                    <h1 className="font-extrabold text-xl text-[#b3907a]">Markup, Framework, etc: </h1>
                    <ul className="list-disc pl-6">
                        <li>HTML</li>
                        <li>CSS/SCSS</li>
                        <li>React JS</li>
                        <li>Express JS</li>
                        <li>Odoo Software</li>
                    </ul>
                </article>
                <h1 className="px-7 mx-auto py-1 my-1 underline font-extrabold text-2xl text-[#b3907a]">Project Portofolio: </h1>
                <article>
                    
                </article>
            </section>
        </div>
    )

}


export default LandingPage;