<script>
export default {
  methods: {
    menu() {
      const menuBtn = document.querySelector(".menu-btn");
      let header = document.querySelector("header");
      let isOpen = getComputedStyle(menuBtn).getPropertyValue("--open");
      let navList = document.querySelector(".navlist");
      console.log(header);
      header.classList.toggle("fixed");
      header.classList.toggle("top-0");
      menuBtn.childNodes[0].classList.toggle("rotate-[45deg]");
      menuBtn.childNodes[1].classList.toggle("-rotate-[45deg]");
      menuBtn.childNodes[1].classList.toggle("translate-y-2");
      navList.classList.toggle("hidden");
      avList.classList.toggle("hidden");
    },
  },
};
</script>

<template>
  <header
    class="bg-white pt-4 px-4 desktop:text-center desktop:flex items-center justify-between w-full h-full desktop:h-auto desktop:pt-8 max-w-[1100px] mx-auto text-sm z-[1000] overflow-y-auto desktop:overflow-y-visible"
  >
    <div class="flex justify-between w-full desktop:w-fit items-center">
      <div class="w-44">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1013.12 241.26">
          <rect
            fill="#2a3362"
            x="328.78"
            y="82.1"
            width="16.11"
            height="82.89"
          ></rect>
          <path
            fill="#2a3362"
            d="M407.24,135.58c0,11.44-7.36,16.58-17.16,16.58s-16.35-5.14-16.35-16V106.62H357.62V139.9c0,16.57,10.39,26.26,27.67,26.26,10.86,0,16.93-4,21-8.52h.94l1.4,7.36h14.82V106.62H407.24Z"
          ></path>
          <path
            fill="#2a3362"
            d="M565.27,153.44c-11.79,0-18.44-5.37-19.49-13.19h51.13a33.78,33.78,0,0,0,.35-4.91c-.11-21-16-29.89-33-29.89-19.73,0-34.56,11.8-34.56,30.83,0,18.09,14.25,29.88,35.61,29.88,17.87,0,29.77-7.93,32.23-20.08H581.62C579.63,150.87,573.91,153.44,565.27,153.44Zm-1-35.26c10.28,0,16.23,4.55,17.17,11H546.13C547.64,123,553.6,118.18,564.22,118.18Z"
          ></path>
          <path
            fill="#2a3362"
            d="M624.63,115h-1l-1.52-8.41H607.47V165h16.11V139.9c0-11.33,6.53-17.63,18.68-17.63a32.5,32.5,0,0,1,6.58.58V106.62h-2.25C635.85,106.62,629.18,108.84,624.63,115Z"
          ></path>
          <polygon
            fill="#2a3362"
            points="727.94 146.78 727.01 146.78 713.23 110.24 696.65 110.24 683.11 146.67 682.06 146.67 669.22 106.62 653.22 106.62 672.95 165 690.47 165 704.48 127.75 705.41 127.75 719.19 165 736.82 165 756.55 106.62 740.55 106.62 727.94 146.78"
          ></polygon>
          <path
            fill="#2a3362"
            d="M820.67,148V128.46c0-15.88-13.43-23-30.13-23-17.74,0-28.83,8.41-30.35,21H776.3c1.17-5.49,5.84-8.52,14.24-8.52s14,3.15,14,9.57V129l-26.27,2c-12.14.94-21,6.31-21,17.75,0,11.79,10.16,17.39,25.1,17.39,12.06,0,19.41-3.36,23.91-8.43h.8c2.53,5.7,7.66,7.27,13.24,7.27h6.77V153.09h-1.52C822.18,153.09,820.67,151.46,820.67,148Zm-16.12-6.19c0,9.23-11,12.26-20.43,12.26-6.42,0-10.62-1.63-10.62-6.07,0-4,3.62-5.95,9-6.42l22.06-1.63Z"
          ></path>
          <polygon
            fill="#2a3362"
            points="880.23 106.62 861.43 148.89 860.38 148.89 841.35 106.62 823.95 106.62 851.15 165 870.42 165 897.5 106.62 880.23 106.62"
          ></polygon>
          <path
            fill="#2a3362"
            d="M949,146.08c-2,4.79-7.71,7.36-16.35,7.36-11.79,0-18.44-5.37-19.49-13.19h51.13a33.78,33.78,0,0,0,.35-4.91c-.11-21-16-29.89-33-29.89-19.73,0-34.55,11.8-34.55,30.83,0,18.09,14.24,29.88,35.6,29.88,17.87,0,29.77-7.93,32.23-20.08Zm-17.4-27.9c10.28,0,16.23,4.55,17.17,11H913.47C915,123,920.94,118.18,931.56,118.18Z"
          ></path>
          <path
            fill="#2a3362"
            d="M302.6,102.32c0-5.14,3.62-7.35,8.29-7.35a24.17,24.17,0,0,1,6.42.93L320,84.22a36.71,36.71,0,0,0-12.14-2.1c-11.91,0-21.48,6.31-21.48,19.38v5.12h-13.9v12.79h13.9V165H302.6v-45.6h18.16V106.62H302.6Z"
          ></path>
          <path
            fill="#2a3362"
            d="M459,90.16H444l-.84,16.46H430.48v12.79h12.38v28.78c0,9.8,5,18,20,18a52.84,52.84,0,0,0,11.56-1.28V152.62a34.29,34.29,0,0,1-6.66.82c-8.05,0-8.75-4.55-8.75-8.06v-26h16V106.62H459Z"
          ></path>
          <path
            fill="#2a3362"
            d="M509.59,90.16H494.64l-.84,16.46H481.09v12.79h12.38v28.78c0,9.8,5,18,20,18A52.84,52.84,0,0,0,525,164.88V152.62a34.29,34.29,0,0,1-6.66.82c-8.05,0-8.75-4.55-8.75-8.06v-26h16.05V106.62H509.59Z"
          ></path>
          <path
            fill="#009a46"
            d="M48.23,79.89c0-9.37,2.74-17.37,8.49-23.12l10,10C55.59,77.86,65.31,112.34,97,144.06s66.19,41.43,77.31,30.32l10,10c-18.76,18.76-61.49,5.45-97.26-30.33C62.24,129.23,48.23,101.07,48.23,79.89Z"
          ></path>
          <path
            fill="#ff5805"
            d="M111.29,193c-9.37,0-17.37-2.74-23.13-8.49l10-10c11.11,11.11,45.59,1.39,77.31-30.32S216.89,78,205.78,66.89l10-10c18.77,18.76,5.45,61.49-30.33,97.26C160.63,179,132.47,193,111.29,193Z"
          ></path>
          <path
            fill="#f5afcb"
            d="M188.76,139.84c-6.07-17.48-18.47-36.16-34.92-52.6-35.77-35.78-78.5-49.1-97.26-30.33h0c-1.33,1.34-.18,4.65,2.58,7.41s6.07,3.9,7.4,2.57c11.12-11.11,45.6-1.39,77.31,30.33,15,15,26.18,31.75,31.57,47.25,4.72,13.59,4.26,24.55-1.24,30.05h0c-1.34,1.33-.18,4.65,2.57,7.4s6.07,3.91,7.41,2.57C193.79,174.88,195.42,159,188.76,139.84Z"
          ></path>
          <path
            fill="#ff9b00"
            d="M215.76,56.91c-9.63-9.63-25.49-11.26-44.67-4.59-17.47,6.06-36.16,18.47-52.6,34.91C82.72,123,69.4,165.73,88.16,184.5h0c1.34,1.33,4.65.18,7.41-2.57s3.91-6.07,2.57-7.41C87,163.41,96.75,128.93,128.47,97.21c15-15,31.75-26.18,47.25-31.57,13.59-4.71,24.55-4.26,30.06,1.24h0c1.33,1.33,4.65.18,7.4-2.58S217.09,58.24,215.76,56.91Z"
          ></path>
        </svg>
      </div>
      <button
        v-on:click="menu()"
        style="--open: false"
        class="menu-btn desktop:hidden relative w-10 h-10"
      >
        <span
          class="border border-gray-600 w-7 inline-block rounded-full absolute top-[50%] left-[50%] -translate-x-[50%]"
        ></span>
        <span
          class="border border-gray-600 w-7 inline-block rounded-full absolute top-[50%] translate-y-2 left-[50%] -translate-x-[50%]"
        ></span>
      </button>
    </div>
    <div
      class="navlist hidden desktop:flex items-center text-navTextColor font-semibold"
    >
      <ul class="desktop:flex items-center">
        <li
          class="relative p-3 py-6 desktop:mr-5 group border-b border-dashed desktop:border-none"
        >
          <span
            class="relative z-40 uppercase desktop:normal-case text-gray-600 desktop:text-inherit text-xs desktop:text-sm mb-5 desktop:mb-0 inline-block"
            >Payments</span
          >
          <ul
            class="flex desktop:hidden desktop:group-hover:flex header-dropdown bg-white"
          >
            <li class="header-dropdown-link">
              <a href="#" class="group">
                <span class="header-dropdown-icon">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="hd__nav__link__icon"
                  >
                    <g clip-path="url(#clip0_4995_8735)">
                      <path
                        d="M28.3557 -0.0314941H13.6446C6.10028 -0.0314941 -0.015625 6.08441 -0.015625 13.6288V28.3398C-0.015625 35.8841 6.10028 42 13.6446 42H28.3557C35.9 42 42.0159 35.8841 42.0159 28.3398V13.6288C42.0159 6.08441 35.9 -0.0314941 28.3557 -0.0314941Z"
                        fill="#FDF6E6"
                      ></path>
                      <path
                        d="M16.8813 33.4992L16.6869 33.5412C16.4247 33.5943 16.1546 33.5944 15.8924 33.5413C15.6302 33.4883 15.3814 33.3832 15.1605 33.2324C14.9396 33.0815 14.7512 32.8879 14.6064 32.663C14.4616 32.4381 14.3633 32.1865 14.3174 31.923L10.3822 12.3573C10.266 11.8243 10.3617 11.267 10.649 10.8033C10.9363 10.3395 11.3926 10.0056 11.9216 9.8722L12.116 9.82492C12.3781 9.77254 12.648 9.77305 12.9099 9.82641C13.1718 9.87976 13.4204 9.98489 13.6411 10.1356C13.8618 10.2864 14.0502 10.4797 14.1952 10.7042C14.3402 10.9287 14.4389 11.1799 14.4855 11.4431L18.4207 30.9983C18.5414 31.5336 18.4479 32.0949 18.1603 32.5622C17.8726 33.0296 17.4136 33.3658 16.8813 33.4992Z"
                        fill="#2A3761"
                      ></path>
                      <path
                        d="M30.2623 21.3993L30.0049 21.4571L19.8385 23.7111C19.6502 23.7498 19.4561 23.7503 19.2676 23.7125C19.0792 23.6747 18.9002 23.5994 18.7414 23.4911C18.5826 23.3828 18.4472 23.2436 18.3433 23.082C18.2393 22.9203 18.1689 22.7394 18.1362 22.55L18.0942 22.3503C18.0665 22.1927 18.0076 22.0422 17.9208 21.9078C17.834 21.7734 17.7212 21.6577 17.5889 21.5676C17.4567 21.4775 17.3078 21.4148 17.1509 21.3832C16.994 21.3516 16.8324 21.3517 16.6756 21.3836L15.7036 21.5937C15.4611 21.6438 15.2109 21.6445 14.9681 21.5958C14.7253 21.5471 14.4948 21.4499 14.2903 21.3102C14.0858 21.1705 13.9116 20.991 13.778 20.7824C13.6444 20.5739 13.5542 20.3405 13.5128 20.0964L12.3674 14.4011L12.0837 13.1349C11.9995 12.748 12.0692 12.3435 12.2781 12.0071C12.487 11.6707 12.8186 11.4289 13.2028 11.3328L14.0592 11.1384L21.1677 9.56222C21.3404 9.52483 21.5189 9.52251 21.6925 9.55543C21.8661 9.58834 22.0313 9.65581 22.1784 9.75383C22.3254 9.85185 22.4512 9.97841 22.5484 10.126C22.6455 10.2736 22.712 10.4392 22.7439 10.613L22.8017 10.8967C22.8294 11.0602 22.8897 11.2164 22.979 11.3561C23.0683 11.4957 23.1848 11.616 23.3216 11.7096C23.4584 11.8033 23.6127 11.8684 23.7752 11.9012C23.9377 11.9339 24.1052 11.9336 24.2676 11.9002L28.0767 11.0333C28.3043 10.9878 28.5387 10.9884 28.7661 11.0349C28.9935 11.0814 29.2093 11.173 29.4007 11.3042C29.5922 11.4354 29.7554 11.6037 29.8808 11.799C30.0062 11.9943 30.0913 12.2127 30.131 12.4414L31.3236 18.3888L31.5233 19.3871C31.6125 19.8203 31.5313 20.2713 31.2964 20.6461C31.0615 21.021 30.6911 21.2908 30.2623 21.3993V21.3993Z"
                        fill="#FF9F00"
                      ></path>
                      <path
                        d="M13.2252 11.3118C12.8327 11.4031 12.4924 11.6462 12.2787 11.9879C12.065 12.3296 11.9954 12.742 12.0851 13.1349L12.3478 14.4221L13.4932 20.1174C13.5346 20.3615 13.6248 20.5948 13.7584 20.8034C13.892 21.0119 14.0662 21.1914 14.2707 21.3312C14.4752 21.4709 14.7057 21.5681 14.9485 21.6168C15.1913 21.6655 15.4415 21.6648 15.684 21.6147L16.4721 21.4413L14.5072 11.5587C14.4704 11.3905 14.4158 11.2267 14.3443 11.0701L14.0816 11.1279L13.2252 11.3118Z"
                        fill="#FF5804"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_4995_8735">
                        <rect width="42" height="42" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="header-dropdown-info">
                  <span class="dropdown-info-title group-hover:text-green-600"
                    >Collect payments</span
                  >
                  <span class="text-">Collect payment in 30+ currencies</span>
                </span>
              </a>
            </li>
            <li class="header-dropdown-link">
              <a href="#" class="group">
                <span class="header-dropdown-icon">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="hd__nav__link__icon"
                  >
                    <g clip-path="url(#clip0_5031_21902)">
                      <path
                        d="M28.3656 0.0157471H13.6656C6.12694 0.0157471 0.015625 6.12706 0.015625 13.6657V28.3657C0.015625 35.9044 6.12694 42.0157 13.6656 42.0157H28.3656C35.9043 42.0157 42.0156 35.9044 42.0156 28.3657V13.6657C42.0156 6.12706 35.9043 0.0157471 28.3656 0.0157471Z"
                        fill="#E9EAF3"
                      ></path>
                      <path
                        d="M21.0159 28.4183C26.5162 28.4183 30.9751 23.9593 30.9751 18.459C30.9751 12.9587 26.5162 8.49976 21.0159 8.49976C15.5155 8.49976 11.0566 12.9587 11.0566 18.459C11.0566 23.9593 15.5155 28.4183 21.0159 28.4183Z"
                        fill="#2A3761"
                      ></path>
                      <path
                        d="M22.6006 19.509L27.9871 31.059C28.1289 31.3683 28.1773 31.7123 28.1265 32.0487C28.0756 32.3851 27.9277 32.6994 27.7009 32.953C27.474 33.2066 27.1781 33.3885 26.8494 33.4764C26.5207 33.5642 26.1735 33.5543 25.8504 33.4477L21.5716 32.025C21.2158 31.9042 20.8301 31.9042 20.4744 32.025L16.1904 33.453C15.8783 33.5569 15.5433 33.5705 15.2239 33.4921C14.9045 33.4136 14.6138 33.2465 14.3854 33.0098C14.157 32.7732 14.0002 32.4767 13.9331 32.1548C13.866 31.8328 13.8914 31.4984 14.0064 31.1902C14.0184 31.1445 14.036 31.1004 14.0589 31.059L19.4244 19.5037C19.5516 19.2209 19.7539 18.9783 20.0094 18.8024C20.2649 18.6265 20.5637 18.5241 20.8734 18.5062H20.9994C21.3354 18.4971 21.6666 18.5874 21.9515 18.7658C22.2363 18.9442 22.4622 19.2027 22.6006 19.509V19.509Z"
                        fill="#F2AEC9"
                      ></path>
                      <path
                        d="M21.0007 28.4183C22.7916 28.4216 24.5498 27.939 26.088 27.0218L22.602 19.509C22.4635 19.2027 22.2377 18.9442 21.9528 18.7658C21.6679 18.5874 21.3367 18.4971 21.0007 18.5062H20.8957C20.5824 18.5203 20.2791 18.621 20.0196 18.7971C19.7601 18.9732 19.5545 19.2178 19.4257 19.5038L15.9082 27.0218C17.4482 27.9392 19.2082 28.4218 21.0007 28.4183V28.4183Z"
                        fill="#FF5804"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_5031_21902">
                        <rect width="42" height="42" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="header-dropdown-info">
                  <span class="dropdown-info-title group-hover:text-green-600"
                    >Send money</span
                  >
                  <span>Send money to anyone or business globally.</span>
                </span>
              </a>
            </li>
            <li class="header-dropdown-link">
              <a href="#" class="group">
                <span class="header-dropdown-icon">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="hd__nav__link__icon"
                  >
                    <g clip-path="url(#clip0_5031_21916)">
                      <path
                        d="M28.34 -0.0314941H13.629C6.08465 -0.0314941 -0.03125 6.08441 -0.03125 13.6288V28.3398C-0.03125 35.8841 6.08465 42 13.629 42H28.34C35.8844 42 42.0003 35.8841 42.0003 28.3398V13.6288C42.0003 6.08441 35.8844 -0.0314941 28.34 -0.0314941Z"
                        fill="#FDF6E6"
                      ></path>
                      <path
                        d="M29.2696 16.6656C29.1029 16.0113 28.7165 15.4341 28.1752 15.0305C27.634 14.627 26.9705 14.4215 26.2959 14.4484H15.8878C15.2132 14.4215 14.5497 14.627 14.0085 15.0305C13.4672 15.4341 13.0808 16.0113 12.9141 16.6656L10.2871 29.4904C9.94562 31.1559 11.3694 32.6901 13.2556 32.6901H28.9281C30.8143 32.6901 32.2381 31.1559 31.8966 29.4904L29.2696 16.6656Z"
                        fill="#2A3761"
                      ></path>
                      <path
                        d="M26.5691 11.9002V17.8634C26.5664 18.1277 26.4869 18.3855 26.3405 18.6056C26.1941 18.8257 25.987 18.9986 25.7443 19.1033C25.5779 19.1725 25.399 19.2065 25.2189 19.2031C25.0393 19.2038 24.8613 19.169 24.6953 19.1006C24.5292 19.0322 24.3784 18.9316 24.2514 18.8046C24.1244 18.6776 24.0238 18.5267 23.9554 18.3607C23.887 18.1946 23.8522 18.0167 23.8528 17.8371V11.9002C23.8514 11.5526 23.781 11.2088 23.6457 10.8886C23.5104 10.5684 23.313 10.2783 23.0648 10.035C22.9242 9.89187 22.7652 9.76818 22.5919 9.66723C22.1757 9.40285 21.6927 9.26253 21.1996 9.26267C20.5029 9.26267 19.8347 9.53944 19.3421 10.0321C18.8494 10.5247 18.5726 11.1929 18.5726 11.8896V17.8634C18.5728 18.1352 18.4919 18.4008 18.3403 18.6264C18.1887 18.8519 17.9732 19.0271 17.7215 19.1296C17.555 19.1982 17.3762 19.2322 17.1961 19.2294C16.8338 19.2294 16.4864 19.0855 16.2302 18.8293C15.974 18.5731 15.8301 18.2257 15.8301 17.8634V11.9002C15.8319 11.0153 16.052 10.1446 16.4708 9.3652C16.8896 8.58576 17.4941 7.92164 18.2309 7.43167C18.9677 6.9417 19.8139 6.64101 20.6947 6.55624C21.5754 6.47147 22.4635 6.60524 23.2802 6.94569C24.2535 7.35849 25.0841 8.04812 25.6688 8.92893C26.2535 9.80975 26.5666 10.8429 26.5691 11.9002V11.9002Z"
                        fill="#FEB843"
                      ></path>
                      <path
                        d="M15.8879 14.4484H15.8301V17.8634C15.8301 18.0433 15.8656 18.2213 15.9346 18.3874C16.0035 18.5535 16.1046 18.7043 16.232 18.8312C16.3594 18.9581 16.5106 19.0586 16.677 19.127C16.8433 19.1953 17.0215 19.2301 17.2014 19.2295C17.3815 19.2323 17.5602 19.1983 17.7268 19.1296C17.9765 19.0256 18.1898 18.8497 18.3394 18.6242C18.4891 18.3988 18.5684 18.134 18.5674 17.8634V14.4484H15.8879Z"
                        fill="#FF5804"
                      ></path>
                      <path
                        d="M25.2197 19.2032C25.3998 19.2066 25.5787 19.1726 25.7451 19.1034C25.9878 18.9987 26.1949 18.8258 26.3413 18.6057C26.4877 18.3856 26.5672 18.1278 26.5699 17.8634V14.4694C26.479 14.464 26.3877 14.464 26.2967 14.4694H23.8379V17.8634C23.8406 18.0421 23.8785 18.2186 23.9495 18.3826C24.0204 18.5467 24.1229 18.6951 24.2513 18.8195C24.3796 18.944 24.5311 19.0419 24.6973 19.1077C24.8635 19.1735 25.041 19.206 25.2197 19.2032V19.2032Z"
                        fill="#FF5804"
                      ></path>
                      <path
                        d="M23.3544 25.0666L20.5278 26.7952C20.4252 26.8613 20.3074 26.9002 20.1856 26.9079C20.0638 26.9156 19.942 26.892 19.8319 26.8394C19.7218 26.7867 19.627 26.7067 19.5566 26.607C19.4862 26.5072 19.4425 26.3912 19.4297 26.2698V22.8179C19.4425 22.6965 19.4862 22.5804 19.5566 22.4807C19.627 22.381 19.7218 22.301 19.8319 22.2483C19.942 22.1956 20.0638 22.172 20.1856 22.1798C20.3074 22.1875 20.4252 22.2263 20.5278 22.2925L23.3544 23.9948C23.4469 24.0504 23.5234 24.1289 23.5765 24.2228C23.6296 24.3168 23.6576 24.4228 23.6576 24.5307C23.6576 24.6386 23.6296 24.7447 23.5765 24.8386C23.5234 24.9325 23.4469 25.011 23.3544 25.0666Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_5031_21916">
                        <rect width="42" height="42" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="header-dropdown-info">
                  <span class="dropdown-info-title group-hover:text-green-600"
                    >Checkout demo</span
                  >
                  <span>Experience checkout yourself</span>
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li
          class="relative p-3 py-6 desktop:mr-5 group border-b border-dashed desktop:border-none"
        >
          <span
            class="relative z-40 uppercase desktop:normal-case text-gray-600 desktop:text-inherit text-xs desktop:text-sm mb-5 desktop:mb-0 inline-block"
            >Commerce</span
          >
          <ul
            class="flex desktop:hidden desktop:group-hover:flex header-dropdown bg-white"
          >
            <li class="header-dropdown-link">
              <a href="#" class="group">
                <span class="header-dropdown-icon">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="hd__nav__link__icon"
                  >
                    <path
                      d="M28.35 0H13.65C6.11131 0 0 6.11131 0 13.65V28.35C0 35.8887 6.11131 42 13.65 42H28.35C35.8887 42 42 35.8887 42 28.35V13.65C42 6.11131 35.8887 0 28.35 0Z"
                      fill="#D9F4E4"
                    ></path>
                    <path
                      d="M25.3945 15.771H16.606C13.7181 15.771 11.377 18.1121 11.377 21V27.9457C11.377 30.8336 13.7181 33.1747 16.606 33.1747H25.3945C28.2823 33.1747 30.6235 30.8336 30.6235 27.9457V21C30.6235 18.1121 28.2823 15.771 25.3945 15.771Z"
                      fill="#2A3761"
                    ></path>
                    <path
                      d="M31.7094 19.3883C24.6883 21.231 17.3105 21.231 10.2894 19.3883C8.61461 18.9578 8.00036 17.2883 9.11336 16.1595L13.1244 10.9095C13.6369 10.4241 14.319 10.1584 15.0249 10.1693H27.3834C28.0889 10.1601 28.7704 10.4256 29.2839 10.9095L32.8854 16.1595L32.9326 16.2068L33.0166 16.296C33.9459 17.409 33.3159 18.9735 31.7094 19.3883Z"
                      fill="#35A162"
                    ></path>
                    <path
                      d="M11.4238 19.6665C17.7232 21.1366 24.2765 21.1366 30.5758 19.6665C30.4613 18.6067 29.965 17.6248 29.1796 16.9041C28.3942 16.1834 27.3733 15.7732 26.3076 15.75H15.6921C14.6264 15.7732 13.6055 16.1834 12.8201 16.9041C12.0346 17.6248 11.5383 18.6067 11.4238 19.6665V19.6665Z"
                      fill="#FF9F00"
                    ></path>
                    <path
                      d="M24.6325 24.1395H17.3717C16.5106 24.1395 15.8125 24.8376 15.8125 25.6988C15.8125 26.5599 16.5106 27.258 17.3717 27.258H24.6325C25.4936 27.258 26.1917 26.5599 26.1917 25.6988C26.1917 24.8376 25.4936 24.1395 24.6325 24.1395Z"
                      fill="white"
                    ></path>
                  </svg>
                </span>
                <span class="header-dropdown-info">
                  <span class="dropdown-info-title group-hover:text-green-600"
                    >Store</span
                  >
                  <span>Start selling online.</span>
                </span>
              </a>
            </li>
            <li class="header-dropdown-link">
              <a href="#" class="group">
                <span class="header-dropdown-icon">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="hd__nav__link__icon"
                  >
                    <g clip-path="url(#clip0_5031_21959)">
                      <path
                        d="M28.3557 -0.0157471H13.6446C6.10028 -0.0157471 -0.015625 6.10015 -0.015625 13.6445V28.3555C-0.015625 35.8999 6.10028 42.0158 13.6446 42.0158H28.3557C35.9 42.0158 42.0159 35.8999 42.0159 28.3555V13.6445C42.0159 6.10015 35.9 -0.0157471 28.3557 -0.0157471Z"
                        fill="#F9EEF3"
                      ></path>
                      <path
                        d="M21.2162 19.4028C24.3268 19.4028 26.8484 16.7541 26.8484 13.4869C26.8484 10.2196 24.3268 7.57092 21.2162 7.57092C18.1056 7.57092 15.584 10.2196 15.584 13.4869C15.584 16.7541 18.1056 19.4028 21.2162 19.4028Z"
                        fill="#F2AEC9"
                      ></path>
                      <path
                        d="M26.9958 14.1699H15.001C12.4505 14.1699 10.3828 16.2376 10.3828 18.7881V25.9387C10.3828 28.4893 12.4505 30.557 15.001 30.557H26.9958C29.5463 30.557 31.614 28.4893 31.614 25.9387V18.7881C31.614 16.2376 29.5463 14.1699 26.9958 14.1699Z"
                        fill="#2A3761"
                      ></path>
                      <path
                        d="M15.625 14.1857C15.744 15.597 16.3808 16.9144 17.4128 17.8844C18.4449 18.8544 19.7992 19.4083 21.2152 19.4396C22.6293 19.4057 23.9811 18.8507 25.011 17.8809C26.0408 16.9112 26.6761 15.5952 26.7949 14.1857H15.625Z"
                        fill="#FF5804"
                      ></path>
                      <path
                        d="M27.7137 23.732C28.4305 23.732 29.0115 23.1205 29.0115 22.366C29.0115 21.6116 28.4305 21 27.7137 21C26.997 21 26.416 21.6116 26.416 22.366C26.416 23.1205 26.997 23.732 27.7137 23.732Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_5031_21959">
                        <rect width="42" height="42" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="header-dropdown-info">
                  <span class="dropdown-info-title group-hover:text-green-600"
                    >Payment Links</span
                  >
                  <span>Accept payments without writing code.</span>
                </span>
              </a>
            </li>
            <li class="header-dropdown-link">
              <a href="#" class="group">
                <span class="header-dropdown-icon">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="hd__nav__link__icon"
                  >
                    <g clip-path="url(#clip0_5031_21974)">
                      <path
                        d="M28.3557 -0.0157471H13.6446C6.10028 -0.0157471 -0.015625 6.10015 -0.015625 13.6445V28.3555C-0.015625 35.8999 6.10028 42.0158 13.6446 42.0158H28.3557C35.9 42.0158 42.0159 35.8999 42.0159 28.3555V13.6445C42.0159 6.10015 35.9 -0.0157471 28.3557 -0.0157471Z"
                        fill="#F9EEF3"
                      ></path>
                      <path
                        d="M26.3803 11.9633H15.9092C13.733 11.9633 11.9688 13.7275 11.9688 15.9037V29.5745C11.9688 31.7507 13.733 33.5149 15.9092 33.5149H26.3803C28.5566 33.5149 30.3208 31.7507 30.3208 29.5745V15.9037C30.3208 13.7275 28.5566 11.9633 26.3803 11.9633Z"
                        fill="#2A3761"
                      ></path>
                      <path
                        d="M28.3454 8.47986H13.9444C12.0583 8.47986 10.5293 10.0077 10.5293 11.8923C10.5293 13.7769 12.0583 15.3047 13.9444 15.3047H28.3454C30.2315 15.3047 31.7605 13.7769 31.7605 11.8923C31.7605 10.0077 30.2315 8.47986 28.3454 8.47986Z"
                        fill="#F2AEC9"
                      ></path>
                      <path
                        d="M12.0273 14.7636C12.5437 15.1123 13.1539 15.2956 13.7769 15.289H28.5142C29.1387 15.2946 29.7504 15.1115 30.269 14.7636C30.1526 13.9949 29.7681 13.2922 29.1835 12.7797C28.5989 12.2673 27.8519 11.9781 27.0746 11.9633H15.2375C14.4575 11.9744 13.7067 12.2619 13.1189 12.7747C12.531 13.2875 12.1442 13.9923 12.0273 14.7636V14.7636Z"
                        fill="#FF5804"
                      ></path>
                      <path
                        d="M25.129 20.7688H16.6018C16.0041 20.7688 15.5195 21.2534 15.5195 21.8511C15.5195 22.4489 16.0041 22.9334 16.6018 22.9334H25.129C25.7267 22.9334 26.2113 22.4489 26.2113 21.8511C26.2113 21.2534 25.7267 20.7688 25.129 20.7688Z"
                        fill="white"
                      ></path>
                      <path
                        d="M20.9994 25.324H16.6018C16.0041 25.324 15.5195 25.8085 15.5195 26.4063C15.5195 27.004 16.0041 27.4886 16.6018 27.4886H20.9994C21.5971 27.4886 22.0817 27.004 22.0817 26.4063C22.0817 25.8085 21.5971 25.324 20.9994 25.324Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_5031_21974">
                        <rect width="42" height="42" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="header-dropdown-info">
                  <span class="dropdown-info-title group-hover:text-green-600"
                    >Invoices</span
                  >
                  <span>Create professional invoices.</span>
                </span>
              </a>
            </li>
          </ul>
        </li>
        <li class="relative p-3 py-6 desktop:mr-5 group">
          <a href="#" class="flex flex-col gap-2">
            <span class="group-hover:text-green-400">Issuing</span>
            <span class="desktop:hidden">Issue physical & virtual cards</span>
          </a>
        </li>
        <li class="relative p-3 py-6 desktop:mr-5 group">
          <a href="#" class="flex flex-col gap-2">
            <span class="group-hover:text-green-400">Capital</span>
            <span class="desktop:hidden"
              >Get quick access to flexible loans to grow your business</span
            >
          </a>
        </li>
        <li class="relative p-3 py-6 desktop:mr-5 group">
          <a href="#" class="flex flex-col gap-2">
            <span class="group-hover:text-green-400">Grow</span>
            <span class="desktop:hidden"
              >Register & incorporate your business from anywhere</span
            >
          </a>
        </li>
        <li class="relative p-3 py-6 desktop:mr-5 group">
          <a href="#" class="flex flex-col gap-2">
            <span class="group-hover:text-green-400">Saas</span>
            <span class="desktop:hidden"
              >Embed financial service into your product</span
            >
          </a>
        </li>
      </ul>
      <div
        class="bg-secondaryBgColor desktop:hidden text-white text-center my-6 py-4 px-12 rounded-xl text-xs font-medium"
      >
        <a href="#">Sign in</a>
      </div>
    </div>
    <div
      class="bg-primaryBgColor hidden h-fit desktop:flex items-center py-3 px-12 rounded-xl text-[14px] font-medium"
    >
      <a href="#">Sign in</a>
    </div>
  </header>
</template>

<style scoped>
.header-dropdown {
  border-radius: 1rem;
  flex-direction: column;
  gap: 40px;
  text-align: start;
}

.header-dropdown-icon {
  display: block;
  width: 50px;
  display: flex;
}

.header-dropdown-icon svg {
  width: 100%;
}

.header-dropdown-link a {
  display: grid;
  grid-template-columns: 60px auto;
  gap: 0.5rem;
}
.header-dropdown-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.dropdown-info-title {
  font-weight: 700;
}
@media (min-width: 880px) {
  .header-dropdown {
    position: absolute;
    width: 340px;
    border-radius: 1rem;
    box-shadow: 0 0 50px 10px #eee;
    flex-direction: column;
    gap: 30px;
    text-align: start;
    padding: 20px;
    top: 40px;
    left: -50px;
    z-index: 10px;
  }
}
</style>
