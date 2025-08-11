import { Link } from "react-router";
import { assets } from "../assets/assets";

export default function BlogCard({ title, desc, thumbnail, href }) {
    <Link
        to={href}
        className={`relative flex flex-col gap-10 overflow-hidden rounded-[10px] border-[2px] border-[#D1D5DB] transtion-all duration-250 ease-out hover:border-[#3B82F6] group`}
    >
        <div className="w-full">
            <img src={thumbnail} alt="mockup" />
        </div>
        <div className="flex flex-col gap-2.5 px-8 lg:pb-10">
            <h3 className="!text-[22px] lg:!text-[24px] leading-[1.4em] color-black">
                {title}
            </h3>
            <p className="text-lg leading-[1.8em] color-para">{desc}</p>
        </div>
        {/* Hover Tag */}
        <div className="lg:absolute center-between w-max ml-8 mb-10 lg:ml-0 gap-0.5 py-2 px-2.5 md:pl-2.5 md:pr-1.5 rounded-[5px] top-3 right-3 border lg:border-0 border-[#3B82F6] bg-[#3B82F6] text-white font-normal md:font-semibold text-base lg:opacity-0 transition-opacity duration-250 ease-out max-sm:group-hover:bg-[#3B82F6] max-sm:group-hover:text-white group-hover:opacity-100">
            <span>Tìm hiểu thêm</span>
            <img src={assets.arrowRight} className="inline-block" />
        </div>
    </Link>;
}
