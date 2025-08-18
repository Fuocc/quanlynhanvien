import { assets, featuredImages, cards, solutions } from "../assets/assets";
import Button from "../components/Button";
import Cards from "../components/Cards";
import ContactForm from "../components/ContactForm";
import Tag from "../components/Tag";

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className="bg-[#F8FAFC] px-[32px] md:px-[8%] lg:px-[6%] pt-[40px] pb-[64px] lg:pt-[4%] lg:pb-[8%]">
                <div
                    className="relative lg:w-max flex flex-col items-center gap-6 content-width bg-cover"
                    style={{ backgroundImage: `url(${assets.heroDecor})` }}
                >
                    <Tag>Giải pháp thông minh</Tag>
                    <h1 className="max-w-225 color-black font-medium lg:text-[64px] leading-[1.3em] text-center md:text-[48px] text-[36px]">
                        Tăng hiệu suất và kiểm soát
                        <span className="inline ml-3 lg:ml-0 lg:block text-[#3B82F6]">
                            đội ngũ chỉ với 1 nền tảng
                        </span>
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-[#6B7280] max-w-[700px] leading-[1.6em] text-center">
                        Theo dõi hiệu suất làm việc, kiểm soát thời gian và hành
                        vi nhân viên – tất cả trong một nền tảng dễ dùng và
                        triển khai nhanh chóng.
                    </p>
                    <Button className="mt-5 shadow-base">
                        Dùng thử miễn phí
                    </Button>

                    <img
                        className="hidden lg:block absolute max-w-[100px] right-[112%]"
                        src={assets.userBubble1}
                        alt="user-bubble-1"
                    />
                    <img
                        className="hidden lg:block absolute max-w-[100px] bottom-0 right-[106%]"
                        src={assets.userBubble2}
                        alt="user-bubble-2"
                    />
                    <img
                        className="hidden lg:block absolute max-w-[100px] left-[112%]"
                        src={assets.userBubble3}
                        alt="user-bubble-3"
                    />
                    <img
                        className="hidden lg:block absolute max-w-[100px] bottom-[10%] left-[100%]"
                        src={assets.userBubble4}
                        alt="user-bubble-4"
                    />
                </div>
            </section>

            {/* Featured Images */}
            <section className="flex flex-col items-center gap-12 content-width px-[32px] py-16 lg:flex-row lg:justify-between lg:px-[6%] lg:py-20 md:px-[8%]">
                <span className="font-medium text-base text-[#6B7280]">
                    Được tin dùng bởi
                </span>
                <div className="md:justify-between md:items-center flex justify-center flex-wrap gap-[56px]">
                    {featuredImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`featured ${index + 1}`}
                            className="max-w-[90px] max-h-[28px]"
                        />
                    ))}
                </div>
            </section>

            {/* Cards */}
            <section className="flex flex-col gap-12 md:gap-20 content-width px-[6%] py-16 lg:py-20">
                <div className="flex flex-col gap-6">
                    <Tag>Tính năng cốt lõi</Tag>
                    <h2 className="color-black max-w-[680px]">
                        Một nền tảng cho mọi nhu cầu quản lý
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
                    {cards.map((card) => (
                        <Cards
                            key={card.title}
                            title={card.title}
                            icon={card.icon}
                            bgIcon={card.bgIcon}
                            bgColor={card.bgColor}
                        />
                    ))}
                </div>
            </section>

            {/* Link Cards */}
            <section className="flex flex-col gap-20 content-width px-[6%] pt-10 md:pt-16 pb-20 lg:pb-[6%] lg:py-20">
                <div className="flex flex-col gap-6">
                    <Tag>Tính năng cốt lõi</Tag>
                    <h2 className="color-black max-w-[800px]">
                        Một nền tảng cho mọi nhu cầu quản lý
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
                    {solutions.map((card) => (
                        <Cards
                            key={card.title}
                            title={card.title}
                            desc={card.desc}
                            icon={card.logo}
                            href={card.href}
                            isLink
                        />
                    ))}
                </div>
            </section>

            {/* Contact Form */}
            <section className="bg-[#EFF6FF]">
                <div className="flex flex-col lg:flex-row gap-16 content-width py-16 px-[32px] md:px-[8%] md:py-[10%] lg:px-[6%] lg:pt-[4%] lg:pb-[6%] lg:gap-28">
                    <div className="flex flex-col gap-6 w-full lg:w-1/2">
                        <Tag isFilled>Chương trình khuyến mãi</Tag>
                        <h2 className="color-black max-w-[680px] font-medium">
                            Giảm 5-15% <br />
                            Miễn phí triển khai
                        </h2>
                        <p className="text-lg leading-[1.6em] color-para">
                            Hãy để lại thông tin, chúng tôi sẽ liên hệ & tư vấn
                            giải pháp quản lý nhân viên phù hợp nhất.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </>
    );
}
