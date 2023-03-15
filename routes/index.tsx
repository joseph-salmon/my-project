import Header from "../components/Header.tsx";
import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Header name="Home" />
      <div class="bg-near-white cf">
        <Nav />
        <main>
          <div
            class="bg-purple flex items-center overflow-hidden"
            style="background-image: url(&quot;/images/hero.jpg&quot;); background-size: cover; background-position: center center;"
          >
            <div class="br3-l center mw8 pa2 pa4-l bg-black-70 mv0 mv4-l">
              <div class="f3 f2-m f1-l light-green ma0 ph4">
                <p>
                  <strong>
                    2023 - APPLICATIONS ARE NOW OPEN. We are excited and are
                    busy building a full creative program this year. Fill in an
                    expression of interest to get the ball rolling.
                  </strong>
                </p>
                <p>
                  <strong>KIA KAHA, KIA MAIA, KIA MANAWANUI.</strong>
                </p>
                <p>Follow us on Instagram for updates. @kategraytrust</p>
              </div>
              <a
                class="b f5 f4-m f3-l link dim br2 ph4 pv3 mh4 mb4 dib black bg-light-green pointer ttu tracked"
                href="/apply"
              >
                Apply online →
              </a>
            </div>
          </div>
          <div class="mv4 flex flex-wrap hidden">
            <div class="center mw8 cf pa2 ">
              <svg
                class="silver"
                fill="none"
                height="90"
                width="90"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z">
                </path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
