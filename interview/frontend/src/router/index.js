import Vue from "vue";
import Router from "vue-router";
// import { Store } from "vuex";
Vue.use(Router);
let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name:"home",
      props: true,
      component: () => import("../components/HomePage"),
      },
      

      {
        path: "/Solutions",
        name:"Solutions",
        props: true,
        component: () => import("../components/SolutionsPage.vue"),
        },


        {
          path: "/Careers",
          name:"Careers",
          props: true,
          component: () => import("../components/CareersPage.vue"),
          },
          {
            path: "/Services",
            name:"Services",
            props: true,
            component: () => import("../components/ServicesPage.vue"),
            },


            {
              path: "/ContactUs",
              name:"ContactUs",
              props: true,
              component: () => import("../components/ContactUspage.vue"),
              },
  
              {
                path: "/JobApplication",
                name:"JobApplication",
                props: true,
                component: () => import("../components/StudentDetailsForm.vue"),
                },
                {
                  path: "/StudentDetailsPage",
                  name:"StudentDetailsPage",
                  props: true,
                  component: () => import("../components/StudentDetailsPage.vue"),
                  },
    
  



            
        
 
  ],
  scrollBehavior() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  },

});
// router.beforeEach((to, from, next) => {
//   if (
//     to.matched.some((route) => route.meta.requiresAuth == true) &&
//     store.state.isLoggedIn == false
//   ) {
//     console.log(from);
//     next({ name: "login", params: { lastPage: from } });
//     return;
//   }


//   next();
// });

export default router;
