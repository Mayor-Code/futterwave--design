<script>
export default {
  mounted() {
    const stack = document.querySelector(".stacked-card");
    setInterval(() => {
      let firstCard = stack.querySelector(".card:nth-child(1)");

      firstCard.classList.add("shuffle");

      setTimeout(() => {
        [...stack.children].reverse().forEach((card) => {
          let style = getComputedStyle(card);
          let translate = parseInt(style.getPropertyValue("--translate"));
          let scale = parseFloat(style.getPropertyValue("--scale"));
          let delay = parseFloat(style.getPropertyValue("--delay"));
          let zIndex = parseInt(style.getPropertyValue("--z-index"));
          translate = translate > 0 ? translate - 16 : 48;
          scale = scale < 1 ? scale + 0.09 : 0.73;
          zIndex = zIndex < 4 ? zIndex + 1 : 1;
          delay = delay < 0.39 ? delay + 0.13 : 0;
          card.style.setProperty("--translate", `${translate}px`);
          card.style.setProperty("--scale", `${scale}`);
          card.style.setProperty("delay", `${delay}s`);
          card.style.setProperty("--z-index", `${zIndex}`);
        });
      }, 400);
      setTimeout(() => {
        firstCard.classList.remove("shuffle");
      }, 1000);
      stack.append(firstCard);
    }, 3000);
  },
};
</script>

<template>
  <div class="px-4 mt-24 mb-20 max-w-[1100px] mx-auto">
    <h1 class="text-7xl font-bold font-hero desktop:text-8xl max-w-3xl">
      <span class="text-c-2">Endless possibilities</span> for every business
    </h1>
    <p class="text-2xl mt-8 text-secondaryBgColor max-w-[46rem]">
      Sell online, process payments, build financial products, or use business
      tools designed to grow your business.
    </p>
    <div class="flex gap-6 mt-10 items-center max-w-2xl">
      <span
        class="bg-secondaryBgColor text-center text-white rounded-lg px-7 py-5 font-semibold"
      >
        <a href="#">Create a free account</a>
      </span>
      <span
        class="bg-primaryBgColor text-center rounded-lg px-6 py-5 font-semibold"
        ><a href="#">Contact sales</a></span
      >
    </div>
  </div>
  <div class="md:flex md:">
    <div class="basis-3/5 md:mr-16">
      <figure class="relative">
        <img
          class="object-cover object-right md:h-[36rem] desktop:h-[48rem]"
          src="https://cdn.filestackcontent.com/resize=width:1200/output=format:webp/9vezKnDQR6a77H7GUB4k"
          alt=""
        />
        <figcaption
          class="absolute bottom-6 right-8 text-white font-semibold text-2xl"
        >
          Foot city
        </figcaption>
      </figure>
    </div>
    <div class="md:flex md:flex-col-reverse md:-mt-48 basis-2/5">
      <p class="text-xl text-[#1d1d1d] my-8 md:mt-16 md-4 lg:mb-12 md:max-w-sm">
        It's not the size of the company, it's the size of the ambition.
        Ambitious businesses of all sizes count on Flutterwave to grow their
        business everywhere.
      </p>
      <figure class="relative md:h-[30rem] lg:h-[42rem]">
        <img
          class="h-full object-cover object-center"
          src="https://cdn.filestackcontent.com/resize=width:1100/output=format:webp/mwD8KbckQ9ybvyaDOsmQ"
          alt=""
        />
        <figcaption
          class="absolute bottom-6 left-8 text-white font-semibold text-2xl"
        >
          Famasi
        </figcaption>
      </figure>
    </div>
  </div>
  <div class="px-3 py-16">
    <div class="mx-auto min-w-[600] max-w-[1100px]">
      <h4 class="text-[#1d1d1d] text-xl font-semibold">
        We are trusted by <b>1 Million+</b> businesses
      </h4>
      <div class="flex mt-8 items-center gap-12 flex-wrap">
        <span class="h-6 flex md:h-8">
          <img
            src="https://flutterwave.com/images/company/uber.svg"
            alt="uber-icon"
          />
        </span>
        <span class="h-6 flex md:h-8">
          <img
            src="https://flutterwave.com/images/company/mtn.svg"
            alt="mtn-icon"
          />
        </span>
        <span class="h-6 flex md:h-8">
          <img
            src="https://flutterwave.com/images/company/chipper.svg"
            alt="chipper-cash"
          />
        </span>
        <span class="h-6 flex md:h-8">
          <img
            src="https://flutterwave.com/images/company/piggyvest.svg"
            alt="piggyvest"
          />
        </span>
        <span class="h-6 flex md:h-7">
          <img
            src="https://flutterwave.com/images/company/wise.svg"
            alt="wise"
          />
        </span>
        <span class="h-6 flex md:h-8">
          <img
            src="https://flutterwave.com/images/company/microsoft.svg"
            alt="microsoft"
          />
        </span>
      </div>
    </div>
  </div>
  <div class="py-20 px-4 max-w-[1100px] mx-auto">
    <h3 class="text-5xl font-bold font-hero desktop:text-7xl max-w-xl">
      A fully unified set of <span class="text-c-2">payments tools</span>
    </h3>
    <div class="mt-16 desktop:grid grid-cols-3 items-center justify-center">
      <div class="my-12">
        <div class="flex flex-col gap-6">
          <h4 class="text-2xl font-semibold">Checkout</h4>
          <p class="text-[#1d1d1d] text-lg">
            Checkout features our smart payment ordering system, incredible
            speed, and beautiful simplicity. It's designed to grow your revenue
            and provide the best payment experience to your customers.
          </p>
          <span
            class="rounded-lg text-sm bg-secondaryBgColor px-6 py-4 text-white font-semibold w-fit"
            ><a>Get started</a></span
          >
        </div>
      </div>
      <div class="desktop:flex justify-center">
        <img
          class="rounded-3xl w-64 lg:w-72 drop-shadow-2xl"
          src="https://flutterwave.com/images/sections/checkout.png"
          alt="checkout-img"
        />
      </div>
      <div class="my-16 flex flex-col gap-12">
        <div class="">
          <h4 class="font-bold text-lg">Accept payments</h4>
          <p class="text-lg mt-4 text-[#1d1d1d]">
            Easily receive money from anyone, anywhere in the world.
          </p>
          <a
            href="#"
            class="text-[#fb4e20] text-center font-semibold flex group mt-8"
          >
            <span>Learn more</span>
            <span class="text-2xl flex items-center -mb-[2px] group-hover:ml-1">
              <i class="bx bx-chevron-right"></i>
            </span>
          </a>
        </div>
        <div class="">
          <h4 class="font-bold text-lg">Transfers (Payout)</h4>
          <p class="text-lg mt-4 text-[#1d1d1d]">
            Make single or bulk transfers to bank accounts from your Flutterwave
            dashboard.
          </p>
          <a
            href="#"
            class="text-[#fb4e20] text-center font-semibold flex group mt-8"
          >
            <span>Learn more</span>
            <span class="text-2xl flex items-center -mb-[2px] group-hover:ml-1">
              <i class="bx bx-chevron-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#f8fafd] px-5 py-20">
    <div class="max-w-[1100px] mx-auto">
      <h2 class="font-hero text-5xl desktop:text-7xl">
        Build a successful online business with our
        <span class="text-[#35a162]">Commerce tools.</span>
      </h2>
      <div class="desktop:grid grid-cols-2 mt-20">
        <div class="desktop:flex justify-center">
          <div class="flex flex-col gap-6 my-16 desktop:max-w-xs">
            <h4 class="text-xl desktop:text-2xl font-bold">Store</h4>
            <p class="text-xl text-[#1d1d1d]">
              Create a free ecommerce website and start selling worldwide with
              just a few clicks.
            </p>
            <div
              class="text-sm font-semibold bg-secondaryBgColor text-white py-3 px-5 rounded-lg w-fit"
            >
              <a>Start selling</a>
            </div>
          </div>
        </div>
        <div class="">
          <figure class="desktop:h-[36rem] w-full">
            <img
              class="w-full h-full object-cover"
              src="https://cdn.filestackcontent.com/resize=width:900/output=format:webp/bkgNvkPuRLyYGNqXNFGP"
              alt="worker"
            />
          </figure>
        </div>
      </div>
      <div class="desktop:flex flex-row-reverse desktop:-mt-20">
        <div
          class="desktop:flex desktop:flex-col desktop:gap-10 desktop:items-center desktop:justify-end desktop:w-[52rem]"
        >
          <div class="mt-16 desktop:mt-0 desktop:max-w-xs">
            <h4 class="font-bold text-2xl">Invoices</h4>
            <p class="text-xl mt-4 text-[#1d1d1d]">
              Generate professional invoices for your customers and get paid
              from anywhere.
            </p>
            <a
              href="#"
              class="text-[#fb4e20] text-center font-semibold flex group mt-8 w-fit"
            >
              <span>Get started</span>
              <span
                class="text-2xl flex items-center -mb-[2px] group-hover:ml-1"
              >
                <i class="bx bx-chevron-right"></i>
              </span>
            </a>
          </div>
          <div class="mt-16 desktop:mt-0 desktop:max-w-xs">
            <h4 class="font-bold text-2xl">Payment links</h4>
            <p class="text-xl mt-4 text-[#1d1d1d]">
              Receive one-off or recurring payments from anyone, anywhere, via
              your unique payment link.
            </p>
            <a
              href="#"
              class="text-[#fb4e20] text-center font-semibold flex group mt-8 w-fit"
            >
              <span>Learn more</span>
              <span
                class="text-2xl flex items-center -mb-[2px] group-hover:ml-1"
              >
                <i class="bx bx-chevron-right"></i>
              </span>
            </a>
          </div>
        </div>
        <div class="mt-16 w-full desktop:mt-0">
          <figure class="h-fit w-full">
            <img
              class="h-full w-full"
              src="https://cdn.filestackcontent.com/resize=width:700/output=format:webp/lc5K7jXVQiS9jBWmcdKg"
              alt=""
            />
            <figcaption class="font-semibold text-center text-[#1d1d1d] mt-4">
              A platform for you, whether you're a big business or a
              <span class="text-[#35a162]">solo artist.</span>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="mt-32">
        <p class="text-4xl sm:text-5xl desktop:text-7xl leading-relaxed">
          Let's play to our strengths, shall we? You focus on bringing your
          amazing ideas to life and we focus on providing all the
          <span class="text-[#35a162]">commerce tools</span> you need.
        </p>
        <div
          class="bg-secondaryBgColor text-white mt-10 p-6 font-semibold w-fit rounded-lg"
        >
          <a href="#">Okay, let's go</a>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-black text-white py-40 px-4">
    <div class="mx-auto text-center">
      <div class="max-w-[900px] mx-auto">
        <h2 class="text-5xl font-bold font-hero desktop:text-7xl">
          Create physical and virtual <span class="text-[#6672c7]">cards</span>
        </h2>
      </div>
      <p class="text-xl mt-8 max-w-lg mx-auto">
        Issue physical and virtual cards that work globally. Create, launch, and
        manage your cards easily from anywhere.
      </p>
      <div
        class="bg-white text-black mt-10 p-6 font-semibold w-fit rounded-lg mx-auto"
      >
        <a href="#">Get started with cards</a>
      </div>
      <div
        class="stacked-card mt-20 text-start relative h-[21rem] w-[31rem] mx-auto"
      >
        <div
          class="card"
          style="--translate: 0; --scale: 1; --z-index: 4; --delay: 0.26s"
        >
          <div class="flex justify-end">
            <svg
              width="20"
              height="25"
              viewBox="0 0 20 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.842247 12.7248C0.842247 13.3824 1.37534 13.9154 2.03294 13.9154C2.69054 13.9154 3.22363 13.3824 3.22363 12.7248C3.22363 12.0671 2.69054 11.5341 2.03294 11.5341C1.37534 11.5341 0.842247 12.0671 0.842247 12.7248Z"
                fill="white"
                fill-opacity="0.7"
              ></path>
              <path
                d="M7.98689 12.7246C7.98693 11.1836 7.38939 9.70251 6.31992 8.59293C6.10045 8.36556 5.79964 8.23469 5.48367 8.22911C5.1677 8.22353 4.86246 8.34369 4.63509 8.56317C4.40772 8.78264 4.27685 9.08345 4.27127 9.39942C4.26569 9.71538 4.38585 10.0206 4.60532 10.248C5.22449 10.9242 5.56792 11.8078 5.56792 12.7246C5.56792 13.6415 5.22449 14.5251 4.60532 15.2013C4.38585 15.4286 4.26569 15.7339 4.27127 16.0499C4.27685 16.3658 4.40772 16.6666 4.63509 16.8861C4.86246 17.1056 5.1677 17.2257 5.48367 17.2202C5.79964 17.2146 6.10045 17.0837 6.31992 16.8563C7.38939 15.7468 7.98693 14.2657 7.98689 12.7246ZM13.9404 12.7246C13.9394 11.2865 13.649 9.86332 13.0865 8.53981C12.5239 7.21629 11.7007 6.01954 10.6659 5.02086C10.551 4.91218 10.4158 4.82721 10.268 4.77079C10.1203 4.71437 9.96285 4.68761 9.80474 4.69203C9.64663 4.69645 9.49094 4.73197 9.34656 4.79657C9.20218 4.86116 9.07193 4.95356 8.96326 5.06848C8.74378 5.30059 8.6255 5.61038 8.63443 5.92969C8.63886 6.0878 8.67438 6.24349 8.73897 6.38787C8.80356 6.53225 8.89596 6.6625 9.01089 6.77117C9.81755 7.54868 10.4592 8.48084 10.8974 9.51193C11.3357 10.543 11.5616 11.6519 11.5616 12.7723C11.5616 13.8926 11.3357 15.0015 10.8974 16.0326C10.4592 17.0637 9.81755 17.9958 9.01089 18.7734C8.89838 18.8836 8.80887 19.0151 8.74756 19.1603C8.68624 19.3054 8.65433 19.4612 8.65368 19.6187C8.65456 19.8514 8.72361 20.0788 8.85228 20.2726C8.98095 20.4665 9.1636 20.6184 9.37767 20.7096C9.59174 20.8008 9.82784 20.8273 10.0568 20.7858C10.2858 20.7443 10.4975 20.6366 10.6659 20.476C11.7065 19.4718 12.5331 18.2673 13.0958 16.9352C13.6585 15.603 13.9458 14.1708 13.9404 12.7246Z"
                fill="white"
                fill-opacity="0.7"
              ></path>
              <path
                d="M15.2142 24.2983C18.2117 21.191 19.8867 17.0421 19.8867 12.7247C19.8867 8.40736 18.2117 4.25839 15.2142 1.15119C14.9908 0.950241 14.6996 0.841214 14.3991 0.845975C14.0987 0.850735 13.8111 0.968931 13.5941 1.17685C13.3772 1.38477 13.2469 1.66704 13.2293 1.96703C13.2118 2.26703 13.3083 2.56256 13.4996 2.79434C16.0749 5.45863 17.5145 9.01922 17.5145 12.7247C17.5145 16.4302 16.0749 19.9908 13.4996 22.6551C13.2868 22.8758 13.1674 23.1701 13.1662 23.4767C13.1668 23.6371 13.1998 23.7957 13.2633 23.943C13.3267 24.0903 13.4192 24.2233 13.5353 24.334C13.7631 24.5511 14.0675 24.6692 14.3821 24.6625C14.6967 24.6558 14.9959 24.5248 15.2142 24.2983Z"
                fill="white"
                fill-opacity="0.7"
              ></path>
            </svg>
          </div>
          <div>
            <div class="font-light">
              <p>5215-2454-1410-9351</p>
            </div>
            <div class="flex justify-between items-center">
              <span>Ted Ciroma</span>
              <div
                class="w-5 h-5 after:w-5 after:bg-yellow-600 after:rounded-[50%] after:h-5 before:w-5 before:bg-red-600 before:rounded-[50%] before:h-5 relative after:absolute before:absolute after:left-[25%] before:right-[25%] before:opacity-50 after:opacity-50"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="card"
          style="--translate: 16px; --scale: 0.91; --z-index: 3; --delay: 0s"
        >
          <div class="flex justify-end">
            <svg
              width="20"
              height="25"
              viewBox="0 0 20 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.842247 12.7248C0.842247 13.3824 1.37534 13.9154 2.03294 13.9154C2.69054 13.9154 3.22363 13.3824 3.22363 12.7248C3.22363 12.0671 2.69054 11.5341 2.03294 11.5341C1.37534 11.5341 0.842247 12.0671 0.842247 12.7248Z"
                fill="white"
                fill-opacity="0.7"
              ></path>
              <path
                d="M7.98689 12.7246C7.98693 11.1836 7.38939 9.70251 6.31992 8.59293C6.10045 8.36556 5.79964 8.23469 5.48367 8.22911C5.1677 8.22353 4.86246 8.34369 4.63509 8.56317C4.40772 8.78264 4.27685 9.08345 4.27127 9.39942C4.26569 9.71538 4.38585 10.0206 4.60532 10.248C5.22449 10.9242 5.56792 11.8078 5.56792 12.7246C5.56792 13.6415 5.22449 14.5251 4.60532 15.2013C4.38585 15.4286 4.26569 15.7339 4.27127 16.0499C4.27685 16.3658 4.40772 16.6666 4.63509 16.8861C4.86246 17.1056 5.1677 17.2257 5.48367 17.2202C5.79964 17.2146 6.10045 17.0837 6.31992 16.8563C7.38939 15.7468 7.98693 14.2657 7.98689 12.7246ZM13.9404 12.7246C13.9394 11.2865 13.649 9.86332 13.0865 8.53981C12.5239 7.21629 11.7007 6.01954 10.6659 5.02086C10.551 4.91218 10.4158 4.82721 10.268 4.77079C10.1203 4.71437 9.96285 4.68761 9.80474 4.69203C9.64663 4.69645 9.49094 4.73197 9.34656 4.79657C9.20218 4.86116 9.07193 4.95356 8.96326 5.06848C8.74378 5.30059 8.6255 5.61038 8.63443 5.92969C8.63886 6.0878 8.67438 6.24349 8.73897 6.38787C8.80356 6.53225 8.89596 6.6625 9.01089 6.77117C9.81755 7.54868 10.4592 8.48084 10.8974 9.51193C11.3357 10.543 11.5616 11.6519 11.5616 12.7723C11.5616 13.8926 11.3357 15.0015 10.8974 16.0326C10.4592 17.0637 9.81755 17.9958 9.01089 18.7734C8.89838 18.8836 8.80887 19.0151 8.74756 19.1603C8.68624 19.3054 8.65433 19.4612 8.65368 19.6187C8.65456 19.8514 8.72361 20.0788 8.85228 20.2726C8.98095 20.4665 9.1636 20.6184 9.37767 20.7096C9.59174 20.8008 9.82784 20.8273 10.0568 20.7858C10.2858 20.7443 10.4975 20.6366 10.6659 20.476C11.7065 19.4718 12.5331 18.2673 13.0958 16.9352C13.6585 15.603 13.9458 14.1708 13.9404 12.7246Z"
                fill="white"
                fill-opacity="0.7"
              ></path>
              <path
                d="M15.2142 24.2983C18.2117 21.191 19.8867 17.0421 19.8867 12.7247C19.8867 8.40736 18.2117 4.25839 15.2142 1.15119C14.9908 0.950241 14.6996 0.841214 14.3991 0.845975C14.0987 0.850735 13.8111 0.968931 13.5941 1.17685C13.3772 1.38477 13.2469 1.66704 13.2293 1.96703C13.2118 2.26703 13.3083 2.56256 13.4996 2.79434C16.0749 5.45863 17.5145 9.01922 17.5145 12.7247C17.5145 16.4302 16.0749 19.9908 13.4996 22.6551C13.2868 22.8758 13.1674 23.1701 13.1662 23.4767C13.1668 23.6371 13.1998 23.7957 13.2633 23.943C13.3267 24.0903 13.4192 24.2233 13.5353 24.334C13.7631 24.5511 14.0675 24.6692 14.3821 24.6625C14.6967 24.6558 14.9959 24.5248 15.2142 24.2983Z"
                fill="white"
                fill-opacity="0.7"
              ></path>
            </svg>
          </div>
          <div>
            <div class="font-light">
              <p>5015-3354-4410-1051</p>
            </div>
            <div class="flex justify-between items-center">
              <span>Kunle Brown</span>
              <div
                class="w-5 h-5 after:w-5 after:bg-yellow-600 after:rounded-[50%] after:h-5 before:w-5 before:bg-red-600 before:rounded-[50%] before:h-5 relative after:absolute before:absolute after:left-[25%] before:right-[25%] before:opacity-50 after:opacity-50"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="card"
          style="--translate: 32px; --scale: 0.82; --z-index: 2; --delay: 0.13s"
        >
          <div class="flex justify-end">
            <svg
              width="20"
              height="25"
              viewBox="0 0 20 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.842247 12.7248C0.842247 13.3824 1.37534 13.9154 2.03294 13.9154C2.69054 13.9154 3.22363 13.3824 3.22363 12.7248C3.22363 12.0671 2.69054 11.5341 2.03294 11.5341C1.37534 11.5341 0.842247 12.0671 0.842247 12.7248Z"
                fill="white"
                fill-opacity="0.7"
              ></path>
              <path
                d="M7.98689 12.7246C7.98693 11.1836 7.38939 9.70251 6.31992 8.59293C6.10045 8.36556 5.79964 8.23469 5.48367 8.22911C5.1677 8.22353 4.86246 8.34369 4.63509 8.56317C4.40772 8.78264 4.27685 9.08345 4.27127 9.39942C4.26569 9.71538 4.38585 10.0206 4.60532 10.248C5.22449 10.9242 5.56792 11.8078 5.56792 12.7246C5.56792 13.6415 5.22449 14.5251 4.60532 15.2013C4.38585 15.4286 4.26569 15.7339 4.27127 16.0499C4.27685 16.3658 4.40772 16.6666 4.63509 16.8861C4.86246 17.1056 5.1677 17.2257 5.48367 17.2202C5.79964 17.2146 6.10045 17.0837 6.31992 16.8563C7.38939 15.7468 7.98693 14.2657 7.98689 12.7246ZM13.9404 12.7246C13.9394 11.2865 13.649 9.86332 13.0865 8.53981C12.5239 7.21629 11.7007 6.01954 10.6659 5.02086C10.551 4.91218 10.4158 4.82721 10.268 4.77079C10.1203 4.71437 9.96285 4.68761 9.80474 4.69203C9.64663 4.69645 9.49094 4.73197 9.34656 4.79657C9.20218 4.86116 9.07193 4.95356 8.96326 5.06848C8.74378 5.30059 8.6255 5.61038 8.63443 5.92969C8.63886 6.0878 8.67438 6.24349 8.73897 6.38787C8.80356 6.53225 8.89596 6.6625 9.01089 6.77117C9.81755 7.54868 10.4592 8.48084 10.8974 9.51193C11.3357 10.543 11.5616 11.6519 11.5616 12.7723C11.5616 13.8926 11.3357 15.0015 10.8974 16.0326C10.4592 17.0637 9.81755 17.9958 9.01089 18.7734C8.89838 18.8836 8.80887 19.0151 8.74756 19.1603C8.68624 19.3054 8.65433 19.4612 8.65368 19.6187C8.65456 19.8514 8.72361 20.0788 8.85228 20.2726C8.98095 20.4665 9.1636 20.6184 9.37767 20.7096C9.59174 20.8008 9.82784 20.8273 10.0568 20.7858C10.2858 20.7443 10.4975 20.6366 10.6659 20.476C11.7065 19.4718 12.5331 18.2673 13.0958 16.9352C13.6585 15.603 13.9458 14.1708 13.9404 12.7246Z"
                fill="white"
                fill-opacity="0.7"
              ></path>
              <path
                d="M15.2142 24.2983C18.2117 21.191 19.8867 17.0421 19.8867 12.7247C19.8867 8.40736 18.2117 4.25839 15.2142 1.15119C14.9908 0.950241 14.6996 0.841214 14.3991 0.845975C14.0987 0.850735 13.8111 0.968931 13.5941 1.17685C13.3772 1.38477 13.2469 1.66704 13.2293 1.96703C13.2118 2.26703 13.3083 2.56256 13.4996 2.79434C16.0749 5.45863 17.5145 9.01922 17.5145 12.7247C17.5145 16.4302 16.0749 19.9908 13.4996 22.6551C13.2868 22.8758 13.1674 23.1701 13.1662 23.4767C13.1668 23.6371 13.1998 23.7957 13.2633 23.943C13.3267 24.0903 13.4192 24.2233 13.5353 24.334C13.7631 24.5511 14.0675 24.6692 14.3821 24.6625C14.6967 24.6558 14.9959 24.5248 15.2142 24.2983Z"
                fill="white"
                fill-opacity="0.7"
              ></path>
            </svg>
          </div>
          <div>
            <div class="font-light">
              <p>4515-2454-3210-3251</p>
            </div>
            <div class="flex justify-between items-center">
              <span>John Doe</span>
              <div
                class="w-5 h-5 after:w-5 after:bg-yellow-600 after:rounded-[50%] after:h-5 before:w-5 before:bg-red-600 before:rounded-[50%] before:h-5 relative after:absolute before:absolute after:left-[25%] before:right-[25%] before:opacity-50 after:opacity-50"
              ></div>
            </div>
          </div>
        </div>
        <div
          class="card"
          style="--translate: 48px; --scale: 0.73; --z-index: 1; --delay: 0.39s"
        >
          <div class="flex justify-end">
            <svg
              width="20"
              height="25"
              viewBox="0 0 20 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.842247 12.7248C0.842247 13.3824 1.37534 13.9154 2.03294 13.9154C2.69054 13.9154 3.22363 13.3824 3.22363 12.7248C3.22363 12.0671 2.69054 11.5341 2.03294 11.5341C1.37534 11.5341 0.842247 12.0671 0.842247 12.7248Z"
                fill="white"
                fill-opacity="0.7"
              ></path>
              <path
                d="M7.98689 12.7246C7.98693 11.1836 7.38939 9.70251 6.31992 8.59293C6.10045 8.36556 5.79964 8.23469 5.48367 8.22911C5.1677 8.22353 4.86246 8.34369 4.63509 8.56317C4.40772 8.78264 4.27685 9.08345 4.27127 9.39942C4.26569 9.71538 4.38585 10.0206 4.60532 10.248C5.22449 10.9242 5.56792 11.8078 5.56792 12.7246C5.56792 13.6415 5.22449 14.5251 4.60532 15.2013C4.38585 15.4286 4.26569 15.7339 4.27127 16.0499C4.27685 16.3658 4.40772 16.6666 4.63509 16.8861C4.86246 17.1056 5.1677 17.2257 5.48367 17.2202C5.79964 17.2146 6.10045 17.0837 6.31992 16.8563C7.38939 15.7468 7.98693 14.2657 7.98689 12.7246ZM13.9404 12.7246C13.9394 11.2865 13.649 9.86332 13.0865 8.53981C12.5239 7.21629 11.7007 6.01954 10.6659 5.02086C10.551 4.91218 10.4158 4.82721 10.268 4.77079C10.1203 4.71437 9.96285 4.68761 9.80474 4.69203C9.64663 4.69645 9.49094 4.73197 9.34656 4.79657C9.20218 4.86116 9.07193 4.95356 8.96326 5.06848C8.74378 5.30059 8.6255 5.61038 8.63443 5.92969C8.63886 6.0878 8.67438 6.24349 8.73897 6.38787C8.80356 6.53225 8.89596 6.6625 9.01089 6.77117C9.81755 7.54868 10.4592 8.48084 10.8974 9.51193C11.3357 10.543 11.5616 11.6519 11.5616 12.7723C11.5616 13.8926 11.3357 15.0015 10.8974 16.0326C10.4592 17.0637 9.81755 17.9958 9.01089 18.7734C8.89838 18.8836 8.80887 19.0151 8.74756 19.1603C8.68624 19.3054 8.65433 19.4612 8.65368 19.6187C8.65456 19.8514 8.72361 20.0788 8.85228 20.2726C8.98095 20.4665 9.1636 20.6184 9.37767 20.7096C9.59174 20.8008 9.82784 20.8273 10.0568 20.7858C10.2858 20.7443 10.4975 20.6366 10.6659 20.476C11.7065 19.4718 12.5331 18.2673 13.0958 16.9352C13.6585 15.603 13.9458 14.1708 13.9404 12.7246Z"
                fill="white"
                fill-opacity="0.7"
              ></path>
              <path
                d="M15.2142 24.2983C18.2117 21.191 19.8867 17.0421 19.8867 12.7247C19.8867 8.40736 18.2117 4.25839 15.2142 1.15119C14.9908 0.950241 14.6996 0.841214 14.3991 0.845975C14.0987 0.850735 13.8111 0.968931 13.5941 1.17685C13.3772 1.38477 13.2469 1.66704 13.2293 1.96703C13.2118 2.26703 13.3083 2.56256 13.4996 2.79434C16.0749 5.45863 17.5145 9.01922 17.5145 12.7247C17.5145 16.4302 16.0749 19.9908 13.4996 22.6551C13.2868 22.8758 13.1674 23.1701 13.1662 23.4767C13.1668 23.6371 13.1998 23.7957 13.2633 23.943C13.3267 24.0903 13.4192 24.2233 13.5353 24.334C13.7631 24.5511 14.0675 24.6692 14.3821 24.6625C14.6967 24.6558 14.9959 24.5248 15.2142 24.2983Z"
                fill="white"
                fill-opacity="0.7"
              ></path>
            </svg>
          </div>
          <div>
            <div class="font-light">
              <p>4515-2854-1410-1251</p>
            </div>
            <div class="flex justify-between items-center">
              <span>Eniola Salami</span>
              <div
                class="w-5 h-5 after:w-5 after:bg-yellow-600 after:rounded-[50%] after:h-5 before:w-5 before:bg-red-600 before:rounded-[50%] before:h-5 relative after:absolute before:absolute after:left-[25%] before:right-[25%] before:opacity-50 after:opacity-50"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="slide-card mt-40 flex flex-col gap-6 sm:gap-0 sm:flex-row text-start max-w-[1200px] mx-auto"
      >
        <div class="card">
          <h6 class="text-lg md:text-xl font-semibold">
            Better Business Expense management
          </h6>
          <p class="text-sm md:text-base leading-relaxed">
            You can issue cards for specific business purposes so you can better
            manage your expenses. An example of a business expense you're able
            to better manage now is your Instagram ad. You're able to issue a
            specific virtual card for all your Instagram ads to better manage
            and account for that expense within your business.
          </p>
        </div>
        <div class="card">
          <h6 class="text-lg md:text-xl font-semibold">New revenue lines</h6>
          <p class="text-sm md:text-base leading-relaxed">
            You can issue a physical bank card to an employee or even a trusted
            merchant at your local market to make the purchases for you. Every
            time you have an order, you're able to fund that card so they can
            purchase it and send it to you for delivery to your customer. The
            possibilities are endless.
          </p>
        </div>
        <div class="card">
          <h6 class="text-lg md:text-xl font-semibold">
            Seamless Business Organization
          </h6>
          <p class="text-sm md:text-base leading-relaxed">
            Reduce the friction of expense management by ditching the old ways
            of obtaining expense approvals. Use Flutterwave Issuing to issue
            cards to the teams within your organization. A physical card for
            your procurement team, for instance, would help to speed up their
            execution while providing you with a birds-eye view of your overall
            spending.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="px-4 bg-[#f8fafd] text-[#1d1d1d] py-32 leading-loose">
    <div class="max-w-[1100px] mx-auto">
      <h2
        class="text-4xl sm:text-5xl desktop:text-7xl font-semibold font-hero max-w-3xl"
      >
        Well documented and easy-to-use
        <span class="text-[#eb7da7]">APIs</span> for
        <span class="text-[#eb7da7]">developers</span>
      </h2>
      <p class="max-w-2xl text-lg sm:text-xl mt-12">
        We have done the core payments integrations and abstractions, so your
        team can easily integrate with our APIs and access multiple payment
        functionalities.
      </p>
      <ul class="mt-12 api-benefits flex flex-col gap-4 text-lg">
        <li>Quick transfers</li>
        <li>Initiate one-time and recurring payments</li>
        <li>Payment verification</li>
        <li>Instant virtual cards creation</li>
        <li>Customer verification</li>
      </ul>
      <div
        class="bg-secondaryBgColor text-white mt-10 px-6 py-4 font-semibold w-fit rounded-lg"
      >
        <a href="#">Read tha API docs</a>
      </div>
    </div>
  </div>
  <div class="py-32 px-4 text-[#1d1d1d]">
    <div class="max-w-[1100px] mx-auto">
      <h2 class="text-4xl sm:text-5xl desktop:text-7xl font-semibold font-hero">
        Our <span class="text-[#6672c7]">global</span> reach
      </h2>
      <div class="flex flex-col md:flex-row mt-28 items-center gap-14 md:gap-0">
        <div class="md:w-1/2">
          <ul
            class="relative flex flex-col gap-16 before:bg-[url('https://flutterwave.com/images/sections/dots.png')] before:top-0 before:left-0 before:bg-cover before:absolute before:h-full before:w-[2px] pl-10"
          >
            <li class="flex flex-col gap-2">
              <span
                class="relative text-xl text-[#00abab] font-bold before:border before:h-7 before:w-[2px] before:border-black before:absolute before:top-0 before:-left-[39px] before:bg-white"
                >30+ Currencies</span
              >
              <span class="text-sm"
                >We accept payments in more than thirty currencies</span
              >
            </li>
            <li class="flex flex-col gap-2">
              <span
                class="relative text-xl font-bold before:border before:h-7 before:w-[2px] before:border-black before:absolute before:top-0 before:-left-[39px] before:bg-white"
                >20M+ API calls</span
              >
              <span class="text-sm"
                >API calls per day, peaking at 231 requests per second.</span
              >
            </li>
            <li class="flex flex-col gap-2">
              <span
                class="relative text-xl font-bold before:border before:h-7 before:w-[2px] before:border-black before:absolute before:top-0 before:-left-[39px] before:bg-white"
                >500k+ payments daily</span
              >
              <span class="text-sm"
                >Average number of payments processed daily.</span
              >
            </li>
            <li class="flex flex-col gap-2">
              <span
                class="relative text-xl font-bold before:border before:h-7 before:w-[2px] before:border-black before:absolute before:top-0 before:-left-[39px] before:bg-white"
                >15+ payment options</span
              >
              <span class="text-sm grid grid-cols-2 gap-3 max-w-md">
                <span>Debit & Credit cards</span>
                <span>Mobile money</span>
                <span>M-Pesa</span>
                <span>Bank Transfer</span>
                <span>Bank Account</span>
                <span>POS</span>
                <span>VISA QR</span>
                <span>USSD</span>
              </span>
            </li>
          </ul>
        </div>
        <div class="relative md:w-1/2">
          <div class="globe">
            <div
              class="md:w-[44rem] md:h-[44rem] w-[65vw] h-[65vw] bg-[#262c55] rounded-[100%] mx-auto overflow-hidden relative"
            >
              <div
                class="globe_map absolute w-[65vw] h-[65vw] md:w-[44rem] md:h-[44rem]"
              >
                <span class="blinking-dot"></span>
                <span class="blinking-dot"></span>
                <span class="blinking-dot"></span>
                <span class="blinking-dot"></span>
                <span class="blinking-dot"></span>
                <span class="blinking-dot"></span>
                <span class="blinking-dot"></span>
                <span class="blinking-dot"></span>
                <div class="flex absolute">
                  <img
                    src="https://flutterwave.com/images/sections/globe.png"
                    class="opacity-50 object-center h-[65vw] md:h-[52rem] w-auto object-cover shrink-0 max-w-none"
                  />
                  <img
                    src="https://flutterwave.com/images/sections/globe.png"
                    class="opacity-50 object-center h-[65vw] md:h-[52rem] w-auto object-cover shrink-0 max-w-none"
                  />
                </div>
              </div>
            </div>
            <svg
              class="w-[65vw] h-[65vw] md:w-[44rem] md:h-[44rem] absolute top-0 scale-[1.58] -left-[2%]"
              width="1179"
              height="1152"
              viewBox="0 0 1179 1152"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M334.326 882.433C286.784 840.832 249.565 788.747 225.608 730.292C201.651 671.837 191.612 608.613 196.284 545.613C200.956 482.612 220.21 421.56 252.528 367.279C284.845 312.997 329.339 266.972 382.497 232.838C435.656 198.704 496.022 177.396 558.828 170.597C621.635 163.798 685.162 171.694 744.393 193.661C803.625 215.629 856.938 251.066 900.123 297.174C943.307 343.282 975.181 398.799 993.227 459.34"
                stroke="#00abab"
              ></path>
              <path
                d="M1004.79 648.64C1013.37 664.833 1015.93 679.803 1012.64 693.203C1009.34 706.602 1000.18 718.513 985.151 728.551C955.073 748.642 902.782 760.368 833.826 762.389C764.893 764.409 681.994 756.653 594.053 739.949C506.113 723.245 416.474 698.228 334.785 667.593C253.093 636.957 182.462 601.867 130.485 566.107C104.497 548.227 83.6757 530.526 68.4327 513.478C53.1864 496.426 43.5431 480.052 39.8701 464.829C36.2015 449.624 38.5536 435.84 46.684 423.775C54.8252 411.694 68.7879 401.296 88.4086 392.947C127.656 376.246 187.89 368.446 262.665 370.429"
                stroke="#fb9129"
              ></path>
              <path
                d="M744.537 203.285C799.611 142.519 849.675 104 888.524 92.3818C907.933 86.5773 924.054 87.6324 936.552 95.1925C949.055 102.756 958.037 116.891 963.03 137.469C973.02 178.646 966.532 243.539 944.284 324.159C922.042 404.757 885.047 497.461 837.876 590.785C790.707 684.108 735.44 773.941 678.925 849.156C622.405 924.378 567.139 981.646 519.979 1013.9C496.398 1030.02 475.396 1039.52 457.537 1042.34C439.696 1045.16 425.016 1041.31 413.989 1030.79C402.942 1020.24 395.739 1003.16 392.55 980.179C389.362 957.207 390.194 928.403 395.163 894.489"
                stroke="#6672c7"
              ></path>
              <path
                d="M838.407 907.01C820.956 952.118 791.357 980.223 752.688 988.55C713.993 996.883 667.503 985.135 617.98 954.392C568.464 923.652 517.759 875.063 471.093 813.609C424.428 752.157 383.499 680.076 352.52 604.785C321.541 529.492 301.636 453.721 294.846 385.27C288.056 316.813 294.634 258.189 313.854 215.404C333.065 172.639 364.201 147.259 404.047 141.774C443.925 136.285 491.182 150.907 540.967 184.251"
                stroke="#eb7da7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        class="bg-[#1d1d1d] text-white mt-20 rounded-3xl py-20 px-6 shadow-[0_25px_50px_rgb(29,29,29,50%)]"
      >
        <div class="max-w-[46rem] mx-auto">
          <h3 class="text-5xl font-hero">Ready to get started?</h3>
          <p class="mt-8 text-[1.35rem]">
            Create an account and instantly start accepting payments, selling
            your beautiful products online and building financial tools.
          </p>
          <div class="flex gap-16 items-center mt-20">
            <span
              class="bg-white text-black px-6 py-4 font-semibold w-fit rounded-lg"
            >
              <a href="#">Get started</a>
            </span>
            <span>
              <a
                href="#"
                class="text-white text-center font-semibold flex group w-fit"
              >
                <span>Contact sales</span>
                <span
                  class="text-2xl flex items-center -mb-[2px] group-hover:ml-1"
                >
                  <i class="bx bx-chevron-right"></i>
                </span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.stacked-card .card {
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    200deg,
    hsla(0, 0%, 100%, 0.2),
    hsla(0, 0%, 100%, 0)
  );
  padding: 2rem;
  width: 30rem;
  height: 20rem;
  top: 0;
  left: 0;
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  border: 1px solid hsla(0, 0%, 100%, 0.15);
  perspective-origin: bottom;
  perspective: 2000;
  transform-style: preserve-3d;
  z-index: var(--z-index);
  transform: translateY(var(--translate)) scaleX(var(--scale));
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
    transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-card .card {
  width: 50%;
  background: hsl(0, 0%, 19%);
  border-radius: 16px;
  box-shadow: 0 25px 50px rgb(0 0 0 / 80%);
  position: relative;
  backdrop-filter: blur(20px);
  padding: 3.5rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.slide-card .card:hover + .card {
  transform: translateX(40%);
}

.slide-card .card:not(:first-child) {
  margin-left: -25%;
}

.card::before {
  content: "";
  position: absolute;
  background: url("https://flutterwave.com/images/sections/box.png");
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  border-radius: 1rem;
  z-index: 10;
}

.stacked-card .card::before {
  opacity: 0.9;
}

.slide-card .card::before {
  opacity: 0.6;
}

.shuffle {
  animation-name: shuffle;
  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
}

.api-benefits li::before {
  background-color: #262c55;
  border-radius: 100%;
  content: "";
  display: inline-block;
  height: 0.7rem;
  width: 1.3rem;
  margin-right: 1rem;
  margin-bottom: -1px;
}

.globe > svg path:first-child {
  stroke-dasharray: 1510;
  stroke-dashoffset: 1510;
  animation: draw-arc-1 3.5s ease-in-out 0.5s infinite;
}

.globe > svg path:nth-child(2) {
  stroke-dasharray: 1400;
  stroke-dashoffset: 1400;
  animation: draw-arc-2 3.5s ease-in-out 0.5s infinite;
}

.globe > svg path:nth-child(3) {
  stroke-dasharray: 1555;
  stroke-dashoffset: 1555;
  animation: draw-arc-3 3.5s ease-in-out 0.5s infinite;
}

.globe > svg path:nth-child(4) {
  stroke-dasharray: 1380;
  stroke-dashoffset: 1380;
  animation: draw-arc-4 4.2s ease-in-out 0.6s infinite;
}

.blinking-dot {
  position: absolute;
  --size: 9px;
  width: var(--size);
  height: var(--size);
  --anim-delay: 0.2s;
  border-radius: 30px;
  background: #eb7da7;
  top: 48%;
  left: 125%;
  transform: scale(0);
  animation: blink 1.3s ease-in-out var(--anim-delay) infinite;
  opacity: 0.7;
}

.blinking-dot:nth-child(2) {
  --anim-delay: -0.2s;
  left: 138%;
  top: 75%;
  background: #00abab;
}

.blinking-dot:nth-child(3) {
  --anim-delay: 0.4s;
  left: 146%;
  top: 55%;
  background: #6672c7;
}

.blinking-dot:nth-child(4) {
  --anim-delay: -0.1s;
  left: 117%;
  top: 18%;
  background: #006aff;
}

.blinking-dot:nth-child(5) {
  --size: 11px;
  --anim-delay: -0.3s;
  left: 85%;
  top: 60%;
  background: #262c55;
}

.blinking-dot:nth-child(6) {
  --anim-delay: -0.5s;
  left: 140%;
  top: 64%;
  background: #eb5757;
}

.blinking-dot:nth-child(7) {
  --anim-delay: -0.1s;
  left: 127%;
  top: 26%;
  background: #ffa07a;
}

.blinking-dot:last-child {
  --size: 11px;
  left: 54%;
  top: 26%;
  background: #ff7ade;
}

.globe_map {
  --translate-value: 244;
  --anim-play-state: running;
  --anim-duration: 12s;
  animation: move-map var(--anim-duration) linear infinite;
}

@keyframes blink {
  40% {
    transform: scale(1.2);
  }

  80% {
    transform: scale(0);
  }
}

@keyframes move-map {
  100% {
    transform: translateX(calc(var(--translate-value) * -1%));
  }
}

@keyframes draw-arc-1 {
  35% {
    stroke-dashoffset: 0;
  }

  75% {
    stroke-dashoffset: 3020;
  }

  100% {
    stroke-dashoffset: 1510;
  }
}

@keyframes draw-arc-2 {
  35% {
    stroke-dashoffset: 0;
  }

  70% {
    stroke-dashoffset: 2800;
  }
  100% {
    stroke-dashoffset: 1400;
  }
}

@keyframes draw-arc-3 {
  35% {
    stroke-dashoffset: 0;
  }

  70% {
    stroke-dashoffset: 3110;
  }
  100% {
    stroke-dashoffset: 1555;
  }
}

@keyframes draw-arc-4 {
  35% {
    stroke-dashoffset: 0;
  }
  70% {
    stroke-dashoffset: 2760;
  }
  100% {
    stroke-dashoffset: 1380;
  }
}

@keyframes shuffle {
  50% {
    transform: translateY(80px) scaleX(1);
    opacity: 0.5;
  }

  100% {
    transform: translateY(48px) scaleX(0.73);
    opacity: 1;
  }
}

@media (max-width: 640px) {
  .slide-card .card:not(:first-child) {
    margin-left: 0;
  }

  .slide-card .card:hover + .card {
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .slide-card .card {
    width: 100%;
    padding: 2rem 1.5rem;
    gap: 10px;
  }

  .blinking-dot {
    position: absolute;
    --size: 5px;
    top: 48%;
    left: 125%;
  }

  .blinking-dot:nth-child(2) {
    left: 132%;
    top: 70%;
  }

  .blinking-dot:nth-child(3) {
    left: 140%;
  }

  .blinking-dot:nth-child(6) {
    left: 140%;
    top: 64%;
  }

  .blinking-dot:nth-child(7) {
    left: 127%;
    top: 26%;
  }

  .blinking-dot:last-child {
    --size: 11px;
    left: 54%;
    top: 26%;
  }

  .globe_map {
    --animation-duration: 10s;
  }
}
</style>
