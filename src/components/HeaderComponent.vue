<template>
<header>
<nav class="fixed-top navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <strong>
      <router-link class="navbar-brand" :to="{name: 'home'}">بلاگ 0</router-link>
    </strong>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          دسته ها
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" to="/">دسته 1</router-link></li>
            <li><router-link class="dropdown-item" to="/">دسته 2</router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li><router-link class="dropdown-item" to="/">دسته 3</router-link></li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{name: 'about'}">درباره</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{name: 'contact'}">تماس با ما</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>
</template>

<script type="text/javascript">
export default{
    name: "HeaderComponent",
    components:{
    }
}
</script>

<style type="text/css" scoped>

</style>