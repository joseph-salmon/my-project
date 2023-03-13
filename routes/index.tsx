import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <>
      <Header name="Home" />
      <div class="bg-near-white cf">
        <header class="center pa4 bg-white">
          <header class="flex items-center justify-between">
            <a href="/" class="link purple dim db f4 f4-m f3-l tracked-tight">
              <div class="">Kate Gray Memorial Trust</div>
              <div class="b">
                <span>Mentor</span>
                <span>Programme</span>
              </div>
            </a>
            <nav class="db">
              <ul
                class="f2 z-5 normal list ma0 ph0 pt6 fixed right-0 left-0 bottom-0 top-0 bg-purple fade-3seconds fadeOutTrigger f3 pt4"
                style="visibility: hidden;"
              >
                <li class="white ma3 tc">
                  <a class="link white dim" href="/">Home</a>
                </li>
                <li class="white ma3 tc">
                  <a class="link white dim" href="/"></a>
                </li>
                <li class="white ma3 tc">
                  <a class="link white dim" href="/programme">
                    Programme Information
                  </a>
                </li>
                <li class="white ma3 tc">
                  <a class="link white dim" href="/about">About the trust</a>
                </li>
                <li class="white ma3 tc">
                  <a class="link white dim" href="/key-dates">Key dates 2023</a>
                </li>
                <li class="white ma3 tc">
                  <a class="link white dim" href="/apply">How to apply</a>
                </li>
                <li class="white ma3 tc">
                  <a class="link white dim" href="/videos">Videos</a>
                </li>
              </ul>
              <div class="z-999 relative top-0 right-0">
                <div class="pointer mobile-menu ">
                  <div class="bar bg-purple"></div>
                  <div class="bar bg-purple"></div>
                  <div class="bar bg-purple"></div>
                </div>
              </div>
            </nav>
          </header>
        </header>
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
        <footer class="center pa4 absolute bg-white">
          © Kate Gray Memorial Trust 1970
        </footer>
      </div>
    </>
  );
}
