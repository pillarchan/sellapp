<template>
  <div id="goods">
    <div class="menu">
      <Menu active-name="1-2" :open-names="['1']" width="160px">
        <Submenu name="1">
          <template slot="title">Navigation One</template>
          <MenuGroup>
            <MenuItem name="1-1">Option 1</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
          </MenuGroup>
          <MenuGroup>
            <MenuItem name="1-3">Option 3</MenuItem>
            <MenuItem name="1-4">Option 4</MenuItem>
          </MenuGroup>
        </Submenu>
        <Submenu name="2">
          <template slot="title">Navigation One</template>
          <MenuGroup>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </MenuGroup>
          <MenuGroup>
            <MenuItem name="2-3">Option 3</MenuItem>
            <MenuItem name="2-4">Option 4</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
    </div>
    <div class="details">商品详情</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#goods {
  display: flex;
  .menu {
    flex: 0 0 10rem;
  }
  .details {
    flex: 1;
  }
}
</style>