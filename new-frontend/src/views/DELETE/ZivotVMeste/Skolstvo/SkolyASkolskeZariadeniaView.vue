<template>
  <div class="govuk-width-container">
    <div class="content">
      <h1 class="govuk-heading-l">Školy a školské zariadenia Trebišov</h1>
      <div class="govuk-accordion">
        <div
          v-for="(item, ind) in archive"
          :key="ind"
          class="govuk-accordion__section list"
        >
          <div class="govuk-accordion__section-header">
            <div class="govuk-accordion__section-heading">
              <button
                type="button"
                class="govuk-accordion__section-button blue"
                @click="toggleAccordion(item)"
              >
                {{ item.title }}

                <span class="icon">
                  <svg
                    v-if="!item.isOpen"
                    class="icon_plus"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 10.2598H10.25V16.5098C10.25 17.1973 9.6875 17.7598 9 17.7598C8.3125 17.7598 7.75 17.1973 7.75 16.5098V10.2598H1.5C0.8125 10.2598 0.25 9.69727 0.25 9.00977C0.25 8.32227 0.8125 7.75977 1.5 7.75977H7.75V1.50977C7.75 0.822266 8.3125 0.259766 9 0.259766C9.6875 0.259766 10.25 0.822266 10.25 1.50977V7.75977H16.5C17.1875 7.75977 17.75 8.32227 17.75 9.00977C17.75 9.69727 17.1875 10.2598 16.5 10.2598Z"
                      fill="#0B0C0C"
                    />
                  </svg>

                  <svg
                    v-if="item.isOpen"
                    class="icon_plus"
                    width="18"
                    height="4"
                    viewBox="0 0 18 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 3.25977H1.5C0.8125 3.25977 0.25 2.69727 0.25 2.00977C0.25 1.32227 0.8125 0.759766 1.5 0.759766H16.5C17.1875 0.759766 17.75 1.32227 17.75 2.00977C17.75 2.69727 17.1875 3.25977 16.5 3.25977Z"
                      fill="#0B0C0C"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div>
            <div
              v-for="(link, i) in item.children"
              :key="i"
              :class="
                item.isOpen
                  ? 'govuk-accordion__section'
                  : 'govuk-accordion__section-content'
              "
            >
              <div class="links_group">
                <div>
                  <ul class="list-none m-0 p-0">
                    <li class="item">
                      <div class="name">Adresa:</div>
                      <div class="info">
                        {{ link.location }}
                      </div>
                    </li>
                    <li class="item">
                      <div class="name">IČO:</div>
                      <div class="info">{{ link.ico }}</div>
                    </li>
                    <li class="item">
                      <div class="name">Dátum zriadenia</div>
                      <div class="info">
                        {{ link.date }}
                      </div>
                    </li>
                    <li class="item">
                      <div class="name">Riaditeľ:</div>
                      <div class="info">
                        {{ link.riaditel }}
                      </div>
                    </li>
                    <li class="item">
                      <div class="name">Zástupkyňa:</div>
                      <div class="info">
                        {{ link.zastupkyna[0] }}
                      </div>
                    </li>
                    <li class="item">
                      <div class="name">Zástupkyňa:</div>
                      <div class="info">
                        {{ link.zastupkyna[1] }}
                      </div>
                    </li>
                    <li class="item">
                      <div class="name">Školský obvod:</div>
                      <div class="info">
                        {{ link.obvod }}
                      </div>
                    </li>
                    <li class="item">
                      <div class="name">Telefón:</div>
                      <div class="info">
                        {{ link.phone }}
                      </div>
                    </li>
                    <li class="item">
                      <div class="name">Fax:</div>
                      <div class="info">
                        {{ link.fax }}
                      </div>
                    </li>
                    <li class="item">
                      <div class="name">E-mail:</div>
                      <div class="info">
                        <a
                          :href="'mailto:' + link.email"
                          class="contact_link"
                          >{{ link.email }}</a
                        >
                      </div>
                    </li>
                    <li class="item">
                      <div class="name">Web:</div>
                      <div class="info">
                        <a
                          :href="link.site"
                          target="_blank"
                          :title="link.site"
                          class="govuk-link-custom link"
                        >
                          {{ link.site }}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <p class="govuk-body"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";

export default {
  name: "SkolyASkolskeZariadeniaView",
  data() {
    return {
      isOpen: [],
      archive: [
        {
          title: "Základná škola Komenského",
          isOpen: false,
          children: [
            {
              location: "Komenského 1962/8, 075 01 Trebišov",
              ico: "35541075",
              date: "7.11.1987",
              riaditel: "Mgr. Radoslav Ujhelyi",
              zastupkyna: ["Mgr. Adriana Kohanová", "Mgr. Danka Štefanková"],
              obvod:
                "Komenského, Čeľovská, Jonáša Záborského, Stavebná, Janka Kráľa, Kalinčiakova, Slovenská, Svätoplukova, Konečná, Krajná, 17. novembra, Dopravná, Šafárikova, T. G. Masaryka, Ľ. Podjavorinskej, Letná, Puškinova, Sládkovičova, Kutnohorská, A. Dubčeka, Tržná, Zimná a žiaci z obcí Nový Ruskov, Plechotice, Zemplínska Nová Ves, Egreš, Čeľovce",
              phone: "+421 56 672 7387",
              fax: "+421 56 672 7387",
              email: "skola@zskomtv.edu.sk",
              site: "www.zskomtv.sk",
            },
          ],
        },
        {
          title: "Základná škola Pribinova",
          isOpen: false,
          children: [
            {
              location: "Komenského 1962/8, 075 01 Trebišov",
              ico: "35541075",
              date: "7.11.1987",
              riaditel: "Mgr. Radoslav Ujhelyi",
              zastupkyna: ["Mgr. Adriana Kohanová", "Mgr. Danka Štefanková"],
              obvod:
                "Komenského, Čeľovská, Jonáša Záborského, Stavebná, Janka Kráľa, Kalinčiakova, Slovenská, Svätoplukova, Konečná, Krajná, 17. novembra, Dopravná, Šafárikova, T. G. Masaryka, Ľ. Podjavorinskej, Letná, Puškinova, Sládkovičova, Kutnohorská, A. Dubčeka, Tržná, Zimná a žiaci z obcí Nový Ruskov, Plechotice, Zemplínska Nová Ves, Egreš, Čeľovce",
              phone: "+421 56 672 7387",
              fax: "+421 56 672 7387",
              email: "skola@zskomtv.edu.sk",
              site: "www.zskomtv.sk",
            },
          ],
        },
        {
          title: "Základná škola M. R. Štefánika",
          isOpen: false,
          children: [
            {
              location: "Komenského 1962/8, 075 01 Trebišov",
              ico: "35541075",
              date: "7.11.1987",
              riaditel: "Mgr. Radoslav Ujhelyi",
              zastupkyna: ["Mgr. Adriana Kohanová", "Mgr. Danka Štefanková"],
              obvod:
                "Komenského, Čeľovská, Jonáša Záborského, Stavebná, Janka Kráľa, Kalinčiakova, Slovenská, Svätoplukova, Konečná, Krajná, 17. novembra, Dopravná, Šafárikova, T. G. Masaryka, Ľ. Podjavorinskej, Letná, Puškinova, Sládkovičova, Kutnohorská, A. Dubčeka, Tržná, Zimná a žiaci z obcí Nový Ruskov, Plechotice, Zemplínska Nová Ves, Egreš, Čeľovce",
              phone: "+421 56 672 7387",
              fax: "+421 56 672 7387",
              email: "skola@zskomtv.edu.sk",
              site: "www.zskomtv.sk",
            },
          ],
        },
        {
          title: "Základná škola I. Krasku",
          isOpen: false,
          children: [
            {
              location: "Komenského 1962/8, 075 01 Trebišov",
              ico: "35541075",
              date: "7.11.1987",
              riaditel: "Mgr. Radoslav Ujhelyi",
              zastupkyna: ["Mgr. Adriana Kohanová", "Mgr. Danka Štefanková"],
              obvod:
                "Komenského, Čeľovská, Jonáša Záborského, Stavebná, Janka Kráľa, Kalinčiakova, Slovenská, Svätoplukova, Konečná, Krajná, 17. novembra, Dopravná, Šafárikova, T. G. Masaryka, Ľ. Podjavorinskej, Letná, Puškinova, Sládkovičova, Kutnohorská, A. Dubčeka, Tržná, Zimná a žiaci z obcí Nový Ruskov, Plechotice, Zemplínska Nová Ves, Egreš, Čeľovce",
              phone: "+421 56 672 7387",
              fax: "+421 56 672 7387",
              email: "skola@zskomtv.edu.sk",
              site: "www.zskomtv.sk",
            },
          ],
        },
        {
          title: "Cirkevná základná škola s materskou školu sv. Juraja",
          isOpen: false,
          children: [
            {
              location: "Komenského 1962/8, 075 01 Trebišov",
              ico: "35541075",
              date: "7.11.1987",
              riaditel: "Mgr. Radoslav Ujhelyi",
              zastupkyna: ["Mgr. Adriana Kohanová", "Mgr. Danka Štefanková"],
              obvod:
                "Komenského, Čeľovská, Jonáša Záborského, Stavebná, Janka Kráľa, Kalinčiakova, Slovenská, Svätoplukova, Konečná, Krajná, 17. novembra, Dopravná, Šafárikova, T. G. Masaryka, Ľ. Podjavorinskej, Letná, Puškinova, Sládkovičova, Kutnohorská, A. Dubčeka, Tržná, Zimná a žiaci z obcí Nový Ruskov, Plechotice, Zemplínska Nová Ves, Egreš, Čeľovce",
              phone: "+421 56 672 7387",
              fax: "+421 56 672 7387",
              email: "skola@zskomtv.edu.sk",
              site: "www.zskomtv.sk",
            },
          ],
        },
        {
          title: "Materská škola Komenského",
          isOpen: false,
          children: [
            {
              location: "Komenského 1962/8, 075 01 Trebišov",
              ico: "35541075",
              date: "7.11.1987",
              riaditel: "Mgr. Radoslav Ujhelyi",
              zastupkyna: ["Mgr. Adriana Kohanová", "Mgr. Danka Štefanková"],
              obvod:
                "Komenského, Čeľovská, Jonáša Záborského, Stavebná, Janka Kráľa, Kalinčiakova, Slovenská, Svätoplukova, Konečná, Krajná, 17. novembra, Dopravná, Šafárikova, T. G. Masaryka, Ľ. Podjavorinskej, Letná, Puškinova, Sládkovičova, Kutnohorská, A. Dubčeka, Tržná, Zimná a žiaci z obcí Nový Ruskov, Plechotice, Zemplínska Nová Ves, Egreš, Čeľovce",
              phone: "+421 56 672 7387",
              fax: "+421 56 672 7387",
              email: "skola@zskomtv.edu.sk",
              site: "www.zskomtv.sk",
            },
          ],
        },
        {
          title: "Materská škola Škultétyho",
          isOpen: false,
          children: [
            {
              location: "Komenského 1962/8, 075 01 Trebišov",
              ico: "35541075",
              date: "7.11.1987",
              riaditel: "Mgr. Radoslav Ujhelyi",
              zastupkyna: ["Mgr. Adriana Kohanová", "Mgr. Danka Štefanková"],
              obvod:
                "Komenského, Čeľovská, Jonáša Záborského, Stavebná, Janka Kráľa, Kalinčiakova, Slovenská, Svätoplukova, Konečná, Krajná, 17. novembra, Dopravná, Šafárikova, T. G. Masaryka, Ľ. Podjavorinskej, Letná, Puškinova, Sládkovičova, Kutnohorská, A. Dubčeka, Tržná, Zimná a žiaci z obcí Nový Ruskov, Plechotice, Zemplínska Nová Ves, Egreš, Čeľovce",
              phone: "+421 56 672 7387",
              fax: "+421 56 672 7387",
              email: "skola@zskomtv.edu.sk",
              site: "www.zskomtv.sk",
            },
          ],
        },
        {
          title: "Materská škola Hviezdoslavova",
          isOpen: false,
          children: [
            {
              location: "Komenského 1962/8, 075 01 Trebišov",
              ico: "35541075",
              date: "7.11.1987",
              riaditel: "Mgr. Radoslav Ujhelyi",
              zastupkyna: ["Mgr. Adriana Kohanová", "Mgr. Danka Štefanková"],
              obvod:
                "Komenského, Čeľovská, Jonáša Záborského, Stavebná, Janka Kráľa, Kalinčiakova, Slovenská, Svätoplukova, Konečná, Krajná, 17. novembra, Dopravná, Šafárikova, T. G. Masaryka, Ľ. Podjavorinskej, Letná, Puškinova, Sládkovičova, Kutnohorská, A. Dubčeka, Tržná, Zimná a žiaci z obcí Nový Ruskov, Plechotice, Zemplínska Nová Ves, Egreš, Čeľovce",
              phone: "+421 56 672 7387",
              fax: "+421 56 672 7387",
              email: "skola@zskomtv.edu.sk",
              site: "www.zskomtv.sk",
            },
          ],
        },
        {
          title: "Základná umelecká škola",
          isOpen: false,
          children: [
            {
              location: "Komenského 1962/8, 075 01 Trebišov",
              ico: "35541075",
              date: "7.11.1987",
              riaditel: "Mgr. Radoslav Ujhelyi",
              zastupkyna: ["Mgr. Adriana Kohanová", "Mgr. Danka Štefanková"],
              obvod:
                "Komenského, Čeľovská, Jonáša Záborského, Stavebná, Janka Kráľa, Kalinčiakova, Slovenská, Svätoplukova, Konečná, Krajná, 17. novembra, Dopravná, Šafárikova, T. G. Masaryka, Ľ. Podjavorinskej, Letná, Puškinova, Sládkovičova, Kutnohorská, A. Dubčeka, Tržná, Zimná a žiaci z obcí Nový Ruskov, Plechotice, Zemplínska Nová Ves, Egreš, Čeľovce",
              phone: "+421 56 672 7387",
              fax: "+421 56 672 7387",
              email: "skola@zskomtv.edu.sk",
              site: "www.zskomtv.sk",
            },
          ],
        },
        {
          title: "Centrum voľného času",
          isOpen: false,
          children: [
            {
              location: "Komenského 1962/8, 075 01 Trebišov",
              ico: "35541075",
              date: "7.11.1987",
              riaditel: "Mgr. Radoslav Ujhelyi",
              zastupkyna: ["Mgr. Adriana Kohanová", "Mgr. Danka Štefanková"],
              obvod:
                "Komenského, Čeľovská, Jonáša Záborského, Stavebná, Janka Kráľa, Kalinčiakova, Slovenská, Svätoplukova, Konečná, Krajná, 17. novembra, Dopravná, Šafárikova, T. G. Masaryka, Ľ. Podjavorinskej, Letná, Puškinova, Sládkovičova, Kutnohorská, A. Dubčeka, Tržná, Zimná a žiaci z obcí Nový Ruskov, Plechotice, Zemplínska Nová Ves, Egreš, Čeľovce",
              phone: "+421 56 672 7387",
              fax: "+421 56 672 7387",
              email: "skola@zskomtv.edu.sk",
              site: "www.zskomtv.sk",
            },
          ],
        },
      ],
    };
  },
  components: {},
  setup() {
    useMeta({
      title: "Domov",
      htmlAttrs: { lang: "sk", amp: true },
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "Národný kooridnátor pre zvyšovanie bezpečnosti cestnej premávky",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    });
  },

  mounted() {},
  methods: {
    toggleAccordion(item) {
      if (item.isOpen) {
        this.archive.forEach((el) => {
          el.isOpen = false;
        });
      } else {
        this.archive.forEach((el) => {
          el.isOpen = false;
        });
        item.isOpen = true;
      }
    },
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
.my-list {
  display: flex;
}
.main-box {
  // width: 75%;
  margin-bottom: 50px;
}

.title {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}

.text {
  margin-bottom: 30px;
}

.links_group {
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  color: #0b0c0c;
}

.date {
  margin-right: 16px;
}

.link {
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
  color: #0065b3 !important;
}

.link_size {
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
}

.icon {
  position: absolute;
  top: 50%;
  right: 15px;
  width: 16px;
  height: 16px;
  margin-top: -8px;
  // transform: translate(-50%, -50%);
}

.icon_plus {
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
}

.icon_min {
  box-sizing: border-box;
  position: absolute;
}

.name {
  width: 240px;
  font-weight: 700;
}

.info {
  flex: 1;
}

.item {
  width: 100%;
  display: flex;
}
</style>
