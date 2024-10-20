export function ObjectToNull<T extends object>(target: T, keysNoNull: (keyof T)[]): void {
  for (const key in target) {
    if (Object.hasOwn(target, key) && !keysNoNull.includes(key as keyof T)) {
      target[key] = null as any; // 将可枚举属性赋值为null
    }
  }
}
