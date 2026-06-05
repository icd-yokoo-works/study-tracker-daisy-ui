import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import 'dayjs/locale/ja'; // 💡 日本語ロケールをインポート

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('ja'); // 💡 グローバルで日本語を使用するように設定

/**
 * 日本時間(Asia/Tokyo)に変換してフォーマットする関数
 */
export function formatToJST(date, formatStr = 'YYYY.MM.DD (dd)') {
  if (!date) return '';
  return dayjs(date).tz('Asia/Tokyo').format(formatStr);
}