<template>
  <section class="settings">
    <div class="container">
      <h2 class="settings__title">Параметры</h2>
      <div class="settings__inner">
        <SwiperCarousel />
        <div class="settings__choose">
          <div class="settings__choose-choise">
            <label>
              <input name="ra" class="radio__box" type="radio" checked />
              <span class="radio__style"></span>
              Прямой
            </label>
            <label>
              <input name="ra" class="radio__box" type="radio" />
              <span class="radio__style"></span>
              Угловой
            </label>
          </div>
          <div class="setting__choose-pick">
            <div class="setting__choose-view">
              <span class="settings__choose-span">Вид:</span>
              <div class="select">
                <select
                  class="setting__choose-select setting__choose-select--view"
                >
                  <option class="setting__choose-option">Со вставками</option>
                  <option class="setting__choose-option">Без вставок</option>
                  <option class="setting__choose-option">С подушками</option>
                  <option class="setting__choose-option">Без подушек</option>
                </select>
              </div>
            </div>
            <form class="setting__choose-width">
              <span class="settings__choose-span">Ширина:</span>
              <!-- <div class="select">
                <select class="setting__choose-select setting__choose-select--width">
                  <option class="setting__choose-option">210</option>
                  <option class="setting__choose-option">220</option>
                  <option class="setting__choose-option">230</option>
                  <option class="setting__choose-option">240</option>
                </select>
              </div> -->
              <input
                class="setting__choose-input"
                onkeyup=""
                id="input-id"
                type="number"
                placeholder="200см - 500см"
              />
            </form>
          </div>
          <div class="settings__choose-material">
            <span class="settings__choose-span">Материал:</span>
            <label>
              <input name="rb" class="radio__box" type="radio" checked />
              <span class="radio__style"></span>
              Seul
            </label>
            <label>
              <input name="rb" class="radio__box" type="radio" />
              <span class="radio__style"></span>
              Santa
            </label>
            <label>
              <input name="rb" class="radio__box" type="radio" />
              <span class="radio__style"></span>
              Alkantara
            </label>
          </div>
          <div class="settings__choose-clr">
            <span class="settings__choose-span">Цвет:</span>
            <div class="settings__choose-colors">
              <div
                class="settings__choose-color"
                v-for="(item, index) in items"
                :key="index"
                id="ivory"
                :style="{ backgroundColor: item.color, border: item.border }"
                data-hex="#EBD4B5"
                @click="
                  pickColor(item.color);
                  pickBorder(index);
                "
              ></div>
            </div>
          </div>
          <div class="settings__choose-type">
            <span class="settings__choose-span">Подлокотник с ламинатом:</span>
            <label>
              <input name="rc" class="radio__box" type="radio" />
              <span class="radio__style"></span>
              Без
            </label>
            <label>
              <input name="rc" class="radio__box" type="radio" />
              <span class="radio__style"></span>
              Овальный
            </label>
            <label>
              <input name="rc" class="radio__box" type="radio" checked />
              <span class="radio__style"></span>
              Прямой
            </label>
          </div>

          <div class="settings__choose-clr">
            <span class="settings__choose-span">Цвет подлокотника:</span>
            <div class="settings__choose-colors-1">
              <div
                class="settings__choose-color-1"
                v-for="(secondItem, index) in secondItems"
                :key="index"
                id="lighFirst"
                :style="{
                  backgroundColor: secondItem.color,
                  border: secondItem.border,
                }"
                data-hex="#EBD4B5"
                @click="
                  pickColorSecond(secondItem.color);
                  pickBorderSecond(index);
                "
              ></div>
            </div>
          </div>

          <form class="settings__choose-form">
            <div class="settings__choose-input">
              <span class="settings__choose-span">Адрес клиента:</span>
              <input class="input" type="text" />
            </div>
            <div class="settings__choose-input">
              <span class="settings__choose-span">Номер клиента:</span>
              <input class="input" type="number" />
            </div>
            <div class="price">
              <span class="price__span">Цена:</span>
              <span class="price__span">151 500 KZT</span>
            </div>
            <div class="settings__choose-button">
              <button class="settings__choose-btn" type="submit">
                Отправить клиенту
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SwiperCarouselVue from "@/components/SwiperCarousel.vue";
export default {
  name: "App",
  components: {
    SwiperCarousel: SwiperCarouselVue,
  },
};
</script>

<style lang="scss">
.settings__inner{
  display: flex;
}
.div{
  width: 800px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  img{
    width: 250px;
  }
} 

</style>