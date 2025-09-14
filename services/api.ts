import { Order, Product, Customer, DashboardStats, OrderStatus } from '../types';

// --- Mock Data ---

const mockDashboardStats: DashboardStats = {
  totalSales: 15230000,
  orderCount: 1240,
  newCustomers: 85,
  monthlySales: [
    { name: '1月', 売上: 1200000 },
    { name: '2月', 売上: 1800000 },
    { name: '3月', 売上: 1500000 },
    { name: '4月', 売上: 2100000 },
    { name: '5月', 売上: 1900000 },
    { name: '6月', 売上: 2530000 },
  ],
  dailyOrders: [
    { name: '6/10', 注文件数: 25 },
    { name: '6/11', 注文件数: 30 },
    { name: '6/12', 注文件数: 22 },
    { name: '6/13', 注文件数: 35 },
    { name: '6/14', 注文件数: 40 },
    { name: '6/15', 注文件数: 38 },
    { name: '6/16', 注文件数: 45 },
  ],
};

const mockOrders: Order[] = [
  { id: 'ORD-001', customerName: '山田 太郎', orderDate: '2023-06-16', totalAmount: 15000, status: OrderStatus.Completed, items: [] },
  { id: 'ORD-002', customerName: '鈴木 花子', orderDate: '2023-06-16', totalAmount: 8500, status: OrderStatus.Pending, items: [] },
  { id: 'ORD-003', customerName: '佐藤 健太', orderDate: '2023-06-15', totalAmount: 22000, status: OrderStatus.Completed, items: [] },
  { id: 'ORD-004', customerName: '田中 恵子', orderDate: '2023-06-15', totalAmount: 5000, status: OrderStatus.Cancelled, items: [] },
  { id: 'ORD-005', customerName: '渡辺 雄大', orderDate: '2023-06-14', totalAmount: 12800, status: OrderStatus.Completed, items: [] },
  { id: 'ORD-006', customerName: '伊藤 美咲', orderDate: '2023-06-14', totalAmount: 31000, status: OrderStatus.Pending, items: [] },
];

const mockProducts: Product[] = [
  { id: 'PROD-101', name: '高性能ノートPC', category: 'エレクトロニクス', price: 150000, stock: 50 },
  { id: 'PROD-102', name: 'ワイヤレスイヤホン', category: 'オーディオ', price: 12000, stock: 120 },
  { id: 'PROD-103', name: 'スマートウォッチ', category: 'ウェアラブル', price: 35000, stock: 80 },
  { id: 'PROD-201', name: 'オーガニックコーヒー豆', category: '食品', price: 2500, stock: 200 },
  { id: 'PROD-301', name: 'デザイナーズチェア', category: '家具', price: 48000, stock: 30 },
];

const mockCustomers: Customer[] = [
  { id: 'CUS-001', name: '山田 太郎', email: 'taro.yamada@example.com', joinDate: '2022-01-15', totalSpent: 250000 },
  { id: 'CUS-002', name: '鈴木 花子', email: 'hanako.suzuki@example.com', joinDate: '2022-03-20', totalSpent: 180000 },
  { id: 'CUS-003', name: '佐藤 健太', email: 'kenta.sato@example.com', joinDate: '2022-05-10', totalSpent: 320000 },
  { id: 'CUS-004', name: '田中 恵子', email: 'keiko.tanaka@example.com', joinDate: '2023-02-01', totalSpent: 95000 },
  { id: 'CUS-005', name: '渡辺 雄大', email: 'yudai.watanabe@example.com', joinDate: '2023-04-18', totalSpent: 150000 },
];

// --- API Functions ---

/**
 * ネットワーク遅延をシミュレートするためのヘルパー関数
 * @param data 返すデータ
 * @returns 指定されたデータを含むPromise
 */
const simulateDelay = <T,>(data: T): Promise<T> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, 500); // 500msの遅延
    });
};

/**
 * ダッシュボードの統計データを取得します。
 * @returns DashboardStatsオブジェクトを含むPromise
 */
export const getDashboardStats = (): Promise<DashboardStats> => {
  return simulateDelay(mockDashboardStats);
};

/**
 * 受注のリストを取得します。
 * @returns Orderの配列を含むPromise
 */
export const getOrders = (): Promise<Order[]> => {
  return simulateDelay(mockOrders);
};

/**
 * 商品のリストを取得します。
 * @returns Productの配列を含むPromise
 */
export const getProducts = (): Promise<Product[]> => {
  return simulateDelay(mockProducts);
};

/**
 * 顧客のリストを取得します。
 * @returns Customerの配列を含むPromise
 */
export const getCustomers = (): Promise<Customer[]> => {
  return simulateDelay(mockCustomers);
};
