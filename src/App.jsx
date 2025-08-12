import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import './App.css'

import Menu from "./components/Menu.jsx"
// import Screensaver from "./components/Screensaver.jsx"
// import Screen from "./components/Screen.jsx"
import ScreenOne from "./components/ScreenOne.jsx"
import ScreenTwo from "./components/ScreenTwo.jsx"
import ScreenThree from "./components/ScreenThree.jsx"
import ScreenFour from "./components/ScreenFour.jsx"

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.5,
};

// function App() {
//   // const { t } = useTranslation()
//   // useIdle();

//   return <Routes>
//       <Route path="/menu" element={<Menu navigateToScreen={() => {}} />} />
//       {/* <Route path="/screensaver" element={<Screensaver />} /> */}
//       <Route path="/screen-one" element={<ScreenOne id={1} />} />
//       <Route path="/screen-two" element={<ScreenTwo id={2} />} />
//       <Route path="/Screen-three" element={<ScreenThree id={3} />} />
//       <Route path="/Screen-four" element={<ScreenFour id={4} />} />
//     </Routes>
// }

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Menu />
          </motion.div>
        } />
        <Route path="/screen-one" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ScreenOne />
          </motion.div>
        } />
        <Route path="/screen-two" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ScreenTwo />
          </motion.div>
        } />
        <Route path="/screen-three" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ScreenThree />
          </motion.div>
        } />
        <Route path="/screen-four" element={
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ScreenFour />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <AnimatedRoutes />
  );
}

export default App
