import { assets, staffcopSlides } from "../assets/assets";

import Cards from "../components/Cards";
import ContactForm from "../components/ContactForm";
import ImageSlider from "../components/ImageSlider";
import OtherSolutions from "../components/OtherSolutions";
import Tag from "../components/Tag";

export default function StaffCopPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-[#EFF6FF] px-[32px] md:px-[8%] lg:px-[6%] pt-[40px] pb-[64px] lg:pt-[4%] lg:pb-[6%]">
                <div
                    className="relative lg:w-max flex flex-col items-center gap-6 content-width bg-cover"
                    style={{ backgroundImage: `url(${assets.heroDecor})` }}
                >
                    <Tag isFilled>StaffCop Enterprise</Tag>
                    <h1 className="max-w-225 color-black font-medium lg:text-[64px] leading-[1.3em] text-center md:text-[48px] text-[36px]">
                        Giải pháp quản lý StaffCop Enterprise
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-[#6B7280] max-w-[500px] leading-[1.6em] text-center">
                        Giải pháp đầu tư chất lượng cao “Best Seller” với đầy đủ
                        các chức năng giám sát cần thiết nhất.
                    </p>
                </div>
            </section>

            {/* Post Content */}
            <section className="flex flex-col gap-8 md:gap-16 lg:px-0 max-w-[780px] mx-auto pt-12 md:pt-16 pb-16 px-8 md:px-[8%] lg:pt-20 lg:pb-25">
                <div className="flex flex-col gap-6">
                    <h3 className="color-black">
                        StaffCop Enterprise giúp doanh nghiệp của bạn an toàn và
                        bảo mật
                    </h3>
                    <p className="color-para font-normal text-lg lg:text-xl leading-[1.8em]">
                        StaffCop cung cấp một giải pháp tích hợp đầy đủ, độc
                        đáo, tập trung vào phát hiện và ứng phó với các mối đe
                        dọa trong nội bộ thông qua sự kết hợp giữa phân tích
                        hành vi nâng cao và theo dõi, ghi nhận nhật ký hoạt động
                        nội bộ cùng tính năng báo cáo phong phú.
                    </p>
                </div>
                <ImageSlider images={staffcopSlides} />
                <div className="flex flex-col gap-6">
                    <h3 className="color-black">
                        Các chức năng của StaffCop Enterprise
                    </h3>
                    <p className="color-para font-normal text-lg lg:text-xl leading-[1.8em]">
                        StaffCop Enterprise giúp doanh nghiệp của bạn:
                    </p>
                    <ul className="color-para font-normal text-lg lg:text-xl leading-[1.8em] list-disc ml-[24px] lg:ml-[32px]">
                        <li>Giảm nguy cơ rò rỉ dữ liệu đến mức thấp nhất.</li>
                        <li>Cung cấp sự minh bạch trong quy trình làm việc.</li>
                        <li>
                            Kiểm tra tính hiệu quả của các quy định công ty đã
                            đề ra trong thực tế.
                        </li>
                        <li>
                            Hoàn vốn đầu tư nhanh chóng với chi phí bảo trì tối
                            thiểu.
                        </li>
                        <li>Triển khai dễ dàng.</li>
                    </ul>
                    <p className="color-para font-normal text-lg lg:text-xl leading-[1.8em]">
                        StaffCop Enterprise:
                    </p>
                    <ul className="color-para font-normal text-lg lg:text-xl leading-[1.8em] list-disc ml-[24px] lg:ml-[32px]">
                        <li>
                            Quản lý tất cả các sự kiện diễn ra ở máy tính nhân
                            viên để phân tích, thông báo cho người quản trị và
                            đưa ra những quyết định tiếp theo.
                        </li>
                        <li>
                            Phân tích: phân tích dữ liệu tự động và thống kê
                            giúp phát hiện sự bất thường trong hành vi người
                            dùng, xác định sự cố, đánh giá nhân viên.
                        </li>
                        <li>
                            Cảnh báo: tự động cảnh báo những vi phạm chính sách
                            bảo mật, các hành động nguy hiểm hay sự không hiệu
                            quả khi làm việc của nhân viên.
                        </li>
                        <li>
                            Báo cáo: chức năng báo cáo cho phép cấu hình tùy ý
                            và tự động gửi e-mail định kỳ. Bạn có thể dễ dàng
                            tạo báo cáo với một trình hỗ trợ mạnh mẽ.
                        </li>
                        <li>
                            Ngăn chặn: chặn truy cập vào các trang web “tiêu
                            cực”, chạy các ứng dụng và thiết bị lưu trữ ngoài để
                            giảm nguy cơ lây nhiễm phần mềm độc hại và góp phần
                            nâng cao năng suất nhân viên.
                        </li>
                        <li>
                            Xem lại lịch sử: tìm kiếm tất cả dữ liệu thông qua
                            các từ khóa và bộ lọc nâng cao, từ đó dễ dàng truy
                            vấn và tìm kiếm những gì cần thiết đã được lưu trữ
                            trong cơ sở dữ liệu chỉ với một vài cú nhấp chuột.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Link Cards */}
            <section className="flex flex-col gap-20 bg-[#FDFEFF] content-width px-[6%] pt-10 md:pt-16 pb-20 lg:pb-[6%] lg:py-20">
                <OtherSolutions currentSolution="Staffcop" />
            </section>

            {/* Contact Form */}
            <section className="bg-[#EFF6FF]">
                <div className="flex flex-col lg:flex-row gap-16 content-width py-16 px-[32px] md:px-[8%] md:py-[10%] lg:px-[6%] lg:pt-[4%] lg:pb-[6%] lg:gap-28">
                    <div className="flex flex-col gap-6 max-w-125 lg:w-1/2">
                        <Tag isFilled>iMonitorSoft</Tag>
                        <h2 className="color-black max-w-[680px] font-medium">
                            Liên hệ với chúng tôi ngay hôm nay
                        </h2>
                        <p className="text-lg leading-[1.6em] color-para">
                            iMonitor Std, iMonitor Pro, iMonitor mã hóa và
                            iMonitor thuê bao. Hãy để lại thông tin, chúng tôi
                            sẽ liên hệ & tư vấn giải pháp quản lý nhân viên phù
                            hợp nhất.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </>
    );
}
