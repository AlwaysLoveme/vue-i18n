<template>
    <Layout>
        <Header>
            <Menu mode="horizontal" active-name="1">
                <MenuItem name="1">
                <Icon type="ios-paper" /> {{$t('nav.content')}}
                </MenuItem>
                <MenuItem name="2">
                <Icon type="ios-people" /> {{$t('nav.userManage')}}
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-stats" /> {{$t('nav.Statist')}}
                    </template>
                    <MenuGroup :title="$t('nav.use')">
                        <MenuItem name="3-1">{{$t('nav.new')}}</MenuItem>
                        <MenuItem name="3-2">{{$t('nav.active')}}</MenuItem>
                        <MenuItem name="3-3">{{$t('nav.time')}}</MenuItem>
                    </MenuGroup>
                    <MenuGroup :title="$t('nav.Retain')">
                        <MenuItem name="3-4">{{$t('nav.retention')}}</MenuItem>
                        <MenuItem name="3-5">{{$t('nav.loss')}}</MenuItem>
                    </MenuGroup>
                </Submenu>
                <MenuItem name="4">
                <Icon type="ios-construct" /> {{$t('nav.seting')}}
                </MenuItem>
            </Menu>
        </Header>
        <Content>
            <router-view />
        </Content>
        <Footer>Footer</Footer>
    </Layout>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
        title1: this.$t('nav.use'),
        title2: this.$t('nav.Retain')
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-size: 16px;
}
.ivu-layout-content{
    padding: 25px
}
</style>