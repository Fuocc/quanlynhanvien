import axios from "axios";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        licenses: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            await axios.post(`${apiUrl}/api/contact`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            alert("Gửi thành công!");
        } catch (error) {
            console.error(error);
            alert("Lỗi khi gửi form.");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-12 w-full rounded-[10px] bg-white shadow-base px-8 md:px-10 pt-9 pb-12.5 lg:w-1/2"
        >
            <h3 className="text-[24px] md:text-[32px] leading-[1.4em] color-black">
                Thông tin liên hệ
            </h3>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col gap-3">
                        <label
                            htmlFor="lastName"
                            className="text-lg color-black flex gap-0.5"
                        >
                            Họ<span className="text-red-600 text-base">*</span>
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            placeholder="Họ"
                            onChange={handleChange}
                            className="border border-[#EDEDED] py-4 px-5 rounded-[5px] focus:outline-[#1f2937] active:outline-[#1f2937]"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label
                            htmlFor="firstName"
                            className="text-lg color-black flex gap-0.5"
                        >
                            Tên<span className="text-red-600 text-base">*</span>
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            placeholder="Tên"
                            onChange={handleChange}
                            className="border border-[#EDEDED] py-4 px-5 rounded-[5px] focus:outline-[#1f2937] active:outline-[#1f2937]"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col gap-3">
                        <label
                            htmlFor="email"
                            className="text-lg color-black flex gap-0.5"
                        >
                            Email
                            <span className="text-red-600 text-base">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            onChange={handleChange}
                            className="border border-[#EDEDED] py-4 px-5 rounded-[5px]"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label
                            htmlFor="email"
                            className="text-lg color-black flex gap-0.5"
                        >
                            SĐT<span className="text-red-600 text-base">*</span>
                        </label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Nhập số điện thoại..."
                            onChange={handleChange}
                            className="border border-[#EDEDED] py-4 px-5 rounded-[5px]"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-lg color-black flex gap-0.5">
                        Số lượng license
                        <span className="text-red-600 text-base">*</span>
                    </label>
                    <select
                        name="licenses"
                        onChange={handleChange}
                        className="border border-[#EDEDED] py-4 px-5 rounded-[5px]"
                        required
                    >
                        <option value="">Chọn số lượng license...</option>
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20+">20+</option>
                    </select>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="message" className="text-lg color-black">
                        Lời nhắn
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Nhập lời nhắn..."
                        onChange={handleChange}
                        className="border border-[#EDEDED] py-4 px-5 rounded-[5px]"
                        rows="4"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#3B82F6] ml-auto shadow-base text-white px-7 py-3.5 rounded-[5px] cursor-pointer hover:bg-blue-600"
                >
                    Gửi ngay
                </button>
            </div>
        </form>
    );
}
