import { solutions } from "../assets/assets.js";
import Cards from "./Cards.jsx";
import Tag from "./Tag.jsx";

export default function OtherSolutions({ currentSolution }) {
    const filteredSolutions = solutions.filter(
        (item) => item.title !== currentSolution
    );

    return (
        <>
            <div className="flex flex-col gap-6">
                <Tag>Tùy chọn linh hoạt</Tag>
                <h2 className="color-black max-w-[800px]">
                    Khám phá thêm những giải pháp nổi bật khác
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
                {filteredSolutions.map((sol) => (
                    <Cards
                        key={sol.title}
                        title={sol.title}
                        desc={sol.desc}
                        icon={sol.logo}
                        href={sol.href}
                        isLink
                    />
                ))}
            </div>
        </>
        // <div className="other-solutions">
        //     <h2>Khám phá thêm những giải pháp nổi bật khác</h2>
        //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        //         {filteredSolutions.map((sol, index) => (
        //             <Link
        //                 to={sol.href}
        //                 key={index}
        //                 className="border p-4 rounded hover:shadow-lg"
        //             >
        //                 <img
        //                     src={sol.logo}
        //                     alt={sol.name}
        //                     className="h-10 mb-2"
        //                 />
        //                 <h4 className="font-bold mb-1">{sol.name}</h4>
        //                 <p className="text-sm text-gray-600">
        //                     {sol.description}
        //                 </p>
        //             </Link>
        //         ))}
        //     </div>
        // </div>
    );
}
