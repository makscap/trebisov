import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SubMenuView from "../views/SubMenuView.vue";
import ZakladneUdajeView from "../views/ZakladneUdajeView.vue";
import HistoriaMestaTrebisovView from "../views/HistoriaMestaTrebisovView.vue";
import SymbolyMestaView from "../views/SymbolyMestaView.vue";
import StatutMestaView from "../views/StatutMestaView.vue";
import InfolistMestaView from "../views/InfolistMestaView.vue";
// import AboutView from "../views/AboutView.vue";
// import DocumentsView from "../views/DocumentsView.vue";
// import LegislationView from "../views/LegislationView.vue";
// import StatisticsView from "../views/StatisticsView.vue";
// import StatisticsItemView from "../views/StatisticsItemView.vue";
// import SetCookiesView from "../views/SetCookiesView.vue";
// import GalleryView from "../views/GalleryView.vue";
// import VideoView from "../views/VideoView.vue";
// import ArchiveView from "../views/ArchiveView.vue";
// import ContactsView from "../views/ContactsView.vue";
// import AccessibilityView from "../views/AccessibilityView.vue";
// import AppView from "../views/AppView.vue";
// // import NewsView from "../views/NewsView.vue";
// import CookiesView from "../views/CookiesView.vue";
// import SearchResultView from "../views/SearchResultView.vue";
// import VisionZeroView from "../views/VisionZeroView.vue";
// import ActivitiesView from "@/views/ActivitiesView";

export const routes = [
  // {
  //   path: "/becep",
  //   name: "becep",
  //   title: "BECEP",
  //   component: AboutView,
  // },
  // {
  //   path: "/dokumenty",
  //   name: "dokumenty",
  //   title: "Dokumenty",
  //   component: DocumentsView,
  // },
  // {
  //   path: "/dokumenty/pravne-predpisy",
  //   name: "pravne-predpisy",
  //   title: "Právne predpisy",
  //   component: LegislationView,
  // },
  // {
  //   path: "/statistiky",
  //   name: "statistiky",
  //   title: "Štatistiky",
  //   component: StatisticsView,
  // },
  // {
  //   path: "/statistiky/:id",
  //   name: "statistika",
  //   title: "Štatistika",
  //   component: StatisticsItemView,
  // },
  // {
  //   path: "/galeria",
  //   name: "galeria",
  //   title: "Galéria",
  //   component: GalleryView,
  // },
  // {
  //   path: "/video",
  //   name: "video",
  //   title: "Video",
  //   component: VideoView,
  // },
  // {
  //   path: "/archiv",
  //   name: "archiv",
  //   title: "Archív",
  //   component: ArchiveView,
  // },
  // {
  //   path: "/archiv/:archivetype",
  //   name: "archiv-type",
  //   title: "Archív-typ",
  //   component: ArchiveView,
  // },
  // {
  //   path: "/aplikacia",
  //   name: "aplikacia",
  //   title: "Aplikácia pre deti",
  //   component: AppView,
  // },
  // {
  //   path: "/aktuality",
  //   name: "aktuality",
  //   title: "Aktuality",
  //   component: ActivitiesView,
  // },
  // {
  //   path: "/aktuality/:type",
  //   name: "aktuality-type",
  //   title: "Aktuality",
  //   component: ActivitiesView,
  // },
  // {
  //   path: "/vizia-nula",
  //   name: "vizia-nula",
  //   title: "Vízia nula",
  //   component: VisionZeroView,
  // },
  // {
  //   path: "/cookies",
  //   name: "cookies",
  //   title: "Oznámenie o používaní súborov cookies",
  //   component: CookiesView,
  // },
  // {
  //   path: "/nastavenia-cookies",
  //   name: "nastavenia-cookies",
  //   title: "Nastavenia cookies",
  //   component: SetCookiesView,
  // },
  // {
  //   path: "/kontakty",
  //   name: "kontakty",
  //   title: "Kontakty",
  //   component: ContactsView,
  // },
  // {
  //   path: "/vyhlasenie-o-pristupnosti",
  //   name: "vyhlasenie-o-pristupnosti",
  //   title: "Vyhlásenie o prístuponsti",
  //   component: AccessibilityView,
  // },
  // {
  //   path: "/vyhladavanie",
  //   name: "vyhladavanie",
  //   title: "Výsledok vyhľadávania",
  //   component: SearchResultView,
  // },
  {
    path: "/",
    name: "home",
    title: "Domov",
    component: HomeView,
  },
  {
    path: "/o-meste",
    name: "O meste",
    title: "O meste",
    component: SubMenuView,
  },
  // {
  //   path: "/o-meste/:id",
  //   name: "Archív",
  //   title: "Archív-typ",
  //   component: Omeste,
  // },
  {
    path: "/samosprava-mesta",
    name: "Samospráva mesta",
    title: "Samospráva mesta",
    component: SubMenuView,
  },
  {
    path: "/mestsky-urad",
    name: "Mestský úrad",
    title: "Mestský úrad",
    component: SubMenuView,
  },
  {
    path: "/pre-obcanov",
    name: "Pre občanov",
    title: "Pre občanov",
    component: SubMenuView,
  },
  {
    path: "/zivot-v-meste",
    name: "Život v meste",
    title: "Život v meste",
    component: SubMenuView,
  },
  {
    path: "/o-meste/zakladne-udaje",
    name: "Základné údaje",
    title: "Základné údaje",
    component: ZakladneUdajeView,
  },
  {
    path: "/o-meste/historia-mesta",
    name: "História mesta Trebišov",
    title: "História mesta Trebišov",
    component: HistoriaMestaTrebisovView,
  },
  {
    path: "/o-meste/symboly-mesta",
    name: "Symboly mesta",
    title: "Symboly mesta",
    component: SymbolyMestaView,
  },
  {
    path: "/o-meste/statut-mesta",
    name: "Štatút mesta",
    title: "Štatút mesta",
    component: StatutMestaView,
  },
  {
    path: "/o-meste/infolist-mesta",
    name: "Infolist mesta Trebišov",
    title: "Infolist mesta Trebišov",
    component: InfolistMestaView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
