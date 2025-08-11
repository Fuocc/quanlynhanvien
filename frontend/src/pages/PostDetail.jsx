// src/pages/PostDetail.js
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";
import { assets } from "../assets/assets";

const PostDetail = () => {
    const { id } = useParams();
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return (
            <div className="max-w-3xl mx-auto p-8">
                <p className="text-red-500 font-semibold">
                    Bài viết không tồn tại.
                </p>
                <Link
                    to="/tin-tuc"
                    className="text-blue-600 underline text-sm mt-4 block"
                >
                    ← Quay lại trang blog
                </Link>
            </div>
        );
    }

    return (
        <>
            {/* Hero */}
            <section className="bg-[#EFF6FF] px-[8%] py-[40px] lg:pb-[64px] lg:pt-[4%] ">
                <div className="max-w-225 mx-auto">
                    <div
                        className="relative lg:w-max flex flex-col gap-6 bg-cover"
                        style={{ backgroundImage: `url(${assets.heroDecor})` }}
                    >
                        {/* Back link */}
                        <Link
                            to="/tin-tuc"
                            className="text-blue-600 text-sm mb-4 inline-block"
                        >
                            ← Quay lại trang blog
                        </Link>

                        {/* Title */}
                        <h1 className="max-w-225 color-black font-medium leading-[1.3em] md:text-[40px] text-[32px]">
                            {post.title}
                        </h1>

                        {/* Meta */}
                        <p className="text-sm text-gray-500 mb-6">
                            by {post.author || "Admin"} |{" "}
                            {post.date || "No date"} | Blog
                        </p>
                    </div>
                </div>
            </section>
            <div className="max-w-225 mx-auto px-[8%] lg:px-0 pt-10 pb-[6%] text-gray-800">
                {/* Main image */}
                {post.thumbnail && (
                    <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-auto rounded mb-6 shadow"
                    />
                )}

                {/* Content (allowing HTML) */}
                <div
                    className="prose text-base md:text-lg leading-[1.6em] font-normal color-para"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </>
    );
};

export default PostDetail;
