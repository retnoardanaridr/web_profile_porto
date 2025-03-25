import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import React from "react";

function LandingPage() {
    return (
        <div className="h-screen relative bg-cover bg-center">
            <div className="absolute inset-0 h-screen w-full filter blur-sm p-5 bg-[url('/src/assets/bg-web.jpg')] bg-cover bg-center">
            </div>
            <section className="relative mx-auto w-1/2 bg-white z-10 alegreya-font">
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
                <section className="px-7 mx-auto py-2 my-3 bg-[#f0f0f0] rounded-lg w-11/12">
                    <h4 className="font-extrabold text-xl">Education: </h4>
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold text-base">Muhammadiyah University of Ponorogo</p>
                            <p className="font-semibold text-sm">Bachelor of Engineering</p>
                            <span>GPA 3.45/4.00</span>
                        </div>
                        <div>
                            <span className="text-sm">2018-2024</span>
                        </div>
                    </div>
                </section>
                <section className="px-7 mx-auto py-2 my-3 bg-[#f0f0f0] rounded-lg w-11/12">
                    <h4 className="font-extrabold text-xl">Work Experience: </h4>
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold text-base">PT Moiz Indonesia</p>
                            <p className="font-semibold text-sm">Odoo Frontend Developer</p>
                            <main>
                                <h6>Job Description: </h6>
                                <p>
                                    <span className="font-semibold">Developed</span> responsive front-end templates for web applications in Odoo using HTML(Odoo XML), SCSS/CSS, Javascript and Python. <br />
                                    <span className="font-semibold">Updated</span> UI/UX for design Websites and E-commerce. <br />
                                    <span className="font-semibold">Created</span> Website company profile, Made reports as Pivot, Chart, and Process Data. <br />
                                </p>
                            </main>
                        </div>
                        <div>
                            <span className="text-sm">2023-Until Now</span>
                        </div>
                    </div>
                </section>
                <section className="px-7 mx-auto py-2 my-3 bg-[#f0f0f0] rounded-lg w-11/12">
                    <h4 className="font-extrabold text-xl">Training: </h4>
                    <div className="flex justify-between">
                        <div>
                            <p className="font-semibold text-base">PT Dumbways ID</p>
                            <p className="font-semibold text-sm">Fullstack Developer</p>
                        </div>
                        <div>
                            <span className="text-sm">7 Month</span>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )

}


export default LandingPage;