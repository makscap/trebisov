<template>
  <div class="govuk-width-container">
    <div class="content">
      <div class="box">
        <!-- LOGIN -->
        <div class="form_box" v-if="isLoginForm && !isForgotPassword">
          <form class="form">
            <h1 class="title">Prihlásenie</h1>
            <div class="label">
              Registráciou získate prístup do diskusného fóra.
            </div>

            <div class="govuk-form-group">
              <label class="govuk-label" for="email">
                Prihlasovacie meno alebo e-mail
              </label>
              <input class="govuk-input" id="email" name="email" type="email" />
            </div>

            <div class="govuk-form-group">
              <label class="govuk-label" for="password-repeat"> Heslo </label>
              <input
                class="govuk-input"
                id="password-repeat"
                name="password-repeat"
                type="text"
              />
            </div>

            <div class="button-box">
              <button
                class="button-forget-pass"
                @click.prevent="this.isForgotPassword = !this.isForgotPassword"
              >
                Zabudol som heslo
              </button>
            </div>

            <button
              type="submit"
              class="idsk-button submit-table-filter button-main"
            >
              Prihlásiť sa
            </button>
          </form>
          <button
            class="button-toogle"
            @click.prevent="this.isLoginForm = !this.isLoginForm"
          >
            Zaregistrujte sa
          </button>
        </div>

        <!-- REGISTRATION -->
        <div class="form_box" v-if="!isLoginForm && !isForgotPassword">
          <form class="form">
            <h1 class="title">Registrácia</h1>
            <div class="label">
              Registráciou získate prístup do diskusného fóra.
            </div>

            <div class="govuk-form-group">
              <label class="govuk-label" for="fullName">
                Meno a priezvisko
              </label>
              <input
                class="govuk-input"
                id="fullName"
                name="fullName"
                type="text"
              />
            </div>

            <div class="govuk-form-group">
              <label class="govuk-label" for="nickname">
                Uživateľské meno/Prezývka
              </label>
              <input
                class="govuk-input"
                id="nickname"
                name="nickname"
                type="text"
              />
            </div>

            <div class="govuk-form-group">
              <label class="govuk-label" for="email"> E-mail </label>
              <input class="govuk-input" id="email" name="email" type="email" />
            </div>

            <div class="govuk-form-group">
              <label class="govuk-label" for="password">
                Zopakujte heslo
              </label>
              <input
                class="govuk-input"
                id="password"
                name="password"
                type="text"
              />
            </div>

            <div class="govuk-form-group">
              <label class="govuk-label" for="password-repeat"> Heslo </label>
              <input
                class="govuk-input"
                id="password-repeat"
                name="password-repeat"
                type="text"
              />
            </div>

            <div class="govuk-form-group">
              <div class="govuk-checkboxes">
                <div class="govuk-checkboxes__item">
                  <input
                    class="govuk-checkboxes__input"
                    id="checkbox-sms"
                    name="sms"
                    type="checkbox"
                    value="sms"
                  />
                  <label
                    class="govuk-label govuk-checkboxes__label"
                    for="checkbox-sms"
                  >
                    Chcem byť kontaktovaný SMS správou
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              class="idsk-button submit-table-filter button-main"
            >
              Registrovať
            </button>
          </form>

          <span>Nemáte ešte vytvorený účet?</span>
          <button
            class="button-toogle"
            @click.prevent="this.isLoginForm = !this.isLoginForm"
          >
            Späť na prihlásenie
          </button>
        </div>

        <!-- FORGET PASSWORD -->
        <div class="form_box" v-if="isForgotPassword && !isSendPassword">
          <form class="form">
            <h1 class="title">Zabudli ste heslo?</h1>
            <div class="label">
              Zadajte e-mail, na ktorý Vám pošleme inštrukcie <br />k nastaveniu
              nového hesla..
            </div>

            <div class="govuk-form-group">
              <label class="govuk-label" for="email"> E-mail </label>
              <input class="govuk-input" id="email" name="email" type="email" />
            </div>

            <button
              @click.prevent="this.isSendPassword = true"
              type="submit"
              class="idsk-button submit-table-filter button-main"
            >
              Odoslať heslo
            </button>
          </form>

          <button
            class="button-toogle"
            @click.prevent="this.isForgotPassword = !this.isForgotPassword"
          >
            Späť na prihlásenie
          </button>
        </div>

        <!-- FORGET PASSWORD SENT -->
        <div class="form_box" v-if="isForgotPassword && isSendPassword">
          <form class="form">
            <h1 class="title">Email odoslaný</h1>
            <div class="label">
              Na e-mail janko-mrkvička@gmail.com sme poslali <br />
              inštrukcie k nastaveniu nového hesla.
            </div>

            <button
              @click.prevent="
                this.isSendPassword = false;
                this.isForgotPassword = false;
                this.isLoginForm = true;
              "
              type="submit"
              class="idsk-button submit-table-filter button-main"
            >
              Späť na prihlásenie
            </button>
          </form>

          <span>Nedostali ste e-mail? </span>
          <button
            class="button-toogle"
            @click.prevent="this.isSendPassword = false"
          >
            Vyžiadať e-mail znova.
          </button>
        </div>

        <!-- FORGET PASSWORD -->
        <!-- <div class="form_box">
      <form class="form">
       <h1 class="title">Vytvorenie nového hesla</h1>

        <div class="govuk-form-group">
          <label class="govuk-label" for="password"> Nové heslo </label>
          <input
            class="govuk-input"
            id="password"
            name="password"
            type="text"
          />
        </div>
        <div class="govuk-form-group">
          <label class="govuk-label" for="password-repeat">
            Potvrdiť nové heslo
          </label>
          <input
            class="govuk-input"
            id="password-repeat"
            name="password-repeat"
            type="text"
          />
        </div>

        <button
          type="submit"
          class="idsk-button submit-table-filter button-main"
        >
          Uložiť
        </button>
      </form>
      <button class="button-toogle" @click.prevent="">
        Späť na prihlásenie
      </button>
    </div> -->

        <!-- FORGET PASSWORD SENT -->
        <!-- <div class="form_box">
      <form class="form form-no-border">
        <div class="logo-box">
          <div class="logo-circle">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2913_64827)">
                <path
                  d="M11.25 20.2109L6.91255 15.8734C6.42505 15.3859 5.63755 15.3859 5.15005 15.8734C4.66255 16.3609 4.66255 17.1484 5.15005 17.6359L10.375 22.8609C10.8625 23.3484 11.65 23.3484 12.1375 22.8609L25.3626 9.63594C25.85 9.14844 25.85 8.36094 25.3626 7.87344C24.8751 7.38594 24.0875 7.38594 23.6 7.87344L11.25 20.2109Z"
                  fill="#024497"
                  stroke="#024497"
                  stroke-width="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_2913_64827">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <h2 class="title">Nové heslo bolo úspešne<br />vytvorené!</h2>
        <div class="label">
          Možete sa prihlásiť s Vašim novým heslom <br />kliknutím na tlačilo
          nižšie
        </div>

        <button
          @click.prevent="
            this.isSendPassword = false;
            this.isForgotPassword = false;
            this.isLoginForm = true;
          "
          type="submit"
          class="idsk-button submit-table-filter button-main"
        >
          Pokračovať na prihlásenie
        </button>
      </form>
    </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthView",
  data() {
    return {
      isAuth: [],
      isLoginForm: false,
      isSendPassword: false,
      isForgotPassword: false,
    };
  },
  methods: {},
  props: {},
};
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form_box {
  width: 628px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background: #ffffff;
  padding-top: 70px;
  padding-bottom: 50px;
}
.form {
  width: 360px;
  padding: 0px 50px;
  border-bottom: 1px solid #bfc1c3;
  margin-bottom: 21px;
}

.form-no-border {
  border-bottom: none;
}

.title {
  text-align: center;
}

.label {
  margin-bottom: 27px !important;
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #0b0c0c;
}

.button-main {
  width: 100% !important;
}

.button-toogle {
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  text-decoration: underline;
  color: #0065b3;
  background-color: #ffffff;
  cursor: pointer;
}
.button-forget-pass {
  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  background-color: #ffffff;
  cursor: pointer;
  text-decoration: underline;

  font-weight: 400;
  font-size: 19px;
  line-height: 25px;
  color: #0065b3;
}

.button-box {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
}

.logo-box {
  display: flex;
  justify-content: center;
}
.logo-circle {
  width: 54px;
  height: 54px;
  background-color: #f3f2f1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
