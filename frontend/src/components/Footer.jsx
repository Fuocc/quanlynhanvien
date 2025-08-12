import { Link } from "react-router";
import { assets } from "../assets/assets";

export default function Footer() {
    return (
        <section className="bg-[#FDFEFF]">
            <div className="flex flex-col gap-12 content-width px-[8%] lg:gap-16 lg:px-[6%] pt-[80px] pb-[32px] lg:pb-[48px]">
                <div className="flex flex-col-reverse gap-20 lg:flex-row lg:gap-30">
                    <div className="w-full lg:w-3/10 flex flex-col gap-8 lg:gap-12">
                        <img
                            src={assets.logo}
                            alt="logo"
                            className="max-w-25"
                        />
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-3 items-start">
                                <img
                                    src={assets.emailIcon}
                                    alt="email icon"
                                    className="max-w-5"
                                />
                                <Link
                                    to="mailto:sales@quanlynhanvien.com"
                                    className="text-sm leading-[1.6em] text-[#6B7280] transition hover:text-[#1f2937] hover:underline"
                                >
                                    Sales@quanlynhanvien.com
                                </Link>
                            </div>
                            <div className="flex gap-3 items-start">
                                <img
                                    src={assets.phoneIcon}
                                    alt="phone icon"
                                    className="max-w-5"
                                />
                                <span className="text-sm leading-[1.6em] text-[#6B7280]">
                                    028 627 52761
                                </span>
                            </div>
                            <div className="flex gap-3 items-start">
                                <img
                                    src={assets.markerIcon}
                                    alt="marker icon"
                                    className="max-w-5"
                                />
                                <Link
                                    to="https://maps.app.goo.gl/WTsGbLBEK4MiihTt5"
                                    className="text-sm leading-[1.6em] text-[#6B7280] transition hover:text-[#1f2937] hover:underline"
                                >
                                    153/2, Nguyễn Ảnh Thủ, Trung Chánh, Hóc Môn,
                                    HCM, Viet Nam
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-7/10 flex flex-col md:flex-row gap-18 justify-between lg:gap-25 lg:justify-end">
                        <div className="flex flex-col gap-8">
                            <h5 className="text-base font-medium color-black">
                                Trang công ty
                            </h5>
                            <Link
                                to="/tin-tuc"
                                className="text-[#6B7280] transition hover:text-[#1F2937] hover:underline"
                            >
                                Tin tức
                            </Link>
                            <Link
                                to="/lien-he"
                                className="text-[#6B7280] transition hover:text-[#1F2937] hover:underline"
                            >
                                Liên hệ
                            </Link>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h5 className="text-base font-medium color-black">
                                Zalo / Viber
                            </h5>
                            <span className="text-[#6B7280]">
                                +84 0328 788 950
                            </span>
                        </div>
                        <div className="max-w-70 flex flex-col gap-8">
                            <h5 className="text-base font-medium color-black">
                                Giải pháp
                            </h5>
                            <Link
                                to="/giai-phap-giam-sat-trung-quoc"
                                className="text-[#6B7280] transition hover:text-[#1F2937] hover:underline"
                            >
                                Giải pháp giám sát của Trung Quốc
                            </Link>
                            <Link
                                to="/giai-phap-giam-sat-my"
                                className="text-[#6B7280] transition hover:text-[#1F2937] hover:underline"
                            >
                                Giải pháp giám sát của Mỹ
                            </Link>
                            <Link
                                to="/giai-phap-giam-sat-nga"
                                className="text-[#6B7280] transition hover:text-[#1F2937] hover:underline"
                            >
                                Giải pháp giám sát của Nga
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-t-[#1F2937]/15 flex flex-col-reverse gap-8 center-between lg:flex-row">
                    <p className="text-[#6B7280] text-sm text-center">
                        Bản quyền thuộc về Công ty TNHH giải pháp Công nghệ
                        thông tin Win
                    </p>
                    <div className="flex gap-8 items-center">
                        <Link
                            to="https://quanlynhanvien.com/chinh-sach-bao-mat/"
                            className="text-[#6B7280] text-sm transition hover:text-[#1F2937] hover:underline"
                        >
                            Chính sách bảo mật
                        </Link>
                        <Link
                            to="https://quanlynhanvien.com/dieu-khoan-su-dung/"
                            className="text-[#6B7280] text-sm transition hover:text-[#1F2937] hover:underline"
                        >
                            Điều khoản sử dụng
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
