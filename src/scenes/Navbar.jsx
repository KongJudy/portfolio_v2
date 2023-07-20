import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import menuIcon from '../assets/menu-icon.svg';
import menuCloseIcon from '../assets/close-icon.svg';
import * as TbIcons from 'react-icons/tb';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  let iconComponent = null;

  if (page === 'Intro') {
    iconComponent = <TbIcons.TbHexagonLetterI />;
  } else if (page === 'About') {
    iconComponent = <TbIcons.TbHexagonLetterA />;
  } else if (page === 'Skills') {
    iconComponent = <TbIcons.TbHexagonLetterS />;
  } else if (page === 'Projects') {
    iconComponent = <TbIcons.TbHexagonLetterP />;
  } else if (page === 'Contact') {
    iconComponent = <TbIcons.TbHexagonLetterC />;
  }

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-yellow' : ''
      } hover:text-yellow transition duration-500 `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <div className='flex flex-row'>
        <div className='mr-0.2 text-3xl'>{iconComponent}</div>
        <div className='mt-1 justify-center justify-self-center'>
          {page.substring(1)}
        </div>
      </div>
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-teal';

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className='flex items-center justify-between mx-auto w-5/6 text-white'>
        <div className='text-3xl flex flex-row'>
          <TbIcons.TbHexagonLetterJ />
          <TbIcons.TbHexagonLetterK />
        </div>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className='flex justify-between gap-12 font-ubuntu text-sm font-semibold text-white'>
            <Link
              page='Intro'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='About'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Skills'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Projects'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Contact'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className='rounded-full bg-teal p-1'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={menuIcon} alt='menu-icon' />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && menuOpen && (
          <div className='fixed right-0 bottom-0 h-full bg-teal w-[240px]'>
            {/* CLOSE ICON */}
            <div className='flex justify-end p-12'>
              <button
                className='rounded-full bg-deep-blue p-1'
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <img src={menuCloseIcon} alt='close-menu-icon' />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className='flex flex-col gap-10 ml-[33%] text-1xl font-bold text-deep-blue'>
              <Link
                page='Intro'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='About'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Skills'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Projects'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page='Contact'
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
