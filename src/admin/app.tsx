import type { StrapiApp } from '@strapi/strapi/admin'
import AuthLogo from "./extensions/auth.png"
import MenuLogo from "./extensions/menu.png"
// inject custom js 
import './extensions/custom-homepage.js'

export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      'zh-Hans',
      // 'zh',
    ],
    translations: {
      'zh-Hans': {
        Users: 'Utilisateurs',
        // "app.components.HomePage.welcome.again": "Hi Chloé!",
        "app.components.LeftMenu.navbrand.title": "Dashboard 2222",
        "app.components.LeftMenu.navbrand.workplace": "...",
        'Auth.form.welcome.title': '欢迎登录网站后台',
        'Auth.form.welcome.subtitle': '超级好用的cms',
        'app.components.HomePage.welcomeBlock.content.again': '欢迎光临后台',
        'global.localeToggle.label': '语言切换'
      },
      'en': {
        Users: 'Utilisateurs',
        // "app.components.HomePage.welcome.again": "Hi Chloé!",
        "app.components.LeftMenu.navbrand.title": "Dashboard",
        "app.components.LeftMenu.navbrand.workplace": "...",
        'Auth.form.welcome.title': 'welcome to Admin',
        'Auth.form.welcome.subtitle': ' Admin System is a Strapi-based admin system for managing Tusen data.',
        'app.components.HomePage.welcomeBlock.content.again': 'Welcome to  Admin',
      },
    },    
    // may use the admin account, refresh and save at global setting - overview
    auth: { // Replace the Strapi logo in auth (login) views
      logo: AuthLogo,
    },
    menu: { // Replace the Strapi logo in the main navigation
      logo: MenuLogo,
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
