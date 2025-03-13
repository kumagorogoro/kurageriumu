// 祝日情報を取得するサーバーサイドAPIのエンドポイントを呼び出す
async function isHoliday(date) {
  const year = date.getFullYear();
  const dateString = date.toISOString().split("T")[0]; // YYYY-MM-DD 形式
  // サーバーサイドの祝日APIを呼び出す（例えば、Node.js Expressサーバー経由で）
  try {
    const response = await fetch(`/api/holidays/${year}`);
    if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
    }

    const holidays = await response.json();
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
  try {
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
      (await isHoliday(today)) // 祝日かどうかを判定
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
  } catch (error) {
    console.error("処理中にエラーが発生しました:", error);
    // エラーハンドリング: 画像のデフォルト設定など
    document.getElementById("image").src = weekdayImage;
  }
})();
