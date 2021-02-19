import {
  Field,
  Cell,
  CellGroup,
  Button,
  Icon,
  Tabbar,
  TabbarItem
} from 'vant'

const componentList = [
  Field,
  Cell,
  CellGroup,
  Button,
  Icon,
  Tabbar,
  TabbarItem
]

export function registerVantComp(app) {
  componentList.forEach((comp) => {
    app.use(comp)
  })
}

