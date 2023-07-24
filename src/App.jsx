import { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPage,
  selectToastContent,
  selectBurgerOpen,
  setBurgerOpen,
} from "./features/appSlice";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import FineArt from "./pages/FineArt";
import Illustration from "./pages/Illustration";
import Cart from "./pages/Cart";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

import Burger from "./components/menu/Burger";

// import hutchLogo from "./assets/images/logos/JimmyHutch.svg";

const App = () => {
  const dispatch = useDispatch();
  // const burgerOpen = useSelector(selectBurgerOpen);
  const page = useSelector(selectPage);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const toastContent = useSelector(selectToastContent);
  useEffect(() => {
    if (toastContent) {
      toast(toastContent);
    }
  }, [toastContent]);

  // const switchTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  // };
  // const [nightMode, setNightMode] = useState(false);

  const toggleBurger = () => {
    dispatch(setBurgerOpen());
  };

  return (
    <div>
      <ToastContainer />

      <section className="container" data-theme={theme}>
        <div className="sidebar">
          <div className="burgerMenu" onClick={toggleBurger}>
            <Burger />
          </div>

          <Nav />
          {/* <div>
            <button
              className="clear"
              onClick={() => {
                localStorage.clear();
              }}
            >
              CLEAR
            </button>
          </div> */}
        </div>

        <div className="main-header">
          <div className="pageTitle">
            {/* render the page title here */}
            <h1>{page}</h1>
            {/* <img
              className="logo"
              src="./assets/images/logos/hutch-logo-new-2021-trans.png"
              alt="logo"
            ></img> */}
            <svg
              className="logo"
              width="120"
              height="100"
              viewBox="0 0 1915 951"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M132.6 450C98.2 450 69.8 441.2 47.4 423.6C25.2 406 9.4 382.2 0 352.2L80.4 333C82.2 344 88 353.6 97.8 361.8C107.6 369.8 118 373.8 129 373.8C136.6 373.8 144.7 371.7 153.3 367.5C162.1 363.3 168.4 356.6 172.2 347.4C174.6 341.6 176 334.5 176.4 326.1C176.8 317.7 177 308 177 297V8.99998H259.8V297C259.8 310.8 259.7 322.8 259.5 333C259.5 343.2 258.5 352.8 256.5 361.8C254.7 370.6 251 379.8 245.4 389.4C233.2 410.6 217.3 426 197.7 435.6C178.1 445.2 156.4 450 132.6 450ZM355.617 72V-8.58307e-06H437.217V72H355.617ZM355.617 441V117H437.217V441H355.617ZM917.156 441V249.6C917.156 228.2 912.056 211.6 901.856 199.8C891.856 187.8 877.956 181.8 860.156 181.8C848.756 181.8 838.856 184.5 830.456 189.9C822.056 195.1 815.456 202.5 810.656 212.1C806.056 221.5 803.756 232.4 803.756 244.8L769.556 222C769.556 199.8 774.756 180.2 785.156 163.2C795.756 146.2 809.856 133 827.456 123.6C845.256 114 864.956 109.2 886.556 109.2C923.556 109.2 951.456 120.2 970.256 142.2C989.256 164 998.756 192.6 998.756 228V441H917.156ZM526.556 441V117H598.556V224.4H608.756V441H526.556ZM722.156 441V249.6C722.156 228.2 717.056 211.6 706.856 199.8C696.856 187.8 682.956 181.8 665.156 181.8C648.156 181.8 634.456 187.7 624.056 199.5C613.856 211.1 608.756 226.2 608.756 244.8L574.556 220.8C574.556 199.6 579.856 180.6 590.456 163.8C601.056 147 615.256 133.7 633.056 123.9C651.056 114.1 671.156 109.2 693.356 109.2C718.756 109.2 739.556 114.6 755.756 125.4C772.156 136.2 784.256 150.6 792.056 168.6C799.856 186.6 803.756 206.4 803.756 228V441H722.156ZM1466.77 441V249.6C1466.77 228.2 1461.67 211.6 1451.47 199.8C1441.47 187.8 1427.57 181.8 1409.77 181.8C1398.37 181.8 1388.47 184.5 1380.07 189.9C1371.67 195.1 1365.07 202.5 1360.27 212.1C1355.67 221.5 1353.37 232.4 1353.37 244.8L1319.17 222C1319.17 199.8 1324.37 180.2 1334.77 163.2C1345.37 146.2 1359.47 133 1377.07 123.6C1394.87 114 1414.57 109.2 1436.17 109.2C1473.17 109.2 1501.07 120.2 1519.87 142.2C1538.87 164 1548.37 192.6 1548.37 228V441H1466.77ZM1076.17 441V117H1148.17V224.4H1158.37V441H1076.17ZM1271.77 441V249.6C1271.77 228.2 1266.67 211.6 1256.47 199.8C1246.47 187.8 1232.57 181.8 1214.77 181.8C1197.77 181.8 1184.07 187.7 1173.67 199.5C1163.47 211.1 1158.37 226.2 1158.37 244.8L1124.17 220.8C1124.17 199.6 1129.47 180.6 1140.07 163.8C1150.67 147 1164.87 133.7 1182.67 123.9C1200.67 114.1 1220.77 109.2 1242.97 109.2C1268.37 109.2 1289.17 114.6 1305.37 125.4C1321.77 136.2 1333.87 150.6 1341.67 168.6C1349.47 186.6 1353.37 206.4 1353.37 228V441H1271.77ZM1656.06 585L1718.46 413.4L1719.66 463.8L1578.66 117H1663.26L1758.06 362.4H1738.86L1833.06 117H1914.66L1731.66 585H1656.06ZM42 941V509H123.6V686.6H316.8V509H398.4V941H316.8V762.8H123.6V941H42ZM603.225 950.6C577.825 950.6 557.125 946.3 541.125 937.7C525.125 929.1 512.625 918.2 503.625 905C494.825 891.8 488.525 878.1 484.725 863.9C480.925 849.5 478.625 836.4 477.825 824.6C477.025 812.8 476.625 804.2 476.625 798.8V617H559.425V770C559.425 777.4 559.825 786.9 560.625 798.5C561.425 809.9 563.925 821.4 568.125 833C572.325 844.6 579.125 854.3 588.525 862.1C598.125 869.9 611.625 873.8 629.025 873.8C636.025 873.8 643.525 872.7 651.525 870.5C659.525 868.3 667.025 864.1 674.025 857.9C681.025 851.5 686.725 842.2 691.125 830C695.725 817.6 698.025 801.4 698.025 781.4L744.825 803.6C744.825 829.2 739.625 853.2 729.225 875.6C718.825 898 703.125 916.1 682.125 929.9C661.325 943.7 635.025 950.6 603.225 950.6ZM708.225 941V833.6H698.025V617H780.225V941H708.225ZM1058.47 941C1036.07 945.2 1014.07 947 992.47 946.4C971.07 946 951.87 942.3 934.87 935.3C918.07 928.1 905.27 916.6 896.47 900.8C888.47 886 884.27 871 883.87 855.8C883.47 840.4 883.27 823 883.27 803.6V527H964.87V798.8C964.87 811.4 964.97 822.8 965.17 833C965.57 843 967.67 851 971.47 857C978.67 868.4 990.17 874.6 1005.97 875.6C1021.77 876.6 1039.27 875.8 1058.47 873.2V941ZM828.07 680V617H1058.47V680H828.07ZM1255.89 950C1222.29 950 1193.49 942.5 1169.49 927.5C1145.49 912.5 1127.09 892.1 1114.29 866.3C1101.49 840.5 1095.09 811.4 1095.09 779C1095.09 746.2 1101.69 716.9 1114.89 691.1C1128.29 665.3 1147.09 645 1171.29 630.2C1195.49 615.4 1224.09 608 1257.09 608C1295.29 608 1327.29 617.7 1353.09 637.1C1379.09 656.3 1395.69 682.6 1402.89 716L1321.29 737.6C1316.49 720.8 1308.09 707.7 1296.09 698.3C1284.29 688.9 1270.89 684.2 1255.89 684.2C1238.69 684.2 1224.59 688.4 1213.59 696.8C1202.59 705 1194.49 716.3 1189.29 730.7C1184.09 744.9 1181.49 761 1181.49 779C1181.49 807.2 1187.69 830.1 1200.09 847.7C1212.69 865.1 1231.29 873.8 1255.89 873.8C1274.29 873.8 1288.29 869.6 1297.89 861.2C1307.49 852.8 1314.69 840.8 1319.49 825.2L1402.89 842.6C1393.69 877 1376.29 903.5 1350.69 922.1C1325.09 940.7 1293.49 950 1255.89 950ZM1683.7 941V788C1683.7 780.6 1683.3 771.2 1682.5 759.8C1681.7 748.2 1679.2 736.6 1675 725C1670.8 713.4 1663.9 703.7 1654.3 695.9C1644.9 688.1 1631.5 684.2 1614.1 684.2C1607.1 684.2 1599.6 685.3 1591.6 687.5C1583.6 689.7 1576.1 694 1569.1 700.4C1562.1 706.6 1556.3 715.8 1551.7 728C1547.3 740.2 1545.1 756.4 1545.1 776.6L1498.3 754.4C1498.3 728.8 1503.5 704.8 1513.9 682.4C1524.3 660 1539.9 641.9 1560.7 628.1C1581.7 614.3 1608.1 607.4 1639.9 607.4C1665.3 607.4 1686 611.7 1702 620.3C1718 628.9 1730.4 639.8 1739.2 653C1748.2 666.2 1754.6 680 1758.4 694.4C1762.2 708.6 1764.5 721.6 1765.3 733.4C1766.1 745.2 1766.5 753.8 1766.5 759.2V941H1683.7ZM1462.3 941V509H1534.9V731H1545.1V941H1462.3Z"
                fill="black"
              />
            </svg>
          </div>
          <label className="switch">
            <input
              className={`switchTheme ${theme}`}
              type="checkbox"
              onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
              }}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="main-content">
          {page === "HOME" && <Home />}
          {page === "CONTACT" && <Contact />}
          {page === "FINE_ART" && <FineArt />}
          {page === "ILLUSTRATION" && <Illustration />}
          {page === "CART" && <Cart />}
        </div>
        {/* <div className="main-footer">
          <Footer />
        </div> */}
      </section>
    </div>
  );
};

export default App;

{
  /* <div className={theme ? "night" : "day"}>
              <button
                onClick={() => {
                  setTheme(!theme);
                }}
              >
                toggleDayNight
              </button> */
}
