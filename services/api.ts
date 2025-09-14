import { Order, Product, Customer, DashboardStats } from '../types';

const API_BASE_URL = 'http://localhost:8080';

/**
 * APIからデータを取得するための共通フェッチ関数
 * @param endpoint APIエンドポイント (例: '/dashboard/stats')
 * @returns 取得したデータを含むPromise
 */
const fetchData = async <T,>(endpoint: string): Promise<T> => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`Error fetching from ${endpoint}: ${response.statusText}`);
        }
        return await response.json() as T;
    } catch (error) {
        console.error(`Error fetching from ${endpoint}:`, error);
        throw error;
    }
};


/**
 * ダッシュボードの統計データを取得します。
 * @returns DashboardStatsオブジェクトを含むPromise
 */
export const getDashboardStats = (): Promise<DashboardStats> => {
  return fetchData<DashboardStats>('/dashboard/stats');
};

/**
 * 受注のリストを取得します。
 * @returns Orderの配列を含むPromise
 */
export const getOrders = (): Promise<Order[]> => {
  return fetchData<Order[]>('/orders');
};

/**
 * 商品のリストを取得します。
 * @returns Productの配列を含むPromise
 */
export const getProducts = (): Promise<Product[]> => {
  return fetchData<Product[]>('/products');
};

/**
 * 顧客のリストを取得します。
 * @returns Customerの配列を含むPromise
 */
export const getCustomers = (): Promise<Customer[]> => {
  return fetchData<Customer[]>('/customers');
};
