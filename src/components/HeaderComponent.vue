<template>
<header>
  <nav class="container sticky-nav">
    <div class="row">
      <div id="brand-name" class="col-2 col-md-6">
        <h1>بلاگ 0</h1>
      </div>
      <div id="mob-menu-btn" class="col-md-3">
        <button class="md-menu-btn">
          <span class="menu-ic-bar"></span>
          <span class="menu-ic-bar"></span>
          <span class="menu-ic-bar"></span>
        </button>
      </div>
      <div id="nav-menu" class="col-6 md-hide">
        <ul class="mobile-menu">
          <li class="menu-item"><a href="#">خانه</a></li>
          <li class="menu-item"><a href="#">دسته ها</a></li>
          <li class="menu-item"><a href="#">تماس با ما</a></li>
          <li class="menu-item"><a href="#">درباره ما</a></li>
        </ul>
      </div>
      <div id="mob-search-btn" class="col-md-3">
        <button class="md-menu-btn">
          search
        </button>
      </div>
      <div id="search-bar" class="col-2 col-md-12 md-hide">
        <form>
          <input type="text" placeholder="جستجو کنید...">
          <button>Go</button>
        </form>
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

<style lang="scss" scoped>
@import '@/assets/css/vars.scss';

header{
  padding: 8px 0;
  background-color: $pri-color;
  border-radius: 0 0 30px 30px;
  color: whitesmoke;
}
.sticky-nav{
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
}
#brand-name{
  text-align: center;
}
#nav-menu{
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  padding: 0 0 4px 0;
}
#nav-menu > ul{
  list-style-type: none;
  display: flex;
}
.menu-item > a{
  color: whitesmoke;
  display: inline-block;
  padding: 0 12px;
  cursor: pointer;
  border-radius: 6px!important;
}
.menu-item > a:hover{
  text-decoration: underline;
}
.md-menu-btn{
  border: none;
  margin: 0;
  padding: 0;
  background-color: inherit;
  color: whitesmoke;
}
#mob-menu-btn > .md-menu-btn{
  display: none;
  position: absolute;
  top: .75rem;
  right: 1rem;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}
#mob-search-btn > .md-menu-btn{
  position: absolute;
  top: .75rem;
  left: 1rem;
}
.md-menu-btn:hover{
  cursor: pointer;
}
.menu-ic-bar{
  width: 100%;
  height: 3px;
  border-radius: 10px;
  border: .15rem solid whitesmoke;
}

@media screen and (max-width: $md) {
  #mob-menu-btn{
    order: 1;
  }
  #nav-menu > ul{
    display: none;
  }
  #brand-name{
    order: 2;
  }
  #mob-search-btn{
    order: 3;
  }
  #search-bar{
    display: none;
    
  }
  .md-menu-btn{
    display: block;
  }
  // .mobile-menu{
    
  // }
}
@media screen and (min-width: $md) {
  #mob-menu-btn, #mob-search-btn{
    display: none;
  }
}
</style>
