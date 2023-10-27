import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Carousel from '@/components/Carousel';

gsap.registerPlugin(ScrollTrigger);

export default function scrollimg() {
  const comp = useRef(null);
  const galleryRef = useRef(null);

  useLayoutEffect(() => {
    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    let mm = gsap.matchMedia(comp);
    // create

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 600px)", () => {
      // this setup code only runs when viewport is at least 600px wide
      console.log("desktop");

      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".right"
      });


      //create scroll trigger for each details section
      //trigger photo animation when headline of each details section
      //reaches 80% of window height
      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");

        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 43%",
          end: "top 15%",
          animation: animation,
          scrub: true,
          markers: false
        });
      });

      return () => {
        // optional
        // custom cleanup code here (runs when it STOPS matching)
        console.log("mobile");
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={comp}>
      <div className="spacer"></div>

      <div ref={galleryRef} className="gallery w-container">
        <div className="left">
          <div className="desktopContent">
            <div className="desktopContentSection">
              <h1>Windows</h1>
              <p>
                Red is a color often associated with strong emotions such as
                passion, love, and anger. It is a bold and attention-grabbing
                color that can evoke feelings of excitement, warmth, and energy.
              </p>
              <div className="hero-buttons-container">
                <a href="/case-studies" class="hero-button-outline w-button">Learn more</a>
              </div>
            </div>
            <div className="desktopContentSection">
              <h1>Doors</h1>
              <p>
                Green is a color that is often associated with nature, growth,
                and harmony. It is a calming and relaxing color that can evoke
                feelings of balance, stability, and freshness. In color
                psychology, green is said to represent balance and stability,
                making it a popular choice for branding and marketing in the
                health and wellness industry.{" "}
              </p>
              <div className="hero-buttons-container">
                <a href="/case-studies" class="hero-button-outline w-button">Learn more</a>
              </div>
            </div>

            <div className="desktopContentSection">
              <h1>Projects</h1>
              <p>
                Pink is a color that is often associated with femininity,
                romance, and sweetness. It is a softer and more delicate shade
                of red that can evoke feelings of warmth, love, and nurturing.
              </p>
              <p>
                In the world of branding and marketing, pink is often used to
                target a female audience or to promote products that are
                associated with beauty, love, or romance.
              </p>
              <p>
                Pink is also used in the food industry, as it is associated with
                sweetness and desserts. Pink is often used in breast cancer
                awareness campaigns, as it has become the signature color of the
                movement.{" "}
              </p>
              <p>
                Pink is also commonly used in baby showers and weddings, as it
                symbolizes love, innocence, and new beginnings.
              </p>
              <div className="hero-buttons-container">
                <a href="/case-studies" class="hero-button-outline w-button">Learn more</a>
              </div>
            </div>
                
            <div className="desktopContentSection2"> </div>

          </div>
        </div>


        <div className="right">
          <div className="mobileContent">
            <div className="mobilePhoto">
              <img
                src="https://drive.google.com/uc?export=view&id=1eJcQHmJ_aZ57zHzX6_xCY0Zi9Ksopzs4"
                className="hero-image img"
              />
            </div>
            <h1>Windows</h1>
            <p>
              Red is a color often associated with strong emotions such as
              passion, love, and anger. It is a bold and attention-grabbing
              color that can evoke feelings of excitement, warmth, and energy.
            </p>
            <div className="hero-buttons-container">
              <a href="/case-studies" class="hero-button-outline w-button">Learn more</a>
            </div>
            <div className="mobilePhoto ">
              <img
                src="https://drive.google.com/uc?export=view&id=1ZIBY4Un6f-1bW658sjJuHZaAKI2Mv782"
                className=" img"
              />
            </div>
            <h1>Doors</h1>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.{" "}
            </p>
            <div className="hero-buttons-container">
              <a href="/case-studies" class="hero-button-outline w-button">Learn more</a>
            </div>

            <div className="mobilePhoto pink">
              <img
                src="https://drive.google.com/uc?export=view&id=1_iTLuXrAxxP82hcmtrPtkBW41PekQD-V"
                className="hero-image img"
              />
            </div>
            <h1>Projects</h1>
            <p>
              Pink is a color that is often associated with femininity, romance,
              and sweetness. It is a softer and more delicate shade of red that
              can evoke feelings of warmth, love, and nurturing. In the world of
              branding and marketing, pink is often used to target a female
              audience or to promote products that are associated with beauty,
              love, or romance.
            </p>
            <div className="hero-buttons-container">
              <a href="/case-studies" class="hero-button-outline w-button">Learn more</a>
            </div>


          </div>

          <div className="desktopPhotos">
            <div className="desktopPhoto red">
              <img
                src="https://drive.google.com/uc?export=view&id=1eJcQHmJ_aZ57zHzX6_xCY0Zi9Ksopzs4"
                className="hero-image img"
              />
            </div>
            <div className="desktopPhoto green">
              <img
                src="https://drive.google.com/uc?export=view&id=1ZIBY4Un6f-1bW658sjJuHZaAKI2Mv782"
                className="hero-image img"
              />

            </div>
            <div className="desktopPhoto pink">
              <img
                src="https://drive.google.com/uc?export=view&id=1_iTLuXrAxxP82hcmtrPtkBW41PekQD-V"
                className="hero-image img"
              />
            </div>
            
          </div>
        </div>
      </div>
      <Carousel/>

      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
    </div>
  );
}