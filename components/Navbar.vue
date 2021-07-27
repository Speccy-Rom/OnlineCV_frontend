<template>
  <!-- Navbar Start -->
  <nav class="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
    <div class="container">
      <nuxt-link class="navbar-brand" to="/">
        <img src="#" class="l-dark" height="16" alt="">
        <img src="#" class="l-light" height="16" alt="">
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span data-feather="menu" class="fea icon-md"></span>
      </button><!--end button-->

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <nuxt-link class="nav-link" to="#home">Home</nuxt-link>
          </li><!--end nav item-->
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#services">Services</nuxt-link>
          </li><!--end nav item-->
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#resume">Resume</nuxt-link>
          </li><!--end nav item-->
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#projects">Projects</nuxt-link>
          </li><!--end nav item-->
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#news">Blog</nuxt-link>
          </li><!--end nav item-->
          <li class="nav-item">
            <nuxt-link class="nav-link" to="#contact">Contact</nuxt-link>
          </li><!--end nav item-->
          <li class="nav-item dropdown">
            <nuxt-link class="nav-link dropdown-toggle" to="/javascript:void(0)" id="navbarDropdown" role="button"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages
            </nuxt-link>
            <div class="dropdown-menu rounded m-0" aria-labelledby="navbarDropdown">
              <div class="container mx-0 mx-md-0">
                <div class="row">
                  <div class="col-md-12">
                    <nuxt-link class="dropdown-item" to="/page-blog.html">Blog</nuxt-link>
                    <nuxt-link class="dropdown-item" to="/page-blog-detail.html">Blog Detail</nuxt-link>
                    <nuxt-link class="dropdown-item" to="/page-portfolio.html">Portfolio</nuxt-link>
                    <nuxt-link class="dropdown-item" to="/page-portfolio-detail.html">Portfolio Detail</nuxt-link>
                  </div><!--end col-->
                </div><!--end row-->
              </div><!--end container-->
            </div>
          </li><!--end nav item-->
        </ul>
        <ul class="list-unstyled mb-0 mt-2 mt-sm-0 social-icon light-social-icon">
          <li class="list-inline-item"><nuxt-link to="javascript:void(0)"><i class="mdi mdi-facebook"></i></nuxt-link></li>
          <li class="list-inline-item"><nuxt-link to="javascript:void(0)"><i class="mdi mdi-twitter"></i></nuxt-link></li>
          <li class="list-inline-item"><nuxt-link to="javascript:void(0)"><i class="mdi mdi-instagram"></i></nuxt-link></li>
        </ul>
      </div>
    </div><!--end container-->
  </nav><!--end navbar-->
  <!-- Navbar End -->
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>
