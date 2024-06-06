/* empty css                           */import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderSlot, b as createAstro, d as addAttribute, e as renderComponent, u as unescapeHTML, f as renderHead } from '../astro_f852e106.mjs';
import 'clsx';
/* empty css                           */
const company_name = "Montem Flumen Construction and Robotics";
const tag_line = "Build Smarter";
const description = "Montem Flumen Construction and Robotics leads innovation in construction, prioritizing safety and efficiency through advanced drone and robot technology. Our startup company mission: automate processes, reduce manpower, and expedite timelines. Ideal for countries with smaller workforces, our solutions revolutionize construction for a safer, faster, and more technologically advanced future.";
const about_us = "We started this startup company to bring like-minded people together to create a safer construction environment. We believe that the future of construction is in automation and robotics. Our team is dedicated to creating innovative solutions that will revolutionize the industry. We are committed to making construction safer, faster, and more efficient. Our goal is to provide the best possible service to our customers and to help them achieve their construction goals. We are passionate about what we do and we are excited to be a part of the future of construction.";
const mission_short = "To create safer construction work environments worldwide by harnessing the power of drone technology, thereby preventing accidents and supporting countries with limited workforces.";
const vision_short = "Our vision is to transform construction with drone solutions that enhance safety, optimize workflows, and minimize accidents, thereby fostering safer, sustainable infrastructure.";
const social_links = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/montem-flumen-construction-and-robotics",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5" viewBox="0 0 16 16">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
    </svg>`
  },
  {
    name: "Phone",
    link: "tel:+821096959805",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"  viewBox="2 -5 40 40"><path d="M23.45 20.93a3 3 0 0 0-4.25 0l-1.45 1.45a26.14 26.14 0 0 1-4.51-3.62 26.62 26.62 0 0 1-3.62-4.51l1.45-1.45a3 3 0 0 0 0-4.25L8.24 5.73a2.93 2.93 0 0 0-2.11-.88h0A3 3 0 0 0 4 5.73L2.64 7.08A6.37 6.37 0 0 0 1 12.33c.32 3.75 2.78 8.26 6.57 12.06S15.92 30.64 19.67 31a7.87 7.87 0 0 0 .84 0 6.07 6.07 0 0 0 4.41-1.64L26.27 28a3 3 0 0 0 .88-2.13 2.93 2.93 0 0 0-.88-2.11zm1.41 5.66L23.5 27.94a4.57 4.57 0 0 1-3.66 1c-3.25-.28-7.39-2.58-10.81-6S3.31 15.41 3 12.16a4.53 4.53 0 0 1 1-3.66L5.41 7.14a1 1 0 0 1 .71-.29h0a1 1 0 0 1 .71.29L9.66 10a1 1 0 0 1 0 1.41l-2 2a1 1 0 0 0-.16 1.21 27.49 27.49 0 0 0 4.33 5.58 27.49 27.49 0 0 0 5.58 4.33 1 1 0 0 0 1.21-.16l2-2a1 1 0 0 1 1.41 0l2.83 2.83h0a1 1 0 0 1 .29.71A1 1 0 0 1 24.86 26.59zM26.6 5.39A14.92 14.92 0 0 0 16 1a1 1 0 1 0 0 2A13 13 0 0 1 29 16.11a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1A14.91 14.91 0 0 0 26.6 5.39z"></path><path d="M20.91,11.11a6,6,0,0,1,1.77,4.31,1,1,0,0,0,1,1h0a1,1,0,0,0,1-1,8,8,0,0,0-8-8.1,1,1,0,1,0,0,2A6,6,0,0,1,20.91,11.11Z"></path></svg>`
  }
];
const services = [
  {
    title: "Painting Drones",
    description: "Our painting drones provide a revolutionary solution to streamline and enhance the painting process in construction. The value proposition lies in their ability to significantly reduce the risk and time associated with manual painting, all while ensuring precision and uniformity.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>`
  },
  {
    title: "Window-Cleaning Drones",
    description: " There's a huge demand for the window cleaning system for skyscrapers or other tall buildings. Using the same attitude as for a painting, we provide a convenient and safe solution to clean windows at any height. It's way more quickly and cheaper than traditional manual cleaning.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`
  },
  {
    title: "Welding Drones",
    description: "Welding is often used for metal parts connection in the skyscrapers and bridges. Drone's application for the same tasks allows for increased work-done speed and prevents a lot of death cases by removing people from dangerous places. The value proposition here is first of all safety, and the ability to use welding for the hard-to-reach areas.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>`
  },
  {
    title: "Scanning Drones",
    description: "Nowadays every building is created in BIM(Building Information Model), but it's also could be useful to see historical and old buildings' informational models for monitoring conditions.Our scanning drones offer a cutting-edge solution for comprehensive site analysis and data collection.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>`
  },
  {
    title: "Window-Installing Drones",
    description: "Our window-installing drones redefine the installation process, combining speed and precision. The value proposition is centered on the swift and accurate placement of windows in various construction scenarios, reducing labor costs and increasing overall project efficiency. These drones offer a safer and more efficient alternative to traditional installation methods.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`
  },
  {
    title: "Dexterous Drones",
    description: "Montem Flumen's drones with hands introduce a new level of versatility to construction tasks. The value proposition lies in their ability to perform intricate, hands-on operations, such as manipulating objects and assembling components. These drones enhance efficiency by minimizing the need for manual labor in tasks that demand precision.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`
  },
  {
    title: "Transport Drones",
    description: "Our carry-drones offer a logistical solution for transporting construction materials and equipment. The value proposition includes the efficient and timely movement of goods across construction sites, reducing the reliance on manual labor for material handling. This leads to cost savings, improved productivity, and enhanced safety.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`
  },
  {
    title: "Exoskeletons",
    description: "Montem Flumen's exoskeletons provide wearable technology to enhance the physical capabilities of construction workers. The value proposition is the reduction of physical strain and fatigue, leading to increased worker productivity, improved safety, and a more comfortable working environment.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>`
  }
];
const about_data = [
  {
    img: "/about-us/egor.png",
    linkedin: "https://linkedin.com/in/egor-shubin-a20bb3257",
    name: "Egor Shubin",
    job: "CEO / Co-Founder",
    description: "MS IBM, Bachelor in Civil Engineering"
  },
  {
    img: "/about-us/sagar.jpg",
    linkedin: "https://www.linkedin.com/in/sagar1998m",
    name: "Sagar Pandey",
    job: "Marketing Manager / Co-Founder",
    description: "MS IBM, Bachelor in Multimedia Arts"
  },
  {
    img: "/about-us/mustari.JPG",
    linkedin: "",
    name: "Mushtariy",
    job: "Computer Vision Engineer / Co-Founder",
    description: "Bachelor in AI in Yonsei University"
  },
  /* {
          img: "/about-us/sebastian.png",
          linkedin: "",
          name: "Sebastian Samudio",
          job: "Hardware Engineer",
          description: "Bachelor in EM Engineering, NASA"
      },*/
  {
    img: "/about-us/john_paul.webp",
    linkedin: "https://www.linkedin.com/in/john-paul-paredes-diez-de-medina-644922296",
    name: "John Paul Paredes",
    job: "AI Engineer",
    description: "Bachelor in AI"
  },
  {
    img: "/about-us/emmanuel.png",
    linkedin: "",
    name: "Emmanual",
    job: "Framework Engineer",
    description: "PhD in Chungnam University"
  },
  {
    img: "/about-us/roberto.jpg",
    linkedin: "",
    name: "Roberto Herrera",
    job: "AI Engineer/ Developer",
    description: "Bachelors in AI Engineering"
  },
  {
    img: "/about-us/niranjan.jpg",
    linkedin: "",
    name: "Niranjan Dahal",
    job: "Advisor",
    description: "MSC Physics TU"
  }
];

const $$GroupFooterNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-8 h-max"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/components/blocks/GroupFooterNav.astro", void 0);

const $$Astro$6 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Container;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/components/shared/Container.astro", void 0);

const $$Astro$5 = createAstro();
const $$FooterNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FooterNav;
  const { title, navItems } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="space-y-6"> <h2 class="capitalze font-semibold text-heading-1 text-xl"> ${title} </h2> <ul class="space-y-3 font-medium md:text-lg text-heading-3"> ${navItems.map((navItem) => renderTemplate`<li> <a${addAttribute(navItem.itemLink, "href")} class="transition hover:text-primary"> ${navItem.itemText} </a> </li>`)} </ul> </nav>`;
}, "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/components/shared/FooterNav.astro", void 0);

const $$Astro$4 = createAstro();
const $$Paragraph = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Paragraph;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`md:text-lg text-heading-3 ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </p>`;
}, "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/components/shared/Paragraph.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerNav1 = [
    {
      itemText: "Marketing",
      itemLink: "#"
    },
    {
      itemText: "Analylitics",
      itemLink: "#"
    },
    {
      itemText: "Commerce",
      itemLink: "#"
    },
    {
      itemText: "Insights",
      itemLink: "#"
    }
  ];
  const footerSupport = [
    {
      itemText: "Pricing",
      itemLink: "#"
    },
    {
      itemText: "Guides",
      itemLink: "#"
    },
    {
      itemText: "FAQ",
      itemLink: "#"
    },
    {
      itemText: "Contact",
      itemLink: "#"
    }
  ];
  const footerCompany = [
    {
      itemText: "About",
      itemLink: "/about"
    },
    {
      itemText: "Blog",
      itemLink: "#"
    },
    {
      itemText: "Jobs",
      itemLink: "#"
    },
    {
      itemText: "Parteners",
      itemLink: "#"
    },
    {
      itemText: "Jobs",
      itemLink: "#"
    }
  ];
  const footerLegal = [
    {
      itemText: "Claim",
      itemLink: "/#"
    },
    {
      itemText: "Privacy",
      itemLink: "#"
    },
    {
      itemText: "Terms",
      itemLink: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16"></div> <footer class="relative  bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 pt-28 rounded-t-3xl"> <div class="absolute right-0 top-0 h-full w-full flex justify-end"> <div class="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl"> <span class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span> </div> </div> <div class="absolute left-0 bottom-0 h-full w-full flex items-end"> <div class="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl"> <span class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45"></span> <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45"></span> </div> </div> ${renderComponent($$result, "Container", $$Container, { "className": "pb-8 relative overflow-auto" }, { "default": ($$result2) => renderTemplate` <span class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-2xl opacity-20 w-24 h-16 sm:w-48 sm:h-36 rounded-full rotate-12 skew-x-6 bg-primary"></span> <div class="grid grid-cols-2 lg:grid-cols-3 lg:items-stretch gap-8 relative"> <div class="col-span-2 lg:col-span-1 h-auto flex flex-col"> <div class="h-full"> <a href="#" class="relative flex items-center gap-3"> <div class="relative overflow-auto flex rounded-xl"> <img src="/logos/logo.png" alt="logo" class="w-auto h-20"> </div> <div class="inline-flex text-lg font-semibold text-heading-1 max-w-[250px]"> ${company_name} </div> </a> ${renderComponent($$result2, "Paragraph", $$Paragraph, { "className": "mt-8" }, { "default": ($$result3) => renderTemplate`
Build Smarter with ${company_name}.
` })} </div> <!-- social links --> <div class="min-h-max flex items-center gap-4 text-heading-3 mt-8"> ${social_links.map(
    (social, index) => renderTemplate`<a${addAttribute(social.link, "href")} target="_blank" class="hover:text-primary"> <span class="sr-only">${social.name}</span> ${renderSlot($$result2, $$slots["default"], renderTemplate`${unescapeHTML(social.icon)}`)} </a>`
  )} </div> </div> ${renderComponent($$result2, "GroupFooterNav", $$GroupFooterNav, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "Company", "navItems": footerCompany })} ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "Solutions", "navItems": footerNav1 })} ` })} ${renderComponent($$result2, "GroupFooterNav", $$GroupFooterNav, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "Support", "navItems": footerSupport })} ${renderComponent($$result3, "FooterNav", $$FooterNav, { "title": "Ressources", "navItems": footerLegal })} ` })} </div> ` })} <div class=" bg-gradient-to-tl from-box-bg py-2 relative"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="flex justify-between items-center gap-6 md:text-lg text-heading-3"> <div>
&copy; <span id="year"></span> ${company_name}. All rights reserved.
</div> </div> ` })} </div> </footer>`;
}, "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/components/elements/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$BtnLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BtnLink;
  const { href, text, className, variant } = Astro2.props;
  const getThemeStyle = (variant2) => {
    if (variant2 === "primary") {
      return "bg-primary border-transparent relative after:bg-[#172554] hover:border-[#172554]";
    }
    return "text-primary";
  };
  const getTextColor = (variant2) => {
    if (variant2 === "primary") {
      return "text-white";
    }
    return "text-primary";
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
                    after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
                    ${getThemeStyle(variant)} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`, "class")}> <span${addAttribute(`relative ${getTextColor(variant)} z-10`, "class")}> ${text} </span> </a>`;
}, "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/components/shared/BtnLink.astro", void 0);

const $$Astro$2 = createAstro();
const $$Navitem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navitem;
  const { href, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(href, "href")} class="duration-300 font-medium ease-linear hover:text-primary py-3"> ${text} </a> </li>`;
}, "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/components/shared/Navitem.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      href: "/",
      text: "Home"
    },
    {
      href: "/projects",
      text: "Projects"
    },
    {
      href: "/about",
      text: "About us"
    }
    // {
    //     href:"#features",
    //     text:"Features"
    // },
  ];
  return renderTemplate`${maybeRenderHead()}<header class="absolute inset-x-0 top-0 z-50 py-6"> ${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <nav class="w-full flex justify-between gap-6 relative"> <!-- logo --> <div class="inline-flex relative"> <a href="/" class="relative flex items-center gap-3"> <img src="/logos/logo.png" alt="logo" class="w-20 h-20 rounded-md"> <div class="inline-flex text-lg font-semibold text-heading-1 max-w-[250px] overflow-hidden ml-3"> ${company_name} </div> </a> </div> <div data-nav-overlay aria-hidden="true" class="fixed hidden inset-0 lg:!hidden bg-box-bg bg-opacity-50 backdrop-filter backdrop-blur-xl"></div> <div data-navbar class="flex h-0 overflow-hidden lg:!h-auto lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-between lg:items-center absolute lg:relative top-full lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0"> <ul class="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center"> ${navItems.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Navitem", $$Navitem, { ...item })}`;
  })} </ul> <div class="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-bg lg:border-0 px-6 lg:px-0"> ${renderComponent($$result2, "BtnLink", $$BtnLink, { "text": "Get Started", "href": "#cta", "className": "flex justify-center w-full sm:w-max", "variant": "primary" })} </div> </div> <div class="min-w-max flex items-center gap-x-3"> <button data-switch-theme class="outline-none flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border "> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:flex hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path> </svg> <span class="sr-only">switch theme</span> </button> <button data-toggle-nav data-open-nav="false" class="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative"> <span id="line1" class="w-6 h-0.5 rounded-full bg-heading-2 transition-all duration-300 ease-linear"></span> <span id="line2" class="w-6 origin-center  mt-1 h-0.5 rounded-ful bg-heading-2 transition-all duration-300 ease-linear"></span> <span id="line3" class="w-6 mt-1 h-0.5 rounded-ful bg-heading-2 transition-all duration-300 ease-linear"></span> <span class="sr-only">togglenav</span> </button> </div> </nav> ` })} </header>`;
}, "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/components/elements/Navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(company_name, "content")}><title>MFC - ${title}</title><link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="overflow-hidden overflow-y-auto bg-body left-0 right-0 absolute"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}   </body> </html>`;
}, "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/layouts/Layout.astro", void 0);

const $$Title = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl"> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/components/shared/Title.astro", void 0);

const $$Astro = createAstro();
const $$Picture = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Picture;
  const { img, linkedin, name, job, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li v-for="person in people" :key="person.name" class="flex items-center justify-center"> <ul role="list" class="mt-3 flex gap-x-3 self-center justify-center"> <div class="m-2"> <div class="group flex flex-col gap-1 rounded-lg p-5 text-gray" tabindex="1"> <div style="width:320px;" class="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg"> <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70"> <img${addAttribute(img, "src")} class="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="Person"> </div> <div style="background-color: Gray; width:70%;" class="p-3 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"> <h1 class="text-lg font-bold text-white"> ${name} </h1> <h2 class="text-m font-light text-gray-200"> ${job} </h2> </div> </div> <p class="pl-5 text-gray-400 hover:text-gray-500"> <a target="_blank"${addAttribute(linkedin, "href")}> <span class="sr-only">LinkedIn</span> <svg style="display: inline;" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path> </svg>&nbsp;<span style="font-size: .8em; font-style: italic;">connect with ${name}</span> </a> </p> ${renderComponent($$result, "Paragraph", $$Paragraph, {}, { "default": ($$result2) => renderTemplate`${description}` })} </div> </div> </ul> </li>`;
}, "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/components/cards/Picture.astro", void 0);

const $$Photos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ============================================ --><!--                Meet The Team                 --><!-- ============================================ -->${maybeRenderHead()}<section id="meet-team-1765" class="mt-20 pt-10 px-10" data-astro-cid-rkk7wxxj> <div class="absolute right-0 top-0 h-full w-full flex justify-end -z-10" data-astro-cid-rkk7wxxj> <div class="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl" data-astro-cid-rkk7wxxj> <span class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45" data-astro-cid-rkk7wxxj></span> <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45" data-astro-cid-rkk7wxxj></span> <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45" data-astro-cid-rkk7wxxj></span> </div> </div> <div class="absolute left-0 bottom-0 h-full w-full flex items-end -z-10" data-astro-cid-rkk7wxxj> <div class="w-28 h-28 overflow-auto flex rounded-xl relative blur-2xl" data-astro-cid-rkk7wxxj> <span class="absolute w-16 h-16 -top-1 -right-1 bg-green-500 rounded-md rotate-45" data-astro-cid-rkk7wxxj></span> <span class="absolute w-16 h-16 -bottom-1 -right-1 bg-[#FCDC58] rounded-md rotate-45" data-astro-cid-rkk7wxxj></span> <span class="absolute w-16 h-16 -bottom-1 -left-1 bg-primary rounded-md rotate-45" data-astro-cid-rkk7wxxj></span> </div> </div> <div class="cs-container" data-astro-cid-rkk7wxxj> <div class="cs-content" data-astro-cid-rkk7wxxj> <div class="cs-flex-wrapper mb-10" data-astro-cid-rkk7wxxj> <div class="flex content-center items-center justify-center mb-5" data-astro-cid-rkk7wxxj> <!-- <span class="cs-topper">Meet the team </span> --> ${renderComponent($$result, "Title", $$Title, { "data-astro-cid-rkk7wxxj": true }, { "default": ($$result2) => renderTemplate`Meet our Team` })} </div> <div class="cs-wrapper" data-astro-cid-rkk7wxxj> ${renderComponent($$result, "Paragraph", $$Paragraph, { "className": "cs-text text-center", "data-astro-cid-rkk7wxxj": true }, { "default": ($$result2) => renderTemplate`
We are a committed team of professionals dedicated to
                        bring diverse expertise and a shared passion for
                        innovation.
` })} <ul role="list" class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-0 gap-y-0 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 items-center" data-astro-cid-rkk7wxxj> ${about_data.map((data) => renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "img": data.img, "linkedin": data.linkedin, "name": data.name, "job": data.job, "description": data.description, "data-astro-cid-rkk7wxxj": true })}`)} </ul> </div> </div> </div> </div> </section> `;
}, "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/components/sections/Photos.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": company_name }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden"> ${renderComponent($$result2, "Photos", $$Photos, {})} </main> ` })}`;
}, "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/pages/about.astro", void 0);

const $$file = "/Users/johnpaulparedes/Documents/GitHub/montemflumen/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Paragraph as $, $$Container as a, $$Title as b, company_name as c, description as d, $$BtnLink as e, about_us as f, $$Layout as g, about as h, mission_short as m, services as s, tag_line as t, vision_short as v };
