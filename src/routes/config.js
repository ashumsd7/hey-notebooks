import { lazy } from "react";

export const DefaultRoute = "/blog";

/**
 * By default all routes are protected and have 'default' layout.
 * If a route doesn't requires auth, provide public: true
 * If a route requires blank layout, provide layout: 'blank'
 */
export const pageRoutes = [
 

  {
    path: "/blog",
    public: true,
    layout:'blank',
    component: lazy(() => import("../pages/blog/BlogList.jsx")),
  },
  
  {
    path: "/blog/:id",
    layout:'blank',
    public: true,
    component: lazy(() =>
      import("../pages/blog/BlogDetails.jsx")
    ),
  },
  {
    path: "/mobile-blog",
    public: true,
    layout:'blank',
    component: lazy(() => import("../pages/blog/MobileBlogPage.jsx")),
  },
  {
    path: "/mobile-blog/:id",
    layout:'blank',
    public: true,
    component: lazy(() =>
      import("../pages/blog/MobileBlogDetailPage.jsx")
    ),
  },
  








 
  
];
