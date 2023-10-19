/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// declare module 'vuefire' {
//   const component: any | any
//   export default component
// }

// declare module 'firebase' {
//     import { FirebaseApp } from 'firebase/app';
//     export const firebaseApp: FirebaseApp;
//   }
