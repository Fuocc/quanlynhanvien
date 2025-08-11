import logo from "./logo.svg";
import arrowDown from "./chevron-down.svg";
import arrowRight from "./white-arrow-right.svg";
import heroDecor from "./hero-decor.png";
import userBubble1 from "./hero-user.png";
import userBubble2 from "./hero-user-2.png";
import userBubble3 from "./hero-user-3.png";
import userBubble4 from "./hero-user-4.png";
import featured1 from "./sony-logo.png";
import featured2 from "./luca-logo.png";
import featured3 from "./ntt-data-logo.png";
import featured4 from "./siemens-logo.png";
import featured5 from "./volvo-logo.png";
import featured6 from "./revmall-logo.png";
import usersIcon from "./users-icon.svg";
import globeIcon from "./globe-icon.svg";
import clockIcon from "./clock-icon.svg";
import phoneIcon from "./phone.svg";
import markerIcon from "./marker.svg";
import emailIcon from "./mail.svg";
import computerIcon from "./computer-icon.svg";
import mailIcon from "./mail-icon.svg";
import messageIcon from "./message-icon.svg";
import monitorIcon from "./monitor-icon.svg";
import osmonitorLogo from "./osmonitor-logo.png";
import imonitorLogo from "./imonitor-logo.png";
import ipguardLogo from "./ipguard-logo.png";
import staffcopLogo from "./staffcop-logo.png";
import teramindLogo from "./teramind-logo.png";
import spyrixLogo from "./spyrix-logo.png";
import osmonitorSlide1 from "./osmonitor-1.jpg";
import osmonitorSlide2 from "./osmonitor-2.jpg";
import osmonitorSlide3 from "./osmonitor-3.jpg";
import osmonitorSlide4 from "./osmonitor-4.jpg";
import osmonitorSlide5 from "./osmonitor-5.jpg";
import osmonitorSlide6 from "./osmonitor-6.jpg";
import osmonitorSlide7 from "./osmonitor-7.jpg";
import imonitorSlide1 from "./imonitor-1.jpg";
import imonitorSlide2 from "./imonitor-2.jpg";
import imonitorSlide3 from "./imonitor-3.jpg";
import imonitorSlide4 from "./imonitor-4.jpg";
import imonitorSlide5 from "./imonitor-5.jpg";
import imonitorSlide6 from "./imonitor-6.jpg";
import imonitorSlide7 from "./imonitor-7.jpg";
import imonitorSlide8 from "./imonitor-8.jpg";
import staffcopSlide1 from "./staffcop-1.jpg";
import staffcopSlide2 from "./staffcop-2.jpg";
import staffcopSlide3 from "./staffcop-3.jpg";
import staffcopSlide4 from "./staffcop-4.jpg";
import staffcopSlide5 from "./staffcop-5.jpg";
import staffcopSlide6 from "./staffcop-6.jpg";
import staffcopSlide7 from "./staffcop-7.jpg";
import staffcopSlide8 from "./staffcop-8.jpg";
import staffcopSlide9 from "./staffcop-9.jpg";
import staffcopSlide10 from "./staffcop-10.jpg";
import thumbnailBlog1 from "./thumbnail-blog-1.jpg";
import thumbnailBlog2 from "./quan-ly-nhan-vien-2.jpg";
import thumbnailBlog3 from "./quan-ly-nhan-vien-3.jpg";
import thumbnailBlog4 from "./quan-ly-nhan-vien-4.jpg";
import thumbnailBlog5 from "./quan-ly-nhan-vien-5.jpg";
import thumbnailBlog6 from "./quan-ly-nhan-vien-6.jpg";

export const assets = {
    logo,
    arrowDown,
    heroDecor,
    userBubble1,
    userBubble2,
    userBubble3,
    userBubble4,
    featured1,
    featured2,
    featured3,
    featured4,
    featured5,
    featured6,
    usersIcon,
    globeIcon,
    clockIcon,
    computerIcon,
    mailIcon,
    messageIcon,
    monitorIcon,
    phoneIcon,
    markerIcon,
    emailIcon,
    arrowRight,
    osmonitorLogo,
    imonitorLogo,
    ipguardLogo,
    staffcopLogo,
    teramindLogo,
    spyrixLogo,
    thumbnailBlog1,
    thumbnailBlog2,
    thumbnailBlog3,
    thumbnailBlog4,
    thumbnailBlog5,
    thumbnailBlog6,
};

export const osmonitorSlides = [
    { src: osmonitorSlide1, alt: "Os Monitor mockup" },
    { src: osmonitorSlide2, alt: "Os Monitor mockup" },
    { src: osmonitorSlide3, alt: "Os Monitor mockup" },
    { src: osmonitorSlide4, alt: "Os Monitor mockup" },
    { src: osmonitorSlide5, alt: "Os Monitor mockup" },
    { src: osmonitorSlide6, alt: "Os Monitor mockup" },
    { src: osmonitorSlide7, alt: "Os Monitor mockup" },
];

export const imonitorSlides = [
    { src: imonitorSlide1, alt: "iMonitor Soft mockup" },
    { src: imonitorSlide2, alt: "iMonitor Soft mockup" },
    { src: imonitorSlide3, alt: "iMonitor Soft mockup" },
    { src: imonitorSlide4, alt: "iMonitor Soft mockup" },
    { src: imonitorSlide5, alt: "iMonitor Soft mockup" },
    { src: imonitorSlide6, alt: "iMonitor Soft mockup" },
    { src: imonitorSlide7, alt: "iMonitor Soft mockup" },
    { src: imonitorSlide8, alt: "iMonitor Soft mockup" },
];

export const staffcopSlides = [
    { src: staffcopSlide1, alt: "StaffCop Soft mockup" },
    { src: staffcopSlide2, alt: "StaffCop Soft mockup" },
    { src: staffcopSlide3, alt: "StaffCop Soft mockup" },
    { src: staffcopSlide4, alt: "StaffCop Soft mockup" },
    { src: staffcopSlide5, alt: "StaffCop Soft mockup" },
    { src: staffcopSlide6, alt: "StaffCop Soft mockup" },
    { src: staffcopSlide7, alt: "StaffCop Soft mockup" },
    { src: staffcopSlide8, alt: "StaffCop Soft mockup" },
    { src: staffcopSlide9, alt: "StaffCop Soft mockup" },
    { src: staffcopSlide10, alt: "StaffCop Soft mockup" },
];

export const navLinks = [
    { name: "Trang chủ", href: "/" },
    {
        name: "Giải pháp tối ưu",
        children: [
            {
                name: "Giải pháp giám sát Nga",
                href: "/giai-phap-giam-sat-nga",
            },
            {
                name: "Giải pháp giám sát TQ",
                href: "/giai-phap-giam-sat-trung-quoc",
            },
            {
                name: "Giải pháp giám sát Mỹ",
                href: "/giai-phap-giam-sat-my",
            },
        ],
        href: "/giai-phap-toi-uu",
    },
    { name: "Tin tức", href: "/tin-tuc" },
    { name: "Liên hệ", href: "/lien-he" },
];

export const cards = [
    {
        title: "Quản trị nhân viên",
        bgIcon: "#EDE9FE",
        bgColor: "#F5F3FF",
        icon: assets.usersIcon,
    },
    {
        title: "Quản lý máy tính truy cập web",
        bgIcon: "#E0E7FF",
        bgColor: "#EFF6FF",
        icon: assets.globeIcon,
    },
    {
        title: "Quản lý thời gian làm việc",
        bgIcon: "#FEF3C7",
        bgColor: "#FEFBEB",
        icon: assets.clockIcon,
    },
    {
        title: "Quản lý máy tính sử dụng phần mềm",
        bgIcon: "#E0E7FF",
        bgColor: "#EFF6FF",
        icon: assets.computerIcon,
    },
    {
        title: "Quản lý Email",
        bgIcon: "#FEF3C7",
        bgColor: "#FEFBEB",
        icon: assets.mailIcon,
    },
    {
        title: "Quản lý nội dung trò chuyện",
        bgIcon: "#EDE9FE",
        bgColor: "#F5F3FF",
        icon: assets.messageIcon,
    },
    {
        title: "Ghi lại hoạt động màn hình nhân viên",
        bgIcon: "#FEF3C7",
        bgColor: "#FEFBEB",
        icon: assets.monitorIcon,
    },
];

export const solutions = [
    {
        title: "OsMonitor",
        desc: "Phần mềm quản lý nhân viên, quản lý máy tính với chi phí rất thấp, thích hợp cho doanh nghiệp từ 10-100 nhân viên, xuất xứ từ Trung Quốc.",
        logo: assets.osmonitorLogo,
        href: "/giai-phap-giam-sat-trung-quoc",
    },
    {
        title: "iMonitorSoft",
        desc: "Phần mềm giám sát nhân viên, Quản lý máy tính với chi phí thấp, thích hợp với doanh nghiệp từ 10-5000 nhân viên, xuất xứ từ Mỹ.",
        logo: assets.imonitorLogo,
        href: "/giai-phap-giam-sat-my",
    },
    {
        title: "IPguard",
        desc: "Phần mềm quản lý nhân viên, quản lý máy tính với chi phí hợp lý, thích hợp doanh nghiệp 5-1000 nhân viên, xuất xứ Hong Kong.",
        logo: assets.ipguardLogo,
    },
    {
        title: "Staffcop",
        desc: "Phần mềm quản lý nhân viên, quản lý máy tính với chi phí vửa phải, thích hợp với doanh nghiệp 5-1000 nhân viên, xuất xứ từ Nga.",
        logo: assets.staffcopLogo,
        href: "/giai-phap-giam-sat-nga",
    },
    {
        title: "Teramind",
        desc: "Phần mềm quản lý nhân viên, quản lý máy tính thông qua server trên Cloud, thích hợp với doanh nghiệp cần sự linh động trong quản lý, xuất xứ từ Mỹ.",
        logo: assets.teramindLogo,
    },
    {
        title: "Spyrix",
        desc: "Phần mềm giám sát nhân viên, Quản lý máy tính thông qua server trên Cloud, phù hợp với doanh nghiệp cần sự linh động trong quản lý, xuất xứ từ Mỹ.",
        logo: assets.spyrixLogo,
    },
];

export const featuredImages = [
    assets.featured1,
    assets.featured2,
    assets.featured3,
    assets.featured4,
    assets.featured5,
    assets.featured6,
];
