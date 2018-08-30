<template>
  <div class="hello">
    <Dropdown trigger="click">
      <Button type="primary">
        语言切换
        <Icon type="ios-arrow-down"></Icon>
      </Button>
      <DropdownMenu slot="list">
        <DropdownItem @click.native='changeLanguage("zh")'>简体中文</DropdownItem>
        <DropdownItem @click.native='changeLanguage("tw")'>繁体中文</DropdownItem>
        <DropdownItem @click.native='changeLanguage("en")'>英文</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data () {
    return {};
  },
  methods: {
    changeLanguage (type) {
      this.$i18n.locale = type;
      window.localStorage.setItem("language", type);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-size: 16px;
  text-align: left
}
</style>
