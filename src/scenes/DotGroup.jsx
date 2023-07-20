import AnchorLink from 'react-anchor-link-smooth-scroll';
import * as TbIcons from 'react-icons/tb';

const pages = ['Intro', 'About', 'Skills', 'Projects', 'Contact'];

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const getIconComponent = (page) => {
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

    return iconComponent;
  };

  return (
    <div className='flex flex-col gap-6 fixed top-[35%] right-7'>
      {pages.map((page) => {
        const lowerCasePage = page.toLowerCase();
        const iconComponent = getIconComponent(page);

        return (
          <AnchorLink
            key={page}
            className={`${
              selectedPage === lowerCasePage ? 'text-yellow' : ''
            } hover:text-yellow transition duration-500 `}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
          >
            <div className='mr-0.2 text-2xl'>{iconComponent}</div>
          </AnchorLink>
        );
      })}
    </div>
  );
};

export default DotGroup;
