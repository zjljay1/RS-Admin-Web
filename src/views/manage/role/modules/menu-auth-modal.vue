<script lang="ts" setup>
import { computed, shallowRef, watch } from 'vue';
import { $t } from '@/locales';
import { fetchGetAllPages, fetchGetMenuTree, fetchGetRoleResourceList } from '@/service/api';

defineOptions({
  name: 'MenuAuthModal'
});

interface Props {
  /** the roleId */
  roleId: number;
}

const props = defineProps<Props>();

const visible = defineModel<boolean>('visible', {
  default: false
});

function closeModal() {
  visible.value = false;
}

const title = computed(() => $t('common.edit') + $t('page.manage.role.menuAuth'));

const home = shallowRef('');

async function getHome() {
  home.value = 'home';
}

async function updateHome(val: string) {
  // request
  // const {error} = await fetchEditRole(val);
  home.value = val;
}

const pages = shallowRef<string[]>([]);

async function getPages() {
  const { error, data } = await fetchGetAllPages();

  if (!error) {
    pages.value = data;
  }
}

const pageSelectOptions = computed(() => {
  const opts: CommonType.Option[] = pages.value.map(page => ({
    label: page,
    value: page
  }));

  return opts;
});

const tree = shallowRef<Api.SystemManage.MenuTree[]>([]);

async function getTree() {
  const { error, data } = await fetchGetMenuTree();

  if (!error) {
    tree.value = data;
    console.log(data);
  }
}

const checks = shallowRef<number[]>([]);

async function getChecks() {
  const res = await fetchGetRoleResourceList(props.roleId);
  if (res.error) {
    window.$message?.error($t('common.error'));
    return;
  }
  checks.value = res.data;
}

function handleSubmit() {
  console.log(checks.value, props.roleId);
  // request

  window.$message?.success?.($t('common.modifySuccess'));

  closeModal();
}

function init() {
  getHome();
  getPages();
  getTree();
  getChecks();
}

watch(visible, val => {
  if (val) {
    init();
  }
});
</script>

<template>
  <NModal v-model:show="visible" :title="title" class="w-480px" preset="card">
    <div class="flex-y-center gap-16px pb-12px">
      <div>{{ $t('page.manage.menu.home') }}</div>
      <NSelect :options="pageSelectOptions" :value="home" class="w-160px" size="small" @update:value="updateHome" />
    </div>
    <NTree
      v-model:checked-keys="checks"
      :data="tree"
      block-line
      checkable
      class="h-280px"
      expand-on-click
      key-field="id"
      virtual-scroll
    />
    <template #footer>
      <NSpace justify="end">
        <NButton class="mt-16px" size="small" @click="closeModal">
          {{ $t('common.cancel') }}
        </NButton>
        <NButton class="mt-16px" size="small" type="primary" @click="handleSubmit">
          {{ $t('common.confirm') }}
        </NButton>
      </NSpace>
    </template>
  </NModal>
</template>

<style scoped></style>
