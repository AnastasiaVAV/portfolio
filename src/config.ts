export const siteConfig = {
  name: "Настя Волкова",
  title: "Junior frontend-разработчик",
  description: "Portfolio website of Anastasiia Volkova",
  accentColor: "#1d4ed8",
  social: {
    email: "derric41@mail.ru",
    github: "https://github.com/AnastasiaVAV",
    telegram: "https://t.me/AnastasiiaVAV",
  },
  aboutMe:
    "",
  skills: ["JavaScript", "TypeScript", "HTML", "CSS", "SCSS", "React", "Redux Toolkit", "RTK Query", "React Router DOM", "Bootstrap", "Vite"],
  projects: [
    {
      name: "Gallery Platform",
      description: [
        "Интерактивная платформа для демонстрации иллюстраций с возможностью увеличения изображений и системой лайков.",
        "Особенности проекта: система лайков, модальное окно с увеличенным просмотром изображений и описанием, навигация между иллюстрациями"
      ],
      screenshots: [
        "public/assets/project-gallery/gallery.gif"
      ],
      link: "https://gallery-rosy-delta.vercel.app/",
      skills: ["JavaScript", "React", "RTK Query", "React Router DOM", "CSS Modules", "Supabase", "Vite"],
    },
    {
      name: "Task Management",
      description: [
        "Приложение для управления задачами с функциями CRUD, аутентификацией и приоритизацией задач. Демо-аккаунт: Логин: admin, пароль: 123456.",
        "Демо-аккаунт: логин: admin | пароль: 123456",
        "Особенности проекта: аутентификация и авторизация, CRUD операции с задачами, приоритизация задач (низкий, средний, высокий), фильтрация по статусу"
      ],
      screenshots: [
        "public/assets/project-task-manager/task-manager.gif"
      ],
      link: "https://task-manager-elvy.vercel.app/",
      skills: ["JavaScript", "React", "RTK Query", "React Router DOM", "React Hook Form", "Yup", "SCSS", "Supabase", "Vite"],
    },
    {
      name: "Real-time Chat",
      description: [
        "Упрощённая версия Slack с поддержкой личных сообщений, каналов и уведомлений в реальном времени.",
        "Демо-аккаунт: логин: admin | пароль: admin",
        "Особенности проекта: CRUD операции с каналами, система всплывающих уведомлений, сообщения в реальном времени на базе WebSockets"
      ],
      screenshots: [
        "public/assets/project-chat/entry.gif",
        "public/assets/project-chat/change-channel.gif", 
        "public/assets/project-chat/messages.gif"
      ],
      link: "https://frontend-project-12-bqe1.onrender.com",
      skills: ["JavaScript", "React", "Redux Toolkit", "WebSockets", "Bootstrap", "i18next", "Formik", "Yup", "Vite"],
    },
    {
      name: "RSS Aggregator",
      description: [
        "Сервис для агрегации RSS-лент. Позволяет добавлять неограниченное количество источников, автоматически обновлять ленту и читать новости без перехода на внешние сайты.",
        "Особенности проекта: валидация RSS-лент, автоматическое обновление ленты (каждые 5 секунд), обработка сетевых ошибок"
      ],
      screenshots: [
        "public/assets/project-RSS/RSS_aggregator.gif"
      ],
      link: "https://frontend-project-11-eosin-sigma.vercel.app/",
      skills: ["JavaScript", "Bootstrap", "i18next", "Yup", "Vite"],
    },
  ],
  // experience: [
  //   {
  //     company: "Tech Company",
  //     title: "Senior Software Engineer",
  //     dateRange: "Jan 2022 - Present",
  //     bullets: [
  //       "Led development of microservices architecture serving 1M+ users",
  //       "Reduced API response times by 40% through optimization",
  //       "Mentored team of 5 junior developers",
  //     ],
  //   },
  // ],
  // education: [
  //   {
  //     school: "University Name",
  //     degree: "Bachelor of Science in Computer Science",
  //     dateRange: "2014 - 2018",
  //     achievements: [
  //       "Graduated Magna Cum Laude with 3.8 GPA",
  //       "Dean's List all semesters",
  //       "President of Computer Science Club",
  //     ],
  //   },
  // ],
};
