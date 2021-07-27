export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'OnlineCV_frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      <!-- favicon -->
      { rel: 'icon', type: 'image/x-icon', href: '/assets/images/favicon.ico' },
      <!-- Bootstrap -->
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/bootstrap.min.css'},
      <!-- Magnific -->
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/magnific-popup.css'},
      <!-- Icon -->
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/materialdesignicons.min.css'},
      <!-- SLICK SLIDER -->
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/owl.carousel.min.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/owl.theme.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/owl.transitions.css'},
      <!-- Custom Css -->
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/style.css', id: 'theme-opt'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/colors/default.css', id: 'color-opt'},
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/owl.transitions.css'},
    ],
    script: [
      {src: 'assets/js/jquery.min.js'},
      {src: 'assets/js/bootstrap.bundle.min.js'},
      {src: 'assets/js/jquery.easing.min.js'},
      {src: 'assets/js/scrollspy.min.js'},
      <!-- SLIDER -->
      {src: 'assets/js/owl.carousel.min.js'},
      <!-- Magnific Popup -->
      {src: 'assets/js/jquery.magnific-popup.min.js'},
      {src: 'assets/js/isotope.js'},
      {src: 'assets/js/portfolio-filter.js'},
      {src: 'assets/js/magnific.init.js'},
      <!-- Contact -->
      {src: 'assets/js/contact.js'},
      <!-- Counter -->
      {src: 'assets/js/counter.init.js'},
      <!-- Tweenmax Js -->
      {src: 'assets/js/jquery-twennmax.js'},
      {src: 'assets/js/TweenMax.min.js'},
      {src: 'assets/js/jquery-twennmax.init.js'},
      <!-- Feather icon -->
      {src: 'assets/js/feather.min.js'},
      <!-- Ripples -->
      {src: 'assets/js/jquery.ripples-min.js'},
      {src: 'assets/js/ripple.init.js'},
      <!-- Typed -->
      {src: 'assets/js/typed.js'},
      {src: 'assets/js/typed.init.js'},
      <!-- Main Js -->
      {src: 'assets/js/app.js'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
