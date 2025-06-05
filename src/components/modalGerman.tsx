import { Modal } from "flowbite-react";
import React, { Dispatch, SetStateAction } from "react";

import duolingo from "../assets/duolingo.jpg";
import score from "../assets/score_duolingo.jpg";

interface ModalGermanProps {
    showDeutsch: boolean;
    setShowDeutsch: Dispatch<SetStateAction<boolean>>;
}

export default function ModalGerman({showDeutsch, setShowDeutsch}: ModalGermanProps) {
    return(
        <>
            <Modal show={showDeutsch} onClose={() => setShowDeutsch(false)} className="w-full sm:w-1/2 m-auto">
                <div>
                    <Modal.Header>
                        Retno Ardanari D. R
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <img src={duolingo} alt="Banner Duolingo Score" />
                            <p className="text-center text-green-500 font-bold">Status: Ongoing learning, current score: 41 (A1–A2)</p>
                            <img src={score} alt="Banner Score" />
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    )
}