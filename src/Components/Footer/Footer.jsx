import "./Footer.css";
import {
  barcode,
  daraz,
  app,
  payments,
  flags,
  links,
  verified,
} from "../../img";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer1 pb-5">
          <Container>
            <Row>
              <Col className="pt-5">
                <h5 class="pt-3">Customer Care</h5>
                <a href="#">Help Center</a>
                <a href="#">How to Buy</a>
                <a href="#">Corporate & Bulk Purchasing</a>
                <a href="#">Returns & Refunds</a>
                <a href="#">Daraz Shop</a>
                <a href="#">Contact Us</a>
                <a href="#">Purchase Protection</a>
                <a href="#">Daraz Pick up Points</a>

                <h5 class="pt-4">Make Money With Us</h5>
                <a href="#">Daraz University</a>
                <a href="#">Sell on Daraz</a>
                <a href="#">Join Daraz Affiliate Program</a>
              </Col>

              <Col className="pt-5">
                <h5>Daraz</h5>
                <a href="#">About Us</a>
                <a href="#">Digital Payments</a>
                <a href="#">Daraz Donates</a>
                <a href="#">Daraz Blog</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">NTN Number : 4012118-6</a>
                <a href="#">STRN Number : 1700401211818</a>
                <a href="#">Online Shopping App</a>
                <a href="#">Online Grocery Shopping</a>
                <a href="#">Daraz Exclusive</a>
                <a href="#">How to shop on Daraz</a>
              </Col>

              <Col className="pt-5">
                <div class="d-flex align-items-center justify-content-evenly py-3">
                  <img
                    src={barcode}
                    alt="barcode"
                    width="35%"
                    style={{ borderRadius: 20 }}
                  />
                  <div>
                    <img src={daraz} alt="daraz" width="35%" />
                    <p style={{ color: `obj.#f85606` }}>Happy Shopping</p>
                    <p style={{ color: `obj.#fff` }}>Downlaod App</p>
                  </div>
                </div>
                <img src={app} alt="apps" />
              </Col>
            </Row>
          </Container>
        </div>

        <div class="footer2 py-5">
          <Container>
            <Row>
              <Col>
                <h5>Payment Methods</h5>
                <div class="py-3">
                  <img src={payments} alt="payments" width="80%" />
                </div>
                <h5>&copy; Daraz 2023</h5>
              </Col>
              <Col>
                <h5>Daraz International</h5>
                <div class="py-3">
                  <img src={flags} alt="flags" width="80%" />
                </div>
              </Col>
              <Col>
                <h5>Follow Us</h5>
                <div class="py-3">
                  <img src={links} alt="flags" width="80%" />
                </div>
              </Col>
              <Col>
                <h5>Verified by</h5>
                <div class="py-3">
                  <img src={verified} alt="flags" width="80%" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div class="footer3 py-3">
          <Container>
            <Row>
              <Col>
                <h5>How Daraz Transformed Online Shopping in Pakistan</h5>
                <p>
                  Daraz first made waves in Pakistan’s e-commerce market after
                  its introduction in 2012. We have since grown to become
                  Pakistan’s largest platform for online shopping with a network
                  spread across Asia in Pakistan, Bangladesh, Sri Lanka,
                  Myanmar, and Daraz.com.np. Our vision was to provide a safe,
                  efficient online marketplace platform for vendors and
                  customers across the country to come together. We started off
                  exclusively as an online fashion retail platform and over the
                  years expanded to become a complete one-stop solution for all
                  your buying needs. Daraz prides itself on not being just
                  another ecommerce venture in Asia. We work tirelessly to make
                  sure that we provide users with the best online online
                  shopping experience and value for their purchases. Whether you
                  shop online through our website or our online shopping mobile
                  App, you can expect easy navigation, customized
                  recommendations, and a smooth online shopping experience
                  guaranteed.
                </p>
                <h6>
                  What Makes Us Different from Other Online Shopping Platforms?
                </h6>
                <p>
                  <strong>
                    Select from the Largest Online Marketplace in Pakistan
                  </strong>
                  <br />
                  With over 15 million products to select from, Daraz offers its
                  customers the most comprehensive listing of products in the
                  country. Whether you’re looking for electronics, apparel,
                  appliances, or groceries – there is something for everyone.
                </p>
                <p>
                  <strong>Hassle Free Delivery</strong>
                  <br />
                  Online shopping is only as good as its execution and Daraz
                  promises hassle free delivery right from the moment you order
                  to when your package is dropped at your door. We cater to both
                  major and smaller cities alike, and give you the choice to
                  track your package as it makes its way to you so you always
                  know your order status. If you are unsatisfied with any aspect
                  of your order, we have a simple 7-day return or exchange
                  policy.
                </p>
                <p>
                  <strong>Payment Options to Suit Every Style</strong>
                  <br />
                  You can choose to pay through a credit/debit card, opt for
                  cash on delivery or even go for EMI (easy monthly
                  instalments). You can also avail exclusive offers by
                  downloading Daraz Wallet – a closed loop digital wallet
                </p>
              </Col>
              <Col>
                <p>
                  that offers you a secure, easy way to make payments. We also
                  have easypaisa & jazzcash payment method for our customers'
                  ease
                </p>
                <p>
                  <strong>Shop from Verified Vendors</strong>
                  <br />
                  Daraz understands that online shopping in Pakistan comes with
                  its fair share of risks. This is why with Daraz Marketplace
                  and Daraz Mall customers have the security of choosing from
                  verified vendors and brands from Karachi, Lahore, Islamabad
                  and all across Pakistan. Now you’ll never have to second guess
                  authenticity because Daraz makes sure to do it for you
                </p>
                <p>
                  <strong>Shop from Verified Vendors</strong>
                  <br />
                  Daraz understands that online shopping in Pakistan comes with
                  its fair share of risks. This is why with Daraz Marketplace
                  and Daraz Mall customers have the security of choosing from
                  verified vendors and brands from Karachi, Lahore, Islamabad
                  and all across Pakistan. Now you’ll never have to second guess
                  authenticity because Daraz makes sure to do it for you
                </p>
                <p>
                  <strong>Shop from Verified Vendors</strong>
                  <br />
                  Daraz understands that online shopping in Pakistan comes with
                  its fair share of risks. This is why with Daraz Marketplace
                  and Daraz Mall customers have the security of choosing from
                  verified vendors and brands from Karachi, Lahore, Islamabad
                  and all across Pakistan. Now you’ll never have to second guess
                  authenticity because Daraz makes sure to do it for you
                </p>
                <p>
                  <strong>Shop from Verified Vendors</strong>
                  <br />
                  Daraz understands that online shopping in Pakistan comes with
                  its fair share of risks. This is why with Daraz Marketplace
                  and Daraz Mall customers have the security of choosing from
                  verified vendors and brands from Karachi, Lahore, Islamabad
                  and all across Pakistan. Now you’ll never have to second guess
                  authenticity because Daraz makes sure to do it for you
                </p>
                <p>
                  <strong>Shop from Verified Vendors</strong>
                  <br />
                  Daraz understands that online shopping in Pakistan comes with
                  its fair share of risks. This is why with Daraz Marketplace
                  and Daraz Mall customers have the security of choosing from
                  verified vendors and brands from Karachi, Lahore, Islamabad
                  and all across Pakistan. Now you’ll never have to second guess
                  authenticity because Daraz makes sure to do it for you
                </p>
              </Col>
              <Col>
                <h5>Top Categories</h5>
                <p>
                  <strong>MOBILE PHONES IN PAKISTAN</strong>
                  <br />
                  Apple iPhones, Honor Mobiles, Huawei Mobiles, Tecno Mobiles,
                  Redmi Mobiles, Xiaomi Mi Mobiles, Nokia Mobiles, OnePlus
                  Mobiles, Oppo Mobile Phones, Realme Mobiles, Samsung Mobile
                  Phones, Vivo Mobile Phones, Mobile Accessories, Smart Watches
                </p>
                <p>
                  <strong>LATEST LAPTOPS</strong>
                  <br />
                  Dell Laptops, HP Laptops, Lenovo Laptops, Mouse, Gaming
                  Graphic Cards, lenovo ideapad 3, Macbook Pro 13, Hp Probook
                  650 G2
                </p>
                <p>
                  <strong>HOME APPLIANCES</strong>
                  <br />
                  Dell Laptops, HP Laptops, Lenovo Laptops, Mouse, Gaming
                  Graphic Cards, lenovo ideapad 3, Macbook Pro 13, Hp Probook
                  650 G2
                </p>
                <p>
                  <strong>LED TV</strong>
                  <br />
                  Dell Laptops, HP Laptops, Lenovo Laptops, Mouse, Gaming
                  Graphic Cards, lenovo ideapad 3, Macbook Pro 13, Hp Probook
                  650 G2
                </p>
                <p>
                  <strong>DSLR camera</strong>
                  <br />
                  Dell Laptops, HP Laptops, Lenovo Laptops, Mouse, Gaming
                  Graphic Cards, lenovo ideapad 3, Macbook Pro 13, Hp Probook
                  650 G2
                </p>
                <p>
                  <strong>Trending</strong>
                  <br />
                  Wow Womens Week, Azaadi Sale 2022, Shopping Expo, 11 11 Sale,
                  12.12 Sale, Live Cricket Streaming, Online Bills, Core I5
                  Laptop, Gtx 1060, Samsung A32, Samsung A51, Samsung A52,
                  Samsung A71, Samsung A72, Samsung M31, Samsung S20, Samsung
                  S20 Ultra 5G, Samsung S21, Samsung S21 Ultra, Samsung Z Flip,
                  Tecno Camon 17, Tecno Spark 6, Vivo V20, Poco X3 Pro, Vivo
                  V21, Vivo V21E, Vivo X70 Pro, Vivo Y12, Vivo Y12S, Vivo Y1S,
                  Vivo Y20, Vivo Y51, Vivo Y51S, Oppo F19 Pro, Oppo Reno 6,
                  Xiaomi Poco F3, Xiaomi Poco M3, Xiaomi Poco X3, Xiaomi Poco X3
                  Gt, Xiaomi Redmi 9C, Xiaomi Redmi Note 10 Pro, Sharp Aquos R2
                </p>
                <p>
                  <strong>SHOP WORLDWIDE WITH LAZADA</strong>
                  <br />
                  Dell Laptops, HP Laptops, Lenovo Laptops, Mouse, Gaming
                  Graphic Cards, lenovo ideapad 3, Macbook Pro 13, Hp Probook
                  650 G2
                </p>
              </Col>
              <Col>
                <p>
                  <strong>WOMEN'S FASHION</strong>
                  <br />
                  Al-Karam Studio, Warda, Salitex, Bonanza Satrangi, Edenrobe,
                  Firdous, Junaid Jamshed, Limelight, Sana Safinaz, Mahru,
                  Pushup Bra, Women Undergarments
                </p>
                <p>
                  <strong>MEN's FASHION</strong>
                  <br />
                  Men's Shirts, Men's T-Shirts
                </p>
                <p>
                  <strong>ONLINE GROCERY STORE</strong>
                  <br />
                  Oil & Ghee, Basmati Rice, Dried Fruits, Chocolates, Mattresses
                </p>
                <p>
                  <strong>ONLINE BOOK STORE</strong>
                  <br />
                  English Books, Islamic Books, History Books, English
                  Literature Books, Kids Urdu Stories, Pride & Prejudice, Harry
                  Potter Story Books, Namal Novel, Nimra Ahmed Novels
                </p>
                <p>
                  <strong>USED CARS FOR SALE</strong>
                  <br />
                  Suzuki Wagon R, KIA Sportage, Honda City, Toyota Prado, Suzuki
                  Alto, Suzuki Cultus, Honda Civic, Honda 125, Honda 70, Yamaha
                  Ybr 125, Hi Speed 150, Hi Speed Freedom 200, Metro 70, Super
                  Power 125, Monster JMS 3500 Electric Bike, Super Power 70, Car
                  Accessories
                </p>
                <p>
                  <strong>TOP MOBILE PHONES </strong>
                  <br />
                  Nokia G20, redmi 9, realme 7 pro, realme c15, realme c21, vivo
                  y20s, realme c11 Price in Pakistan, itel vision 1 pro price in
                  pakistan, samsung galaxy a02 price in pakistan, Infinix Hot
                  10, Infinix Hot 8, Infinix Hot 9, Infinix Note 10 Pro, Infinix
                  Note 7, Infinix Note 8, Infinix Zero 8, Inifnix Smart 5,
                  iPhone 11, iPhone 12, iphone 12 Pro Max, iPhone 12 Pro, iPhone
                  6, Itel A25, Mi 10T, Nokia 105, Oppo A15, Oppo A15S, Oppo A53,
                  Oppo A54, Infinix Zero X Pro, Infinix Zero X Neo, Oppo F19,
                  Oppo Reno 5, Oppo Reno 5 Pro, Xiaomi Poco M3 Pro, Realme 6
                  Pro, Realme 8, Realme Narzo 30A, Samsung A02S, Samsung A11,
                  Samsung A12, Samsung A31, Vivo Y33s, Infinix Note 11, Tecno
                  Spark 6 Go, Samsung A52s, Samsung Tab A7 Lite, Oppo Reno 6 Pro
                </p>
                <p>
                  <strong>MEDICINE</strong>
                  <br />
                  surbex z, tea tree oil, hydrozole cream, biotin tablets, evion
                  capsule, lactogen 1, minoxidil, clobevate cream, centrum
                  silver, maxdif cream, dermovate cream, cac 1000, Panadol
                  Migraine
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
