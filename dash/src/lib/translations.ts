export const translateCountry = (country: string): string => {
  const translations: Record<string, string> = {
    "Australia": "Австралия",
    "Austria": "Австрия",
    "Azerbaijan": "Азербайджан",
    "Bahrain": "Бахрейн",
    "Belgium": "Бельгия",
    "Brazil": "Бразилия",
    "Canada": "Канада",
    "China": "Китай",
    "Spain": "Испания",
    "France": "Франция",
    "Great Britain": "Великобритания",
    "United Kingdom": "Великобритания",
    "Germany": "Германия",
    "Hungary": "Венгрия",
    "Italy": "Италия",
    "Japan": "Япония",
    "Saudi Arabia": "Саудовская Аравия",
    "Mexico": "Мексика",
    "Monaco": "Монако",
    "Netherlands": "Нидерланды",
    "Portugal": "Португалия",
    "Qatar": "Катар",
    "Singapore": "Сингапур",
    "United Arab Emirates": "Арабские Эмираты",
    "United States": "Соединенные Штаты",
  };
  return translations[country] || country;
};

export const translateSessionKind = (kind: string): string => {
  const translations: Record<string, string> = {
    "Practice": "Практика",
    "Qualifying": "Квалификация",
    "Race": "Гонка",
    "Sprint": "Спринт",
    "Shootout": "Отбор",
	"Sprint Qualification": "Спринт-квл",
	"Sprint Race": "Спринт Гонка",
  };

  if (kind.startsWith("Practice ")) {
    return `Практика ${kind.substring("Practice ".length)}`;
  }
  if (kind.startsWith("Qualifying ")) {
    return `Квалификация ${kind.substring("Qualifying ".length)}`;
  }

  return translations[kind] || kind;
};

export const translateString = (text: string): string => {
  const translations: Record<string, string> = {
    "No upcoming weekend found": "Предстоящих выходных не найдено",
    "No upcoming sessions found": "Предстоящих сессий не найдено",
    "Schedule not found": "Расписание не найдено",
    "Current": "Текущий",
    "Up Next": "Ближайшее событие",
    "Over": "Завершено",
    "Next": "Следующая",
    "race": "гонка",
    "session": "сессия",
    "in": "через",
  };
  return translations[text] || text;
};

export const translateUnit = (value: number | null, unit: string): string => {
  if (value === null) return unit;

  const forms: Record<string, [string, string, string]> = {
    "day": ["день", "дня", "дней"],
    "hour": ["час", "часа", "часов"],
    "minute": ["минута", "минуты", "минут"],
    "second": ["секунда", "секунды", "секунд"],
  };

  const getPluralForm = (num: number, forms: [string, string, string]): string => {
    if (num % 10 === 1 && num % 100 !== 11) {
      return forms[0];
    }
    if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
      return forms[1];
    }
    return forms[2];
  };

  const unitForms = forms[unit];
  if (!unitForms) return unit; // Fallback if unit is not defined

  return getPluralForm(value, unitForms);
};

export const translateMonth = (month: string): string => {
  const translations: Record<string, string> = {
    "January": "Январь",
    "February": "Февраль",
    "March": "Март",
    "April": "Апрель",
    "May": "Май",
    "June": "Июнь",
    "July": "Июль",
    "August": "Август",
    "September": "Сентябрь",
    "October": "Октябрь",
    "November": "Ноябрь",
    "December": "Декабрь",
    "Jan": "Янв",
    "Feb": "Фев",
    "Mar": "Мар",
    "Apr": "Апр",
    "Jun": "Июн",
    "Jul": "Июл",
    "Aug": "Авг",
    "Sep": "Сен",
    "Oct": "Окт",
    "Nov": "Ноя",
    "Dec": "Дек",
  };
  return translations[month] || month;
};

export const translateDay = (day: string): string => {
  const translations: Record<string, string> = {
    "Sunday": "Воскресенье",
    "Monday": "Понедельник",
    "Tuesday": "Вторник",
    "Wednesday": "Среда",
    "Thursday": "Четверг",
    "Friday": "Пятница",
    "Saturday": "Суббота",
  };
  return translations[day] || day;
};
