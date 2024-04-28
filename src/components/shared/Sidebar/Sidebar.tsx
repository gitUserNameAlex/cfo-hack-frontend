import { Link, useLocation } from 'react-router-dom';
import React, { FC, useState, useEffect } from 'react';
import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname); // Обновление при изменении маршрута
  }, [location]);

  const isActive = (path: string) => path === activeLink;

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__link}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_7_1211)">
            <path
              d="M24.3255 10.8738C24.3249 10.8732 24.3243 10.8727 24.3238 10.8721L14.1257 0.674438C13.6911 0.239563 13.1131 0 12.4984 0C11.8837 0 11.3057 0.239372 10.8709 0.674248L0.678172 10.8667C0.674739 10.8702 0.671305 10.8738 0.667872 10.8772C-0.224767 11.775 -0.223241 13.2317 0.672259 14.1272C1.08139 14.5365 1.62174 14.7736 2.19947 14.7984C2.22293 14.8006 2.24658 14.8018 2.27043 14.8018H2.67688V22.3066C2.67688 23.7917 3.88519 25 5.37063 25H9.36042C9.76478 25 10.0928 24.6721 10.0928 24.2676V18.3838C10.0928 17.7061 10.6441 17.1549 11.3217 17.1549H13.675C14.3527 17.1549 14.9039 17.7061 14.9039 18.3838V24.2676C14.9039 24.6721 15.2318 25 15.6364 25H19.6262C21.1116 25 22.3199 23.7917 22.3199 22.3066V14.8018H22.6968C23.3113 14.8018 23.8893 14.5624 24.3243 14.1275C25.2208 13.2305 25.2212 11.7714 24.3255 10.8738Z"
              fill={isActive('/') ? '#8d46f6' : '#b1b1b1'}
            />
          </g>
          <defs>
            <clipPath id="clip0_7_1211">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <Link to="/" onClick={() => setActiveLink('/')} className={isActive('/') ? styles.active : ''}>
          Дашборд
        </Link>
      </div>
      <div className={styles.sidebar__link}>
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.5 23.6249C18.7122 23.6249 23.0046 19.6864 23.5634 14.6231C23.6316 14.0055 23.1213 13.4999 22.5 13.4999H16.875C15.011 13.4999 13.5 11.9888 13.5 10.1249V4.49988C13.5 3.87856 12.9944 3.36832 12.3768 3.43648C7.31349 3.99528 3.375 8.28764 3.375 13.4999C3.375 19.0918 7.90812 23.6249 13.5 23.6249Z"
            fill={isActive('/statistics') ? '#8d46f6' : '#b1b1b1'}
          />
          <path
            d="M24.6707 9.00322C24.1785 5.55163 21.4483 2.82136 17.9967 2.32916C17.3816 2.24144 16.875 2.75356 16.875 3.37488V8.99988C16.875 9.6212 17.3787 10.1249 18 10.1249H23.625C24.2463 10.1249 24.7584 9.61832 24.6707 9.00322Z"
            fill={isActive('/statistics') ? '#8d46f6' : '#b1b1b1'}
          />
        </svg>

        <Link
          to="/statistics"
          onClick={() => setActiveLink('/statistics')}
          className={isActive('/statistics') ? styles.active : ''}
        >
          Статистика
        </Link>
      </div>
      <div className={styles.sidebar__link}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_7_1207)">
            <path
              d="M22.6985 9.41406H22.1678C21.9954 8.87451 21.7778 8.35039 21.5172 7.84683L21.8931 7.47095C22.8045 6.56055 22.7801 5.10156 21.8934 4.21582L20.7845 3.10693C19.8993 2.22056 18.44 2.19487 17.5293 3.10659L17.1532 3.48276C16.6496 3.22222 16.1254 3.00464 15.5859 2.83223V2.30142C15.5859 1.03242 14.5535 0 13.2845 0H11.7155C10.4465 0 9.41406 1.03242 9.41406 2.30142V2.83223C8.87456 3.00459 8.35039 3.22217 7.84683 3.48276L7.471 3.10693C6.56216 2.19702 5.10293 2.21836 4.21592 3.10664L3.10688 4.21558C2.22056 5.10093 2.19492 6.56001 3.10659 7.4707L3.48276 7.84687C3.22217 8.35044 3.00464 8.87451 2.83223 9.41411H2.30146C1.03247 9.41406 0 10.4465 0 11.7155V13.2845C0 14.5535 1.03247 15.5859 2.30146 15.5859H2.83223C3.00464 16.1255 3.22217 16.6496 3.48276 17.1532L3.10688 17.5291C2.19551 18.4395 2.21992 19.8984 3.10659 20.7842L4.21553 21.8931C5.10073 22.7794 6.56001 22.8051 7.47065 21.8934L7.84683 21.5172C8.35039 21.7778 8.87456 21.9954 9.41406 22.1678V22.6986C9.41406 23.9676 10.4465 25 11.7155 25H13.2845C14.5535 25 15.586 23.9676 15.586 22.6986V22.1678C16.1255 21.9954 16.6497 21.7778 17.1532 21.5172L17.5291 21.8931C18.4379 22.803 19.8971 22.7816 20.7841 21.8934L21.8932 20.7844C22.7795 19.899 22.8051 18.4399 21.8935 17.5292L21.5173 17.1531C21.7779 16.6495 21.9954 16.1254 22.1678 15.5858H22.6986C23.9676 15.5858 25 14.5534 25 13.2844V11.7154C25 10.4465 23.9675 9.41406 22.6985 9.41406ZM12.5 17.9395C9.50064 17.9395 7.06055 15.4993 7.06055 12.5C7.06055 9.50068 9.50064 7.06055 12.5 7.06055C15.4994 7.06055 17.9395 9.50068 17.9395 12.5C17.9395 15.4993 15.4994 17.9395 12.5 17.9395Z"
              fill={isActive('/settings') ? '#8d46f6' : '#b1b1b1'}
            />
          </g>
          <defs>
            <clipPath id="clip0_7_1207">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <Link to="/settings" onClick={() => setActiveLink('/settings')} className={isActive('/settings') ? styles.active : ''}>
          Настройки
        </Link>
      </div>
      <div className={styles.sidebar__link}>
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.0714 2.58834C13.7183 2.37973 13.2798 2.37973 12.9267 2.58834L2.76313 8.59411C2.02622 9.02956 2.02622 10.0958 2.76313 10.5312L12.9267 16.537C13.2798 16.7456 13.7183 16.7456 14.0714 16.537L17.4366 14.5484V13.5L13.3866 10.4625C12.8896 10.0897 12.7889 9.38453 13.1616 8.88747C13.5344 8.39041 14.2396 8.28968 14.7366 8.66247L19.2366 12.0375C19.5199 12.2499 19.6866 12.5834 19.6866 12.9375V13.2189L24.235 10.5312C24.9719 10.0958 24.9719 9.02956 24.235 8.59411L14.0714 2.58834Z"
            fill={isActive('/students') ? '#8d46f6' : '#b1b1b1'}
          />
          <path
            d="M13.7884 18.7463L17.4365 16.5574V17.7751C17.4365 18.3964 17.9402 18.9001 18.5615 18.9001C19.1829 18.9001 19.6865 18.3964 19.6865 17.7751V15.2074L20.5221 14.7061C20.8971 14.4811 21.374 14.7512 21.374 15.1884V22.0315C21.374 22.1984 21.3017 22.3551 21.168 22.4552C20.3717 23.0514 17.3466 25.1074 13.499 25.1074C9.6515 25.1074 6.62638 23.0514 5.83003 22.4552C5.6964 22.3551 5.62404 22.1984 5.62404 22.0315V15.1884C5.62404 14.7512 6.10102 14.4811 6.47594 14.7061L13.2096 18.7463C13.3878 18.8532 13.6103 18.8532 13.7884 18.7463Z"
            fill={isActive('/students') ? '#8d46f6' : '#b1b1b1'}
          />
        </svg>

        <Link to="/students" onClick={() => setActiveLink('/students')} className={isActive('/students') ? styles.active : ''}>
          Ученики
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;