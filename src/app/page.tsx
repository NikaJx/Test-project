import { Metadata } from "next";

import BlackLine from "@/components/black-line/BlackLine";
import BlogCard from "@/components/blog-card/BlogCard";
import Faq from "@/components/faq/Faq";
import Gallery from "@/components/gallery/Gallery";

export const metadata: Metadata = {
    title: "Home",
};

const Home = () => {
    return (
        <>
            <Gallery />
            <Faq />
            <BlackLine />
            <BlogCard />
        </>
    );
};

export default Home;
