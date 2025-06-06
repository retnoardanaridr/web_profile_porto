import React from "react";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
type OwlProps = {
    personalProject: React.ReactNode;
    workProject: React.ReactNode;
}
const carouselOwlOptions = {
    loop: true,
    margin:10,
    nav:true,
    responsive: {
        0: { items: 1 },
        600: { items: 1 },
        1000: { items: 2 }
    }

}
export default function ListProject( { personalProject, workProject }: OwlProps) {
    return (
        <>
            <ul className="list-decimal">
                <li className="mb-2 text-[#6C3428]">Work Project</li>
                <OwlCarousel className="owl-theme" {...carouselOwlOptions}>
                    {workProject}
                </OwlCarousel>
                <li className="mb-2 text-[#6C3428]">Personal Project</li>
                <OwlCarousel className="owl-theme" {...carouselOwlOptions}>
                    {personalProject}
                </OwlCarousel>
            </ul>
        </>
    )
}

