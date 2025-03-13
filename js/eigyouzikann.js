const weekendImage = "../img/top/eigyoujikan2.png"; // 土日祝日に表示する画像
const weekdayImage = "../img/top/eigyoujikan.webp"; // 平日に表示する画像
const wednesdayImage = "../img/top/eigyoujikan3.png"; // 水曜日用の画像
const holidayPeriodImage = "../img/top/eigyoujikan3.png"; // 12月30日から1月3日用の画像

// 祝日を取得する関数
async function isHoliday(date) {
  const year = date.getFullYear();
  const dateString = date.toISOString().split("T")[0]; // YYYY-MM-DD 形式
  // 日本の祝日APIから祝日データを取得
  try {
    const response = await fetch(
      `https://holidays-jp.github.io/api/v1/holidays/${year}.json`
    );
    const holidays = await response.json();
    // 祝日がリストに含まれているか確認
    return holidays.hasOwnProperty(dateString);
  } catch (error) {
    console.error("祝日情報の取得に失敗しました:", error);
    return false;
  }
}

// 今日の日付を取得
const today = new Date();
// 土日祝日を判定
(async () => {
  // 12月30日から1月3日かどうかを判定
  const isHolidayPeriod =
    (today.getMonth() === 11 && today.getDate() >= 30) || // 12月30日以降
    (today.getMonth() === 0 && today.getDate() <= 3); // 1月3日以前

  if (isHolidayPeriod) {
    // 12月30日から1月3日の期間
    document.getElementById("image").src = holidayPeriodImage;
  } else if (
    today.getDay() === 0 ||
    today.getDay() === 6 ||
    (await isHoliday(today))
  ) {
    // 土日または祝日
    document.getElementById("image").src = weekendImage;
  } else if (today.getDay() === 3) {
    // 水曜日
    document.getElementById("image").src = wednesdayImage;
  } else {
    // 平日
    document.getElementById("image").src = weekdayImage;
  }
})();
