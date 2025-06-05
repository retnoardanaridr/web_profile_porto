import { Modal } from "flowbite-react";
import React, { Dispatch, SetStateAction } from "react";

import certificate from "../assets/ceritificate english.png";
import score from "../assets/explain english score.png";

interface ModalProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}

export default function ModalLanguageEnglish({show, setShow}:ModalProps) {
    return (
        <>
            <Modal show={show} onClose={() => setShow(false)} className="w-full sm:w-1/2 m-auto">
                <div>
                    <Modal.Header>
                        Retno Ardanari D. R (English Level)
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <img src={certificate} className="w-full m-auto" alt="Certificat English Test CEFR Level" />
                            <img src={score} className="w-full m-auto" alt="Score English" />
                            <p className="text-center text-green-500 font-bold">Status: Ongoing learning</p>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    )
}