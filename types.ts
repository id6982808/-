
export enum OrderStatus {
  Completed = '完了',
  Pending = '処理中',
  Cancelled = 'キャンセル',
}

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customerName: string;
  orderDate: string;
  totalAmount: number;
  status: OrderStatus;
  items: OrderItem[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  totalSpent: number;
}

export interface MonthlySales {
    name: string;
    売上: number;
}

export interface DailyOrders {
    name: string;
    注文件数: number;
}

export interface DashboardStats {
  totalSales: number;
  orderCount: number;
  newCustomers: number;
  monthlySales: MonthlySales[];
  dailyOrders: DailyOrders[];
}
