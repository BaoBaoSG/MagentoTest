# Magento Test Automation Project

## I. Javascript

## Giới Thiệu

Dự án này được thiết kế để tự động hóa các bài kiểm thử cho trang web Magento sử dụng Playwright và Mocha. Các bài kiểm thử này bao gồm kiểm thử chức năng cơ bản như truy cập vào trang chủ, đăng nhập, đăng ký và xác nhận các chức năng chính của trang web.

## Cài Đặt

Để thiết lập và chạy các bài kiểm thử này trên máy của bạn, bạn cần thực hiện các bước sau:

### Yêu Cầu

- Node.js phiên bản 12.x hoặc cao hơn.
- npm phiên bản 6.x hoặc cao hơn.

### Các Bước Cài Đặt

1. Clone repo này về máy của bạn sử dụng lệnh:
   ```bash
   git clone https://github.com/BaoBaoSG/MagentoTest
   ```

- Chạy lệnh sau trong thư mục gốc của dự án để cài đặt các phụ thuộc:
  npm install

- Để chạy tất cả các bài kiểm thử, sử dụng lệnh sau:
  npm test

Kết quả của các bài kiểm thử sẽ được hiển thị trên console và báo cáo chi tiết sẽ được tạo trong thư mục reports.

# Công Nghệ Được Sử Dụng

- Playwright: Được sử dụng để tự động hóa trình duyệt và thực hiện các bài kiểm thử.
- Mocha: Khung kiểm thử JavaScript cho các bài kiểm thử đơn vị và tích hợp.
- Chai: Thư viện assertion để sử dụng với Mocha để kiểm tra các kết quả kiểm thử.
- Mochawesome: Bộ tạo báo cáo kiểm thử để xuất ra báo cáo HTML chi tiết.

# Bảo Trì

Thông tin về việc bảo trì dự án và cập nhật các bài kiểm thử sẽ được cập nhật trong phần này theo thời gian thực.

---

## II. Java

# Hướng Dẫn Chạy Java

# Yêu Cầu

- Java JDK phiên bản 11 hoặc cao hơn.
- Maven phiên bản 3.6.x hoặc cao hơn.

# Cài Đặt và Chạy Kiểm Thử

Clone repo:
git clone https://github.com/BaoBaoSG/MagentoTest

- Chạy lệnh sau trong thư mục gốc của dự án để cài đặt các phụ thuộc Maven:
  mvn install

# Để chạy các bài kiểm thử bằng Maven, sử dụng lệnh sau:

mvn clean test hoặc mvn clean test site

# Kết quả của các bài kiểm thử sẽ được hiển thị trên console. Báo cáo chi tiết sẽ được tạo ra trong thư mục target/surefire-reports.

# Công Nghệ Được Sử Dụng

- Java Playwright: Được sử dụng để tự động hóa trình duyệt và thực hiện các bài kiểm thử.
- JUnit: Khung kiểm thử Java cho các bài kiểm thử đơn vị và tích hợp.
