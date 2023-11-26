import { pageDefaultTitle } from "@/settings";

export default function setPageTitle(routerTitle) {
  window.document.title = routerTitle
    ? `${routerTitle} | ${pageDefaultTitle}`
    : `${pageDefaultTitle}`;
}
