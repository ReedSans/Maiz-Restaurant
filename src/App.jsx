import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './Layout';
import OurStory from './pages/OurStory';
import MenuPage from './pages/MenuPage';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

const App = () => {
  let isMiddlePage
  const pageColor = isMiddlePage ? 'secdarker' : 'pridarker'
  const textColor = isMiddlePage ? 'pridarker' : 'white'

  const routes = [{
    path: '/',
    element: <Layout headerColor={isMiddlePage}/>,
    children: [{
      path: '/',
      element: <HomePage pageColor={pageColor} textColor={textColor} isMiddlePage={false}  />
    }, {
      path: '/about',
      element: <OurStory isMiddlePage={true}  />
    }, {
      path: '/menu',
      element: <MenuPage  isMiddlePage={false}  />
    }]
  }]

  const router = createBrowserRouter(routes)

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
