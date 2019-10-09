
//Người dùng - User(id, email, password, fullname) //Dùng để đăng nhập
export const users = [
  { id: 1, email: 'hoanganh', password: 'abc123', fullname: 'Hoang Anh' },
  { id: 2, email: 'hobao', password: 'abc123', fullname: 'Ho Bao' },
  { id: 3, email: 'ngocvy@gmail.com', password: 'abc123', fullname: 'Ngoc Vy' },
  { id: 4, email: 'ngoclong', password: 'abc123', fullname: 'Ngoc Long' },
  { id: 5, email: 'cuong', password: 'abc123', fullname: 'Truong Minh' }
];
//Thông tin người dùng - Profile(id, userid, fullname, phone, address, createDate, notes)  //Dùng để đăng ký (createDate: Ngày tạo
export const profiles = [
  { id: 1, userid: 1, fullname: 'Hoang Anh', phone: '6404025054', address: '5 Jana Alley', imagePath: '../lib/image/daidien.PNG', createDate: '9/9/2019', notes: 'OK' },
  { id: 2, userid: 2, fullname: 'Ho Bao', phone: '9873488688', address: '656 Sloan Hill', imagePath: '../lib/image/daidien.PNG', createDate: '9/9/2019', notes: 'OK' },
  { id: 3, userid: 3, fullname: 'Ngoc Vy', phone: '1354285324', address: '2906 Darwin Pass', imagePath: '../lib/image/daidien.PNG', createDate: '9/9/2019', notes: 'OK' },
  { id: 4, userid: 4, fullname: 'Ngoc Long', phone: '3894090573', address: '27412 Northfield Trail', imagePath: '../lib/image/daidien.PNG', createDate: '9/9/2019', notes: 'OK' },
  { id: 5, userid: 5, fullname: 'The Cuong', phone: '5538470541', address: '62953 Burning Wood Way', imagePath: '../lib/image/daidien.PNG', createDate: '9/9/2019', notes: 'OK' },
];
//Thông tin sử dụng - Log(id, userid, logTime) //Lưu lịch sử đăng nhập của người dùng (thời gian bao gồm giờ + ngày)
export const log = [
  { id: 1, userid: 1, logTime: '2019-09-09 00:00:00' },
  { id: 2, userid: 2, logTime: '2019-09-09 00:00:00' },
  { id: 3, userid: 3, logTime: '2019-09-09 00:00:00' },
  { id: 4, userid: 4, logTime: '2019-09-09 00:00:00' },
  { id: 5, userid: 5, logTime: '2019-09-09 00:00:00' }
];
//Sản phẩm - Product(id, code, name, createDate, quantity) //code: Mã sản phẩm, quantity: ĐƠn vị tính
export const product = [
  { id: 1, code: 'SP00001', name: 'Einti', createDate: '2019-09-09 00:00:00', quantity: 100 },
  { id: 2, code: 'SP00002', name: 'Oyoba', createDate: '2019-09-09 00:00:00', quantity: 50 },
  { id: 3, code: 'SP00003', name: 'Skinix', createDate: '2019-09-09 00:00:00', quantity: 0 },
  { id: 4, code: 'SP00004', name: 'Skaboo', createDate: '2019-09-09 00:00:00', quantity: 200 },
  { id: 5, code: 'SP00005', name: 'Eimbee', createDate: '2019-09-09 00:00:00', quantity: 0 }
];
//Kho hàng - Warehouse(id, code, name, address, createDate) //code: Mã kho hàng
export const Warehouse = [
  { id: 1, code: 'KH00001', name: 'Voonder', address: '52 Thanh Xuan, Ha Noi', createDate: '2019-09-09 00:00:00' },
  { id: 2, code: 'KH00002', name: 'Gigaclub', address: '302 Dai La, Ha Noi', createDate: '2019-09-09 00:00:00' },
  { id: 3, code: 'KH00003', name: 'Geba', address: '180 Ly Thuong Kiet, Da Nang', createDate: '2019-09-09 00:00:00' },
  { id: 4, code: 'KH00004', name: 'Gabtune', address: '768 Lien Chieu, Da Nang', createDate: '2019-09-09 00:00:00' },
  { id: 5, code: 'KH00005', name: 'Fanoodle', address: '833 Son Tay, Binh Dinh', createDate: '2019-09-09 00:00:00' }
];
//Xuất/Nhập hàng - Invoice(id, code, name, Warehouseid, total, discount, createDate, invoiceDate) //invoiceDate: Thời gian xuất/nhập, createDate: Thời gian tạo theo phần mềm
export const invoice = [
  { id: 1, code: '572370182', name: 'Fadeo  ', codeWarehouse: 'KH00001', total: 100, isImport: true, createDate: '2019-09-09 00:00:00', invoiceDate: '2019-09-09 00:00:00' },
  { id: 2, code: '115230465', name: 'Skaboo ', codeWarehouse: 'KH00003', total: 50, isImport: true, createDate: '2019-09-09 00:00:00', invoiceDate: '2019-09-09 00:00:00' },
  { id: 3, code: '504360158', name: 'Dabtype', codeWarehouse: 'KH00002', total: 100, isImport: true, createDate: '2019-09-10 00:00:00', invoiceDate: '2019-09-09 00:00:00' },
  { id: 4, code: '507302001', name: 'Quatz  ', codeWarehouse: 'KH00005', total: 100, isImport: true, createDate: '2019-09-11 00:00:00', invoiceDate: '2019-09-09 00:00:00' },
  { id: 5, code: '615896008', name: 'Mudo   ', codeWarehouse: 'KH00004', total: 26, isImport: true, createDate: '2019-09-12 00:00:00', invoiceDate: '2019-09-09 00:00:00' },
  { id: 6, code: '112624562', name: 'Dabtype', codeWarehouse: 'KH00002', total: 100, isImport: false, createDate: '2019-09-11 00:00:00', invoiceDate: '2019-09-09 00:00:00' },
  { id: 7, code: '326589451', name: 'Quatz  ', codeWarehouse: 'KH00005', total: 100, isImport: false, createDate: '2019-09-12 00:00:00', invoiceDate: '2019-09-09 00:00:00' },
  { id: 8, code: '124568954', name: 'Mudo   ', codeWarehouse: 'KH00004', total: 26, isImport: false, createDate: '2019-09-23 00:00:00', invoiceDate: '2019-09-09 00:00:00' }
];
export const exportGoods = [
  { id: 1, code: 'PX00001', name: 'Fadeo  ', warehouseld: 1, total: 29, discount: 92, createDate: '2019-09-09 00:00:00', invoiceDate: '2019-09-09 00:00:00' },
  { id: 2, code: 'PX00002', name: 'Skaboo ', warehouseld: 2, total: 4, discount: 37, createDate: '2019-09-09 00:00:00', invoiceDate: '2019-09-09 00:00:00' },
  { id: 3, code: 'PX00003', name: 'Dabtype', warehouseld: 3, total: 91, discount: 75, createDate: '2019-09-09 00:00:00', invoiceDate: '2019-09-09 00:00:00' },
  { id: 4, code: 'PX00004', name: 'Quatz  ', warehouseld: 4, total: 43, discount: 28, createDate: '2019-09-09 00:00:00', invoiceDate: '2019-09-09 00:00:00' },
  { id: 5, code: 'PX00005', name: 'Mudo   ', warehouseld: 5, total: 26, discount: 40, createDate: '2019-09-09 00:00:00', invoiceDate: '2019-09-09 00:00:00' }
];
//Chi tiết xuất/nhập - Detail(id, Invoiceid, Productid, quality, quantity, price)
export const detail = [
  { id: 1, codeInvoice: '572370182', codeProduct: 'SP00001', codeWarehouse: 'KH00001', quantity: 50, price: '$28.13', createDate: '2019-09-09', isImport: true },
  { id: 2, codeInvoice: '115230465', codeProduct: 'SP00002', codeWarehouse: 'KH00003', quantity: 50, price: '$2.15', createDate: '2019-09-09', isImport: true },
  { id: 3, codeInvoice: '572370182', codeProduct: 'SP00001', codeWarehouse: 'KH00002', quantity: 50, price: '$8.66', createDate: '2019-09-10', isImport: true },
  { id: 4, codeInvoice: '504360158', codeProduct: 'SP00004', codeWarehouse: 'KH00002', quantity: 50, price: '$8.77', createDate: '2019-09-11', isImport: true },
  { id: 5, codeInvoice: '504360158', codeProduct: 'SP00004', codeWarehouse: 'KH00002', quantity: 50, price: '$8.67', createDate: '2019-09-12', isImport: true },
  { id: 6, codeInvoice: '507302001', codeProduct: 'SP00004', codeWarehouse: 'KH00005', quantity: 100, price: '$8.67', createDate: '2019-09-12', isImport: true },
  { id: 7, codeInvoice: '112624562', codeProduct: 'SP00001', codeWarehouse: 'KH00001', quantity: 10, price: '$8.77', createDate: '2019-09-11', isImport: false },
  { id: 8, codeInvoice: '326589451', codeProduct: 'SP00002', codeWarehouse: 'KH00003', quantity: 23, price: '$8.67', createDate: '2019-09-12', isImport: false },
  { id: 9, codeInvoice: '124568954', codeProduct: 'SP00004', codeWarehouse: 'KH00005', quantity: 50, price: '$8.67', createDate: '2019-09-23', isImport: false },
  { id: 10, codeInvoice: '124568954', codeProduct: 'SP00004', codeWarehouse: 'KH00002', quantity: 20, price: '$8.67', createDate: '2019-09-24', isImport: false },
];
