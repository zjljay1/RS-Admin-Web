import {request} from '../request';

/** get role list */
export function fetchGetRoleList(params?: Api.SystemManage.RoleSearchParams) {
  return request<Api.SystemManage.RoleList>({
    url: '/systemManage/getRoleList',
    method: 'get',
    params
  });
}

/**
 * get all roles
 *
 * these roles are all enabled
 */
export function fetchGetAllRoles() {
  return request<Api.SystemManage.AllRole[]>({
    url: '/systemManage/getAllRoles',
    method: 'get'
  });
}

/** get user list */
export function fetchGetUserList(params?: Api.SystemManage.UserSearchParams) {
  return request<Api.SystemManage.UserList>({
    url: '/systemManage/getUserList',
    method: 'get',
    params
  });
}

/** get menu list */
export function fetchGetMenuList() {
  return request<Api.SystemManage.MenuList>({
    url: '/systemManage/getMenuList/v2',
    method: 'get'
  });
}

/** get all pages */
export function fetchGetAllPages() {
  return request<string[]>({
    url: '/systemManage/getAllPages',
    method: 'get'
  });
}

/** get menu tree */
export function fetchGetMenuTree() {
  return request<Api.SystemManage.MenuTree[]>({
    url: '/systemManage/getMenuTree',
    method: 'get'
  });
}

/** update menu tree */
export function fetchEditMenuTree(data: any) {
  return request<Boolean>({
    url: '/systemManage/editMenu',
    method: 'put',
    data
  });
}

/** add menu tree */
export function fetchAddMenuTree(data: any) {
  return request<Boolean>({
    url: '/systemManage/addMenu',
    method: 'post',
    data
  });
}

/** remove menu trees */
export function fetchBatchRemoveMenuTree(ids: string[]) {
  return request<Boolean>({
    url: `/systemManage/batchRemoveMenu`,
    method: 'delete',
    data: ids
  });
}

/** remove menu tree */
export function fetchRemoveMenuTree(id: number) {
  return request<Boolean>({
    url: `/systemManage/removeMenu/${id}`,
    method: 'delete'
  });
}

/** update menu tree */
export function fetchEditRole(data: any) {
  return request<Boolean>({
    url: '/systemManage/editRole',
    method: 'put',
    data
  });
}

/** add menu tree */
export function fetchAddRole(data: any) {
  return request<Boolean>({
    url: '/systemManage/addRole',
    method: 'post',
    data
  });
}

/** remove menu tree */
export function fetchRemoveRole(id: number) {
  return request<Boolean>({
    url: `/systemManage/removeRole/${id}`,
    method: 'delete'
  });
}

/** remove menu trees */
export function fetchBatchRemoveRole(ids: string[]) {
  return request<Boolean>({
    url: `/systemManage/batchRemoveRole`,
    method: 'delete',
    data: ids
  });
}



/** update menu tree */
export function fetchEditUser(data: any) {
  return request<Boolean>({
    url: '/systemManage/updateUser',
    method: 'put',
    data
  });
}

/** add menu tree */
export function fetchAddUser(data: any) {
  return request<Boolean>({
    url: '/systemManage/createUser',
    method: 'post',
    data
  });
}

/** remove menu tree */
export function fetchRemoveUser(id: number) {
  return request<Boolean>({
    url: `/systemManage/removeRole/${id}`,
    method: 'delete'
  });
}

/** remove menu trees */
export function fetchBatchRemoveUser(ids: string[]) {
  return request<Boolean>({
    url: `/systemManage/deleteUser`,
    method: 'delete',
    data: ids
  });
}
