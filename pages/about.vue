<template>
  <main>
    <section class="hero">
      <div class="wrapper">
        <h2 data-aos="fade-up">
          About Us
        </h2>
      </div>
    </section>
    <section class="text">
      <div class="wrapper">
        <h3 data-aos="fade-up">Superior Products and Services</h3>
        <p data-aos="fade-up">
          With respect to the old-age care and nursing mode in Canada, its system is set up from three dimensions, namely disease treatment, rehabilitation medicine and long-term care, providing all-round nursing services for elderly patients. Not only is the old-age care and nursing mode in Canada a reference to the international society, but its rehabilitation equipment, rehabilitation technical aids, functional foods and some other geriatric products enjoy advantages generally recognized by the international society; for example, lower-limb robot, hanging rehabilitation diagnosis and treatment system, weight loss digital treadmill, limbs linkage, balance estimation, testing and therapy system, smart sky track training system, isokinetic strength estimation and testing system, etc. are products mainly sold by MERCY HEALTH TRADE CO., LTD.
        </p>
        <p data-aos="fade-up">
          In the preliminary stage, MERCY HEALTH TRADE CO., LTD. will mainly act as an agency and sell products including rehabilitation equipment and rehabilitation technical aids, geriatric products, intelligent products, functional foods and health products in Canada to serve existing customer base of the domestic mother company and China’s rehabilitation market of the elderly; meanwhile, MERCY HEALTH TRADE CO., LTD. will sell to Canadian rehabilitation market middle-end and low-end products of lost-cost consumable material and price advantage, such as rehabilitation products of healthcare massage equipment so as to satisfy Canadian local citizens and local Chinese’ demands for rehabilitation equipment and products of lost-cost consumable material.
        </p>
        <p data-aos="fade-up">
          After MERCY HEALTH TRADE CO., LTD. smoothly enters Canadian local market, it will, through various means and channels, actively conduct and participate in home first aid, nursing, rehabilitation and other services for senior age groups at the same time to popularize relevant medical knowledge for aged residents, guide healthy living style, create rehabilitation medical institutions in Canada and fulfill Canadian local citizens and local Chinese’ need for old-age care and rehabilitation.
        </p>
        <h3 data-aos="fade-up">Parent Company Profile</h3>
        <p data-aos="fade-up">
          Shanghai Ciyuan Rehabilitation Hospital Co.,Ltd., which is characterized by "potent ehabilitation,strong comprehension", is a modern Grade Il rehabilitation hospital under the central enterprise Sinopharm Healthcare. Sitting in Nanxiang Ancient Town, Jiading District, Shanghai that owns a long history and charming scenery, the hospital covers a total construction area of 26,700 ㎡ with more than 400 sickbeds available. Shanghai Ciyuan Rehabilitation Hospital Co., Ltd. is a Grade II special rehabilitation hospital, designated medical institutions for medical insurance in Shanghai, designated medical institutions for medical treatment(medical insurance) in different places approved by Shanghai Municipal Health Commission.Also, it is a member unit of Ruijin North Hospital-Jiading Medical Complex, Vice Chairman Unit of Shanghai Association of Rehabilitation Medicine Coalition of Geriatric Rehabilitation as well as a rehabilitation education and training base of Shanghai Association of Rehabilitation Medicine. As a sole platform specializing in medical institution investment and operating management affiliated to China National Pharmaceutical Group Sinopharm Group Co.,Ltd. Shanghai Ciyuan Rehabilitation Hospital Co.,Ltd. is one of the largest rehabilitation hospitals in Shanghai.
        </p>
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
  background-image: linear-gradient(to right, transparent, rgba($green, 0.5)), url('/img/about/banner4.jpg') ;
  background-position: center;
  // background-image: linear-gradient(to right, transparent, rgba($green, 0.5));
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
  p, li {
    color: $grey;
  }
}
</style>
