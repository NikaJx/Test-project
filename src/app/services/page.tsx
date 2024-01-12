import Image from "next/image";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import TitleAndDesc from "@/components/title-desc/TitleAndDesc";
import Button from "@/components/button/Button";

import { FaCameraRetro, FaPhotoVideo, FaBaby, FaDrum } from "react-icons/fa";
import { FaCanadianMapleLeaf } from "react-icons/fa";

import serviceImg from "../../../public/images/service1.jpg";
import serviceImg2 from "../../../public/images/service2.jpg";

import "../../styles/services.css";
import BestServiceItem from "@/components/best-service-item/BestServiceItem";

export interface IDataBestServices {
    icon: any;
    title: string;
    text: string;
}

const dataBestServices: IDataBestServices[] = [
    {
        icon: <FaCameraRetro />,
        title: "Portrait Photography",
        text: "Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
    },
    {
        icon: <FaCameraRetro />,
        title: "Wedding Photography",
        text: "Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
    },
    {
        icon: <FaPhotoVideo />,
        title: "Fashion Photography",
        text: "Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
    },
];

const dataBestServices2: IDataBestServices[] = [
    {
        icon: <FaBaby />,
        title: "Baby Photography",
        text: "Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
    },
    {
        icon: <FaDrum />,
        title: "Event Photography",
        text: "Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
    },
    {
        icon: <FaCanadianMapleLeaf />,
        title: "Nature Photography",
        text: "Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor amet.",
    },
];

const Services = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="service-wrapper">
                    <div className="service-left">
                        <h3 className="service-title">
                            A high quality and best photography
                        </h3>
                        <ProgressBar />
                    </div>
                    <div className="service-right">
                        <Image src={serviceImg} alt="service" />
                    </div>
                </div>

                <div className="making-word">
                    <div className="makign-word-images">
                        <Image src={serviceImg2} alt="word" />
                    </div>
                    <div className="making-word-text">
                        <TitleAndDesc
                            title="Making world a better place"
                            desc="Lorem ipsum viverra feugiat. Tesque libero ut justo,
                        ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa"
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa
                        </p>

                        <div className="button-word">
                            <Button title="Learn More" bgColor="bg-white" />
                        </div>
                    </div>
                </div>

                <div className="best-services">
                    <div className="best-service-heading">
                        <TitleAndDesc
                            title="We Provide best services"
                            desc="Nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat sunt in culpa qui official."
                        />
                    </div>
                    <div className="best-services-wrapper">
                        {dataBestServices.map((item, i) => (
                            <BestServiceItem key={i} item={item} />
                        ))}
                    </div>
                    <div className="best-services-wrapper">
                        {dataBestServices2.map((item, i) => (
                            <BestServiceItem key={i} item={item} />
                        ))}
                    </div>
                </div>

                <div className="service-last-child">
                    <div className="best-service-heading">
                        <TitleAndDesc
                            title="have you ready to click your beatifull Photography?"
                            desc=" Estibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Nulla mollis dapibus nunc, ut rhoncus
                    turpis sodales quis. Integer sit amet mattis quam."
                        />
                    </div>
                    <div className="button-last">
                        <Button title="Book Now" bgColor="bg-white" />
                        <Button title="Get Started" bgColor="bg-pink" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
