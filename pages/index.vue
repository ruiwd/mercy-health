<template>
  <main id="home">
    <section class="hero">
      <a-carousel :draggable="true" autoplay :autoplay-speed="5000" dotPosition="right" effect="fade">
        <!-- <div class="heroSlide slide1"></div> -->
        <div class="heroSlide slide2">
          <div class="txtContainer">
            <h2 data-aos="fade-up">Mercy Health</h2>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, doloribus porro. Delectus quidem dolores unde quis id accusantium animi sed consequatur, voluptates ea quos, et, numquam porro? Consequuntur, totam aut!
            </p>
          </div>
        </div>
        <div class="heroSlide slide3">
          <div class="txtContainer">
            <h2 data-aos="fade-up">Health Mercy</h2>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perferendis, tenetur iure modi culpa laborum eum dignissimos nihil iste architecto ad consequatur, ex, quibusdam veniam.
            </p>
          </div>
        </div>
        <!-- <div class="heroSlide slide4">
          <div class="txtContainer">
            <h2 data-aos="fade-up">Merth Healcy</h2>
            <p data-aos="fade-up">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere explicabo tempore quod, error esse labore dolor sunt! Nesciunt excepturi laborum asperiores, maxime officia libero dolores quisquam aliquid quaerat doloribus, repellendus soluta odio non dolore totam voluptatibus aut possimus obcaecati. Voluptatum.
            </p>
          </div>
        </div> -->
      </a-carousel>
      <!-- <div class="heroSlide slide1"></div> -->
    </section>
    <section class="whyUs">
      <div class="wrapper">
        <a-row :gutter="[24,24]" type="flex">
          <a-col :sm="{span: 24}" :md="{span: 12}">
            <div class="txtContainer">
              <h2 data-aos="fade-up">About Us</h2>
              <h3 data-aos="fade-up">Who are we?</h3>
              <p data-aos="fade-up">
                MERCY HEALTH TRADE CO.,LTD.is a wholly-owned subsidiary newly incorporated by Shanghai Ciyuan Rehabilitation Hospital Co.,Ltd.in Canada. By virtue of the mother company in China, MERCY HEALTH TRADE CO.,LTD.will be incorporated in Abbots ford,British Columbia, Canada,With the philosophy and tenet of Reshaping Life,Returning to Whatever Cherished,the company will adhere to the mission of Accurate Rehabilitation, Century-old Ciyuan, take Considerate Service, Brand Alliance, Creation of Health and Pursuit of Excellence as its development strategy and be dedicated to providing higher quality, more efficient and convenient rehabilitation and treatment products and services for people in need of functional rehabilitation in both China and Canada.
              </p>
              <br>
              <div data-aos="fade-up">
                <nuxt-link to="/about" class="btn">
                  Read More
                </nuxt-link>
              </div>
            </div>
          </a-col>
          <a-col :sm="{span: 24}" :md="{span: 12}">
            <div data-aos="fade-up" class="imgContainer">
              <img src="/img/home/aboutImg.jpg" alt="Mercy Health">
            </div>
          </a-col>
        </a-row>
      </div>
    </section>
    <section class="opportunities">
      
    </section>
  </main>
</template>

<script>
// import Vue from 'vue'
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  mounted() {
    AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  })
  }
}
</script>

<style lang="scss" scoped>
#home {
  height: 150vh;

  h1 {
    color: $green;
  }

  .hero {
    .heroSlide {
      height: 600px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      
      .txtContainer {
        height: 100%;
        width: 50%;
        background-color: rgba(white, 0.4);
        display: flex;
        flex-direction: column;
        padding: 50px;

        h2 {
          max-width: 300px;
          font-size: 35px;
          font-weight: bold;
          color: $green;
        }

        p {
          max-width: 400px;
          line-height: 150%;
          color: $grey
        }
      }

      &.slide1 {
        background-image: url('/img/home/banner1.jpg');
      }
      &.slide2 {
        background-image: url('/img/home/banner2.jpg');

        .txtContainer {
          align-items: flex-start;
          text-align: left;
          justify-content: center;
          float: right;
        }
      }
      &.slide3 {
        background-image: url('/img/home/banner3.jpg');
        
        .txtContainer {
          align-items: flex-end;
          text-align: right;
          justify-content: center;

        }
      }
      &.slide4 {
        background-image: url('/img/home/banner4.jpg');

        .txtContainer {
          align-items: flex-start;
          text-align: left;
          justify-content: center;
          float: right;
        }
      }
    }
  }

  .whyUs {
    margin-top: 80px;

    .txtContainer {
      // padding-top: 20px;
      h2 {
        font-size: 30px;
        font-weight: bold;
        color: $green;
      }
      
      h3 {
        font-size: 20px;
        font-style: italic;
      }

      p {
        color: $grey;
      }
    }

    .imgContainer {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 350px;
        position: relative;
        box-shadow: 25px 25px 15px rgba($color: #000000, $alpha: 0.2);
        animation: slowFloat 8s linear infinite;

        @keyframes slowFloat {
          from {transform: rotate(0deg) translateX(6px) rotate(0deg); }
          to   {transform: rotate(-360deg) translateX(6px) rotate(360deg); }
        }
      }
    }
  }
}
</style>
