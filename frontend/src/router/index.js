import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SubMenuView from "../views/SubMenuView.vue";
import ZakladneUdajeView from "../views/OMeste/ZakladneUdajeView.vue";
import HistoriaMestaTrebisovView from "../views/OMeste/HistoriaMestaTrebisovView.vue";
import SymbolyMestaView from "../views/OMeste/SymbolyMestaView.vue";
import StatutMestaView from "../views/OMeste/StatutMestaView.vue";
import InfolistMestaView from "../views/OMeste/InfolistMestaView.vue";
import PrimatorView from "../views/PrimatorView.vue";
import ZastupcoviaPrimatora from "../views/ZastupcoviaPrimatora.vue";
import OZastupitelstveView from "../views/OZastupitelstveView.vue";
import Poslanci18_20View from "../views/Poslanci18_20View.vue";
// import LinksComponent from "../views/LinksComponent.vue";
import UradnaTabulaView from "../views/UradnaTabulaView.vue";
import RozpocetMestaView from "../views/RozpocetMestaView.vue";
import VarejneObstaravanieView from "../views/VarejneObstaravanieView.vue";
import MestoTrebisovView from "../views/SamospravaMesta/MestoTrebisovView.vue";
import TechnickeSluzbyMestaView from "../views/SamospravaMesta/TechnickeSluzbyMestaView.vue";
import MestskySportovyKlubMladezeView from "../views/SamospravaMesta/MestskySportovyKlubMladezeView.vue";
import ZakladnaUmeleckaSkolaView from "../views/SamospravaMesta/ZakladnaUmeleckaSkolaView.vue";
import InternePredpisyView from "../views/SamospravaMesta/InternePredpisyView.vue";
import ZmluvyFakturyView from "../views/SamospravaMesta/ZmluvyFakturyView.vue";
import DocumentsView from "../views/SamospravaMesta/MestskeZastupitelstvo/DocumentsView.vue";
import UzneseniaView from "../views/SamospravaMesta/MestskeZastupitelstvo/UzneseniaView.vue";
import HlavnyKontrolorView from "../views/SamospravaMesta/HlavnyKontrolorView.vue";
import MestskeZastupitelstvoView from "../views/SamospravaMesta/MestskeZastupitelstvoView.vue";
import DotacieView from "../views/SamospravaMesta/DotacieView.vue";
import PoslanciVTrebisoveView from "../views/SamospravaMesta/MestskeZastupitelstvo/PoslanciVTrebisoveView.vue";
import PrehladPoslancovVolebnzchObdobiView from "../views/SamospravaMesta/PrehladPoslancovVolebnzchObdobiView.vue";
import InterpelaciePoslancovMszView from "../views/SamospravaMesta/InterpelaciePoslancovMszView.vue";
import PodnetyPoslancovMszView from "../views/SamospravaMesta/PodnetyPoslancovMszView.vue";
import InterpelaciePoslancovRokView from "../views/SamospravaMesta/InterpelaciePoslancovRokView.vue";
import OznameniaFunkciiTlacivaView from "../views/SamospravaMesta/OznameniaFunkciiTlacivaView.vue";
import OznameniaFunkciiPoslanciView from "../views/SamospravaMesta/OznameniaFunkciiPoslanciView.vue";
import ZasadnutiaView from "../views/SamospravaMesta/MestskeZastupitelstvo/ZasadnutiaView.vue";
import ZasadnutiaSubPageView from "../views/SamospravaMesta/ZasadnutiaSubPageView.vue";
import VideozaznamView from "../views/SamospravaMesta/VideozaznamView.vue";
import DochadzkaPoslancovView from "../views/SamospravaMesta/DochadzkaPoslancovView.vue";
import OHlavnomKontroloroviView from "../views/SamospravaMesta/HlavnyKontrolor/OHlavnomKontroloroviView.vue";
import PlanyKontrolnejCinnostiView from "../views/SamospravaMesta/HlavnyKontrolor/PlanyKontrolnejCinnostiView.vue";
import SpravyZKontrolnejCinnostiView from "../views/SamospravaMesta/HlavnyKontrolor/SpravyZKontrolnejCinnostiView.vue";
import OstatneDokumentyView from "../views/SamospravaMesta/HlavnyKontrolor/OstatneDokumentyView.vue";
import SamospravaMestaView from "../views/SamospravaMesta/SamospravaMestaView.vue";
import ProjektyView from "../views/SamospravaMesta/ProjektyView.vue";
import MestskaRadaView from "../views/SamospravaMesta/MestskeZastupitelstvo/MestskaRadaView.vue";
import ClenoviaMestskejRadyView from "../views/SamospravaMesta/ClenoviaMestskejRadyView.vue";
import ZasadnutiaMestskejRadyView from "../views/SamospravaMesta/ZasadnutiaMestskejRadyView.vue";
import RozpocetMesta2010_2022View from "../views/RozpocetMesta2010_2022View.vue";
import ZaverecnyUcetMesta2010_2021View from "../views/ZaverecnyUcetMesta2010_2021View.vue";
import DotacieDataView from "../views/SamospravaMesta/DotacieDataView.vue";

// O Meste
import OMesteView from "../views/OMeste/OMesteView.vue";

// Mestsky Urad
import MestskyUradView from "../views/MestskyUrad/MestskyUradView.vue";
import OMestskomUradeView from "../views/MestskyUrad/OMestskomUradeView.vue";
import PrednostaView from "../views/MestskyUrad/PrednostaView.vue";
import OddeleniaMsuView from "../views/MestskyUrad/OddeleniaMsuView.vue";
import KancelariaPrimatoraView from "../views/MestskyUrad/KancelariaPrimatoraView.vue";
import OddelenieFinancneView from "../views/MestskyUrad/OddelenieFinancneView.vue";
import StrediskaView from "../views/MestskyUrad/StrediskaView.vue";
import MestkaVnutornaOchranaView from "../views/MestskyUrad/MestkaVnutornaOchranaView.vue";
import MestskeKulturneStrediskoView from "../views/MestskyUrad/MestskeKulturneStrediskoView.vue";
import OznamyView from "../views/MestskyUrad/OznamyView.vue";
import OznamySubPageView from "../views/MestskyUrad/OznamySubPageView.vue";
import OznamyOUmrtiachView from "../views/MestskyUrad/OznamyOUmrtiachView.vue";
import StrategickeDokumentyView from "../views/MestskyUrad/StrategickeDokumentyView.vue";
import CennikyView from "../views/MestskyUrad/CennikyView.vue";

// Zivot V Meste
import ZivotVMesteView from "../views/ZivotVMeste/ZivotVMesteView.vue";
import HistorickeAKulturnePamiatkyView from "../views/ZivotVMeste/HistorickeAKulturnePamiatkyView.vue";
import PodujatiaView from "../views/ZivotVMeste/PodujatiaView.vue";
import FotogaleriaView from "../views/ZivotVMeste/FotogaleriaView.vue";
// import AktualityView from "../views/ZivotVMeste/AktualityView.vue";
import MestskySportovyKlubView from "../views/ZivotVMeste/MestskySportovyKlubView.vue";
import OKlubeView from "../views/ZivotVMeste/OKlubeView.vue";
import AktualityKlubuView from "../views/ZivotVMeste/AktualityKlubuView.vue";
import FotogaleriaKlubView from "../views/ZivotVMeste/FotogaleriaKlubView.vue";
import RozpisLadovejPlochyView from "../views/ZivotVMeste/RozpisLadovejPlochyView.vue";
import PrenajomIhriskaView from "../views/ZivotVMeste/PrenajomIhriskaView.vue";
import ProgramZapasovView from "../views/ZivotVMeste/ProgramZapasovView.vue";
import DokumetyKlubView from "../views/ZivotVMeste/DokumetyKlubView.vue";
import SkolstvoView from "../views/ZivotVMeste/Skolstvo/SkolstvoView.vue";
import PoliciaView from "../views/ZivotVMeste/Policia/PoliciaView.vue";

import ActivitiesView from "../views/ActivitiesView.vue";

export const routes = [
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
    component: OMesteView,
  },
  {
    path: "/samosprava-mesta",
    name: "Samospráva mesta",
    title: "Samospráva mesta",
    component: SamospravaMestaView,
  },
  {
    path: "/mestsky-urad",
    name: "Mestský úrad",
    title: "Mestský úrad",
    component: MestskyUradView,
  },
  {
    path: "/mestsky-urad/o-mestskom-urade",
    name: "O mestskom úrade",
    title: "O mestskom úrade",
    component: OMestskomUradeView,
  },
  {
    path: "/mestsky-urad/prednosta",
    name: "Prednosta",
    title: "Prednosta",
    component: PrednostaView,
  },
  {
    path: "/mestsky-urad/oddelenia",
    name: "Oddelenia MsÚ v Trebišove",
    title: "Oddelenia MsÚ v Trebišove",
    component: OddeleniaMsuView,
  },

  {
    path: "/mestsky-urad/oddelenia/kancelaria-primatora",
    name: "Kancelária primátora",
    title: "Kancelária primátora",
    component: KancelariaPrimatoraView,
  },
  {
    path: "/mestsky-urad/oddelenia/oddelenie-financne",
    name: "Oddelenie finančné",
    title: "Oddelenie finančné",
    component: OddelenieFinancneView,
  },
  {
    path: "/mestsky-urad/strediska",
    name: "Strediská MsÚ",
    title: "Strediská MsÚ",
    component: StrediskaView,
  },

  {
    path: "/mestsky-urad/strediska/mestska-vnutorna-ochrana",
    name: "Mestská vnútorná ochrana",
    title: "Mestská vnútorná ochrana",
    component: MestkaVnutornaOchranaView,
  },
  {
    path: "/mestsky-urad/strediska/mestske-kulturne-stredisko",
    name: "Mestské kultúrne stredisko",
    title: "Mestské kultúrne stredisko",
    component: MestskeKulturneStrediskoView,
  },
  {
    path: "/mestsky-urad/oznamy",
    name: "Oznamy",
    title: "Oznamy",
    component: OznamyView,
  },
  {
    path: "/mestsky-urad/oznamy/:article",
    name: "",
    title: "",
    component: OznamySubPageView,
  },
  {
    path: "/mestsky-urad/oznamy-o-umrtiach",
    name: "Oznamy o úmrtiach",
    title: "Oznamy o úmrtiach",
    component: OznamyOUmrtiachView,
  },
  {
    path: "/mestsky-urad/strategicke-dokumenty",
    name: "Strategické dokumenty",
    title: "Strategické dokumenty",
    component: StrategickeDokumentyView,
  },
  {
    path: "/mestsky-urad/cenniky",
    name: "Cenníky",
    title: "Cenníky",
    component: CennikyView,
  },

  {
    path: "/pre-obcanov",
    name: "Pre občanov",
    title: "Pre občanov",
    component: SubMenuView,
  },

  // {
  //   title: "Aktuality",
  //   route: "/aktuality",
  // },
  // {
  //   title: "Historické a kultúrne pamiatky",
  //   route: "/historicke-a-kulturne-pamiatky",
  // },
  // {
  //   title: "Podujatia",
  //   route: "/podujatia",
  // },
  // {
  //   title: "Fotogaléria",
  //   route: "/fotogaléria",
  // },
  // {
  //   title: "Školstvo",
  //   route: "/skolstvo",
  // },
  // {
  //   title: "Mestský športový klub mládeže",
  //   route: "/",
  // },
  // {
  //   title: "Polícia",
  //   route: "/policia",
  // },

  {
    path: "/zivot-v-meste",
    name: "Život v meste",
    title: "Život v meste",
    component: ZivotVMesteView,
  },
  {
    path: "/zivot-v-meste/historicke-a-kulturne-pamiatky",
    name: "Historické a kultúrne pamiatky",
    title: "Historické a kultúrne pamiatky",
    component: HistorickeAKulturnePamiatkyView,
  },
  {
    path: "/zivot-v-meste/historicke-a-kulturne-pamiatky/:article",
    name: "",
    title: "",
    // component: HistorickeAKulturnePamiatkyView,
  },
  {
    path: "/zivot-v-meste/podujatia",
    name: "Podujatia v meste",
    title: "Podujatia v meste",
    component: PodujatiaView,
  },
  {
    path: "/zivot-v-meste/podujatia/:article",
    name: "",
    title: "",
    // component: PodujatiaView,
  },
  {
    path: "/zivot-v-meste/fotogaleria",
    name: "",
    title: "",
    component: FotogaleriaView,
  },
  {
    path: "/zivot-v-meste/fotogaleria/:album",
    name: "",
    title: "",
    // component: FotogaleriaView,
  },
  {
    path: "/zivot-v-meste/aktuality",
    name: "Aktuality",
    title: "Aktuality",
    // component: AktualityView,
    component: ActivitiesView,
  },
  {
    path: "/zivot-v-meste/aktuality/:type",
    name: "1",
    title: "1",
    // component: AktualityView,
    component: ActivitiesView,
  },
  {
    path: "/zivot-v-meste/mestsky-sportovy-klub-mladeze",
    name: "Mestský športový klub mládeže",
    title: "Mestský športový klub mládeže",
    component: MestskySportovyKlubView,
  },
  {
    path: "/zivot-v-meste/mestsky-sportovy-klub-mladeze/o-klube",
    name: "O mestskom športovom klube mládeže",
    title: "O mestskom športovom klube mládeže",
    component: OKlubeView,
  },
  {
    path: "/zivot-v-meste/mestsky-sportovy-klub-mladeze/aktuality-klubu",
    name: "Aktuality klubu",
    title: "Aktuality klubu",
    component: AktualityKlubuView,
  },
  {
    path: "/zivot-v-meste/mestsky-sportovy-klub-mladeze/fotogaleria",
    name: "Fotogaléria klubu",
    title: "Fotogaléria klubu",
    component: FotogaleriaKlubView,
  },
  {
    path: "/zivot-v-meste/mestsky-sportovy-klub-mladeze/rozpis-ladovej-plochy",
    name: "Rozpis ľadovej plochy a tréningov",
    title: "Rozpis ľadovej plochy a tréningov",
    component: RozpisLadovejPlochyView,
  },
  {
    path: "/zivot-v-meste/mestsky-sportovy-klub-mladeze/prenajom-ihriska",
    name: "Podmienky prenájmu ihriska s umelou trávou Mesto Trebišov",
    title: "Podmienky prenájmu ihriska s umelou trávou Mesto Trebišov",
    component: PrenajomIhriskaView,
  },
  {
    path: "/zivot-v-meste/mestsky-sportovy-klub-mladeze/program-zapasov",
    name: "Program zápasov",
    title: "Program zápasov",
    component: ProgramZapasovView,
  },
  {
    path: "/zivot-v-meste/mestsky-sportovy-klub-mladeze/dokumenty",
    name: "Dokumenty Klubu",
    title: "Dokumenty Klubu",
    component: DokumetyKlubView,
  },
  {
    path: "/zivot-v-meste/skolstvo",
    name: "Školstvo",
    title: "Školstvo",
    component: SkolstvoView,
  },
  {
    path: "/zivot-v-meste/policia",
    name: "Školstvo",
    title: "Školstvo",
    component: PoliciaView,
  },

  // ====
  // ====
  // ====
  // ====
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

  {
    path: "/samosprava-mesta/primator",
    name: "Primátor",
    title: "Primátor",
    component: PrimatorView,
  },
  {
    path: "/samosprava-mesta/zastupcovia-primatora",
    name: "Zástupcovia primátora",
    title: "Zástupcovia primátora",
    component: ZastupcoviaPrimatora,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo",
    name: "Mestské zastupiteľstvo",
    title: "Mestské zastupiteľstvo",
    component: MestskeZastupitelstvoView,
  },

  {
    path: "/samosprava-mesta/hlavny-kontrolor",
    name: "Hlavný kontrolór",
    title: "Hlavný kontrolór",
    component: HlavnyKontrolorView,
  },
  {
    path: "/samosprava-mesta/hlavny-kontrolor/o-hlavnom-kontrolorovi",
    name: "O hlavnom kontrolórovi",
    title: "O hlavnom kontrolórovi",
    component: OHlavnomKontroloroviView,
  },
  {
    path: "/samosprava-mesta/hlavny-kontrolor/plany-kontrolnej-cinnosti",
    name: "Plány kontrolnej činnosti",
    title: "Plány kontrolnej činnosti",
    component: PlanyKontrolnejCinnostiView,
  },

  {
    path: "/samosprava-mesta/hlavny-kontrolor/spravy-z-kontrolnej-cinnosti",
    name: "Správy z kontrolnej činnosti",
    title: "Správy z kontrolnej činnosti",
    component: SpravyZKontrolnejCinnostiView,
  },
  {
    path: "/samosprava-mesta/hlavny-kontrolor/ostatne-dokumenty",
    name: "Ostatné dokumenty",
    title: "Ostatné dokumenty",
    component: OstatneDokumentyView,
  },

  {
    path: "/samosprava-mesta/uradna-tabula",
    name: "Úradná tabuľa",
    title: "Úradná tabuľa",
    component: UradnaTabulaView,
  },
  {
    path: "/samosprava-mesta/rozpocet-mesta",
    name: "Rozpočet mesta trebišov",
    title: "Rozpočet mesta trebišov",
    component: RozpocetMestaView,
  },
  {
    path: "/samosprava-mesta/rozpocet-mesta/2010-2022",
    name: "Rozpočet mesta trebišov 2010-2022",
    title: "Rozpočet mesta trebišov 2010-2022",
    component: RozpocetMesta2010_2022View,
  },
  {
    path: "/samosprava-mesta/rozpocet-mesta/zaverecny-ucet-mesta-2010-2021",
    name: "Záverečný účet mesta Trebišov 2021-2010",
    title: "Záverečný účet mesta Trebišov 2021-2010",
    component: ZaverecnyUcetMesta2010_2021View,
  },

  {
    path: "/samosprava-mesta/dotacie",
    name: "Dotácie",
    title: "Dotácie",
    component: DotacieView,
  },
  {
    path: "/samosprava-mesta/dotacie/:data",
    name: "",
    title: "",
    component: DotacieDataView,
  },
  {
    path: "/samosprava-mesta/projekty",
    name: "Projekty",
    title: "Projekty",
    component: ProjektyView,
  },

  {
    path: "/samosprava-mesta/verejne-obstaravanie",
    name: "Verejné obstarávanie",
    title: "Verejné obstarávanie",
    component: VarejneObstaravanieView,
  },

  {
    path: "/samosprava-mesta/verejne-obstaravanie/mesto-trebisov",
    name: "Mesto Trebišov",
    title: "Mesto Trebišov",
    component: MestoTrebisovView,
  },
  {
    path: "/samosprava-mesta/verejne-obstaravanie/technicke-sluzby-mesta",
    name: "Technické služby mesta Trebišov",
    title: "Technické služby mesta Trebišov",
    component: TechnickeSluzbyMestaView,
  },
  {
    path: "/samosprava-mesta/verejne-obstaravanie/mestsky-sportovy-klub-mladeze",
    name: "MESTSKÝ ŠPORTOVÝ KLUB MLÁDEŽE TREBIŠOV",
    title: "MESTSKÝ ŠPORTOVÝ KLUB MLÁDEŽE TREBIŠOV",
    component: MestskySportovyKlubMladezeView,
  },
  {
    path: "/samosprava-mesta/verejne-obstaravanie/zakladna-umelecka-skola",
    name: "Základná umelecká škola",
    title: "Základná umelecká škola",
    component: ZakladnaUmeleckaSkolaView,
  },
  {
    path: "/samosprava-mesta/interne-predpisy",
    name: "Interné predpisy",
    title: "Interné predpisy",
    component: InternePredpisyView,
  },
  {
    path: "/samosprava-mesta/zmluvy-faktury",
    name: "Zmluvy, faktúry, objednávky",
    title: "Zmluvy, faktúry, objednávky",
    component: ZmluvyFakturyView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/o-mestskom-zastupitelstve",
    name: "O mestskom zastupiteľstve",
    title: "O mestskom zastupiteľstve",
    component: OZastupitelstveView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove",
    name: "Poslanci MsZ v Trebišove",
    title: "Poslanci MsZ v Trebišove",
    component: PoslanciVTrebisoveView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/uznesenia",
    name: "Uznesenia",
    title: "Uznesenia",
    component: UzneseniaView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia",
    name: "Zasadnutia MsZ v Trebišove",
    title: "Zasadnutia MsZ v Trebišove",
    component: ZasadnutiaView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/:topic",
    name: "",
    title: "",
    component: ZasadnutiaSubPageView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/:topic/uznesenia",
    name: "",
    title: "",
    component: UzneseniaView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/:topic/interpelacie-poslancov",
    name: "",
    title: "",
    component: InterpelaciePoslancovRokView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/:topic/podnety-poslancov",
    name: "",
    title: "",
    component: InterpelaciePoslancovRokView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/:topic/videozaznam",
    name: "Videozáznam",
    title: "Videozáznam",
    component: VideozaznamView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/:topic/dochadzka-poslancov",
    name: "Videozáznam",
    title: "Videozáznam",
    component: DochadzkaPoslancovView,
  },

  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/mestska-rada",
    name: "Mestská rada",
    title: "Mestská rada",
    component: MestskaRadaView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/mestska-rada/clenovia-mestskej-rady",
    name: "Členovia mestskej rady",
    title: "Členovia mestskej rady",
    component: ClenoviaMestskejRadyView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/mestska-rada/zasadnutia-mestskej-rady",
    name: "Zasadnutia mestskej rady MsZ ",
    title: "Zasadnutia mestskej rady MsZ ",
    component: ZasadnutiaMestskejRadyView,
  },

  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/komisie",
    name: "Komisie",
    title: "Komisie",
    // component: UzneseniaView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/dokumenty",
    name: "Dokumenty",
    title: "Dokumenty",
    component: DocumentsView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove/prehlad-poslancov-volebnych-obdobi",
    name: "",
    title: "",
    component: PrehladPoslancovVolebnzchObdobiView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove/interpelacie-poslancov-msz",
    name: "Interpelácie poslancov MsZ v Trebišove",
    title: "Interpelácie poslancov MsZ v Trebišove",
    component: InterpelaciePoslancovMszView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove/interpelacie-poslancov-msz/:rok",
    name: "Rok",
    title: "Rok",
    component: InterpelaciePoslancovRokView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove/podnety-poslancov-msz-v-trebisove",
    name: "Podnety poslancov MsZ v Trebišove",
    title: "Podnety poslancov MsZ v Trebišove",
    component: PodnetyPoslancovMszView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove/podnety-poslancov-msz-v-trebisove/:rok",
    name: "Podnety poslancov",
    title: "Podnety poslancov",
    component: InterpelaciePoslancovRokView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove/prehlad-poslancov-volebnych-obdobi/:rok",
    name: "Poslanci za volebné obdobie",
    title: "Poslanci za volebné obdobie",
    component: Poslanci18_20View,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove/oznamenia-funkcii-poslanci",
    name: "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - poslanci",
    title:
      "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - poslanci",
    component: OznameniaFunkciiPoslanciView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove/oznamenia-funkcii-tlaciva",
    name: "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - tlačivá",
    title:
      "Oznámenia funkcií, zamestnaní, činností a majetkových pomerov verejného funkcionára - tlačivá",
    component: OznameniaFunkciiTlacivaView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
