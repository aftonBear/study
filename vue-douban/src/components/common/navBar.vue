<template>
  <div id="navbar">
    <md-theme :md-name="theme">
      <transition name="top-nav">
        <md-toolbar class="top-nav">
          <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
            <md-icon>
              <i class="iconfont icon-menu"></i>
            </md-icon>
          </md-button>
          <h2 class="md-title" style="flex: 1" v-text="activeRoute"></h2>
          <md-button class="md-icon-button">
            <md-icon @click.native="logout">
              <i class="iconfont icon-logout"></i>
            </md-icon>
          </md-button>
        </md-toolbar>
      </transition>
      <transition name="slideD">
        <md-button-bar md-shift class="btm-nav">
          <md-bottom-bar-item @click.native="doAction(0)" :class="{'md-active': isActive[0]}"><i class="iconfont icon-tubiao- btm-nav-icon"></i>电影</md-bottom-bar-item>
          <md-bottom-bar-item @click.native="doAction(1)" :class="{'md-active': isActive[1]}"><i class="iconfont icon-music btm-nav-icon"></i>音乐</md-bottom-bar-item>
          <md-bottom-bar-item @click.native="doAction(2)" :class="{'md-active': isActive[2]}"><i class="iconfont icon-book btm-nav-icon"></i>书籍</md-bottom-bar-item>
          <md-bottom-bar-item @click.native="doAction(3)" :class="{'md-active': isActive[3]}"><i class="iconfont icon-photo btm-nav-icon"></i>图片</md-bottom-bar-item>
        </md-button-bar>
      </transition>
    </md-theme>
  </div>
</template>
<script>
import
export default {
  data() {
    return {};
  },
  computed: {
    theme() {
      return this.$store.getters.THEME_COLOR;
    },
    activeRoute() {
      return this.$store.state.activeRoute;
    }
  }
};
</script>
