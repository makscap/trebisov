<template>
  <div class="govuk-width-container content">
    <h1>THE CONSTRUCTOR PAGE</h1>
    <div v-if="data">
      <div v-for="component in data" :key="component.id">
        <div class="test" v-if="component.type === 'TITLE_PAGE'">
          <div class="test-color">
            TITLE_PAGE
            <div class="icon-wrap">
              <div class="icon"></div>
              <div class="icon"></div>
              <div class="icon"></div>
              <span class="done">DONE</span>
            </div>
          </div>
          <TitlePage :title="component.data[0].title" />
        </div>
        <div class="test" v-if="component.type === 'CONTENT_BOX'">
          <div class="test-color">CONTENT_BOX</div>
          <ContentBox :content="component.data[0].htmlText" />
        </div>
        <div class="test" v-if="component.type === 'FILES_COMPONENT'">
          <div class="test-color">
            FILES_COMPONENT
            <div class="icon-wrap">
              <div class="icon"></div>
              <div class="icon"></div>
              <div class="icon"></div>
              <span class="done">DONE</span>
            </div>
          </div>

          <FilesComponent :files="component.data[0].files" />
        </div>
        <div class="test" v-if="component.type === 'ACCORDEON_COMPONENT'">
          <div class="test-color">
            ACCORDEON_COMPONENT
            <div class="icon-wrap">
              <div class="icon"></div>
              <div class="icon"></div>
              <div class="icon"></div>
              <span class="done">DONE</span>
            </div>
          </div>
          <AccordeonComponent :data="component.data[0].data" />
        </div>
        <div class="test" v-if="component.type === 'CONTACT_CARD'">
          <div class="test-color">
            CONTACT_CARD
            <div class="icon-wrap">
              <div class="icon"></div>
              <div class="icon"></div>
              <div class="icon"></div>
              <span class="done">DONE</span>
            </div>
          </div>
          <ContactCard :contacts="component.data[0].contacts" />
        </div>
        <div class="test" v-if="component.type === 'GALLERY_SLIDER'">
          <div class="test-color">GALLERY_SLIDER</div>
          <GallerySlider :images="component.data[0].images" />
        </div>
        <div class="test" v-if="component.type === 'MAP_COMPONENT'">
          <div class="test-color">
            MAP_COMPONENT
            <div class="icon-wrap">
              <div class="icon"></div>
              <div class="icon"></div>
              <div class="icon"></div>
              <span class="done">DONE</span>
            </div>
          </div>
          <MapComponent :mapInfo="component.data[0].mapInfo" />
        </div>
        <div class="test" v-if="component.type === 'STEPPER_COMPONENT'">
          <div class="test-color">
            STEPPER_COMPONENT
            <div class="icon-wrap">
              <div class="icon"></div>
              <div class="icon"></div>
              <div class="icon"></div>
              <span class="done">DONE</span>
            </div>
          </div>
          <StepperComponent :steps="component.data[0].steps" />
        </div>
        <div class="test" v-if="component.type === 'SUBPAGES_MENU'">
          <div class="test-color">
            SUBPAGES_MENU (horizontal & vertical)
            <div class="icon-wrap">
              <div class="icon"></div>
              <div class="icon"></div>
              <div class="icon"></div>
              <span class="done">DONE</span>
            </div>
          </div>
          <SubPagesMenu
            :subpages="component.data[0].subpages"
            :isVertical="component.data[0].isVertical"
          />
        </div>
        <div class="test" v-if="component.type === 'TABLE_1_COMPONENT'">
          <div class="test-color">TABLE_1_COMPONENT</div>
          <TableComponent :tableData="component.data[0].tableData" />
        </div>
        <div class="test" v-if="component.type === 'TABLE_2_COMPONENT'">
          <div class="test-color">TABLE_2_COMPONENT (zebra)</div>
          <TableZebraComponent :tableData="component.data[0].tableData" />
        </div>
        <div class="test" v-if="component.type === 'comp'">
          <div class="test-color">????</div>
          <ProfilVerejnehoSubPage
            :data="component.data[0].data"
            :links="component.data[0].links"
            :contact_person="component.data[0].contact_person"
          />
        </div>
        <div class="test" v-if="component.type === 'BANNER_COMPONENT'">
          <div class="test-color">
            BANNER
            <div class="icon-wrap">
              <div class="icon"></div>
              <div class="icon"></div>
              <div class="icon"></div>
              <span class="done">DONE</span>
            </div>
          </div>
          <BannerComponent :banner="component.data[0].info" />
        </div>
        <div class="test" v-if="component.type === 'DETAIL_OF_PLACE'">
          <div class="test-color">DETAIL_OF_PLACE</div>
          <DetailOfPlace :details="component.data[0].details" />
        </div>
        <div class="test" v-if="component.type === 'BREADCRUMBS'">
          <div class="test-color">BREADCRUMBS</div>
          <Breadcrumbs :routes="component.data[0].routes" />
        </div>
        <div class="test" v-if="component.type === 'QUESTIONS'">
          <div class="test-color">
            QUESTIONS
            <div class="icon-wrap">
              <div class="icon"></div>
              <div class="icon"></div>
              <div class="icon"></div>
              <span class="done">DONE</span>
            </div>
          </div>
          <QuestionsComponent :messages="component.data[0].messages" />
        </div>
        <div class="test" v-if="component.type === 'OZNAMY_CARD'">
          <div class="test-color">
            OZNAMY_CARD
            <div class="icon-wrap">
              <div class="icon"></div>
              <div class="icon"></div>
              <div class="icon"></div>
              <span class="done">DONE</span>
            </div>
          </div>
          <OznamyCard :items="component.data[0].items" />
        </div>
        <div class="test" v-if="component.type === 'SOCIAL_LINK'">
          <div class="test-color">SOCIAL_LINK</div>
          <SocialLink :links="component.data[0].links" />
        </div>
        <div class="test" v-if="component.type === 'SAME_TOPICS'">
          <div class="test-color">SAME_TOPICS</div>
          <SameTopics :links="component.data[0].links" />
        </div>
      </div>
    </div>

    <div v-else class="test">
      <div class="test-color">LOADER</div>
      <Loader />
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import ContentBox from "@/components/ContentBox.vue";
import TitlePage from "@/components/TitlePage.vue";
import FilesComponent from "@/components/FilesComponent.vue";
import MapComponent from "@/components/MapComponent.vue";
import ContactCard from "@/components/ContactCard.vue";
import GallerySlider from "@/components/GallerySlider.vue";
import Loader from "@/components/Loader.vue";
import AccordeonComponent from "@/components/AccordeonComponent.vue";
import StepperComponent from "@/components/StepperComponent.vue";
import SubPagesMenu from "@/components/SubPagesMenu.vue";
import TableComponent from "@/components/TableComponent.vue";
import TableZebraComponent from "@/components/TableZebraComponent.vue";
import ProfilVerejnehoSubPage from "@/components/ProfilVerejnehoSubPage.vue";
import BannerComponent from "@/components/BannerComponent.vue";
import DetailOfPlace from "@/components/DetailOfPlace.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import QuestionsComponent from "@/components/QuestionsComponent.vue";
import OznamyCard from "@/components/OznamyCard.vue";
import SocialLink from "@/components/SocialLink.vue";
import SameTopics from "@/components/SameTopics.vue";

export default {
  name: "ConstructorView",
  setup() {
    useMeta({
      title: "Domov",
      htmlAttrs: { lang: "sk", amp: true },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "N??rodn?? kooridn??tor pre zvy??ovanie bezpe??nosti cestnej prem??vky",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    });
  },
  data() {
    return {
      data: [
        // type: "TITLE_PAGE",
        {
          id: 1,
          type: "TITLE_PAGE",
          data: [{ id: 1, title: "Podujatia v meste" }],
        },
        // type: "CONTENT_BOX",
        {
          id: 2,
          type: "CONTENT_BOX",
          data: [
            {
              htmlText:
                "<div><h1>Mestsk?? vn??torn?? ochrana</h1><p>Mestsk?? vn??torn?? ochrana zabezpe??uje ??innosti najm?? v oblastiach: kontrola stavu majetku v d??le??it??ch objektoch a zariadeniach, fyzick?? ochrana majetku a os??b v d??le??it??ch objektoch a zariadeniach, informovanie n??v??tevn??kov v str????en??ch objektoch pr??stupn??ch verejnosti, re??imov?? opatrenia pri ochrane majetku, chrana osobn??ch ??dajov a utajovan??ch skuto??nost??, ochrana z??ujmov mesta na v??znamn??ch verejn??ch podujatiach a po??as mimoriadnych situ??ci??</p><h2>This is H2</h2><h3>This is H3</h3><h4>This is H4</h4><h5>This is H5</h5><h6>This is H6</h6></div ><div><p>This is P</p></div><ul><li>This is LI</li><li>This is LI again</li></ul><span>This is SPAN</span><br/><span>This is SPAN</span></div> ",
            },
          ],
        },
        // type: "CONTACT_CARD",
        {
          id: 3,
          type: "CONTACT_CARD",
          data: [
            {
              contacts: [
                {
                  isTitle: true,
                  name: "JUDr. Martin Galgoczy",
                  position: "ved??ci kancel??rie",
                  location: "Mestsk?? ??rad, 3. poschodie, kancel??ria ??. 314",
                },
                {
                  isTitle: false,
                  name: "JUDr. Martin Galgoczy",
                  position: "ved??ci kancel??rie",
                  location: "Mestsk?? ??rad, 3. poschodie, kancel??ria ??. 314",
                  phone: ["+421 56 6713 345"],
                  mobile: ["+421 56 6713 345"],
                  fax: ["+421 918 501 259"],
                  email: ["galgoczy@trebisov.sk"],
                },
              ],
            },
          ],
        },
        // type: "FILES_COMPONENT",
        {
          id: 4,
          type: "FILES_COMPONENT",
          data: [
            {
              files: [
                {
                  name: "Cenn??k slu??ieb poskytovan??ch mestom a mestsk??mi organiz??ciami - ????inn?? od 01.07.2022",
                  size: "299.15kB",
                  ext: "PDF",
                  urlFile: "/",
                },
                {
                  name: "Cenn??k slu??ieb poskytovan??ch Technick??mi slu??bami mesta Trebi??ov - ????inn?? od 01.07.2022",
                  size: "534 kB",
                  ext: "PDF",
                  urlFile: "/",
                },
              ],
            },
          ],
        },
        // type: "GALLERY_SLIDER",
        {
          id: 5,
          type: "GALLERY_SLIDER",
          data: [
            {
              images: [
                {
                  attributes: {
                    id: 1,
                    url: "https://picsum.photos/200/300",
                  },
                },
                {
                  attributes: {
                    id: 2,
                    url: "https://picsum.photos/seed/picsum/200/300",
                  },
                },
                {
                  attributes: {
                    id: 3,
                    url: "https://picsum.photos/200/300",
                  },
                },
                {
                  attributes: {
                    id: 4,
                    url: "https://picsum.photos/200/300?grayscale",
                  },
                },
                {
                  attributes: {
                    id: 5,
                    url: "https://picsum.photos/200/300",
                  },
                },
              ],
            },
          ],
        },
        // type: "MAP_COMPONENT",
        {
          id: 6,
          type: "MAP_COMPONENT",
          data: [
            {
              mapInfo: {
                name: "Mestsk?? ??rad",
                floor: "",
                street: "M. R. ??tef??nika 862/204",
                city: "075 25 Trebi??ov",
                mapUrl:
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.510204801416!2d21.714839729909027!3d48.61921805915961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47392ac828a6a2af%3A0xe9c581bb8eaabc11!2zTWVzdHNrw70gw7pyYWQ!5e0!3m2!1sru!2ssk!4v1668003475745!5m2!1sru!2ssk",
              },
            },
          ],
        },
        // type: "ACCORDEON_COMPONENT",
        {
          id: 7,
          type: "ACCORDEON_COMPONENT",
          data: [
            {
              data: [
                {
                  title: "Rok 2022",
                  isOpen: false,
                  children: [
                    {
                      name: "Mestsk?? infolist Trebi??ov - ??. 6/2022",
                      url: "@/assets/pdf/test.pdf",
                      ext: "PDF",
                      size: 181.32,
                    },
                    {
                      name: "Mestsk?? infolist Trebi??ov - ??. 5/2022",
                      url: "@/assets/pdf/test.pdf",
                      ext: "PDF",
                      size: 181.32,
                    },
                    {
                      name: "Mestsk?? infolist Trebi??ov - ??. 4/2022",
                      url: "@/assets/pdf/test.pdf",
                      ext: "PDF",
                      size: 181.32,
                    },
                    {
                      name: "Mestsk?? infolist Trebi??ov - ??. 3/2022",
                      url: "@/assets/pdf/test.pdf",
                      ext: "PDF",
                      size: 181.32,
                    },
                    {
                      name: "Mestsk?? infolist Trebi??ov - ??. 2/2022",
                      url: "@/assets/pdf/test.pdf",
                      ext: "PDF",
                      size: 181.32,
                    },
                    {
                      name: "Mestsk?? infolist Trebi??ov - ??. 1/2022",
                      url: "@/assets/pdf/test.pdf",
                      ext: "PDF",
                      size: 181.32,
                    },
                  ],
                },
                {
                  title: "Rok 2022",
                  isOpen: false,
                  children: [
                    {
                      name: "Mestsk?? infolist Trebi??ov - ??. 6/2022",
                      url: "@/assets/pdf/test.pdf",
                      ext: "PDF",
                      size: 181.32,
                    },
                    {
                      name: "Mestsk?? infolist Trebi??ov - ??. 5/2022",
                      url: "@/assets/pdf/test.pdf",
                      ext: "PDF",
                      size: 181.32,
                    },
                    {
                      name: "Mestsk?? infolist Trebi??ov - ??. 4/2022",
                      url: "@/assets/pdf/test.pdf",
                      ext: "PDF",
                      size: 181.32,
                    },
                    {
                      name: "Mestsk?? infolist Trebi??ov - ??. 3/2022",
                      url: "@/assets/pdf/test.pdf",
                      ext: "PDF",
                      size: 181.32,
                    },
                    {
                      name: "Mestsk?? infolist Trebi??ov - ??. 2/2022",
                      url: "@/assets/pdf/test.pdf",
                      ext: "PDF",
                      size: 181.32,
                    },
                    {
                      name: "Mestsk?? infolist Trebi??ov - ??. 1/2022",
                      url: "@/assets/pdf/test.pdf",
                      ext: "PDF",
                      size: 181.32,
                    },
                  ],
                },
              ],
            },
          ],
        },
        // type: "STEPPER_COMPONENT",
        {
          id: 8,
          type: "STEPPER_COMPONENT",
          data: [
            {
              steps: [
                {
                  name: "Podanie fin??lneho n??vrhu projektov",
                  date: "04 - 12/2022",
                  text: "s oh??adom na pandemick?? situ??ciu s??visiacu s COVID-19 a mo??nosti realiz??cie",
                  isOpen: false,
                },
                {
                  name: "Form??lna a obsahov?? kontrola n??vrhov",
                  date: "04 - 12/2022",
                  text: "s oh??adom na pandemick?? situ??ciu s??visiacu s COVID-19 a mo??nosti realiz??cie",
                  isOpen: false,
                },
                {
                  name: "Elektronick?? hlasovanie",
                  date: "04 - 12/2022",
                  text: "s oh??adom na pandemick?? situ??ciu s??visiacu s COVID-19 a mo??nosti realiz??cie",
                  isOpen: false,
                },
                {
                  name: "Vyhodnotenie a zverejnenie v??sledkov hlasovania",
                  date: "04 - 12/2022",
                  text: "s oh??adom na pandemick?? situ??ciu s??visiacu s COVID-19 a mo??nosti realiz??cie",
                  isOpen: false,
                },
                {
                  name: "Realiz??cia v????azn??ch projektov",
                  date: "04 - 12/2022",
                  text: "s oh??adom na pandemick?? situ??ciu s??visiacu s COVID-19 a mo??nosti realiz??cie",
                  isOpen: false,
                },
              ],
            },
          ],
        },
        // type: "SUBPAGES_MENU" (Vertical),
        {
          id: 9,
          type: "SUBPAGES_MENU",
          data: [
            {
              isVertical: true,
              subpages: [
                {
                  title: "Participat??vny rozpo??et",
                  route: "/participativny-rozpocet",
                },
                {
                  title: "Hlasovanie o participat??vnom rozpo??te mesta",
                  route: "/hlasovanie-o-participativnom-rozpocte-mesta",
                },
                {
                  title: "Hlasovanie o participat??vnom rozpo??te mesta",
                  route: "/hlasovanie-o-participativnom-rozpocte-mesta",
                },
              ],
            },
          ],
        },
        // type: "SUBPAGES_MENU",
        {
          id: 9,
          type: "SUBPAGES_MENU",
          data: [
            {
              isVertical: false,
              subpages: [
                {
                  title: "Participat??vny rozpo??et",
                  route: "/participativny-rozpocet",
                },
                {
                  title: "Hlasovanie o participat??vnom rozpo??te mesta",
                  route: "/hlasovanie-o-participativnom-rozpocte-mesta",
                },
                {
                  title: "Hlasovanie o participat??vnom rozpo??te mesta",
                  route: "/hlasovanie-o-participativnom-rozpocte-mesta",
                },
              ],
            },
          ],
        },
        // type: "TABLE_1_COMPONENT",
        {
          id: 10,
          type: "TABLE_1_COMPONENT",
          data: [
            {
              tableData: {
                columns: [
                  "D??tum",
                  "??iadan?? v????ka dot??cie",
                  "Schv??len?? v????ka dot??cie",
                  "V????ka ??erpanej dot??cie",
                  "rozdiel vr??ten??",
                ],
                items: [
                  {
                    date: "SLAVOJ TREBI??OV ??? futbal",
                    dotacia_1: "180 000,00",
                    dotacia_2: "122 575,00",
                    dotacia_3: "122 575,00",
                    back: "00",
                  },
                  {
                    date: "SLAVOJ TREBI??OV ??? futbal",
                    dotacia_1: "180 000,00",
                    dotacia_2: "122 575,00",
                    dotacia_3: "122 575,00",
                    back: "00",
                  },
                  {
                    date: "SLAVOJ TREBI??OV ??? futbal",
                    dotacia_1: "180 000,00",
                    dotacia_2: "122 575,00",
                    dotacia_3: "122 575,00",
                    back: "00",
                  },
                  {
                    date: "SLAVOJ TREBI??OV ??? futbal",
                    dotacia_1: "180 000,00",
                    dotacia_2: "122 575,00",
                    dotacia_3: "122 575,00",
                    back: "00",
                  },
                  {
                    date: "SLAVOJ TREBI??OV ??? futbal",
                    dotacia_1: "180 000,00",
                    dotacia_2: "122 575,00",
                    dotacia_3: "122 575,00",
                    back: "00",
                  },
                  {
                    date: "SLAVOJ TREBI??OV ??? futbal",
                    dotacia_1: "180 000,00",
                    dotacia_2: "122 575,00",
                    dotacia_3: "122 575,00",
                    back: "00",
                  },
                ],
              },
            },
          ],
        },
        // type: "TABLE_2_COMPONENT",
        {
          id: 11,
          type: "TABLE_2_COMPONENT",
          data: [
            {
              tableData: {
                columns: [
                  "D??tum",
                  "??iadan?? v????ka dot??cie",
                  "Schv??len?? v????ka dot??cie",
                  "V????ka ??erpanej dot??cie",
                  "rozdiel vr??ten??",
                ],
                items: [
                  {
                    date: "SLAVOJ TREBI??OV ??? futbal",
                    dotacia_1: "180 000,00",
                    dotacia_2: "122 575,00",
                    dotacia_3: "122 575,00",
                    back: "00",
                  },
                  {
                    date: "SLAVOJ TREBI??OV ??? futbal",
                    dotacia_1: "180 000,00",
                    dotacia_2: "122 575,00",
                    dotacia_3: "122 575,00",
                    back: "00",
                  },
                  {
                    date: "SLAVOJ TREBI??OV ??? futbal",
                    dotacia_1: "180 000,00",
                    dotacia_2: "122 575,00",
                    dotacia_3: "122 575,00",
                    back: "00",
                  },
                  {
                    date: "SLAVOJ TREBI??OV ??? futbal",
                    dotacia_1: "180 000,00",
                    dotacia_2: "122 575,00",
                    dotacia_3: "122 575,00",
                    back: "00",
                  },
                  {
                    date: "SLAVOJ TREBI??OV ??? futbal",
                    dotacia_1: "180 000,00",
                    dotacia_2: "122 575,00",
                    dotacia_3: "122 575,00",
                    back: "00",
                  },
                  {
                    date: "SLAVOJ TREBI??OV ??? futbal",
                    dotacia_1: "180 000,00",
                    dotacia_2: "122 575,00",
                    dotacia_3: "122 575,00",
                    back: "00",
                  },
                ],
              },
            },
          ],
        },
        // type: "comp",
        {
          id: 12,
          type: "comp",
          data: [
            {
              data: {
                verejny: "Technick?? slu??by mesta Trebi??ov",
                sidlo: "Stavebn?? 2165/2, 075 01 Trebi??ov",
                zastupca: "Ing. Imrich Fekete, riadite??",
                ico: "00188433",
                dic: "SK2020749951",
                phone: "+421 56 672 4039",
                fax: "+421 56 672 7773",
                email: "ts-info@trebisov.sk",
              },
              contact_person: {
                person: "Ing. Imrich Fekete",
                phone: "+421 905 527 468",
                email: "ts-fekete@trebisov.sk",
              },
              links: [
                {
                  text: "Ozn??menia a inform??cie zverej??ovan??  v profile verejn??ho obstar??vate??a pod??a z??kona ??. 25/2006 Z. z. o verejnom obstar??van?? v znen?? neskor????ch predpisov",
                  items: [
                    {
                      name: "S??hrnn?? spr??vy o z??kazk??ch pod??a ?? 9 ods. 9",
                    },
                    {
                      name: "S??hrnn?? spr??vy o z??kazk??ch z e-trhoviska",
                    },
                    {
                      name: "V??zvy na predlo??enie cenovej ponuky",
                    },
                  ],
                },
              ],
            },
          ],
        },
        // type: "BANNER_COMPONENT",
        {
          id: 13,
          type: "BANNER_COMPONENT",
          data: [
            {
              info: {
                title: "Lorem",
                label:
                  "Vitajte v 3. ro??n??ku  participat??vneho rozpo??tu mesta Trebi??ov!",
                width: "",
                height: "300px",
                urlImage: "https://picsum.photos/200/300",
                isClickable: true,
                urlLink: "https://www.lipsum.com/",
              },
            },
          ],
        },
        // type: "BANNER_COMPONENT",
        {
          id: 13,
          type: "BANNER_COMPONENT",
          data: [
            {
              info: {
                title: "Lorem",
                label: "",
                width: "",
                height: "300px",
                urlImage: "https://picsum.photos/200/300",
                isClickable: false,
                urlLink: "https://www.lipsum.com/",
              },
            },
          ],
        },
        // type: "DETAIL_OF_COMPONENT",
        {
          id: 14,
          type: "DETAIL_OF_PLACE",
          data: [
            {
              details: [
                {
                  title: "????slo:",
                  text: "177/2022",
                  link: "wwww.google.com",
                  file: [
                    {
                      name: "Cenn??k slu??ieb poskytovan??ch mestom a mestsk??mi organiz??ciami - ????inn?? od 01.07.2022",
                      size: "299.15kB",
                      ext: "PDF",
                      urlFile: "/",
                    },
                  ],
                },
              ],
            },
          ],
        },
        // type: "BREADCRUMBS",
        {
          id: 14,
          type: "BREADCRUMBS",
          data: [
            {
              routes: [
                {
                  name: "karty",
                  title: "Karty",
                },
                {
                  name: "senior-karta",
                  title: "Senior karta",
                },
                {
                  name: "socialna-pomoc",
                  title: "Soci??lna pomoc",
                },
              ],
            },
          ],
        },
        // type: "QUESTIONS",
        {
          id: 15,
          type: "QUESTIONS",
          data: [
            {
              messages: [
                {
                  question: {
                    name: "Viera Hriv????kov??",
                    date: "09.07.2022 17:23",
                    text: "M??m ot??zku na platenie poplatku za komun??lny odpad za ubytovan??ch Ukrajincov v TV v bytov??ch domoch. Mesto TV m?? inform??ciu, ktor??m vlastn??kom bytov poskytlo pr??spevok na b??vanie za ubytovan??ch. Platia vlastn??ci bytov mestu poplatok za ich komun??lny odpad? Urobilo mesto TV kontrolu, ??i vlastn??ci bytov zaplatili za ubytovan??ch, t.j. u????vate??ov prenajat??ch bytov aj poplatok za odpad? Ak nie, znamen?? to, ??e sa 'sklad??me' ostatn?? u????vatelia na poplatok, ktor?? s?? povinn?? zaplati?? vlastn??ci prenaj??man??ch bytov?",
                  },
                  answer: {
                    text: "Dobr?? de??,<br/><br/> ob??ania mesta Trebi??ov, ktor?? ubytovali cudzincov (s povolen??m prechodn??m pobytom na ??zem?? SR) si riadne splnili oznamovaciu povinnos?? v priebehu zda??ovacieho obdobia pod??a ustanovenia ?? 80 z??kona ??. 582/2004 Z. z. o miestnych daniach a miestnom poplatku za komun??lne odpady a drobn?? stavebn?? odpady v znen?? neskor????ch predpisov, jednak v KBV, ako aj v IBV.<br/><br/> ??o sa t??ka ob??anov, ktor?? maj?? status 'od??denec', tak nov?? pr??vna ??prava stanovuje, ??e tak??to osoba s pridelen??m do??asn??m ??to??iskom nebude, pod??a z??kona o miestnych daniach a miestnom poplatku, da??ovn??kom. Z??rove?? takejto osobe nevznikne oznamovacia povinnos?? k poplatku za komun??lne odpady.<br/><br/> Mgr. Erika Opryskov??<br/> referentka pre miestne dane",
                  },
                },
                {
                  question: {
                    name: "Viera Hriv????kov??",
                    date: "09.07.2022 17:23",
                    text: "M??m ot??zku na platenie poplatku za komun??lny odpad za ubytovan??ch Ukrajincov v TV v bytov??ch domoch. Mesto TV m?? inform??ciu, ktor??m vlastn??kom bytov poskytlo pr??spevok na b??vanie za ubytovan??ch. Platia vlastn??ci bytov mestu poplatok za ich komun??lny odpad? Urobilo mesto TV kontrolu, ??i vlastn??ci bytov zaplatili za ubytovan??ch, t.j. u????vate??ov prenajat??ch bytov aj poplatok za odpad? Ak nie, znamen?? to, ??e sa 'sklad??me' ostatn?? u????vatelia na poplatok, ktor?? s?? povinn?? zaplati?? vlastn??ci prenaj??man??ch bytov?",
                  },
                  answer: {
                    text: "Dobr?? de??,<br/><br/> ob??ania mesta Trebi??ov, ktor?? ubytovali cudzincov (s povolen??m prechodn??m pobytom na ??zem?? SR) si riadne splnili oznamovaciu povinnos?? v priebehu zda??ovacieho obdobia pod??a ustanovenia ?? 80 z??kona ??. 582/2004 Z. z. o miestnych daniach a miestnom poplatku za komun??lne odpady a drobn?? stavebn?? odpady v znen?? neskor????ch predpisov, jednak v KBV, ako aj v IBV.<br/><br/> ??o sa t??ka ob??anov, ktor?? maj?? status 'od??denec', tak nov?? pr??vna ??prava stanovuje, ??e tak??to osoba s pridelen??m do??asn??m ??to??iskom nebude, pod??a z??kona o miestnych daniach a miestnom poplatku, da??ovn??kom. Z??rove?? takejto osobe nevznikne oznamovacia povinnos?? k poplatku za komun??lne odpady.<br/><br/> Mgr. Erika Opryskov??<br/> referentka pre miestne dane",
                  },
                },
              ],
            },
          ],
        },
        // type: "OZNAMY_CARD",
        {
          id: 16,
          type: "OZNAMY_CARD",
          data: [
            {
              items: [
                {
                  name: "MUDr. J??n T??TH (???88)",
                  text: "Rozl????ka bude 17.8.2022 o 10.30 h na Mestskom cintor??ne v Trebi??ove. Gr??ckokatol??cky obrad.",
                },
                {
                  name: "MUDr. J??n T??TH (???88)",
                  text: "Rozl????ka bude 17.8.2022 o 10.30 h na Mestskom cintor??ne v Trebi??ove. Gr??ckokatol??cky obrad.",
                },
                {
                  name: "MUDr. J??n T??TH (???88)",
                  text: "Rozl????ka bude 17.8.2022 o 10.30 h na Mestskom cintor??ne v Trebi??ove. Gr??ckokatol??cky obrad.",
                },
                {
                  name: "MUDr. J??n T??TH (???88)",
                  text: "Rozl????ka bude 17.8.2022 o 10.30 h na Mestskom cintor??ne v Trebi??ove. Gr??ckokatol??cky obrad.",
                },
              ],
            },
          ],
        },
        // type: "SOCIAL_LINK",
        {
          id: 17,
          type: "SOCIAL_LINK",
          data: [
            {
              links: [
                {
                  url: "http://www.facebook.com",
                  name: "Facebook",
                },
                {
                  url: "http://www.facebook.com",
                  name: "Facebook",
                },
              ],
            },
          ],
        },
        // type: "SAME_TOPICS",
        {
          id: 18,
          type: "SAME_TOPICS",
          data: [
            {
              links: [
                {
                  url: "http://www.facebook.com",
                  name: "Facebook",
                },
                {
                  url: "http://www.facebook.com",
                  name: "Facebook",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  components: {
    ContentBox,
    TitlePage,
    FilesComponent,
    MapComponent,
    ContactCard,
    GallerySlider,
    Loader,
    AccordeonComponent,
    StepperComponent,
    SubPagesMenu,
    TableComponent,
    TableZebraComponent,
    ProfilVerejnehoSubPage,
    BannerComponent,
    DetailOfPlace,
    Breadcrumbs,
    QuestionsComponent,
    OznamyCard,
    SocialLink,
    SameTopics,
  },
  methods: {
    falseFunction(e, route) {
      if (!route) e.preventDefault();
    },
    top() {
      window.scrollTo({ top: 0, behavior: "auto" });
    },
  },
};
</script>

<style lang="scss" scoped>
.test {
  border: 2px solid #024497;
  margin-bottom: 30px;
}

.test-color {
  position: relative;
  display: block;
  padding-left: 20px;
  color: white;
  background-color: #024497;
  border: 2px dotted red;
}

.icon-wrap {
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(0, -50%);
}
.icon {
  width: 10px;
  height: 20px;
  background-color: greenyellow;
  // border-radius: 50%;
  margin-right: 10px;
}

.done {
  font-weight: 700;
  color: greenyellow;
}
</style>
