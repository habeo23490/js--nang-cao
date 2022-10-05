- mảng là một danh sách các giá trị muốn lưu trữ .
- mảng sẽ lưu các giá trị cùng loại
- mảng cho phép mình thực hiện các tác vụ trong 1 loạt giá trị  và cung cấp các phương thức duyệt mảng thay vì dùng các vòng lặp for thông thường
các phương thức ss6 
+ find
+ findindex
+ includes
+ map
+ filter
+ reduce
+ some
+ every
các phương thức này yêu cầu truyền vào một callback function 
các hàm callback sẽ nhận giá triji trong mảng và thức hiện các thao tác 
- có thể nhận 4 tham số , bình thương là 3 ts , value index array

- function 
+ là một tập các câu lệnh js được gói trong 1 cái khối mã cho phép mình tái sử dụng nhiều lần nhiều nơi giảm thiểu việc viết lại 
+ cấu trúc hàm 
 từ khóa 
 tên hàm 
 tham số
 thân hàm và câu lệnh

 3 cách khai báo


 - lập trình bất đồng bộ 
 + synchronous - đồng bộ
 chỉ thực hiện 1 thao tác tại 1 thời điểm , các thao tác thì sẽ phải chờ thao tác trước đó thực hiện xong mới đến lượt
 + bất đồng bộ
 trong khi thực hiện các thao tác mà chiếm nhiều thời gian thì quy trình vẫn có thể xử lí đc các công việc khác 
 thao tác chiếm nhiều thời gian sẽ đc xử lí sau khi mà nó hoàn thành .
 Lập trình bất đồng bọ được triển khai theo 3 cách 


 callback
 
 promise
 async/await 


 - dom : đối tượng đại diện cho cấu trúc HTML 
 + các thao tác chính có thể thực hiện với Dom
  tìm kiếm / duyệt qua cấu trúc phần tử 
  chỉnh sửa nội dung/thuộc tính /thêm các sự kiện
  tạo các thành phần Dom
  thêm,sửa , xóa các thành phần Dom


  khi chỉ cần thêm cấu trúc Dom mà không có các sự kiện thì có thể dùng innerHTML

  khi mà cần tùy chỉnh thêm các sự kiện dùng API document. create

  khi tạo giao diện thì nên chia nhỏ các phần giao diện ra thành các hàm nhỏ

  ví dụ : khi cần render danh sách sản phẩm creatProduck , createProducklist , render 


- API : Application Programming Interface : tập các giao thức hay quy tắc dể các ứng dụng/hệ thống khác nhau có thể giao tiếp và trao đổi dữ liệu với nhau
INTERFACE : giao diện của ứng dụng 
thư viện => interface (phương thức)
+ cụ thể trong lập trình web Api các endpoint mà sever cung cấp cho phép ứng dụng frontend có thể giữ/nhận dữ liệu
/api.user
/api/signup
/api/signin

HTTP -
+ ENDPOINT | URL ( địa chỉ ship)
+ Method (mua hàng ,trả hàng , đổi hàng)| trạng thái 
+ Headers (ghi chú )
+ body (món hàng , dữ liệu)

+ Method :GET|POST|PUT|DELETE
+ Status :1xx|2xx|3xx..

impletement
+ XHR
+ FetchAPI









