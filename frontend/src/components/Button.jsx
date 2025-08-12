import { Link } from "react-router";

export default function Button({ children, isStroke, ...props }) {
    return isStroke ? (
        <Link
            to="/lien-he"
            className={`bg-transparent color-black font-medium border border-[#1f2937] rounded-[5px] px-7 py-3.5 transtion-all duration-250 ease-out hover:bg-[#3B82F6] hover:text-white hover:border-transparent ${props.className} max-md:text-lg`}
        >
            {children}
        </Link>
    ) : (
        <Link
            to="/lien-he"
            className={`bg-[#3B82F6] text-white font-medium rounded-[5px] px-7 py-3.5 transition-all duration-250 ease-out hover:bg-[#1E82DC] ${props.className} max-md:text-lg`}
        >
            {children}
        </Link>
    );
}
