import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Tag from "../components/Tag";

export default function Contact() {
    return (
        <>
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
