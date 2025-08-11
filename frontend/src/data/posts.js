import { assets } from "../assets/assets";
import staffcopImage from "../assets/quan-ly-nhan-vien-staffcop.jpg";
import spyrixImage1 from "../assets/quan-ly-nhan-vien-spyrix-1.jpg";
import spyrixImage2 from "../assets/quan-ly-nhan-vien-spyrix-2.jpg";
import spyrixImage3 from "../assets/quan-ly-nhan-vien-spyrix-3.jpg";
import spyrixImage4 from "../assets/quan-ly-nhan-vien-spyrix-4.png";
import ipguardImage1 from "../assets/quan-ly-nhan-vien-ipguard-1.jpg";
import ipguardImage2 from "../assets/quan-ly-nhan-vien-ipguard-2.jpg";
import osmonitorImage1 from "../assets/quan-ly-nhan-vien-osmonitor-1.jpg";
import teramindImage1 from "../assets/quan-ly-nhan-vien-teramind-1.png";
import teramindImage2 from "../assets/quan-ly-nhan-vien-teramind-2.jpg";
import imonitorImage1 from "../assets/quan-ly-nhan-vien-imonitor-1.png";

const posts = [
    {
        id: "1",
        title: "Làm thế nào để Quản lý nhân viên từ xa trong thời điểm COVID‑19 đang hoành hành như hiện nay?",
        excerpt:
            "Ở thời buổi mà người người nhà nhà chuyển sang làm việc từ xa như hiện nay, một nhu cầu... làm sao để giám sát nhân viên đang làm việc tại nhà?",
        date: "Apr 1, 2020",
        thumbnail: `${assets.thumbnailBlog1}`,

        content: `Hãy cùng xem xét một số ví dụ về việc cấu hình lại mạng công ty và các máy tính nhân viên để Quản lý nhân viên từ xa.
<br style="display:block; margin-bottom:16px;"/>
Chúng ta giả sử rằng máy tính xách tay của công ty hoặc thậm chí máy bàn sẽ được đưa ra khỏi mạng công ty. Khi đó, chúng ta sẽ có các tùy chọn sau:
<ul style="list-style-type:number; margin: 20px 0px;">
<li style="margin: 12px 32px;">Thiết lập các máy tính trong hệ thống mạng công ty và cho phép nhân viên truy cập từ xa để họ có thể kết nối với máy tính của họ từ PC tại nhà thông qua Windows remote desktops (mstsc.exe).</li>
<li style="margin: 12px 32px;">Tạm thời cung cấp cho nhân viên máy tính xách tay của công ty hoặc mang máy bàn về nhà để có thể làm việc từ xa.</li>
<li style="margin: 12px 32px;">Cung cấp kết nối VPN cho nhân viên từ xa có thể truy vào mạng công ty và cấu hình cho họ làm việc trên terminal server.</li>
</ul>
<img src="${staffcopImage}" alt="Văn phòng" class="my-6 w-full" />
<br style="display:block; margin-bottom:16px;"/>
Dù bạn chọn giải pháp nào đi chăng nữa, chắc chắn bạn sẽ muốn biết nhân viên của mình đang làm gì ở nhà. Họ có đang làm việc? Đang xem tivi? Đang ngủ? Hay đang lang thang đâu đó ngoài đường?
<br style="display:block; margin-bottom:16px;"/>
Vậy bạn cần những gì để có thể quản lý nhân viên từ xa?
<ul style="list-style-type:disc; margin: 20px 0px;"">
<li style="margin: 12px 32px;">1 nhân viên IT (hoặc 1 người có kiến thức về công nghệ thông tin).</li>
<li style="margin: 12px 32px;">1 IP WAN tĩnh.</li>
<li style="margin: 12px 32px;">1 phần mềm giám sát.</li>
</ul>
Như vậy là đã đủ để thiết lập 1 hệ thống Quản lý từ xa rồi!
<br style="display:block; margin-bottom:16px;"/>
Nếu bạn đang tìm một phần mềm Quản lý nhân viên từ xa hiệu quả và tốt nhất thì hãy liên hệ vói quanlynhanvien.com để được tư vấn miễn phí nhé!`,
    },
    {
        id: "2",
        title: "Phần mềm Quản lý nhân viên",
        excerpt:
            "Bạn đã nghe về thuật ngữ “phần mềm giám sát”, giám sát con cái, giám sát nhân viên, …. Bạn đã thực sự hiểu rõ về định nghĩa này hay chưa? Nếu chưa hãy cùng chúng tôi tìm hiểu trong nội dung bài viết này nhé!",
        date: "Apr 1, 2020",
        thumbnail: `${assets.thumbnailBlog2}`,
        content: `<h3 className="color-black">Phần mềm Quản lý nhân viên là gì?</h3>
        <br style="display:block; margin-bottom:16px;"/>
        Phần mềm Quản lý nhân viên là một chương trình đặc biệt cài đặt trên máy tính hoặc điện thoại di động, cho phép bạn theo dõi những hoạt động của thiết bị đích. Đôi khi, các chương trình như vậy cũng được gọi là phần mềm gián điệp.
        <img src="${spyrixImage1}" alt="Mockup" class="my-6 w-full" />
        <h3 className="color-black">Tại sao nên sử dụng phần mềm Quản lý nhân viên?</h3>
        <br style="display:block; margin-bottom:16px;"/>
        Có nhiều lý do giải thích tại sao mọi người cần sử dụng phần mềm Quản lý. Trước hết, các công ty sử dụng phần mềm như vậy để quản lý nhân viên. Các chương trình Quản lý giúp người quản lý kiểm tra xem nhân viên của họ có đang làm việc hiệu quả hay không, xác định những nhân viên dù vẫn nhận mức lương như mọi người nhưng năng suất công việc lại chưa tương xứng, từ đó giải quyết bài toán công bằng – bình đẳng trong doanh nghiệp. Bên cạnh đó, với sự giúp đỡ của phần mềm Quản lý, ngăn chặn rò rỉ dữ liệu thiết yếu của công ty.
        <img src="${spyrixImage2}" alt="Mockup" class="my-6 w-full" />
        Nhóm thứ hai cần đến phần mềm Quản lý đó chính là các bậc cha mẹ. Một sự thật hiển nhiên là các bậc cha mẹ thường lo lắng rằng con cái họ không hoàn toàn cởi mở với họ. Hơn nữa, phụ huynh muốn bảo vệ con trẻ khỏi việc bị bạn bè bắt nạt hoặc khỏi những nội dung không phù hợp đầy rẫy trên mạng ngày nay. Một phần mềm Quản lý chất lượng có thể giúp không chỉ theo dõi tất cả các tin nhắn và cuộc trò chuyện trong điện thoại mà còn có tác dụng ngăn chặn những trang web với nội dung xấu, giữ chúng tránh xa khỏi con em chúng ta.
        <img src="${spyrixImage3}" alt="Mockup" class="my-6 w-full" />
        Ghi lại mật khẩu của người dùng và đọc các cuộc trò chuyện, tin nhắn của họ là một lý do khác khiến người ta sử dụng các ứng dụng và phần mềm Quản lý. Hầu hết các ứng dụng theo dõi sẽ cho phép bạn đọc các cuộc trò chuyện trên đa số những trình nhắn tin phổ biến, bao gồm Facebook Messenger, Skype, WhatsApp, Viber, Tinder, v.v. Điều quan trọng hơn là phần mềm này ghi lại tất cả các tổ hợp phím bao gồm cả mật khẩu đăng nhập của các tài khoản xã hội. Nếu một người nghi ngờ bạn đời hoặc vợ / chồng của họ, phần mềm giám sát chắc chắn sẽ giúp họ tìm ra sự thật. Dĩ nhiên, mọi thứ vẫn phải đảm bảo nằm trong khuôn khổ đạo đức và pháp luật.
        <img src="${spyrixImage4}" alt="Mockup" class="my-6 w-full" />
        <h3 className="color-black">Tổng quan các phần mềm Quản lý nhân viên trên thị trường</h3>
        <br style="display:block; margin-bottom:16px;"/>
        Các phần mềm Quản lý nhân viên có thể tương thích với những hệ điều hành phổ biến như Windows và Mac OS, Android hoặc iOS. Một số phần mềm Quản lý nhân viên là miễn phí nhưng sẽ bị giới hạn ở một vài tính năng (ví dụ: chỉ có keylogger), trong khi các ứng dụng giám sát trả phí thường cung cấp bản dùng thử miễn phí và chắc chắn hỗ trợ nhiều tính năng cao cấp hơn. Các tính năng của một phần mềm Quản lý nhân viên sẽ phụ thuộc vào mục đích chiến lược và phân khúc khách hàng của hãng phát triển.
        <br style="display:block; margin-bottom:16px;"/>
        Nếu bạn đang cần tìm một phần mềm Quản lý nhân viên chuyên nghiệp thì hãy liên hệ ngay với <a href="/" class="underline text-blue-600">https://quanlynhanvien.com</a> để được tư vấn một cách miễn phí!`,
    },
    {
        id: "3",
        title: "Khi triển khai các biện pháp an ninh mạng, đặc biệt là những phần mềm quản lý nhân viên, bạn nên cân nhắc những yếu tố nào?",
        excerpt:
            "Bạn là một nhà quản lý đang tìm kiếm giải pháp quản lý nhân viên? Vậy trước hết bạn cần phải nắm rõ một vài điều cơ bản. Hãy cùng tìm hiểu trong bài viết này nhé!",
        date: "Apr 1, 2020",
        thumbnail: `${assets.thumbnailBlog3}`,
        content: `Bảo vệ dữ liệu nhạy cảm và loại bỏ các mối đe dọa bảo mật luôn là mối quan tâm lớn đối với nhiều doanh nghiệp. Khi doanh nghiệp xem xét việc triển khai các biện pháp an ninh mạng, họ có thực sự đã hiểu thấu đáo về các mối đe dọa tiềm ẩn đối với doanh nghiệp hay không?
        <img src="${ipguardImage1}" alt="Mockup" class="my-6 w-full" />
        Trước khi triển khai bất kỳ biện pháp bảo mật mạng nào, điều đầu tiên doanh nghiệp nên làm đó là xác định những mối nguy hiểm tiềm tàng:
        <br style="display:block; margin-bottom:16px;"/>
        <h3 className="color-black">Ngăn chặn rò rỉ các dữ liệu nhạy cảm</h3>
        <br style="display:block; margin-bottom:16px;"/>
        Đối với kẻ xấu, dữ liệu là mục tiêu cuối cùng của chúng, chỉ ngăn chặn những sự đe dọa từ bên ngoài là không đủ. Sony Pictures là một ví dụ rõ ràng về việc mặc dù đã sử dụng nhiều công cụ, sản phẩm và dịch vụ bảo mật, nhưng cũng không thể ngăn chặn những dữ liệu quan trọng bị rò rỉ. Do đó, trong công cuộc bảo mật CNTT ngày nay, doanh nghiệp cần tập trung vào việc ngăn chặn dữ liệu bị đánh cắp một cách vô tình, cố ý từ cả bên ngoài lẫn bên trong!
        <br style="display:block; margin-bottom:16px;"/>
        <h3 className="color-black">Ủy quyền cho người dùng nội bộ một cách không rõ ràng</h3>
        <br style="display:block; margin-bottom:16px;"/>
        Kiểm soát quyền truy cập là yếu tố cực kỳ quan trọng, trong đó việc triển khai bảo mật phải xác định được rõ ràng mức độ truy cập dữ liệu cũng như quyền hạn chi tiết từng hành động của các nhân viên. Sự phân chia thẩm quyền không rõ ràng có thể dễ dàng dẫn đến việc dữ liệu quan trọng bị những cá thể xấu truy cập, từ đó làm rò rỉ dữ liệu. Doanh nghiệp nên thực thi nghiêm ngặt kiểm soát truy cập dữ liệu, đồng thời có kế hoạch lưu lại nhật ký truy xuất làm cơ sở pháp lý sau này. Từ đó giúp phát hiện những hành vi truy cập đáng ngờ, răn đe những kẻ xấu có ý định đánh cắp thông tin, đảm bảo an toàn dữ liệu.
        <br style="display:block; margin-bottom:16px;"/>
        <h3 className="color-black">Lạm dụng thiết bị di động</h3>
        <br style="display:block; margin-bottom:16px;"/>
        Ngày nay, các thiết bị di động trở nên đa dạng hơn: điện thoại thông minh, máy tính bảng, thiết bị Bluetooth, ổ cứng di động. Các thiết bị này giúp tăng năng suất nhưng cũng đồng thời đặt doanh nghiệp vào thế phải đối mặt với các mối đe dọa mới trong cuộc chiến bảo mật thông tin. Vào tháng 6 năm 2014, tập đoàn ngân hàng JPMorgan đã bị hack và rò rỉ hơn 76 triệu hồ sơ khách hàng xuất phát từ các máy tính xách tay của nhân viên. Do đó, ngoài việc quản lý và kiểm soát an ninh mạng trong cơ sở hạ tầng của công ty, doanh nghiệp còn phải tính đến việc quản lý cả các thiết bị di động.
        <br style="display:block; margin-bottom:16px;"/>
        <h3 className="color-black">Mất kiểm soát những hành vi trên Internet của nhân viên</h3>
        <br style="display:block; margin-bottom:16px;"/>
        Để giảm thiểu rủi ro liên quan đến bảo mật, quản trị viên CNTT không chỉ phải kiểm soát hành động download và cài đặt phần mềm mà còn cần tập trung vào việc quản lý các hành vi khi trực tuyến của mỗi người dùng. Nhiều trang web độc hại được ngụy trang trông rất bình thường, nhưng mức độ nguy hiểm là không thể đoán trước được. Hành vi khi trực tuyến của nhân viên được kiểm soát chặt chẽ một mặt giúp đảm bảo sự an toàn của hệ thống mạng trong công ty, mặt khác có thể cải thiện hiệu quả công việc rất nhiều.
        <br style="display:block; margin-bottom:16px;"/>
        <h3 className="color-black">Công cụ mã hóa – Công cụ bảo vệ toàn diện</h3>
        <br style="display:block; margin-bottom:16px;"/>
        Nhiều doanh nghiệp đang chọn các sản phẩm mã hóa của IP – gu ard để bảo vệ dữ liệu. IP – gu ard hiện là hệ thống tương thích nhất với tất cả các nền tảng chính (bao gồm cả Mac), cung cấp dịch vụ ngăn chặn rò rỉ thông tin và giải pháp tổng thể cho tất cả các module, là giải pháp thống nhất nền tảng quản lý, các kiến trúc mô-đun. Doanh nghiệp có thể chọn kết hợp các mô-đun khác nhau dựa trên nhu cầu của họ. IP – gu ard cũng bao gồm chức năng mã hóa, nhằm cung cấp khả năng ngăn chặn rò rỉ thông tin một cách toàn diện nhất.
        <br style="display:block; margin-bottom:16px;"/>
        <h3 className="color-black">Công cụ quản lý an ninh mạng – Mạnh mẽ đáng tin cậy</h3>
        <br style="display:block; margin-bottom:16px;"/>
        Hiện các sản phẩm của IP – gu ard đã hiện diện ở hơn 70 quốc gia và khu vực, phục vụ được hơn 15.600 người dùng, các nhóm nghiên cứu và phát triển ngày đêm hoạt động nhằm cung cấp cho người dùng phần mềm quản lý an ninh mạng mới nhất, thân thiện nhất, mạnh mẽ và đáng tin cậy nhất.
        <img src="${ipguardImage2}" alt="Mockup" class="my-6 w-full" />
        Quản lý bảo mật thông tin không phức tạp như bạn tưởng tượng, một công cụ bảo vệ đáng tin cậy giúp bạn tiết kiệm rất nhiều nhân lực, tiền bạc và công sức, nó tạo ra một môi trường mạng an toàn và linh hoạt mà mọi doanh nghiệp đều đang tìm kiếm. Quản lý nhân viên, một vấn đề muôn thuở. <a href="/" class="underline text-blue-600">Quản lý nhân viên</a> chắc chắn rằng các bạn đang tìm kiếm một thứ gì đó không chỉ an toàn, mà còn phải có hiệu suất ổn định để bảo vệ tài sản của các bạn đồng thời không ảnh hưởng đến hiệu quả công việc, do đó, việc chọn được phần mềm quản lý nhân viên phù hợp nhất là hết sức quan trọng!`,
    },
    {
        id: "4",
        title: "Tại sao lại chọn phần mềm Quản lý nhân viên OsMonitor?",
        excerpt:
            "Bạn đang có nhu cầu giám sát nhân viên? Hãy cân nhắc đến việc sử dụng phần mềm OsMonitor.",
        date: "Apr 1, 2020",
        thumbnail: `${assets.thumbnailBlog4}`,
        content: `OsMonitor bao gồm nhiều chức năng mạnh mẽ, là giải pháp tất cả trong một. Ngoài chức năng Quản lý nhân viên toàn diện, phần mềm còn có những tính năng tuyệt vời khác:
        <br style="display:block; margin-bottom:16px;"/>
        <ul style="list-style-type:number; margin: 20px 0px;">
        <li style="margin: 12px 32px;">Sao lưu tài liệu từ máy tính của nhân viên và tự động lưu trữ trên máy chủ.</li>
        <li style="margin: 12px 32px;">Không giống như các phần mềm quản lý nhân viên khác ngoài thị trường chỉ đơn giản là quản lý các hoạt động của máy tính, Os Mo ni tor cũng có thể ngăn chặn các hành động không mong muốn của nhân viên như truy cập các trang web cụ thể, mở ứng dụng trò chơi, kiểm soát kết nối các thiết bị ngoại vi thông qua cổng USB.</li>
        <li style="margin: 12px 32px;">Cung cấp các báo cáo kết quả Quản lý tính hiệu quả của công việc, bạn sẽ xác định được mỗi nhân viên dành bao nhiêu thời gian để lướt web, đã truy cập những website nào, đã mở những ứng dụng, trò chơi hoặc phần mềm gì, trong bao lâu, đã dành bao nhiêu thời gian cho công việc.</li>
        </ul>
        <br style="display:block; margin-bottom:16px;"/>
        OsMonitor là một phần mềm Quản lý nhân viên đơn giản và trực quan, không có bất kỳ yêu cầu đặc biệt nào về phần cứng hoặc phần mềm. Bất cứ ai cũng có thể học cách sử dụng nó trong 5 phút!
        <img src="${osmonitorImage1}" alt="Mockup" class="my-6 w-full" />
        OsMonitor có kích thước rất nhỏ mà <a href="/" class="underline text-blue-600">quanlynhanvien.com</a> tin là nhỏ nhất trong số tất cả các sản phẩm tương tự. Đã 8 năm kể từ khi OsMonitor được phát triển lần đầu tiên và hiện tại nó đang hoạt động ổn định trên hơn 200.000 máy tính trên toàn thế giới.
        <br/>
        OsMonitor là phần mềm có giá cả hết sức cạnh tranh. Chỉ yêu cầu mua một lần mà không có bất kỳ khoản phí duy trì hàng năm. Giấy phép là vĩnh viễn và không bao giờ hết hạn. Bạn có thể tận hưởng những bản cập nhật miễn phí mãi mãi.
        OsMonitor là một phần mềm giám sát rất an toàn vì nó không bao giờ ghi lại mật khẩu hoặc keylogger. Tất cả thông tin giám sát được gửi thẳng đến máy chủ doanh nghiệp của bạn mà không hề thông qua mạng internet, vì vậy bạn không cần phải lo lắng về bất kỳ rủi ro rò rỉ thông tin nào.`,
    },
    {
        id: "5",
        title: "Quản lý nhân viên với Teramind trong lĩnh vực sản xuất",
        excerpt:
            "“Chúng tôi sử dụng Teramind để bảo vệ dữ liệu công ty và bí mật thương mại khỏi các mối đe dọa trong nội bộ. Quản lý hoạt động người dùng là một tính năng tuyệt vời và vô cùng cần thiết...",
        date: "Mar 31, 2020",
        thumbnail: `${assets.thumbnailBlog5}`,
        content: `“Chúng tôi sử dụng Teramind để bảo vệ dữ liệu công ty và bí mật thương mại khỏi các mối đe dọa trong nội bộ. Quản lý hoạt động người dùng là một tính năng tuyệt vời và vô cùng cần thiết, phần mềm tự động phát hiện các mối đe dọa tiềm ẩn và ngăn chặn những hành vi nguy hiểm. Đội ngũ hỗ trợ của Teramind rất tuyệt vời trong việc giúp chúng tôi thiết lập hệ thống và đưa vào vận hành ngay lập tức.”
        <br/>
        Giám đốc an ninh (CSO)
        <img src="${teramindImage1}" alt="Mockup" class="my-6 w-full" />
        <br style="display:block; margin-bottom:16px;"/>
        <h3 className="color-black">Hồ sơ công ty</h3>
        <br style="display:block; margin-bottom:16px;"/>    
        Chúng tôi là một nhà sản xuất và lắp ráp các thành phần tự động hóa công nghiệp, điện tử ô tô và các bộ phận khác trên phạm vi toàn cầu.
        <br style="display:block; margin-bottom:16px;"/>
        <h3 className="color-black">Những thách thức trong kinh doanh</h3>
        <br style="display:block; margin-bottom:16px;"/>
        Một xu hướng đáng báo động về các mối đe dọa nội bộ trong lĩnh vực công nghiệp đã khiến các nhà sản xuất nhận ra thực tế rằng: chỉ là vấn đề thời gian trước khi họ trở thành nạn nhân của vấn nạn đánh cắp thông tin trừ khi họ có biện pháp thích hợp. Biện pháp này cần phải đáp ứng được 2 yêu cầu:
        <ul style="list-style-type:disc; margin: 20px 0px;"">
        <li style="margin: 12px 32px;">Bảo vệ việc sản xuất cũng như các cửa hàng của mình khỏi các mối đe dọa nội bộ ngày càng tăng: phá hoại, gián điệp công nghiệp và trộm cắp qua mạng.</li>
        <li style="margin: 12px 32px;">Ngăn chặn rò rỉ dữ liệu: các bản thiết kế, thông tin nhà cung cấp và khách hàng, thông tin hợp đồng và các bí mật thương mại khác.</li>
        </ul>
        <br style="display:block; margin-bottom:16px;"/>
        <h3 className="color-black">Bài toán</h3>
        <br style="display:block; margin-bottom:16px;"/>
        Biện pháp bảo mật dựa trên tiêu chuẩn ICS là không đủ để bảo vệ thông tin khách hàng và dữ liệu của họ khỏi các nhân viên xấu và các gián điệp đã ở trong hệ thống. Cần một cách thức khác để loại bỏ những tác nhân nội bộ nguy hiểm đó và thiết lập một chính sách toàn vẹn giúp ngăn chặn mất mát dữ liệu và phản ứng thật nhanh để xử lý những rủi ro đang ngày càng phổ biến này.
        <img src="${teramindImage2}" alt="Mockup" class="my-6 w-full" />
        <br style="display:block; margin-bottom:16px;"/>
        <h3 className="color-black">Giải pháp</h3>
        <br style="display:block; margin-bottom:16px;"/>
        Giám sát và ngăn chặn những hoạt động nội bộ đáng ngờ:
        <ul style="list-style-type:disc; margin: 20px 0px;"">
        <li style="margin: 12px 32px;">Quản lý hành vi bất thường của nhân viên như thường xuyên ở lại công ty làm việc muộn, các cuộc gọi ốm, giờ giấc hoạt động bất thường, v.v.</li>
        <li style="margin: 12px 32px;">Quản lý các hoạt động không tuân thủ quy định của những nhà cung cấp như cố gắng đăng nhập ngoài giờ làm việc hoặc đăng nhập hệ thống sau khi đã hoàn thành dự án.</li>
        <li style="margin: 12px 32px;">Ngăn chặn việc tải xuống và mở các tập tin và các tệp đính kèm trong email từ các nguồn trái phép.</li>
        <li style="margin: 12px 32px;">Hạn chế quyền truy cập vào các ổ đĩa ngoại vi hoặc những tài nguyên mạng mang tính chất nhạy cảm.</li>
        <li style="margin: 12px 32px;">Bộ công cụ quy tắc hành vi thông minh của một phần mềm quản lý nhân viên tiên tiến thậm chí có thể xác định được các biểu hiện tiềm tàng dẫn đến những vấn đề trong tương lai, chẳng hạn như những lời lẽ tức giận trong email.</li>
        </ul>
        <br style="display:block; margin-bottom:16px;"/>
        Xem trực tiếp màn hình máy tính của nhân viên và ghi lại các phiên làm việc:
        <ul style="list-style-type:disc; margin: 20px 0px;"">
        <li style="margin: 12px 32px;">Xem trực tiếp và ghi lại tất cả các hoạt động của người dùng để xác định chính xác thời gian đồng thời sử dụng làm bằng chứng cho bất kỳ sự cố vi phạm dữ liệu nào sau này.</li>
        </ul>
        <br style="display:block; margin-bottom:16px;"/>
        Hạn chế tiếp xúc với thông tin trong hệ thống:
        <ul style="list-style-type:disc; margin: 20px 0px;"">
        <li style="margin: 12px 32px;">OCR, “lấy dấu vân tay” và “gắn thẻ” để Quản lý sự tiếp xúc của nhân viên với các dữ liệu nhạy cảm.</li>
        <li style="margin: 12px 32px;">Hạn chế và tách biệt quyền truy cập của nhân viên vào hệ thống sản xuất, các sơ đồ thiết kế, cơ sở dữ liệu khách hàng và nhà cung cấp.</li>
        </ul>
        <br style="display:block; margin-bottom:16px;"/>
        Phân tích và báo cáo rủi ro:
        <ul style="list-style-type:disc; margin: 20px 0px;"">
        <li style="margin: 12px 32px;">Xác định những nhân viên, nhà cung cấp, thành phần hệ thống và các chính sách mang tính rủi ro cao với hệ thống Risk Scoring độc nhất.</li>
        <li style="margin: 12px 32px;">Dựa trên những báo cáo trực quan để phân tích tính chất của các lỗ hổng, xu hướng xuất hiện, tần số vi phạm dựa trên mức độ nghiêm trọng, các phòng ban hoặc các nhóm.</li>
        <li style="margin: 12px 32px;">Sử dụng dữ liệu video đã ghi được từ các đại lý có kinh nghiệm để đào tạo những đại lý mới, những đại lý hoạt động kém chất lượng.</li>
        </ul>
        <br style="display:block; margin-bottom:16px;"/>
        Giáo dục và đào tạo nhân viên:
        <ul style="list-style-type:disc; margin: 20px 0px;"">
        <li style="margin: 12px 32px;">Training cho nhân viên biết về những mối nguy tiềm tàng trên mạng, cách bảo vệ bản thân và tài sản doanh nghiệp thông qua các thông báo mỗi khi vi phạm quy tắc, các thông báo có độ tùy biến cao.</li>
        </ul>
        <br style="display:block; margin-bottom:16px;"/>
        <h3 className="color-black">Kết quả</h3>
        <br style="display:block; margin-bottom:16px;"/>
        Công ty chúng tôi đã nhận được những lợi ích ngay sau khi triển khai phần mềm quản lý nhân viên Te ra mind:
        <ul style="list-style-type:disc; margin: 20px 0px;"">
        <li style="margin: 12px 32px;">Đã có thể xác định và ngăn chặn một số nỗ lực đánh cắp dữ liệu từ những người trong cuộc.</li>
        <li style="margin: 12px 32px;">Sử dụng những dữ liệu được ghi lại trên phần mềm Te ra mind, bộ phận nhân sự và pháp lý đã có thể có hành động một cách mạnh mẽ, quyết liệt và tự tin chống lại các tác nhân cố gắng làm rò rỉ dữ liệu quý báu của doanh nghiệp.</li>
        <li style="margin: 12px 32px;">Thêm vào đó, chúng tôi còn có thể tối ưu hóa năng suất công ty dựa trên khả năng hiển thị các hoạt động của nhân viên, từ đó cho biết cách thức họ dành thời gian cho công việc của mỗi con người.</li>
        </ul>`,
    },
    {
        id: "6",
        title: "iMonitor EAM – VOLVO Car France đã quản lý nhân viên như thế nào?",
        excerpt:
            "IMonitor EAM giúp chúng tôi hiểu rõ hơn về hành vi sử dụng máy tính của nhân viên.",
        date: "Mar 31, 2020",
        thumbnail: `${assets.thumbnailBlog6}`,
        content: `VOLVO Car France
        <br/>
        Quốc gia: Pháp
        <br/>
        Nhân viên: Hơn 100
        <br/>
        Trong khoảng thời gian 50 năm, nhà máy Volvo Torslanda đã sản xuất hơn 6,8 triệu chiếc xe lăn bánh trên khắp thế giới. Các mẫu xe như Amazon, P1800 và 240 đã trở thành một phần di sản văn hóa của Thụy Điển; XC90 và S80 có thể cũng sẽ bước tiếp con đường thành công đó.
        <br style="display:block; margin-bottom:16px;"/>
        Chúng tôi không muốn Quản lý nhân viên một cách chi tiết toàn bộ những thao tác mà nhân viên làm trên máy tính của họ. Điều mà chúng tôi muốn (và có lẽ là nhiều người khác cũng đều muốn), đó là hiểu rõ về hành vi của nhân viên trong việc sử dụng máy tính.
        <br style="display:block; margin-bottom:16px;"/>
        Sau khi đã trải qua một quá trình tìm kiếm và nghiên cứu rất nhiều sản phẩm, cuối cùng, chúng tôi đã tìm thấy <b>iMonitor EAM</b>, tính năng báo cáo của nó đã đủ để đáp ứng được tất cả những kỳ vọng của chúng tôi. Các thống kê thao tác người dùng được chúng tôi quan tâm nhất là: Top 10 trang web được truy cập nhiều nhất, Top 10 chương trình được sử dụng nhiều nhất và xếp hạng người dùng theo mức độ tiêu thụ băng thông. Những biểu đồ dạng cột và biểu đồ hình tròn thực sự rất tiện lợi, chỉ bằng một cái nhìn thoáng qua chúng tôi đã có thể nắm bắt được bức tranh toàn cảnh về việc sử dụng máy tính trong công ty, chẳng hạn như ai lãng phí thời gian nhất trên các trang web phi kinh doanh (các website giải trí, mạng xã hội, v.v.), ai là người chiếm dụng nhiều băng thông nhất (để download phim ảnh, …). <b>IMonitor EAM</b> đã chỉ ra được một vài nhân viên đang lạm dụng hệ thống một cách rõ ràng, thói quen lướt web của họ rõ ràng là nhiều quá mức không cần thiết, chúng tôi cũng phát hiện ra một số người đang tiêu thụ một lượng băng thông rất lớn.
        <br style="display:block; margin-bottom:16px;"/>
        Chúng tôi đã thông báo cho tất cả nhân viên biết rằng việc sử dụng máy tính của họ sẽ được ghi lại. Vì thế từ giờ trở đi mọi người sẽ phải học cách thích nghi với hệ thống Quản lý nhân viên mới này. Kể từ đó, tần suất nhàn rỗi đã từng tiêu tốn hàng trăm giờ đồng hồ mỗi ngày trên các hoạt động phi sản xuất đã giảm rất nhiều. Chúng tôi có thể thấy rõ rằng năng suất công việc đang được nâng cao/
        <img src="${imonitorImage1}" alt="Mockup" class="my-6 w-full" />
        Chúng tôi cũng cảm thấy rằng khi công ty của chúng tôi phát triển, việc bảo mật thông tin và trao đổi dữ liệu giữa các nhân viên của chúng tôi và thế giới bên ngoài cũng vì thế mà trở nên khó khăn hơn. Các phần mềm Quản lý nhân viên như i Mo ni tor khuyến khích nhân viên tỉnh táo hơn và cẩn thận hơn với những gì họ chia sẻ.
        <br style="display:block; margin-bottom:16px;"/>
        Bên cạnh đó, một điểm cộng rất lớn đó là phần mềm này rất dễ cài đặt và triển khai. Tôi đã thử một vài sản phẩm Quản lý nhân viên khác trước đó và kết quả: bạn cần phải là một kỹ sư máy tính mới có thể sử dụng được chúng!
        <br style="display:block; margin-bottom:16px;"/>
        Tóm lại, chúng tôi hài lòng với iMonitor, nó chính xác là những gì chúng tôi đang tìm kiếm: một phần mềm quản lý nhân viên hiệu quả, đầy đủ tính năng cần thiết và dễ dàng sử dụng. Tôi sẽ giới thiệu iMonitor EAM cho tất cả bạn bè của tôi, những người cũng đang muốn biết điều gì đang xảy ra với các nhân viên trong doanh nghiệp của họ.
        <br style="display:block; margin-bottom:16px;"/>
        Nếu bạn cũng muốn  tìm một phần mềm quản lý giống chúng tôi thì hãy liên hệ ngay với <a href="/contact" class="underline text-blue-600">https://quanlynhanvien.com</a> để được nhân viên tư vấn về phần mềm I mo ni tor EAM một cách chi tiết nhất`,
    },
];

export default posts;
