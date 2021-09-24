<template>
  <main>
    <section class="hero">
      <div class="wrapper">
        <h2 data-aos="fade-up">
          Contact Us
        </h2>
      </div>
    </section>
    <section class="text">
      <div class="wrapper">
        <a-card data-aos="fade-up" class="contact">
          <p><a-icon type="phone" />123-123-1234</p>
          <p><a-icon type="mail" />123456@mail.com</p>
          <p style="margin-bottom: 0px"><a-icon type="environment" />123-456 Street Ave.</p>
          <p style="padding-left: 46px">Vancouver, BC, V3N 1T4</p>
        </a-card>
      </div>
    </section>
  </main>
</template>

<script>
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
.hero {
  width: 100%;
  height: 350px;
  background-image: linear-gradient(to right, transparent, rgba($navy, 0.5)), url('/img/contact/contact.jpg') ;
  // background-image: linear-gradient(to right, transparent, rgba($green, 0.5));
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  .wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;

    h2 {
      color: white;
      font-size: 50px;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 0;
    }
  }
}

.text {
  padding: 50px 0;
  h3 {
    font-size: 30px;
    font-style: italic;
  }
  p {
    color: $grey;
  }
}

.contact {
  padding: 36px 36px 12px 36px;
  margin: auto;
  background-color: $navy;
  border-radius: 10px;
  max-width: 500px;

  p {
    color: white;
    font-size: 20px;

    i {
      color: white;
      margin-right: 24px;
      transform: scaleX(-1);
    }
  }
}
</style>
