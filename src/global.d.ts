interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
}

interface TelegramWebApp {
  initDataUnsafe: {
      user: TelegramUser;
      [key: string]: any; // Для других свойств, если они понадобятся
  };
  ready: () => void;
}

interface Window {
  Telegram: {
      WebApp: TelegramWebApp;
  };
}