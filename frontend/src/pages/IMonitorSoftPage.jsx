import { assets, imonitorSlides } from "../assets/assets";
import Cards from "../components/Cards";
import ContactForm from "../components/ContactForm";
import ImageSlider from "../components/ImageSlider";
import OtherSolutions from "../components/OtherSolutions";
import Tag from "../components/Tag";

export default function IMonitorSoftPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-[#EFF6FF] px-[32px] md:px-[8%] lg:px-[6%] pt-[40px] pb-[64px] lg:pt-[4%] lg:pb-[6%]">
                <div
                    className="relative lg:w-max flex flex-col items-center gap-6 content-width bg-cover"
                    style={{ backgroundImage: `url(${assets.heroDecor})` }}
                >
                    <Tag isFilled>iMonitorSoft</Tag>
                    <h1 className="max-w-225 color-black font-medium lg:text-[64px] leading-[1.3em] text-center md:text-[48px] text-[36px]">
                        Giải pháp quản lý iMonitorSoft
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
                        IMonitor – phần mềm Quản lý nhân viên
                    </h3>
                    <p className="color-para font-normal text-lg lg:text-xl leading-[1.8em]">
                        Tích hợp tất cả các tính năng bạn cần trong một sản
                        phẩm. Không cần trang bị các phần mềm hệ quản trị cơ sở
                        dữ liệu (SQL Server, …). Quản lý được cả hệ thống đang
                        hoạt động theo mô hình làm việc từ xa như Citrix hoặc
                        Remote Desktop. Hoạt động ở chế độ ẩn hoàn toàn, nhân
                        viên sẽ không hề hay biết và phần mềm chỉ có thể bị gỡ
                        bỏ bởi password được thiết lập bởi người quản trị.
                    </p>
                </div>
                <ImageSlider images={imonitorSlides} />
                <div className="flex flex-col gap-6">
                    <h3 className="color-black">
                        Các chức năng của iMonitorSoft
                    </h3>
                    <p className="color-para font-normal text-lg lg:text-xl leading-[1.8em]">
                        Phần mềm iMonitorsoft: <br />– Quản lý đăng nhập máy
                        tính và các hoạt động Internet. <br />– Giới hạn thời
                        gian sử dụng ứng dụng. <br />– Hạn chế lưu lượng mạng.{" "}
                        <br />– Hạn chế thời gian truy cập các trang web. <br />
                        – Thiết lập bộ lọc các website và những ứng dụng theo ý
                        muốn. <br />– Tự động sao lưu các tập tin về server.{" "}
                        <br />– Kiểm soát thiết bị kết nối bên ngoài (USB, ổ
                        cứng di động, …). <br />– Tạo báo cáo thống kê để phân
                        tích hoạt động máy tính. <br />– Quản lý, điều khiển máy
                        tính của nhân viên từ xa. <br />– Gửi cảnh báo theo thời
                        gian thực. Một lần mua, sử dụng vĩnh viễn: chỉ trả tiền
                        một lần bạn có thể sở hữu Bản quyền phần mềm
                        iMonitorsoft với thời gian vĩnh viễn. Bạn có thể chuyển
                        giấy phép sang máy tính khác mà không phải trả thêm phí.
                    </p>
                </div>
            </section>

            {/* Link Cards */}
            <section className="flex flex-col gap-20 bg-[#FDFEFF] content-width px-[6%] pt-10 md:pt-16 pb-20 lg:pb-[6%] lg:py-20">
                <OtherSolutions currentSolution="iMonitorSoft" />
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
