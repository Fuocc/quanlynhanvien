import { Link } from "react-router";
import { assets } from "../assets/assets";

export default function Cards({
    title,
    desc,
    icon,
    bgIcon,
    bgColor,
    isLink,
    href,
}) {
    return isLink ? (
        <Link
            to={href ? href : "/lien-he"}
            className={`relative flex flex-col gap-10 px-8 pb-8 pt-12 md:pb-10 md:pt-16 lg:py-10 md:pl-10 md:pr-12.5 rounded-[10px] border-[2px] border-[#D1D5DB] transtion-all duration-250 ease-out hover:border-[#3B82F6] group`}
        >
            <div className="w-1/2 lg:w-full md:w-50">
                <img src={icon} alt={`${title} logo`} />
            </div>
            <div className="flex flex-col gap-2.5">
                <h3 className="text-[28px] md:text-[32px] leading-[1.4em] color-black">
                    {title}
                </h3>
                <p className="text-lg leading-[1.8em] color-para">{desc}</p>
            </div>
            {/* Hover Tag */}
            <div className="absolute center-between gap-0.5 py-2 px-2.5 md:pl-2.5 md:pr-1.5 rounded-[5px] top-3 right-3 border md:border-0 border-[#3B82F6] md:bg-[#3B82F6] text-[#3B82F6] md:text-white font-normal md:font-semibold text-base md:opacity-0 transition-opacity duration-250 ease-out max-sm:group-hover:bg-[#3B82F6] max-sm:group-hover:text-white group-hover:opacity-100">
                <span>Tìm hiểu thêm</span>
                <img src={assets.arrowRight} className="hidden md:inline-block" />
            </div>
        </Link>
    ) : (
        <div
            className={`flex flex-col gap-6 pl-6 pt-6 pb-12.5 pr-12 rounded-[10px]`}
            style={{ backgroundColor: bgColor }}
        >
            <div
                className={`w-max rounded-[5px] p-3`}
                style={{ backgroundColor: bgIcon }}
            >
                <img src={icon} alt="decoration icon" />
            </div>
            <h3 className="text-[28px] md:text-[32px] leading-[1.4em] color-black">{title}</h3>
        </div>
    );
}
