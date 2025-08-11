import { assets, osmonitorSlides } from "../assets/assets";
import ContactForm from "../components/ContactForm";
import ImageSlider from "../components/ImageSlider";
import OtherSolutions from "../components/OtherSolutions";
import Tag from "../components/Tag";

export default function OsMonitorPage() {
    return (
        <>
            {/* Hero */}
            <section className="bg-[#EFF6FF] px-[32px] md:px-[8%] lg:px-[6%] pt-[40px] pb-[64px] lg:pt-[4%] lg:pb-[6%]">
                <div
                    className="relative lg:w-max flex flex-col items-center gap-6 content-width bg-cover"
                    style={{ backgroundImage: `url(${assets.heroDecor})` }}
                >
                    <Tag isFilled>OsMonitor</Tag>
                    <h1 className="max-w-225 color-black font-medium lg:text-[64px] leading-[1.3em] text-center md:text-[48px] text-[36px]">
                        Giải pháp quản lý OsMonitor
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-[#6B7280] max-w-[500px] leading-[1.6em] text-center">
                        Giải pháp đầu tư tiết kiệm nhất thế giới với đầy đủ các
                        chức năng quản lý cần thiết
                    </p>
                </div>
            </section>

            {/* Post Content */}
            <section className="flex flex-col gap-8 md:gap-16 lg:px-0 max-w-[780px] mx-auto pt-12 md:pt-16 pb-16 px-8 md:px-[8%] lg:pt-20 lg:pb-25">
                <div className="flex flex-col gap-6">
                    <h3 className="color-black">
                        OsMonitor – Phần mềm quản lý mạng LAN
                    </h3>
                    <p className="color-para font-normal text-lg lg:text-xl leading-[1.8em]">
                        OsMonitor – phần mềm quản lý mạng LAN toàn diện giúp bạn
                        quản lý hiệu suất làm việc của nhân viên trong công ty.
                        OsMonitor làm việc theo mô hình client – server (máy chủ
                        – máy trạm), tất cả dữ liệu quản lý máy tính của nhân
                        viên đều được thu thập và lưu trong cơ sở dữ liệu tại
                        máy chủ. Bạn có thể biết rõ nhân viên sử dụng máy tính
                        vào việc gì, đang làm gì trong giờ làm việc, quản lý và
                        hạn chế nhân viên không được sử dụng máy tính vào các
                        công việc khác. OsMonitor – phần mềm quản lý nhân viên
                        cho mạng LAN (Local Area Network) tiết kiệm nhất. Os –
                        Mo ni tor có thể quản lý tất cả các máy tính nhân viên
                        (máy trạm) của bạn trong mạng LAN thông qua một máy tính
                        trung tâm – máy chủ (server). OsMonitor giúp đảm bảo
                        năng suất, nâng cao hiệu quả làm việc của nhân viên đồng
                        thời đảm bảo việc tuan thủ các quy định về an ninh mạng
                        được chặt chẽ.
                    </p>
                </div>
                <ImageSlider images={osmonitorSlides} />
                <div className="flex flex-col gap-6">
                    <h3 className="color-black">Các chức năng của OsMonitor</h3>
                    <ul className="color-para font-normal text-lg lg:text-xl leading-[1.8em] list-decimal ml-[24px] lg:ml-[32px]">
                        <li>
                            Quản lý, phát lại toàn bộ hình ảnh màn hình của máy
                            trạm, hiển thị các màn hình đang quản lý theo thời
                            gian thực.
                        </li>
                        <li>
                            Quản lý và ghi lại các website (URL) đã truy cập, có
                            thể cấm truy xuất một số trang web hoặc chỉ cho phép
                            truy cập các trang web có liên quan đến công việc.
                        </li>
                        <li>
                            Thao tác trên máy nhân viên từ xa giống như đang
                            thao tác trên máy tính của mình.
                        </li>
                        <li>
                            Quản lý việc sử dụng ứng dụng của nhân viên thông
                            qua danh sách trắng, chỉ cho phép mở và chạy các
                            phần mềm có liên quan đến công việc.
                        </li>
                        <li>
                            Quản lý thời gian sử dụng các phần mềm mỗi ngày của
                            mỗi máy nhân viên (đây là số liệu quan trọng đánh
                            giá hiệu suất làm việc của nhân viên, chính xác đến
                            từng phút).
                        </li>
                        <li>
                            Quản lý và thiết lập tự động sao lưu các tập tin có
                            giá trị đến máy chủ (như tập tin Word\Excel vv).
                        </li>
                        <li>
                            Quản lý hoạt động download dung lượng lớn gây chiếm
                            dụng băng thông trong mạng nội bộ, khi lưu lượng
                            download vượt quá giới hạn sẽ cho phép sẽ tự động
                            ngắt mạng. Giúp thống kê tình trạng sử dụng băng
                            thông mỗi tháng của nhân viên trong công ty.
                        </li>
                        <li>
                            Quản lý nhật ký chat trên các ứng dụng phổ biến như
                            QQ, MSN, Yahoo, Google Talk vv.
                        </li>
                        <li>Quản lý hoạt động gửi nhận email.</li>
                        <li>Xuất báo cáo khi có nhu cầu.</li>
                        <li>
                            Quản lý bằng cách Ghi lại các thay đổi phần cứng
                            trên máy nhân viên, bất cứ thay đổi phần cứng nào
                            cũng đều được cập nhật một cách kịp thời, chính xác.
                        </li>
                        <li>
                            Quản lý việc sử dụng các thiết bị nhớ ngoại vi như
                            USB, ổ CD-DVD, quản lý những thao tác trên các tập
                            tin như sửa đổi, xóa, copy.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Link Cards */}
            <section className="flex flex-col gap-20 bg-[#FDFEFF] content-width px-[6%] pt-10 md:pt-16 pb-20 lg:pb-[6%] lg:py-20">
                <OtherSolutions currentSolution="OsMonitor" />
            </section>

            {/* Contact Form */}
            <section className="bg-[#EFF6FF]">
                <div className="flex flex-col lg:flex-row gap-16 content-width py-16 px-[32px] md:px-[8%] md:py-[10%] lg:px-[6%] lg:pt-[4%] lg:pb-[6%] lg:gap-28">
                    <div className="flex flex-col gap-6 max-w-125 lg:w-1/2">
                        <Tag isFilled>OsMonitor</Tag>
                        <h2 className="color-black max-w-[680px] font-medium">
                            Liên hệ với chúng tôi ngay hôm nay
                        </h2>
                        <p className="text-lg leading-[1.6em] color-para">
                            OsMonitor có 2 phiên bản là Basic và Full. Hãy để
                            lại thông tin, chúng tôi sẽ liên hệ & tư vấn giải
                            pháp quản lý nhân viên phù hợp nhất.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </>
    );
}
