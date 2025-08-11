// Lấy biến môi trường (đã cấu hình từ frontend/.env)
const apiUrl = import.meta.env.VITE_API_URL;

/**
 * Gửi dữ liệu liên hệ lên backend
 * @param {Object} data - Thông tin từ form liên hệ
 * @returns {Promise<Object>} - Phản hồi từ backend
 */
export async function sendContactForm(data) {
    try {
        const response = await fetch(`${apiUrl}/api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Gửi form thất bại.");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Lỗi khi gửi form liên hệ:", error);
        throw error;
    }
}
