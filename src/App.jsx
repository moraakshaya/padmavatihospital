import Layout from "./Layout";

export const routes = [
  {
    path: "/",
    Component: Layout,
    entry: "src/Layout.jsx",
    children: [
      // Home
      {
        index: true,
        lazy: async () => {
          const Component = (await import("./pages/Home/Home")).default;
          return { Component };
        },
      },

      // About
      {
        path: "about",
        lazy: async () => {
          const Component = (await import("./pages/About/About")).default;
          return { Component };
        },
      },

      // Doctors
      {
        path: "doctors",
        lazy: async () => {
          const Component = (await import("./pages/Doctors/Doctors")).default;
          return { Component };
        },
      },

      // Department Single Page (SEO)
      {
        path: "departments/:slug",
        lazy: async () => {
          const Component = (await import(
            "./pages/Departmentsinglepage/Departmentsinglepage"
          )).default;
          return { Component };
        },
        getStaticPaths: () => [
          "/departments/cardiology",
          "/departments/general-medicine",
          "/departments/diabetology",
          "/departments/gastroenterology",
          "/departments/pediatrics",
          "/departments/neurology",
          "/departments/pulmonology",
          "/departments/orthopedics",
          "/departments/nephrology",
          "/departments/general-surgery",
          "/departments/anesthesiology",
          "/departments/pathology",
          "/departments/urology",
          "/departments/dermatology",
           "/departments/physiotherapy",
        ],
      },

      // Gallery
      {
        path: "gallery",
        lazy: async () => {
          const Component = (await import("./pages/Gallery/Gallery")).default;
          return { Component };
        },
      },

      // Contact
      {
        path: "contact",
        lazy: async () => {
          const Component = (await import("./pages/Contact/Contact")).default;
          return { Component };
        },
      },

      // Blog List
      {
        path: "blog",
        lazy: async () => {
          const Component = (await import("./pages/Blog/Blog")).default;
          return { Component };
        },
      },

      // Blog Details (SEO)
      {
        path: "blog/:slug",
        lazy: async () => {
          const Component = (await import("./pages/Blog/BlogDetails")).default;
          return { Component };
        },
        getStaticPaths: () => [
          "/blog/understanding-heart-health-tips",
          "/blog/common-heart-problems-warning-signs",
          "/blog/How to Manage Stress Effectively",
          "/blog/building-emotional-resilience",
          "/blog/top-immunity-boosting-foods",
          "/blog/healthy-eating-for-energy-and-vitality",
        ],
      },

      // Testimonials
      {
        path: "testimonials",
        lazy: async () => {
          const Component = (await import(
            "./pages/Testimonials/Testimonials"
          )).default;
          return { Component };
        },
      },

      // Book Appointment
      {
        path: "bookappoinment",
        lazy: async () => {
          const Component = (await import(
            "./pages/Bookappoinment/Bookappoinment"
          )).default;
          return { Component };
        },
      },

      // Insurance
      {
        path: "insurance",
        lazy: async () => {
          const Component = (await import("./pages/Insurance/Insurance")).default;
          return { Component };
        },
      },

      // Terms & Conditions
      {
        path: "terms-&-conditions",
        lazy: async () => {
          const Component = (await import(
            "./pages/terms-&-conditions/terms-&-conditions"
          )).default;
          return { Component };
        },
      },

      // Privacy Policy
      {
        path: "privacy-policy",
        lazy: async () => {
          const Component = (await import(
            "./pages/privacy-policy/privacy-policy"
          )).default;
          return { Component };
        },
      },
    ],
  },
];
