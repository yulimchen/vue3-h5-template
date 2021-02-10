import {
  Field,
  Cell,
  CellGroup,
  Button,
  Icon
} from 'vant'

const componentList = [
  Field,
  Cell,
  CellGroup,
  Button,
  Icon
]

export function registerVantComp(app) {
  componentList.forEach((comp) => {
    app.use(comp)
  })
}

