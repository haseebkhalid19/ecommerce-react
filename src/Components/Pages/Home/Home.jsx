import "./Home.css";
import {
  bannerHome,
  catImg1,
  catImg2,
  catImg3,
  catImg4,
  catImg5,
} from "../../../img";

const Home = () => {
  return (
    <>
      {/* <section id="slider">
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="#">
                <img src="img/slider-1.png" alt="slider image 1" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="img/img-2.png" alt="slider image 2" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="img/img-3.png" alt="slider image 3" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="img/slider-4.png" alt="slider image 4" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="img/img-5.png" alt="slider image 5" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="img/img-6.png" alt="slider image 6" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="img/img-7.png" alt="slider image 7" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="img/img-9.png" alt="slider image 8" />
              </a>
            </div>
            <div class="swiper-slide">
              <a href="#">
                <img src="img/img-10.png" alt="slider image 9" />
              </a>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <ul>
          <li>
            <a href="#"> Groceries & Pets </a>
          </li>
          <li>
            <a href="#"> Health & Beauty </a>
          </li>
          <li>
            <a href="#"> Men's Fashion </a>
          </li>
          <li>
            <a href="#"> Women's Fashion </a>
          </li>
          <li>
            <a href="#"> Mother & Baby </a>
          </li>
          <li>
            <a href="#"> Home & Lifestyle </a>
          </li>
          <li>
            <a href="#"> Electronic Devices </a>
          </li>
          <li>
            <a href="#"> Electronic Accessories </a>
          </li>
          <li>
            <a href="#"> TV & Home Appliances </a>
          </li>
          <li>
            <a href="#"> Sports & Outdoor </a>
          </li>
          <li>
            <a href="#"> Watches, Bags & Jewellery </a>
          </li>
          <li>
            <a href="#"> Automotive & Motorbike </a>
          </li>
        </ul>
      </section> */}

      <section id="products">
        <div class="banner container text-center">
          <a href="#">
            <img src={bannerHome} alt="Banner Daraz" width="100%" />
          </a>
        </div>
        <div>
          <div class="d-flex align-items-center px-5">
            <a href="#">
              <div class="d-flex align-items-center justify-content-between mart">
                <div class="img-container">
                  <img src={catImg1} alt="catImg1" />
                  <span>Mart</span>
                </div>
                <div>
                  <i class="fas fa-arrow-right d-none"></i>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="d-flex align-items-center justify-content-between mens">
                <div class="img-container">
                  <img src={catImg2} alt="catImg2" />
                  <span>Men's Fashion</span>
                </div>
                <div>
                  <i class="fas fa-arrow-right d-none"></i>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="d-flex align-items-center justify-content-between women">
                <div class="img-container">
                  <img src={catImg3} alt="catImg3" />
                  <span>Women's Fashion</span>
                </div>
                <div>
                  <i class="fas fa-arrow-right d-none"></i>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="d-flex align-items-center justify-content-between home">
                <div class="img-container">
                  <img src={catImg4} alt="catImg4" />
                  <span>Home & Decor</span>
                </div>
                <div>
                  <i class="fas fa-arrow-right d-none"></i>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="d-flex align-items-center justify-content-between beauty">
                <div class="img-container">
                  <img src={catImg5} alt="catImg5" />
                  <span>Beauty</span>
                </div>
                <div>
                  <i class="fas fa-arrow-right d-none"></i>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="sale container pb-5">
          <h4>Flash Sale</h4>
          <div class="row py-3">
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/ipods12.png" alt="Air Pod" width="100%" />
                <p>Original Mini Wirelessbluetooth handfree...</p>
                <h6>Rs.979</h6>
                <span class="span">Rs.3000 </span>
                <span>-67%</span>
              </a>
            </div>

            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/smartwatch.png" alt="Smart Watch" width="100%" />
                <p>Advance Version Bluetooth Smart Watch...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>

            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/bluetooth.png" alt="Bluetooth" width="100%" />
                <p>Buy 1 Get 1 Sports Sound Stereo Wireless...</p>
                <h6>Rs.599</h6>
                <span class="span">Rs.2000 </span>
                <span>-70%</span>
              </a>
            </div>

            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/smartwatch2.png" alt="Smart Watch" width="100%" />
                <p>Black Advanced New Version Bluetooth Digital...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>

            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/headscalp.png" alt="Head Scalp" width="100%" />
                <p>Relaxing head sclap Message Optopus Manual...</p>
                <h6>Rs.115</h6>
                <span class="span">Rs.145 </span>
                <span>-20%</span>
              </a>
            </div>

            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/ring.png" alt="ring" width="100%" />
                <p>Original Mini Wirelessbluetooth handfree...</p>
                <h6>Rs.97</h6>
                <span class="span">Rs.255 </span>
                <span>-56%</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="darazMall">
        <div class="container py-5">
          <h4>Daraz Mall</h4>
          <div class="row py-3">
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/darazMall.png" alt="Books" width="100%" />
                <img
                  src="img/catBook.png"
                  alt="catBooks"
                  width="30%"
                  class="catImg"
                />
                <p>Paramount Books</p>
                <span>Books</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/almonds.png" alt="Books" width="100%" />
                <img
                  src="img/capitalEnterprise.png"
                  alt="catBooks"
                  width="30%"
                  class="catImg"
                />
                <p>Paramount Books</p>
                <span>Books</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/cap.png" alt="Books" width="100%" />
                <img
                  src="img/khananis.png"
                  alt="catBooks"
                  width="30%"
                  class="catImg"
                />
                <p>Paramount Books</p>
                <span>Books</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/phonecover.png" alt="Books" width="100%" />
                <img
                  src="img/ithmy.png"
                  alt="catBooks"
                  width="30%"
                  class="catImg"
                />
                <p>Paramount Books</p>
                <span>Books</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/onions.png" alt="Books" width="100%" />
                <img
                  src="img/dFresh.png"
                  alt="catBooks"
                  width="30%"
                  class="catImg"
                />
                <p>Paramount Books</p>
                <span>Books</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/safetyping.png" alt="safetypin" width="100%" />
                <img
                  src="img/carat.png"
                  alt="catBooks"
                  width="30%"
                  class="catImg"
                />
                <p>Paramount Books</p>
                <span>Books</span>
              </a>
            </div>
          </div>
        </div>

        <div class="categories container py-5">
          <h4>Categories</h4>
          <div class="row">
            <div class="col-6 col-md-2">
              <img src="img/suit.png" alt="categories" width="100%" />
              <p>Phone Covers</p>
            </div>
            <div class="col-6 col-md-2">
              <img src="img/ring2.png" alt="categories" width="100%" />
              <p>Phone Covers</p>
            </div>
            <div class="col-6 col-md-2">
              <img src="img/onions.png" alt="categories" width="100%" />
              <p>Phone Covers</p>
            </div>
            <div class="col-6 col-md-2">
              <img src="img/phonecovers.png" alt="categories" width="100%" />
              <p>Phone Covers</p>
            </div>
            <div class="col-6 col-md-2">
              <img src="img/tights.png" alt="categories" width="100%" />
              <p>Phone Covers</p>
            </div>
            <div class="col-6 col-md-2">
              <img src="img/smalldresses.png" alt="categories" width="100%" />
              <p>Phone Covers</p>
            </div>
            <div class="col-6 col-md-2">
              <img src="img/hooks.png" alt="categories" width="100%" />
              <p>Phone Covers</p>
            </div>
            <div class="col-6 col-md-2">
              <img src="img/fitness.png" alt="categories" width="100%" />
              <p>Phone Covers</p>
            </div>
            <div class="col-6 col-md-2">
              <img src="img/honey.png" alt="categories" width="100%" />
              <p>Phone Covers</p>
            </div>
            <div class="col-6 col-md-2">
              <img src="img/porridge.png" alt="categories" width="100%" />
              <p>Phone Covers</p>
            </div>
            <div class="col-6 col-md-2">
              <img src="img/cameralens.png" alt="categories" width="100%" />
              <p>Phone Covers</p>
            </div>
            <div class="col-6 col-md-2">
              <img src="img/emboridry.png" alt="categories" width="100%" />
              <p>Phone Covers</p>
            </div>
          </div>
        </div>
      </section>

      <section class="for-you">
        <div class="container py-5">
          <h4>Just For You</h4>
          <div class="row">
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/dresses.png" alt="For You" width="100%" />
                <p>HandFres Lorem ipsum dolor sit amet...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/carcleaner.png" alt="For You" width="100%" />
                <p>HandFres Lorem ipsum dolor sit amet...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/bord.png" alt="For You" width="100%" />
                <p>HandFres Lorem ipsum dolor sit amet...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/brush.png" alt="For You" width="100%" />
                <p>HandFres Lorem ipsum dolor sit amet...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/watch.png" alt="For You" width="100%" />
                <p>HandFres Lorem ipsum dolor sit amet...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/blackring.png" alt="For You" width="100%" />
                <p>HandFres Lorem ipsum dolor sit amet...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/lens.png" alt="For You" width="100%" />
                <p>HandFres Lorem ipsum dolor sit amet...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/pad.png" alt="For You" width="100%" />
                <p>HandFres Lorem ipsum dolor sit amet...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/kset.png" alt="For You" width="100%" />
                <p>HandFres Lorem ipsum dolor sit amet...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/mousepad.png" alt="For You" width="100%" />
                <p>HandFres Lorem ipsum dolor sit amet...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/tang.png" alt="For You" width="100%" />
                <p>HandFres Lorem ipsum dolor sit amet...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>
            <div class="col-6 col-md-2">
              <a href="#">
                <img src="img/helecopter.png" alt="For You" width="100%" />
                <p>HandFres Lorem ipsum dolor sit amet...</p>
                <h6>Rs.2447</h6>
                <span class="span">Rs.5000 </span>
                <span>-51%</span>
              </a>
            </div>
            <button class="btn btn-outline-orange mt-5">Load More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
