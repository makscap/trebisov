import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ZakladneUdajeView from "../views/OMeste/ZakladneUdajeView.vue";
import HistoriaMestaTrebisovView from "../views/OMeste/HistoriaMestaTrebisovView.vue";
import SymbolyMestaView from "../views/OMeste/SymbolyMestaView.vue";
import StatutMestaView from "../views/OMeste/StatutMestaView.vue";
import InfolistMestaView from "../views/OMeste/InfolistMestaView.vue";
import PrimatorView from "../views/SamospravaMesta/PrimatorView.vue";
import ZastupcoviaPrimatora from "../views/SamospravaMesta/ZastupcoviaPrimatora.vue";
import OZastupitelstveView from "../views/SamospravaMesta/MestskeZastupitelstvo/OZastupitelstveView.vue";
import Poslanci18_20View from "../views/SamospravaMesta/MestskeZastupitelstvo/PoslanciMsz/Poslanci18_20View.vue";
import UradnaTabulaView from "../views/SamospravaMesta/UradnaTabulaView.vue";
import RozpocetMestaView from "../views/SamospravaMesta/RozpocetMestaView.vue";
import VarejneObstaravanieView from "../views/SamospravaMesta/VarejneObstaravanieView.vue";
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
import PrehladPoslancovVolebnzchObdobiView from "../views/SamospravaMesta/MestskeZastupitelstvo/PoslanciMsz/PrehladPoslancovVolebnzchObdobiView.vue";
import InterpelaciePoslancovMszView from "../views/SamospravaMesta/MestskeZastupitelstvo/PoslanciMsz/InterpelaciePoslancovMszView.vue";
import PodnetyPoslancovMszView from "../views/SamospravaMesta/MestskeZastupitelstvo/PoslanciMsz/PodnetyPoslancovMszView.vue";
import InterpelaciePoslancovRokView from "../views/SamospravaMesta/MestskeZastupitelstvo/PoslanciMsz/InterpelaciePoslancovRokView.vue";
import OznameniaFunkciiTlacivaView from "../views/SamospravaMesta/MestskeZastupitelstvo/PoslanciMsz/OznameniaFunkciiTlacivaView.vue";
import OznameniaFunkciiPoslanciView from "../views/SamospravaMesta/MestskeZastupitelstvo/PoslanciMsz/OznameniaFunkciiPoslanciView.vue";
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
import RozpocetMesta2010_2022View from "../views/SamospravaMesta/RozpocetMesta2010_2022View.vue";
import ZaverecnyUcetMesta2010_2021View from "../views/SamospravaMesta/ZaverecnyUcetMesta2010_2021View.vue";
import DotacieDataView from "../views/SamospravaMesta/DotacieDataView.vue";
import KomisieView from "../views/SamospravaMesta/MestskeZastupitelstvo/KomisieView.vue";
import ZasadnutiaKomisiiView from "../views/SamospravaMesta/MestskeZastupitelstvo/ZasadnutiaKomisiiView.vue";
import KomisieFinancnejView from "../views/SamospravaMesta/MestskeZastupitelstvo/KomisieFinancnejView.vue";
import PriamyPrenosView from "../views/SamospravaMesta/MestskeZastupitelstvo/PriamyPrenosView.vue";
import RevitalizaciaHraduView from "../views/SamospravaMesta/RevitalizaciaHraduView.vue";
import ActivitiesView from "../views/ActivitiesView.vue";

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
import VseobecneZavazneView from "../views/MestskyUrad/VseobecneZavazneView.vue";
import VseobecneZavazneDetailView from "../views/MestskyUrad/VseobecneZavazneDetailView.vue";

// Zivot V Meste
import ZivotVMesteView from "../views/ZivotVMeste/ZivotVMesteView.vue";
import HistorickeAKulturnePamiatkyView from "../views/ZivotVMeste/HistorickeAKulturnePamiatkyView.vue";
import PodujatiaView from "../views/ZivotVMeste/PodujatiaView.vue";
import FotogaleriaView from "../views/ZivotVMeste/FotogaleriaView.vue";
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
import MestskaPoliciaVIew from "../views/ZivotVMeste/Policia/MestskaPoliciaVIew.vue";
import PravnePredpisyView from "../views/ZivotVMeste/Policia/PravnePredpisyView.vue";
import RozdelenieSektorovView from "../views/ZivotVMeste/Policia/RozdelenieSektorovView.vue";
import MestskyKamerovySystemView from "../views/ZivotVMeste/Policia/MestskyKamerovySystemView.vue";
import RadyAInformacieView from "../views/ZivotVMeste/Policia/RadyAInformacieView.vue";
import PolicajneAktualityView from "../views/ZivotVMeste/Policia/PolicajneAktualityView.vue";
import OkresneRiaditelstvoView from "../views/ZivotVMeste/Policia/OkresneRiaditelstvoView.vue";

// Pre Obcanov
import PreObcanovView from "../views/PreObcanov/PreObcanovView.vue";
import EvidenciaObyvatelovView from "../views/PreObcanov/EvidenciaObyvatelovView.vue";
import PodtvrdenieOTrvalomPobyteVIew from "../views/PreObcanov/PodtvrdenieOTrvalomPobyteVIew.vue";
import PrihlasenieKPrechodnemuPobytuView from "../views/PreObcanov/PrihlasenieKPrechodnemuPobytuView.vue";
import PrihlasenieNaTrvalyPobytVIew from "../views/PreObcanov/PrihlasenieNaTrvalyPobytVIew.vue";
import VydaniePrvehoObcianskehoPreukazuView from "../views/PreObcanov/VydaniePrvehoObcianskehoPreukazuView.vue";
import MatrikaView from "../views/PreObcanov/MatrikaView.vue";
import ZapisNovorodencaView from "../views/PreObcanov/ZapisNovorodencaView.vue";
import OpravaRodnehoCislaView from "../views/PreObcanov/OpravaRodnehoCislaView.vue";
import KartyVIew from "../views/PreObcanov/KartyVIew.vue";
import RezidencnaKartaNaRokView from "../views/PreObcanov/RezidencnaKartaNaRokView.vue";
import SeniorKartaView from "../views/PreObcanov/SeniorKartaView.vue";
import SocialnaPomocView from "../views/PreObcanov/SocialnaPomocView.vue";
import FinancnaPomocView from "../views/PreObcanov/FinancnaPomocView.vue";
import AkoZiadatOFinancnuPomocView from "../views/PreObcanov/AkoZiadatOFinancnuPomocView.vue";
import FinancnaPomoc2018_2022View from "../views/PreObcanov/FinancnaPomoc2018-2022View.vue";
import DenneCentraView from "../views/PreObcanov/DenneCentraView.vue";
import DomacaOpatrovatelskaSluzbaView from "../views/PreObcanov/DomacaOpatrovatelskaSluzbaView.vue";
import InstitutOsobitnehoPijemcuView from "../views/PreObcanov/InstitutOsobitnehoPijemcuView.vue";
import MestskaSocialnaUbytovnaView from "../views/PreObcanov/MestskaSocialnaUbytovnaView.vue";
import MestskyUtulokVIew from "../views/PreObcanov/MestskyUtulokVIew.vue";
import SocialneSluzbyVIew from "../views/PreObcanov/SocialneSluzbyVIew.vue";
import StrediskoOsobnejHygienyVIew from "../views/PreObcanov/StrediskoOsobnejHygienyVIew.vue";
import StavebnyUradVIew from "../views/PreObcanov/StavebnyUradView.vue";
import BytovyPodnikView from "../views/PreObcanov/BytovyPodnikView.vue";

// Stavebny Urad
import KolaudacneRozhodnutieView from "../views/PreObcanov/KolaudacneRozhodnutieView.vue";
import OdstranenieStavbyView from "../views/PreObcanov/OdstranenieStavbyView.vue";
import OhlasenieDrobnejStavbyView from "../views/PreObcanov/OhlasenieDrobnejStavbyView.vue";
import OhlasenieStavebnychUpravView from "../views/PreObcanov/OhlasenieStavebnychUpravView.vue";
import PovolenieInformachnychZariadeniView from "../views/PreObcanov/PovolenieInformachnychZariadeniView.vue";

// Byvanie
import ByvanieView from "../views/PreObcanov/ByvanieView.vue";
import ZiadostOPridelenieView from "../views/PreObcanov/ZiadostOPridelenieView.vue";
import ZiadostOPrechodNajmuView from "../views/PreObcanov/ZiadostOPrechodNajmuView.vue";
import ZiadostOSuhlasView from "../views/PreObcanov/ZiadostOSuhlasView.vue";
import SupisneCislaView from "../views/PreObcanov/SupisneCislaView.vue";

// Komunalny Odpad
import KomunalnyOdpadView from "../views/PreObcanov/KomunalnyOdpadView.vue";
import HarmonogramVyvozuView from "../views/PreObcanov/HarmonogramVyvozuView.vue";
import ZbernyDvorView from "../views/PreObcanov/ZbernyDvorView.vue";
import DoseparacneStrediskoView from "../views/PreObcanov/DoseparacneStrediskoView.vue";
import MiestneDaneView from "../views/PreObcanov/MiestneDaneView.vue";
import DanZNehnutelnostiView from "../views/PreObcanov/DanZNehnutelnostiView.vue";
import DopravaAKomunikacieView from "../views/PreObcanov/DopravaAKomunikacieView.vue";

// Dopravne Znacenia
import DopravneZnacenia from "../views/PreObcanov/DopravneZnacenia.vue";
import ObchadzkyView from "../views/PreObcanov/ObchadzkyView.vue";
import RozkopavkyView from "../views/PreObcanov/RozkopavkyView.vue";
import CestovnyPoriadokView from "../views/PreObcanov/CestovnyPoriadokView.vue";

import ZivotneProstredieView from "../views/PreObcanov/ZivotneProstredieView.vue";
import InformacieView from "../views/PreObcanov/InformacieView.vue";
import OtazkyAOdpovedeView from "../views/PreObcanov/OtazkyAOdpovedeView.vue";
import ObcaniaView from "../views/PreObcanov/ObcaniaView.vue";
import OstatneView from "../views/PreObcanov/OstatneView.vue";

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
    path: "/mestsky-urad/vseobecne-zavazne-nariadenia",
    name: "Všeobecne záväzné nariadenia",
    title: "Všeobecne záväzné nariadenia",
    component: VseobecneZavazneView,
  },
  {
    path: "/mestsky-urad/vseobecne-zavazne-nariadenia/:id",
    name: "",
    title: "",
    component: VseobecneZavazneDetailView,
  },
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
  {
    path: "/zivot-v-meste/policia/mestska-policia",
    name: "Mestská polícia",
    title: "Mestská polícia",
    component: MestskaPoliciaVIew,
  },
  {
    path: "/zivot-v-meste/policia/pravne-predpisy",
    name: "Právne predpisy",
    title: "Právne predpisy",
    component: PravnePredpisyView,
  },
  {
    path: "/zivot-v-meste/policia/rozdelenie-sektorov",
    name: "Rozdelenie sektorov",
    title: "Rozdelenie sektorov",
    component: RozdelenieSektorovView,
  },
  {
    path: "/zivot-v-meste/policia/mestsky-kamerovy-system",
    name: "Mestský kamerový systém",
    title: "Mestský kamerový systém",
    component: MestskyKamerovySystemView,
  },
  {
    path: "/zivot-v-meste/policia/rady-a-informacie",
    name: "Mestský kamerový systém",
    title: "Mestský kamerový systém",
    component: RadyAInformacieView,
  },
  {
    path: "/zivot-v-meste/policia/policajne-aktuality",
    name: "Policajné aktuality",
    title: "Policajné aktuality",
    component: PolicajneAktualityView,
  },
  {
    path: "/zivot-v-meste/policia/okresne-riaditelstvo-policajneho-zboru",
    name: "Okresné riaditeľstvo policajného zboru v Trebišove",
    title: "Okresné riaditeľstvo policajného zboru v Trebišove",
    component: OkresneRiaditelstvoView,
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
    path: "/samosprava-mesta/projekty/revitalizacia-hradu-paric",
    name: "Revitalizácia hradu Parič (RePar)",
    title: "Revitalizácia hradu Parič (RePar)",
    component: RevitalizaciaHraduView,
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
    path: "/samosprava-mesta/mestske-zastupitelstvo/priamy-prenos-zo-zasadnutia",
    name: "Priamy prenos zo zasadnutia MsZ v Trebišove",
    title: "Priamy prenos zo zasadnutia MsZ v Trebišove",
    component: PriamyPrenosView,
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
    component: KomisieView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/komisie/zasadnutia-komisii",
    name: "Zasadnutia komisií ",
    title: "Zasadnutia komisií ",
    component: ZasadnutiaKomisiiView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/komisie/zasadnutia-komisii/komisia-financna",
    name: "Zasadnutia komisie finančnej",
    title: "Zasadnutia komisie finančnej",
    component: KomisieFinancnejView,
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

  // Pre Obcanov
  // 🍋🍋🍋🍋🍋🍋🍋🍋

  {
    path: "/pre-obcanov",
    name: "Pre občanov",
    title: "Pre občanov",
    component: PreObcanovView,
  },
  {
    path: "/pre-obcanov/evidencia-obyvatelov",
    name: "Evidencia obyvateľov",
    title: "Evidencia obyvateľov",
    component: EvidenciaObyvatelovView,
  },
  {
    path: "/pre-obcanov/evidencia-obyvatelov/potverdenie-o-trvalom-pobyte",
    name: "Potvrdenie o trvalom pobyte",
    title: "Potvrdenie o trvalom pobyte",
    component: PodtvrdenieOTrvalomPobyteVIew,
  },
  {
    path: "/pre-obcanov/evidencia-obyvatelov/prihlasenie-k-prechodnemu-pobytu",
    name: "Prihlásenie k prechodnému pobytu",
    title: "Prihlásenie k prechodnému pobytu",
    component: PrihlasenieKPrechodnemuPobytuView,
  },
  {
    path: "/pre-obcanov/evidencia-obyvatelov/prihlasenie-na-trvaly-pobyt",
    name: "Prihlásenie na trvalý pobyt",
    title: "Prihlásenie na trvalý pobyt",
    component: PrihlasenieNaTrvalyPobytVIew,
  },
  {
    path: "/pre-obcanov/evidencia-obyvatelov/vydanie-prveho-obcianskeho-preukazu",
    name: "Vydanie prvého občianského preukazu pri dovŕšení 15. roku",
    title: "Vydanie prvého občianského preukazu pri dovŕšení 15. roku",
    component: VydaniePrvehoObcianskehoPreukazuView,
  },
  {
    path: "/pre-obcanov/matrika",
    name: "Matrika",
    title: "Matrika",
    component: MatrikaView,
  },
  {
    path: "/pre-obcanov/matrika/zapis-novorodenca-a-rodny-list",
    name: "Zápis novorodenca a rodný list",
    title: "Zápis novorodenca a rodný list",
    component: ZapisNovorodencaView,
  },
  {
    path: "/pre-obcanov/matrika/oprava-rodneho-cisla",
    name: "Oprava rodného čísla",
    title: "Oprava rodného čísla",
    component: OpravaRodnehoCislaView,
  },
  {
    path: "/pre-obcanov/karty",
    name: "Karty",
    title: "Karty",
    component: KartyVIew,
  },
  {
    path: "/pre-obcanov/karty/rezidencna-karta-na-rok-2022",
    name: "Rezidenčná karta na rok 2022",
    title: "Rezidenčná karta na rok 2022",
    component: RezidencnaKartaNaRokView,
  },
  {
    path: "/pre-obcanov/karty/senior-karta",
    name: "Senior karta",
    title: "Senior karta",
    component: SeniorKartaView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc",
    name: "Sociálna pomoc",
    title: "Sociálna pomoc",
    component: SocialnaPomocView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/financna-pomoc-primatora-a-zastupcu-primatora",
    name: "Finančná pomoc primátora a zástupcu primátora",
    title: "Finančná pomoc primátora a zástupcu primátora",
    component: FinancnaPomocView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/financna-pomoc-primatora-a-zastupcu-primatora/ako-ziadat-o-financnu-pomoc-primatora-a-zastupcu-primatora",
    name: "Ako žiadať o finančnú pomoc primátora a zástupcu primátora",
    title: "Ako žiadať o finančnú pomoc primátora a zástupcu primátora",
    component: AkoZiadatOFinancnuPomocView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/financna-pomoc-primatora-a-zastupcu-primatora/financna-pomoc-primatora-a-zastupcu-primatora-2018-2022",
    name: "Finančná pomoc primátora a zástupcu primátora 2018 – 2022",
    title: "Finančná pomoc primátora a zástupcu primátora 2018 – 2022",
    component: FinancnaPomoc2018_2022View,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/denne-centra",
    name: "Denné centrá",
    title: "Denné centrá",
    component: DenneCentraView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/domaca-opatrovatelska-sluzba",
    name: "Domáca opatrovateľská služba",
    title: "Domáca opatrovateľská služba",
    component: DomacaOpatrovatelskaSluzbaView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/institut-osobitneho-prijemcu",
    name: "Inštitút osobitného príjemcu",
    title: "Inštitút osobitného príjemcu",
    component: InstitutOsobitnehoPijemcuView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/mestska-socialna-ubytovna",
    name: "Mestská sociálna ubytovňa",
    title: "Mestská sociálna ubytovňa",
    component: MestskaSocialnaUbytovnaView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/mestsky-utulok",
    name: "Mestský útulok",
    title: "Mestský útulok",
    component: MestskyUtulokVIew,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/socialne-sluzby-s-pouzitim-telekomunikacnych-technologii",
    name: "Sociálne služby s použitím telekomunikačných technológií",
    title: "Sociálne služby s použitím telekomunikačných technológií",
    component: SocialneSluzbyVIew,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/stredisko-osobnej-hygieny-a-pracovne",
    name: "Stredisko osobnej hygieny a práčovne",
    title: "Stredisko osobnej hygieny a práčovne",
    component: StrediskoOsobnejHygienyVIew,
  },
  {
    path: "/pre-obcanov/stavebny-urad",
    name: "Stavebný úrad",
    title: "Stavebný úrad",
    component: StavebnyUradVIew,
  },
  {
    path: "/pre-obcanov/stavebny-urad/kolaudacne-rozhodnutie",
    name: "Kolaudačné rozhodnutie",
    title: "Kolaudačné rozhodnutie",
    component: KolaudacneRozhodnutieView,
  },
  {
    path: "/pre-obcanov/stavebny-urad/odstranenie-stavby",
    name: "Odstránenie stavby",
    title: "Odstránenie stavby",
    component: OdstranenieStavbyView,
  },
  {
    path: "/pre-obcanov/stavebny-urad/ohlasenie-drobnej-stavby",
    name: "Ohlásenie drobnej stavby",
    title: "Ohlásenie drobnej stavby",
    component: OhlasenieDrobnejStavbyView,
  },
  {
    path: "/pre-obcanov/stavebny-urad/ohlasenie-dstavebnych-uprav",
    name: "Ohlásenie stavebných úprav",
    title: "Ohlásenie stavebných úprav",
    component: OhlasenieStavebnychUpravView,
  },
  {
    path: "/pre-obcanov/stavebny-urad/povolenie-informachnycn-zariadeni",
    name: "Povolenie informačných, reklamných a propagačných zariadení",
    title: "Povolenie informačných, reklamných a propagačných zariadení",
    component: PovolenieInformachnychZariadeniView,
  },
  {
    path: "/pre-obcanov/byvanie",
    name: "Bývanie",
    title: "Bývanie",
    component: ByvanieView,
  },
  {
    path: "/pre-obcanov/byvanie/bytovy-podnik",
    name: "Bytový podnik Trebišov s.r.o.",
    title: "Bytový podnik Trebišov s.r.o.",
    component: BytovyPodnikView,
  },
  {
    path: "/pre-obcanov/byvanie/ziadost-o-pridelenie-mestskeho-najomneho-bytu",
    name: "Žiadosť o pridelenie mestského nájomného bytu",
    title: "Žiadosť o pridelenie mestského nájomného bytu",
    component: ZiadostOPridelenieView,
  },
  {
    path: "/pre-obcanov/byvanie/ziadost-o-prechod-majmu-mestskeho-najomneho-bytu",
    name: "Žiadosť o prechod nájmu mestského nájomného bytu",
    title: "Žiadosť o prechod nájmu mestského nájomného bytu",
    component: ZiadostOPrechodNajmuView,
  },
  {
    path: "/pre-obcanov/byvanie/ziadost-o-suhlas-k-vymene-bytu-vo-vlastnictve-mesta",
    name: "Žiadosť o súhlas k výmene bytu vo vlastníctve mesta",
    title: "Žiadosť o súhlas k výmene bytu vo vlastníctve mesta",
    component: ZiadostOSuhlasView,
  },
  {
    path: "/pre-obcanov/byvanie/urcenie-supisneho-alebo-orientacneho-cisla",
    name: "Určenie súpisného alebo orientačného čísla",
    title: "Určenie súpisného alebo orientačného čísla",
    component: SupisneCislaView,
  },
  {
    path: "/pre-obcanov/komunalny-odpad",
    name: "Komunálny odpad",
    title: "Komunálny odpad",
    component: KomunalnyOdpadView,
  },
  {
    path: "/pre-obcanov/komunalny-odpad/harmonogram-vyvozu-lomunalnego-odpadu",
    name: "Harmonogram vývozu komunálneho odpadu",
    title: "Harmonogram vývozu komunálneho odpadu",
    component: HarmonogramVyvozuView,
  },
  {
    path: "/pre-obcanov/komunalny-odpad/zberny-dvor",
    name: "Zberný dvor",
    title: "Zberný dvor",
    component: ZbernyDvorView,
  },
  {
    path: "/pre-obcanov/komunalny-odpad/doseparacne-stredisko",
    name: "Doseparačné stredisko",
    title: "Doseparačné stredisko",
    component: DoseparacneStrediskoView,
  },
  {
    path: "/pre-obcanov/miestne-dane-a-poplatky",
    name: "Miestne dane a poplatky",
    title: "Miestne dane a poplatky",
    component: MiestneDaneView,
  },
  {
    path: "/pre-obcanov/miestne-dane-a-poplatky/dan-z-nehnutelnosti",
    name: "Daň z nehnuteľností",
    title: "Daň z nehnuteľností",
    component: DanZNehnutelnostiView,
  },
  {
    path: "/pre-obcanov/doprava-a-komunikacie",
    name: "Doprava a komunikácie",
    title: "Doprava a komunikácie",
    component: DopravaAKomunikacieView,
  },
  {
    path: "/pre-obcanov/doprava-a-komunikacie/doprava-znacenia-na-miestnych-komunikaciah",
    name: "Dopravné značenia na miestnych komunikáciach",
    title: "Dopravné značenia na miestnych komunikáciach",
    component: DopravneZnacenia,
  },
  {
    path: "/pre-obcanov/doprava-a-komunikacie/obchadzky-a-uzavierky-miestnych-komunikacii",
    name: "Dopravné značenia na miestnych komunikáciach",
    title: "Dopravné značenia na miestnych komunikáciach",
    component: ObchadzkyView,
  },
  {
    path: "/pre-obcanov/doprava-a-komunikacie/rozkopavky-miestnych-komunikacii",
    name: "Rozkopávky miestnych komunikácií",
    title: "Rozkopávky miestnych komunikácií",
    component: RozkopavkyView,
  },
  {
    path: "/pre-obcanov/doprava-a-komunikacie/cestovny-poriadok-mhd",
    name: "Cestovný poriadok MHD",
    title: "Cestovný poriadok MHD",
    component: CestovnyPoriadokView,
  },
  {
    path: "/pre-obcanov/zivotne-prostredie",
    name: "Životné prostredie",
    title: "Životné prostredie",
    component: ZivotneProstredieView,
  },
  {
    path: "/pre-obcanov/informacie",
    name: "Informácie",
    title: "Informácie",
    component: InformacieView,
  },
  {
    path: "/pre-obcanov/otazky-a-odpovede",
    name: "Otázky a odpovede",
    title: "Otázky a odpovede",
    component: OtazkyAOdpovedeView,
  },
  {
    path: "/pre-obcanov/otazky-a-odpovede/obcania-a-podnety-obcanov",
    name: "Občania a podnety občanov",
    title: "Občania a podnety občanov",
    component: ObcaniaView,
  },
  {
    path: "/pre-obcanov/ostatne",
    name: "Ostatné",
    title: "Ostatné",
    component: OstatneView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
