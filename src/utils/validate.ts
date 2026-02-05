/**
 * 判断路径是否为外部链接
 * @param path - 要检查的路径
 * @returns 是否为外部链接
 */
export function isExternal(path: string) {
  return /^(?:https?:|mailto:|tel:)/.test(path)
}
