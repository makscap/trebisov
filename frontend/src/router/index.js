import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ActivitiesView from "../views/ActivitiesView.vue";
import HlasObcanovView from "../views/HlasObcanovView.vue";
import ParticipativnyRozpocetView from "../views/ParticipativnyRozpocetView.vue";
import HlasovanieOParticipativnomRozpocteView from "../views/HlasovanieOParticipativnomRozpocteView.vue";
import DiskusneForumView from "../views/DiskusneForumView.vue";
import TopicForumView from "../views/TopicForumView.vue";
import ProfileForumView from "../views/ProfileForumView.vue";
import AuthVIew from "../views/AuthVIew.vue";
import ObcianskaInzerciaView from "../views/ObcianskaInzerciaView.vue";
import ObcianskaInzerciaTopicView from "../views/ObcianskaInzerciaTopicView.vue";

// O MESTE
import OMesteView from "../views/OMeste/OMesteView.vue";
import ZakladneUdajeView from "../views/OMeste/ZakladneUdajeView.vue";
import HistoriaMestaTrebisovView from "../views/OMeste/HistoriaMestaTrebisovView.vue";
import SymbolyMestaView from "../views/OMeste/SymbolyMestaView.vue";
import StatutMestaView from "../views/OMeste/StatutMestaView.vue";
import InfolistMestaView from "../views/OMeste/InfolistMestaView.vue";

// SAMOSPRAVA MESTA
import PrimatorView from "../views/SamospravaMesta/PrimatorView.vue";
import ZastupcoviaPrimatora from "../views/SamospravaMesta/ZastupcoviaPrimatora.vue";
import OZastupitelstveView from "../views/SamospravaMesta/MestskeZastupitelstvo/OZastupitelstveView.vue";
import Poslanci18_20View from "../views/SamospravaMesta/MestskeZastupitelstvo/PoslanciMsz/Poslanci18_20View.vue";
import UradnaTabulaView from "../views/SamospravaMesta/UradnaTabulaView.vue";
import RozpocetMestaView from "../views/SamospravaMesta/Rozpocet/RozpocetMestaView.vue";
import VarejneObstaravanieView from "../views/SamospravaMesta/VarejneObstaravanieView.vue";
import MestoTrebisovView from "../views/SamospravaMesta/VerejneObstaravanie/MestoTrebisovView.vue";
import TechnickeSluzbyMestaView from "../views/SamospravaMesta/VerejneObstaravanie/TechnickeSluzbyMestaView.vue";
import MestskySportovyKlubMladezeView from "../views/SamospravaMesta/VerejneObstaravanie/MestskySportovyKlubMladezeView.vue";
import ZakladnaUmeleckaSkolaView from "../views/SamospravaMesta/VerejneObstaravanie/ZakladnaUmeleckaSkolaView.vue";
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
import ZasadnutiaChildView from "../views/SamospravaMesta/MestskeZastupitelstvo/ZasadnutiaChildView.vue";
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
import ClenoviaMestskejRadyView from "../views/SamospravaMesta/MestskeZastupitelstvo/MestskaRada/ClenoviaMestskejRadyView.vue";
import ZasadnutiaMestskejRadyView from "../views/SamospravaMesta/MestskeZastupitelstvo/MestskaRada/ZasadnutiaMestskejRadyView.vue";
import RozpocetMesta2010_2022View from "../views/SamospravaMesta/Rozpocet/RozpocetMesta2010_2022View.vue";
import ZaverecnyUcetMesta2010_2021View from "../views/SamospravaMesta/Rozpocet/ZaverecnyUcetMesta2010_2021View.vue";
import DotacieDataView from "../views/SamospravaMesta/DotacieDataView.vue";
import KomisieView from "../views/SamospravaMesta/MestskeZastupitelstvo/KomisieView.vue";
import ZasadnutiaKomisiiView from "../views/SamospravaMesta/MestskeZastupitelstvo/ZasadnutiaKomisiiView.vue";
import KomisieFinancnejView from "../views/SamospravaMesta/MestskeZastupitelstvo/KomisieFinancnejView.vue";
import PriamyPrenosView from "../views/SamospravaMesta/MestskeZastupitelstvo/PriamyPrenosView.vue";
import RevitalizaciaHraduView from "../views/SamospravaMesta/RevitalizaciaHraduView.vue";

// MESTSKY URAD
import MestskyUradView from "../views/MestskyUrad/MestskyUradView.vue";
import OMestskomUradeView from "../views/MestskyUrad/OMestskomUradeView.vue";
import PrednostaView from "../views/MestskyUrad/PrednostaView.vue";
import OddeleniaMsuView from "../views/MestskyUrad/OddeleniaMsuView.vue";
import KancelariaPrimatoraView from "../views/MestskyUrad/Oddelenie/KancelariaPrimatoraView.vue";
import OddelenieFinancneView from "../views/MestskyUrad/Oddelenie/OddelenieFinancneView.vue";
import StrediskaView from "../views/MestskyUrad/StrediskaView.vue";
import MestkaVnutornaOchranaView from "../views/MestskyUrad/Strediska/MestkaVnutornaOchranaView.vue";
import MestskeKulturneStrediskoView from "../views/MestskyUrad/Strediska/MestskeKulturneStrediskoView.vue";
import OznamyView from "../views/MestskyUrad/OznamyView.vue";
import OznamySubPageView from "../views/MestskyUrad/OznamySubPageView.vue";
import OznamyOUmrtiachView from "../views/MestskyUrad/OznamyOUmrtiachView.vue";
import StrategickeDokumentyView from "../views/MestskyUrad/StrategickeDokumentyView.vue";
import CennikyView from "../views/MestskyUrad/CennikyView.vue";
import VseobecneZavazneView from "../views/MestskyUrad/VseobecneZavazneView.vue";
import VseobecneZavazneDetailView from "../views/MestskyUrad/VseobecneZavazneDetailView.vue";

// ZIVOT V MESTE
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
import HistorickeAKulturnePamiatkyDetailView from "../views/ZivotVMeste/HistorickeAKulturnePamiatkyDetailView.vue";
import SkolyASkolskeZariadeniaView from "../views/ZivotVMeste/Skolstvo/SkolyASkolskeZariadeniaView.vue";
import TestovanieView from "../views/ZivotVMeste/Skolstvo/TestovanieView.vue";
import SkolskeSutazeView from "../views/ZivotVMeste/Skolstvo/SkolskeSutazeView.vue";
import HodnotiaceSpravyView from "../views/ZivotVMeste/Skolstvo/HodnotiaceSpravyView.vue";
import SkolstvoKontaktyView from "../views/ZivotVMeste/Skolstvo/SkolstvoKontaktyView.vue";

// PRE OBCANOV
import PreObcanovView from "../views/PreObcanov/PreObcanovView.vue";
import EvidenciaObyvatelovView from "../views/PreObcanov/EvidenciaObyvatelovView.vue";
import PodtvrdenieOTrvalomPobyteVIew from "../views/PreObcanov/EvidenciaObyvatelov/PodtvrdenieOTrvalomPobyteVIew.vue";
import PrihlasenieKPrechodnemuPobytuView from "../views/PreObcanov/EvidenciaObyvatelov/PrihlasenieKPrechodnemuPobytuView.vue";
import PrihlasenieNaTrvalyPobytVIew from "../views/PreObcanov/EvidenciaObyvatelov/PrihlasenieNaTrvalyPobytVIew.vue";
import VydaniePrvehoObcianskehoPreukazuView from "../views/PreObcanov/EvidenciaObyvatelov/VydaniePrvehoObcianskehoPreukazuView.vue";
import MatrikaView from "../views/PreObcanov/MatrikaView.vue";
import ZapisNovorodencaView from "../views/PreObcanov/Matrika/ZapisNovorodencaView.vue";
import OpravaRodnehoCislaView from "../views/PreObcanov/Matrika/OpravaRodnehoCislaView.vue";
import KartyVIew from "../views/PreObcanov/KartyVIew.vue";
import RezidencnaKartaNaRokView from "../views/PreObcanov/Karty/RezidencnaKartaNaRokView.vue";
import SeniorKartaView from "../views/PreObcanov/Karty/SeniorKartaView.vue";
import SocialnaPomocView from "../views/PreObcanov/SocialnaPomocView.vue";
import FinancnaPomocView from "../views/PreObcanov/FinancnaPomocView.vue";
import AkoZiadatOFinancnuPomocView from "../views/PreObcanov/AkoZiadatOFinancnuPomocView.vue";
import FinancnaPomoc2018_2022View from "../views/PreObcanov/SocialnaPomoc/FinancnaPomoc2018-2022View.vue";
import DenneCentraView from "../views/PreObcanov/SocialnaPomoc/DenneCentraView.vue";
import DomacaOpatrovatelskaSluzbaView from "../views/PreObcanov/SocialnaPomoc/DomacaOpatrovatelskaSluzbaView.vue";
import InstitutOsobitnehoPijemcuView from "../views/PreObcanov/SocialnaPomoc/InstitutOsobitnehoPijemcuView.vue";
import MestskaSocialnaUbytovnaView from "../views/PreObcanov/SocialnaPomoc/MestskaSocialnaUbytovnaView.vue";
import MestskyUtulokVIew from "../views/PreObcanov/SocialnaPomoc/MestskyUtulokVIew.vue";
import SocialneSluzbyVIew from "../views/PreObcanov/SocialnaPomoc/SocialneSluzbyVIew.vue";
import StrediskoOsobnejHygienyVIew from "../views/PreObcanov/SocialnaPomoc/StrediskoOsobnejHygienyVIew.vue";
import StavebnyUradVIew from "../views/PreObcanov/StavebnyUradView.vue";
import ZivotneProstredieView from "../views/PreObcanov/ZivotneProstredieView.vue";
import InformacieView from "../views/PreObcanov/InformacieView.vue";
import OtazkyAOdpovedeView from "../views/PreObcanov/OtazkyAOdpovedeView.vue";
import ObcaniaView from "../views/PreObcanov/ObcaniaView.vue";
import OstatneView from "../views/PreObcanov/OstatneView.vue";
// Stavebny Urad
import KolaudacneRozhodnutieView from "../views/PreObcanov/KolaudacneRozhodnutieView.vue";
import OdstranenieStavbyView from "../views/PreObcanov/OdstranenieStavbyView.vue";
import OhlasenieDrobnejStavbyView from "../views/PreObcanov/OhlasenieDrobnejStavbyView.vue";
import OhlasenieStavebnychUpravView from "../views/PreObcanov/OhlasenieStavebnychUpravView.vue";
import PovolenieInformachnychZariadeniView from "../views/PreObcanov/PovolenieInformachnychZariadeniView.vue";
// Byvanie
import ByvanieView from "../views/PreObcanov/ByvanieView.vue";
import BytovyPodnikView from "../views/PreObcanov/Byvanie/BytovyPodnikView.vue";
import ZiadostOPridelenieView from "../views/PreObcanov/Byvanie/ZiadostOPridelenieView.vue";
import ZiadostOPrechodNajmuView from "../views/PreObcanov/Byvanie/ZiadostOPrechodNajmuView.vue";
import ZiadostOSuhlasView from "../views/PreObcanov/Byvanie/ZiadostOSuhlasView.vue";
import SupisneCislaView from "../views/PreObcanov/Byvanie/SupisneCislaView.vue";
// Komunalny Odpad
import KomunalnyOdpadView from "../views/PreObcanov/KomunalnyOdpadView.vue";
import HarmonogramVyvozuView from "../views/PreObcanov/KomunalnyOdpad/HarmonogramVyvozuView.vue";
import ZbernyDvorView from "../views/PreObcanov/KomunalnyOdpad/ZbernyDvorView.vue";
import DoseparacneStrediskoView from "../views/PreObcanov/KomunalnyOdpad/DoseparacneStrediskoView.vue";
import MiestneDaneView from "../views/PreObcanov/MiestneDaneView.vue";
import DanZNehnutelnostiView from "../views/PreObcanov/DanZNehnutelnostiView.vue";
import DopravaAKomunikacieView from "../views/PreObcanov/DopravaAKomunikacieView.vue";
// Dopravne Znacenia
import DopravneZnacenia from "../views/PreObcanov/DopravneZnacenia.vue";
import ObchadzkyView from "../views/PreObcanov/ObchadzkyView.vue";
import RozkopavkyView from "../views/PreObcanov/RozkopavkyView.vue";
import CestovnyPoriadokView from "../views/PreObcanov/CestovnyPoriadokView.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    title: "Domov",
    component: HomeView,
  },
  {
    path: "/auth",
    name: "Auth",
    title: "Auth",
    component: AuthVIew,
  },
  {
    path: "/o-meste",
    name: "O meste",
    title: "O meste",
    component: OMesteView,
  },
  {
    path: "/hlas-obcanov",
    name: "Hlas ob??anov",
    title: "Hlas ob??anov",
    component: HlasObcanovView,
  },
  {
    path: "/obcianska-inzercia",
    name: "Ob??ianska inzercia",
    title: "Ob??ianska inzercia",
    component: ObcianskaInzerciaView,
  },
  {
    path: "/obcianska-inzercia/:topic",
    name: "",
    title: "",
    component: ObcianskaInzerciaTopicView,
  },
  {
    path: "/hlas-obcanov/participativny-rozpocet",
    name: "Participat??vny rozpo??et",
    title: "Participat??vny rozpo??et",
    component: ParticipativnyRozpocetView,
  },
  {
    path: "/hlas-obcanov/hlasovanie-o-participativnom-rozpocte-mesta",
    name: "Hlasovanie o participat??vnom rozpo??te mesta",
    title: "Hlasovanie o participat??vnom rozpo??te mesta",
    component: HlasovanieOParticipativnomRozpocteView,
  },
  {
    path: "/samosprava-mesta",
    name: "Samospr??va mesta",
    title: "Samospr??va mesta",
    component: SamospravaMestaView,
  },
  {
    path: "/diskusne-forum",
    name: "Diskusn?? f??rum",
    title: "Diskusn?? f??rum",
    component: DiskusneForumView,
  },
  {
    path: "/diskusne-forum/:topic",
    name: "",
    title: "",
    component: TopicForumView,
  },
  {
    path: "/diskusne-forum/:topic/:profile",
    name: "",
    title: "",
    component: ProfileForumView,
  },
  {
    path: "/mestsky-urad",
    name: "Mestsk?? ??rad",
    title: "Mestsk?? ??rad",
    component: MestskyUradView,
  },
  {
    path: "/mestsky-urad/o-mestskom-urade",
    name: "O mestskom ??rade",
    title: "O mestskom ??rade",
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
    name: "Oddelenia Ms?? v Trebi??ove",
    title: "Oddelenia Ms?? v Trebi??ove",
    component: OddeleniaMsuView,
  },

  {
    path: "/mestsky-urad/oddelenia/kancelaria-primatora",
    name: "Kancel??ria prim??tora",
    title: "Kancel??ria prim??tora",
    component: KancelariaPrimatoraView,
  },
  {
    path: "/mestsky-urad/oddelenia/oddelenie-financne",
    name: "Oddelenie finan??n??",
    title: "Oddelenie finan??n??",
    component: OddelenieFinancneView,
  },
  {
    path: "/mestsky-urad/strediska",
    name: "Stredisk?? Ms??",
    title: "Stredisk?? Ms??",
    component: StrediskaView,
  },

  {
    path: "/mestsky-urad/strediska/mestska-vnutorna-ochrana",
    name: "Mestsk?? vn??torn?? ochrana",
    title: "Mestsk?? vn??torn?? ochrana",
    component: MestkaVnutornaOchranaView,
  },
  {
    path: "/mestsky-urad/strediska/mestske-kulturne-stredisko",
    name: "Mestsk?? kult??rne stredisko",
    title: "Mestsk?? kult??rne stredisko",
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
    name: "Oznamy o ??mrtiach",
    title: "Oznamy o ??mrtiach",
    component: OznamyOUmrtiachView,
  },
  {
    path: "/mestsky-urad/strategicke-dokumenty",
    name: "Strategick?? dokumenty",
    title: "Strategick?? dokumenty",
    component: StrategickeDokumentyView,
  },
  {
    path: "/mestsky-urad/cenniky",
    name: "Cenn??ky",
    title: "Cenn??ky",
    component: CennikyView,
  },
  {
    path: "/mestsky-urad/vseobecne-zavazne-nariadenia",
    name: "V??eobecne z??v??zn?? nariadenia",
    title: "V??eobecne z??v??zn?? nariadenia",
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
    name: "??ivot v meste",
    title: "??ivot v meste",
    component: ZivotVMesteView,
  },
  {
    path: "/zivot-v-meste/historicke-a-kulturne-pamiatky",
    name: "Historick?? a kult??rne pamiatky",
    title: "Historick?? a kult??rne pamiatky",
    component: HistorickeAKulturnePamiatkyView,
  },
  {
    path: "/zivot-v-meste/historicke-a-kulturne-pamiatky/:slug",
    name: "",
    title: "",
    component: HistorickeAKulturnePamiatkyDetailView,
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
    name: "Mestsk?? ??portov?? klub ml??de??e",
    title: "Mestsk?? ??portov?? klub ml??de??e",
    component: MestskySportovyKlubView,
  },
  {
    path: "/zivot-v-meste/mestsky-sportovy-klub-mladeze/o-klube",
    name: "O mestskom ??portovom klube ml??de??e",
    title: "O mestskom ??portovom klube ml??de??e",
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
    name: "Fotogal??ria klubu",
    title: "Fotogal??ria klubu",
    component: FotogaleriaKlubView,
  },
  {
    path: "/zivot-v-meste/mestsky-sportovy-klub-mladeze/rozpis-ladovej-plochy",
    name: "Rozpis ??adovej plochy a tr??ningov",
    title: "Rozpis ??adovej plochy a tr??ningov",
    component: RozpisLadovejPlochyView,
  },
  {
    path: "/zivot-v-meste/mestsky-sportovy-klub-mladeze/prenajom-ihriska",
    name: "Podmienky pren??jmu ihriska s umelou tr??vou Mesto Trebi??ov",
    title: "Podmienky pren??jmu ihriska s umelou tr??vou Mesto Trebi??ov",
    component: PrenajomIhriskaView,
  },
  {
    path: "/zivot-v-meste/mestsky-sportovy-klub-mladeze/program-zapasov",
    name: "Program z??pasov",
    title: "Program z??pasov",
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
    name: "??kolstvo",
    title: "??kolstvo",
    component: SkolstvoView,
  },
  {
    path: "/zivot-v-meste/skolstvo/skoly-a-skolske-zariadenia",
    name: "??koly a ??kolsk?? zariadenia Trebi??ov",
    title: "??koly a ??kolsk?? zariadenia Trebi??ov",
    component: SkolyASkolskeZariadeniaView,
  },
  {
    path: "/zivot-v-meste/skolstvo/testovanie",
    name: "Testovanie",
    title: "Testovanie",
    component: TestovanieView,
  },
  {
    path: "/zivot-v-meste/skolstvo/skolske-sutaze",
    name: "??kolsk?? s????a??e",
    title: "??kolsk?? s????a??e",
    component: SkolskeSutazeView,
  },
  {
    path: "/zivot-v-meste/skolstvo/hodnotiace-spravy",
    name: "Hodnotiace spr??vy",
    title: "Hodnotiace spr??vy",
    component: HodnotiaceSpravyView,
  },
  {
    path: "/zivot-v-meste/skolstvo/kontakt",
    name: "??kolstvo kontakt",
    title: "??kolstvo kontakt",
    component: SkolstvoKontaktyView,
  },
  {
    path: "/zivot-v-meste/policia",
    name: "Pol??cia",
    title: "Pol??cia",
    component: PoliciaView,
  },
  {
    path: "/zivot-v-meste/policia/mestska-policia",
    name: "Mestsk?? pol??cia",
    title: "Mestsk?? pol??cia",
    component: MestskaPoliciaVIew,
  },
  {
    path: "/zivot-v-meste/policia/pravne-predpisy",
    name: "Pr??vne predpisy",
    title: "Pr??vne predpisy",
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
    name: "Mestsk?? kamerov?? syst??m",
    title: "Mestsk?? kamerov?? syst??m",
    component: MestskyKamerovySystemView,
  },
  {
    path: "/zivot-v-meste/policia/rady-a-informacie",
    name: "Mestsk?? kamerov?? syst??m",
    title: "Mestsk?? kamerov?? syst??m",
    component: RadyAInformacieView,
  },
  {
    path: "/zivot-v-meste/policia/policajne-aktuality",
    name: "Policajn?? aktuality",
    title: "Policajn?? aktuality",
    component: PolicajneAktualityView,
  },
  {
    path: "/zivot-v-meste/policia/okresne-riaditelstvo-policajneho-zboru",
    name: "Okresn?? riadite??stvo policajn??ho zboru v Trebi??ove",
    title: "Okresn?? riadite??stvo policajn??ho zboru v Trebi??ove",
    component: OkresneRiaditelstvoView,
  },
  {
    path: "/o-meste/zakladne-udaje",
    name: "Z??kladn?? ??daje",
    title: "Z??kladn?? ??daje",
    component: ZakladneUdajeView,
  },
  {
    path: "/o-meste/historia-mesta",
    name: "Hist??ria mesta Trebi??ov",
    title: "Hist??ria mesta Trebi??ov",
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
    name: "??tat??t mesta",
    title: "??tat??t mesta",
    component: StatutMestaView,
  },
  {
    path: "/o-meste/infolist-mesta",
    name: "Infolist mesta Trebi??ov",
    title: "Infolist mesta Trebi??ov",
    component: InfolistMestaView,
  },

  {
    path: "/samosprava-mesta/primator",
    name: "Prim??tor",
    title: "Prim??tor",
    component: PrimatorView,
  },
  {
    path: "/samosprava-mesta/zastupcovia-primatora",
    name: "Z??stupcovia prim??tora",
    title: "Z??stupcovia prim??tora",
    component: ZastupcoviaPrimatora,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo",
    name: "Mestsk?? zastupite??stvo",
    title: "Mestsk?? zastupite??stvo",
    component: MestskeZastupitelstvoView,
  },

  {
    path: "/samosprava-mesta/hlavny-kontrolor",
    name: "Hlavn?? kontrol??r",
    title: "Hlavn?? kontrol??r",
    component: HlavnyKontrolorView,
  },
  {
    path: "/samosprava-mesta/hlavny-kontrolor/o-hlavnom-kontrolorovi",
    name: "O hlavnom kontrol??rovi",
    title: "O hlavnom kontrol??rovi",
    component: OHlavnomKontroloroviView,
  },
  {
    path: "/samosprava-mesta/hlavny-kontrolor/plany-kontrolnej-cinnosti",
    name: "Pl??ny kontrolnej ??innosti",
    title: "Pl??ny kontrolnej ??innosti",
    component: PlanyKontrolnejCinnostiView,
  },

  {
    path: "/samosprava-mesta/hlavny-kontrolor/spravy-z-kontrolnej-cinnosti",
    name: "Spr??vy z kontrolnej ??innosti",
    title: "Spr??vy z kontrolnej ??innosti",
    component: SpravyZKontrolnejCinnostiView,
  },
  {
    path: "/samosprava-mesta/hlavny-kontrolor/ostatne-dokumenty",
    name: "Ostatn?? dokumenty",
    title: "Ostatn?? dokumenty",
    component: OstatneDokumentyView,
  },

  {
    path: "/samosprava-mesta/uradna-tabula",
    name: "??radn?? tabu??a",
    title: "??radn?? tabu??a",
    component: UradnaTabulaView,
  },
  {
    path: "/samosprava-mesta/rozpocet-mesta",
    name: "Rozpo??et mesta trebi??ov",
    title: "Rozpo??et mesta trebi??ov",
    component: RozpocetMestaView,
  },
  {
    path: "/samosprava-mesta/rozpocet-mesta/2010-2022",
    name: "Rozpo??et mesta trebi??ov 2010-2022",
    title: "Rozpo??et mesta trebi??ov 2010-2022",
    component: RozpocetMesta2010_2022View,
  },
  {
    path: "/samosprava-mesta/rozpocet-mesta/zaverecny-ucet-mesta-2010-2021",
    name: "Z??vere??n?? ????et mesta Trebi??ov 2021-2010",
    title: "Z??vere??n?? ????et mesta Trebi??ov 2021-2010",
    component: ZaverecnyUcetMesta2010_2021View,
  },

  {
    path: "/samosprava-mesta/dotacie",
    name: "Dot??cie",
    title: "Dot??cie",
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
    name: "Revitaliz??cia hradu Pari?? (RePar)",
    title: "Revitaliz??cia hradu Pari?? (RePar)",
    component: RevitalizaciaHraduView,
  },

  {
    path: "/samosprava-mesta/verejne-obstaravanie",
    name: "Verejn?? obstar??vanie",
    title: "Verejn?? obstar??vanie",
    component: VarejneObstaravanieView,
  },

  {
    path: "/samosprava-mesta/verejne-obstaravanie/mesto-trebisov",
    name: "Mesto Trebi??ov",
    title: "Mesto Trebi??ov",
    component: MestoTrebisovView,
  },
  {
    path: "/samosprava-mesta/verejne-obstaravanie/technicke-sluzby-mesta",
    name: "Technick?? slu??by mesta Trebi??ov",
    title: "Technick?? slu??by mesta Trebi??ov",
    component: TechnickeSluzbyMestaView,
  },
  {
    path: "/samosprava-mesta/verejne-obstaravanie/mestsky-sportovy-klub-mladeze",
    name: "MESTSK?? ??PORTOV?? KLUB ML??DE??E TREBI??OV",
    title: "MESTSK?? ??PORTOV?? KLUB ML??DE??E TREBI??OV",
    component: MestskySportovyKlubMladezeView,
  },
  {
    path: "/samosprava-mesta/verejne-obstaravanie/zakladna-umelecka-skola",
    name: "Z??kladn?? umeleck?? ??kola",
    title: "Z??kladn?? umeleck?? ??kola",
    component: ZakladnaUmeleckaSkolaView,
  },
  {
    path: "/samosprava-mesta/interne-predpisy",
    name: "Intern?? predpisy",
    title: "Intern?? predpisy",
    component: InternePredpisyView,
  },
  {
    path: "/samosprava-mesta/zmluvy-faktury",
    name: "Zmluvy, fakt??ry, objedn??vky",
    title: "Zmluvy, fakt??ry, objedn??vky",
    component: ZmluvyFakturyView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/o-mestskom-zastupitelstve",
    name: "O mestskom zastupite??stve",
    title: "O mestskom zastupite??stve",
    component: OZastupitelstveView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove",
    name: "Poslanci MsZ v Trebi??ove",
    title: "Poslanci MsZ v Trebi??ove",
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
    name: "Zasadnutia MsZ v Trebi??ove",
    title: "Zasadnutia MsZ v Trebi??ove",
    component: ZasadnutiaView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/:child",
    name: "",
    title: "",
    component: ZasadnutiaChildView,
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
    name: "Videoz??znam",
    title: "Videoz??znam",
    component: VideozaznamView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/zasadnutia/:topic/dochadzka-poslancov",
    name: "Videoz??znam",
    title: "Videoz??znam",
    component: DochadzkaPoslancovView,
  },

  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/mestska-rada",
    name: "Mestsk?? rada",
    title: "Mestsk?? rada",
    component: MestskaRadaView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/priamy-prenos-zo-zasadnutia",
    name: "Priamy prenos zo zasadnutia MsZ v Trebi??ove",
    title: "Priamy prenos zo zasadnutia MsZ v Trebi??ove",
    component: PriamyPrenosView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/mestska-rada/clenovia-mestskej-rady",
    name: "??lenovia mestskej rady",
    title: "??lenovia mestskej rady",
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
    name: "Zasadnutia komisi?? ",
    title: "Zasadnutia komisi?? ",
    component: ZasadnutiaKomisiiView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/komisie/zasadnutia-komisii/komisia-financna",
    name: "Zasadnutia komisie finan??nej",
    title: "Zasadnutia komisie finan??nej",
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
    name: "Interpel??cie poslancov MsZ v Trebi??ove",
    title: "Interpel??cie poslancov MsZ v Trebi??ove",
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
    name: "Podnety poslancov MsZ v Trebi??ove",
    title: "Podnety poslancov MsZ v Trebi??ove",
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
    name: "Poslanci za volebn?? obdobie",
    title: "Poslanci za volebn?? obdobie",
    component: Poslanci18_20View,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove/oznamenia-funkcii-poslanci",
    name: "Ozn??menia funkci??, zamestnan??, ??innost?? a majetkov??ch pomerov verejn??ho funkcion??ra - poslanci",
    title:
      "Ozn??menia funkci??, zamestnan??, ??innost?? a majetkov??ch pomerov verejn??ho funkcion??ra - poslanci",
    component: OznameniaFunkciiPoslanciView,
  },
  {
    path: "/samosprava-mesta/mestske-zastupitelstvo/poslanci-msz-v-trebisove/oznamenia-funkcii-tlaciva",
    name: "Ozn??menia funkci??, zamestnan??, ??innost?? a majetkov??ch pomerov verejn??ho funkcion??ra - tla??iv??",
    title:
      "Ozn??menia funkci??, zamestnan??, ??innost?? a majetkov??ch pomerov verejn??ho funkcion??ra - tla??iv??",
    component: OznameniaFunkciiTlacivaView,
  },

  // Pre Obcanov
  // ????????????????????????????????

  {
    path: "/pre-obcanov",
    name: "Pre ob??anov",
    title: "Pre ob??anov",
    component: PreObcanovView,
  },
  {
    path: "/pre-obcanov/evidencia-obyvatelov",
    name: "Evidencia obyvate??ov",
    title: "Evidencia obyvate??ov",
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
    name: "Prihl??senie k prechodn??mu pobytu",
    title: "Prihl??senie k prechodn??mu pobytu",
    component: PrihlasenieKPrechodnemuPobytuView,
  },
  {
    path: "/pre-obcanov/evidencia-obyvatelov/prihlasenie-na-trvaly-pobyt",
    name: "Prihl??senie na trval?? pobyt",
    title: "Prihl??senie na trval?? pobyt",
    component: PrihlasenieNaTrvalyPobytVIew,
  },
  {
    path: "/pre-obcanov/evidencia-obyvatelov/vydanie-prveho-obcianskeho-preukazu",
    name: "Vydanie prv??ho ob??iansk??ho preukazu pri dov????en?? 15. roku",
    title: "Vydanie prv??ho ob??iansk??ho preukazu pri dov????en?? 15. roku",
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
    name: "Z??pis novorodenca a rodn?? list",
    title: "Z??pis novorodenca a rodn?? list",
    component: ZapisNovorodencaView,
  },
  {
    path: "/pre-obcanov/matrika/oprava-rodneho-cisla",
    name: "Oprava rodn??ho ????sla",
    title: "Oprava rodn??ho ????sla",
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
    name: "Reziden??n?? karta na rok 2022",
    title: "Reziden??n?? karta na rok 2022",
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
    name: "Soci??lna pomoc",
    title: "Soci??lna pomoc",
    component: SocialnaPomocView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/financna-pomoc-primatora-a-zastupcu-primatora",
    name: "Finan??n?? pomoc prim??tora a z??stupcu prim??tora",
    title: "Finan??n?? pomoc prim??tora a z??stupcu prim??tora",
    component: FinancnaPomocView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/financna-pomoc-primatora-a-zastupcu-primatora/ako-ziadat-o-financnu-pomoc-primatora-a-zastupcu-primatora",
    name: "Ako ??iada?? o finan??n?? pomoc prim??tora a z??stupcu prim??tora",
    title: "Ako ??iada?? o finan??n?? pomoc prim??tora a z??stupcu prim??tora",
    component: AkoZiadatOFinancnuPomocView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/financna-pomoc-primatora-a-zastupcu-primatora/financna-pomoc-primatora-a-zastupcu-primatora-2018-2022",
    name: "Finan??n?? pomoc prim??tora a z??stupcu prim??tora 2018 ??? 2022",
    title: "Finan??n?? pomoc prim??tora a z??stupcu prim??tora 2018 ??? 2022",
    component: FinancnaPomoc2018_2022View,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/denne-centra",
    name: "Denn?? centr??",
    title: "Denn?? centr??",
    component: DenneCentraView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/domaca-opatrovatelska-sluzba",
    name: "Dom??ca opatrovate??sk?? slu??ba",
    title: "Dom??ca opatrovate??sk?? slu??ba",
    component: DomacaOpatrovatelskaSluzbaView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/institut-osobitneho-prijemcu",
    name: "In??tit??t osobitn??ho pr??jemcu",
    title: "In??tit??t osobitn??ho pr??jemcu",
    component: InstitutOsobitnehoPijemcuView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/mestska-socialna-ubytovna",
    name: "Mestsk?? soci??lna ubytov??a",
    title: "Mestsk?? soci??lna ubytov??a",
    component: MestskaSocialnaUbytovnaView,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/mestsky-utulok",
    name: "Mestsk?? ??tulok",
    title: "Mestsk?? ??tulok",
    component: MestskyUtulokVIew,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/socialne-sluzby-s-pouzitim-telekomunikacnych-technologii",
    name: "Soci??lne slu??by s pou??it??m telekomunika??n??ch technol??gi??",
    title: "Soci??lne slu??by s pou??it??m telekomunika??n??ch technol??gi??",
    component: SocialneSluzbyVIew,
  },
  {
    path: "/pre-obcanov/socialna-pomoc/stredisko-osobnej-hygieny-a-pracovne",
    name: "Stredisko osobnej hygieny a pr????ovne",
    title: "Stredisko osobnej hygieny a pr????ovne",
    component: StrediskoOsobnejHygienyVIew,
  },
  {
    path: "/pre-obcanov/stavebny-urad",
    name: "Stavebn?? ??rad",
    title: "Stavebn?? ??rad",
    component: StavebnyUradVIew,
  },
  {
    path: "/pre-obcanov/stavebny-urad/kolaudacne-rozhodnutie",
    name: "Kolauda??n?? rozhodnutie",
    title: "Kolauda??n?? rozhodnutie",
    component: KolaudacneRozhodnutieView,
  },
  {
    path: "/pre-obcanov/stavebny-urad/odstranenie-stavby",
    name: "Odstr??nenie stavby",
    title: "Odstr??nenie stavby",
    component: OdstranenieStavbyView,
  },
  {
    path: "/pre-obcanov/stavebny-urad/ohlasenie-drobnej-stavby",
    name: "Ohl??senie drobnej stavby",
    title: "Ohl??senie drobnej stavby",
    component: OhlasenieDrobnejStavbyView,
  },
  {
    path: "/pre-obcanov/stavebny-urad/ohlasenie-dstavebnych-uprav",
    name: "Ohl??senie stavebn??ch ??prav",
    title: "Ohl??senie stavebn??ch ??prav",
    component: OhlasenieStavebnychUpravView,
  },
  {
    path: "/pre-obcanov/stavebny-urad/povolenie-informachnycn-zariadeni",
    name: "Povolenie informa??n??ch, reklamn??ch a propaga??n??ch zariaden??",
    title: "Povolenie informa??n??ch, reklamn??ch a propaga??n??ch zariaden??",
    component: PovolenieInformachnychZariadeniView,
  },
  {
    path: "/pre-obcanov/byvanie",
    name: "B??vanie",
    title: "B??vanie",
    component: ByvanieView,
  },
  {
    path: "/pre-obcanov/byvanie/bytovy-podnik",
    name: "Bytov?? podnik Trebi??ov s.r.o.",
    title: "Bytov?? podnik Trebi??ov s.r.o.",
    component: BytovyPodnikView,
  },
  {
    path: "/pre-obcanov/byvanie/ziadost-o-pridelenie-mestskeho-najomneho-bytu",
    name: "??iados?? o pridelenie mestsk??ho n??jomn??ho bytu",
    title: "??iados?? o pridelenie mestsk??ho n??jomn??ho bytu",
    component: ZiadostOPridelenieView,
  },
  {
    path: "/pre-obcanov/byvanie/ziadost-o-prechod-majmu-mestskeho-najomneho-bytu",
    name: "??iados?? o prechod n??jmu mestsk??ho n??jomn??ho bytu",
    title: "??iados?? o prechod n??jmu mestsk??ho n??jomn??ho bytu",
    component: ZiadostOPrechodNajmuView,
  },
  {
    path: "/pre-obcanov/byvanie/ziadost-o-suhlas-k-vymene-bytu-vo-vlastnictve-mesta",
    name: "??iados?? o s??hlas k v??mene bytu vo vlastn??ctve mesta",
    title: "??iados?? o s??hlas k v??mene bytu vo vlastn??ctve mesta",
    component: ZiadostOSuhlasView,
  },
  {
    path: "/pre-obcanov/byvanie/urcenie-supisneho-alebo-orientacneho-cisla",
    name: "Ur??enie s??pisn??ho alebo orienta??n??ho ????sla",
    title: "Ur??enie s??pisn??ho alebo orienta??n??ho ????sla",
    component: SupisneCislaView,
  },
  {
    path: "/pre-obcanov/komunalny-odpad",
    name: "Komun??lny odpad",
    title: "Komun??lny odpad",
    component: KomunalnyOdpadView,
  },
  {
    path: "/pre-obcanov/komunalny-odpad/harmonogram-vyvozu-lomunalnego-odpadu",
    name: "Harmonogram v??vozu komun??lneho odpadu",
    title: "Harmonogram v??vozu komun??lneho odpadu",
    component: HarmonogramVyvozuView,
  },
  {
    path: "/pre-obcanov/komunalny-odpad/zberny-dvor",
    name: "Zbern?? dvor",
    title: "Zbern?? dvor",
    component: ZbernyDvorView,
  },
  {
    path: "/pre-obcanov/komunalny-odpad/doseparacne-stredisko",
    name: "Dosepara??n?? stredisko",
    title: "Dosepara??n?? stredisko",
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
    name: "Da?? z nehnute??nost??",
    title: "Da?? z nehnute??nost??",
    component: DanZNehnutelnostiView,
  },
  {
    path: "/pre-obcanov/doprava-a-komunikacie",
    name: "Doprava a komunik??cie",
    title: "Doprava a komunik??cie",
    component: DopravaAKomunikacieView,
  },
  {
    path: "/pre-obcanov/doprava-a-komunikacie/doprava-znacenia-na-miestnych-komunikaciah",
    name: "Dopravn?? zna??enia na miestnych komunik??ciach",
    title: "Dopravn?? zna??enia na miestnych komunik??ciach",
    component: DopravneZnacenia,
  },
  {
    path: "/pre-obcanov/doprava-a-komunikacie/obchadzky-a-uzavierky-miestnych-komunikacii",
    name: "Dopravn?? zna??enia na miestnych komunik??ciach",
    title: "Dopravn?? zna??enia na miestnych komunik??ciach",
    component: ObchadzkyView,
  },
  {
    path: "/pre-obcanov/doprava-a-komunikacie/rozkopavky-miestnych-komunikacii",
    name: "Rozkop??vky miestnych komunik??ci??",
    title: "Rozkop??vky miestnych komunik??ci??",
    component: RozkopavkyView,
  },
  {
    path: "/pre-obcanov/doprava-a-komunikacie/cestovny-poriadok-mhd",
    name: "Cestovn?? poriadok MHD",
    title: "Cestovn?? poriadok MHD",
    component: CestovnyPoriadokView,
  },
  {
    path: "/pre-obcanov/zivotne-prostredie",
    name: "??ivotn?? prostredie",
    title: "??ivotn?? prostredie",
    component: ZivotneProstredieView,
  },
  {
    path: "/pre-obcanov/informacie",
    name: "Inform??cie",
    title: "Inform??cie",
    component: InformacieView,
  },
  {
    path: "/pre-obcanov/otazky-a-odpovede",
    name: "Ot??zky a odpovede",
    title: "Ot??zky a odpovede",
    component: OtazkyAOdpovedeView,
  },
  {
    path: "/pre-obcanov/otazky-a-odpovede/obcania-a-podnety-obcanov",
    name: "Ob??ania a podnety ob??anov",
    title: "Ob??ania a podnety ob??anov",
    component: ObcaniaView,
  },
  {
    path: "/pre-obcanov/ostatne",
    name: "Ostatn??",
    title: "Ostatn??",
    component: OstatneView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
