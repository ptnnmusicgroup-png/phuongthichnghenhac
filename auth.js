// Thông tin Admin của bạn
const ADMIN_DATA = {
    user: "Phương Thích Nghe Nhạc",
    pass: "ptnn.lovelytimewithmusic",
    name: "Phương Thích Nghe Nhạc (Nguyễn Đặng Phương)"
};

// Hàm xử lý khi nhấn nút đăng nhập
function checkLogin() {
    const userIn = document.getElementById('username').value;
    const passIn = document.getElementById('password').value;

    if (userIn === ADMIN_DATA.user && passIn === ADMIN_DATA.pass) {
        // Lưu phiên đăng nhập admin vào trình duyệt
        const session = {
            name: ADMIN_DATA.name,
            role: "admin",
            isVerified: true
        };
        localStorage.setItem('userSession', JSON.stringify(session));
        alert("Chào Admin Phương! Đang chuyển hướng...");
        window.location.href = "index.html";
    } else {
        // Lưu phiên đăng nhập người dùng thường
        const session = {
            name: userIn || "Khách",
            role: "user",
            isVerified: false
        };
        localStorage.setItem('userSession', JSON.stringify(session));
        window.location.href = "index.html";
    }
}

// Hàm nén và lưu bài đăng (Dùng ở index.html)
function savePostToStorage(content) {
    let posts = JSON.parse(localStorage.getItem('ptnn_database')) || [];
    const newPost = {
        id: Date.now(),
        author: ADMIN_DATA.name,
        text: content,
        date: new Date().toLocaleDateString('vi-VN'),
        likes: 0
    };
    posts.unshift(newPost); // Bài mới nhất lên đầu
    // Nén dữ liệu thành chuỗi JSON để lưu trữ tối ưu
    localStorage.setItem('ptnn_database', JSON.stringify(posts));
}
