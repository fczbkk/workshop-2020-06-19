export const productRoutes = [
  {
    path: '/products/:product_id',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "product-detail" */ '../views/ProductDetail.vue')
  }
]
