import { useEffect, useState } from 'react';
import MiddleContainer from './components/sections/MiddleContainer';
import Navbar from './components/sections/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from './redux-saga/actions';
import Loading from './components/Loading';
import DataCard from './components/Cards/DataCard';
import ScrollToTop from './components/ScrollToTop';
import FooterSec from './components/sections/FooterSec';
function App() {
  const [showButton, setShowButton] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);
  const { data, loading } = useSelector((state) => state.data);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    //getting th =e position
    const scrollPosition = window.scrollY;
    if (scrollPosition > window.innerHeight / 2) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  //for checking the position of the window to show back to top button
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-screen">
      <div className="relative w-full flex flex-col bg-cover bg-no-repeat z-10">
        <Navbar />
        <MiddleContainer />
      </div>
      {/* this is the title section of the page having title of all the services */}
      {loading ? (
        <Loading />
      ) : (
        <>
          {/* this is the title of all the services */}
          <div className="hidden w-[75%] md:hidden lg:flex items-center justify-between sticky top-0 mx-auto mt-14 shadow-xl py-4 pl-4 cursor-pointer text-xs bg-white">
            {data.length > 0 &&
              data
                .sort((p1, p2) => {
                  return p1.service_order - p2.service_order;
                })
                .map((ele) => (
                  <div key={ele.id} onClick={() => scrollToSection(ele.id)}>
                    {ele.title.split('(')[0]}
                  </div>
                ))}
          </div>

          {/* this is the section of service description and their images */}
          {data.length > 0 && (
            <div className="w-full flex flex-col -mt-[20px] mb-5 bg-[#f4f4f4]">
              {data
                .sort((p1, p2) => {
                  return p1.service_order - p2.service_order;
                })
                .map((ele, ind) => (
                  <DataCard ele={ele} ind={ind} key={ele.id} />
                ))}
            </div>
          )}
          {/* scroll to top button */}
          {showButton && <ScrollToTop />}
          {/* this is the collaboration card section */}
          <div className="z-10 w-full">
            <FooterSec />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
