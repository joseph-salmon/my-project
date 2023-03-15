import { asset } from "$fresh/runtime.ts";

export default function Home() {
  return (
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
  );
}
