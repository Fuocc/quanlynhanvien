import { Link } from "react-router";
import { assets } from "../assets/assets";
import Tag from "../components/Tag";
import posts from "../data/posts";

export default function Blog() {
    return (
        <>
            {/* Hero */}
            <section className="bg-[#EFF6FF] px-[32px] md:px-[8%] lg:px-[6%] pt-[40px] pb-[48px] lg:pt-[4%] lg:pb-[6%]">
                <div
                    className="relative lg:w-max flex flex-col items-center gap-6 content-width bg-cover"
                    style={{ backgroundImage: `url(${assets.heroDecor})` }}
                >
                    <Tag isFilled>Tin tức</Tag>
                    <h1 className="max-w-225 color-black font-medium lg:text-[64px] leading-[1.3em] text-center md:text-[48px] text-[32px]">
                        Bạn muốn biết thêm về giải pháp quản lý nhân viên?
                    </h1>
                </div>
            </section>

            <section className="flex flex-col gap-20 content-width px-[6%] pt-10 md:pt-16 pb-20 lg:pb-[6%] lg:py-20">
                <div className="flex flex-col gap-6">
                    <Tag>Tin tức nổi bật</Tag>
                    <h2 className="color-black max-w-[800px]">
                        Cập nhật xu hướng quản lý mới nhất
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4 lg:gap-6">
                    {posts.map((post) => (
                        <div key={post.id}>
                            <Link
                                to={`/post/${post.id}`}
                                className="relative flex flex-col gap-4 md:gap-10 h-full overflow-hidden rounded-[10px] border-[2px] border-[#D1D5DB] transtion-all duration-250 ease-out hover:border-[#3B82F6] group"
                            >
                                {post.thumbnail && (
                                    <img
                                        src={post.thumbnail}
                                        alt={post.title}
                                        className="w-full object-cover"
                                    />
                                )}
                                <div className="flex flex-col gap-4 p-4">
                                    <p className="text-sm color-para">
                                        {post.date} | {post.author || "Admin"}
                                    </p>
                                    <h3 className="font-medium !text-[22px] lg:!text-[24px] leading-[1.4em] color-black">
                                        {post.title}
                                    </h3>

                                    <p className="text-lg leading-[1.5em] color-para line-clamp-3 mb-4">
                                        {post.excerpt}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
