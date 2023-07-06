import styles from '../sass/style.module.scss';
import logo from '../img/logoAvtoYroki_light.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerClasses = styles.footer__container + ' ' + styles.container;

  return (
    <footer className={styles.footer}>
    <div className={styles.footer__background}>
      <section className={footerClasses}>
        <img className={styles.footer__logo} src={logo} alt="logo" width="120" height="70"></img>
        <article className={styles.footer__category}>
          <h4 className={styles.footer__block__title}>Категорії</h4>
          <ul className={styles.footer__linkList}>
            <li><Link to={'/price'}>Прайс</Link></li>
            <li><Link to={'/questions'}>Питання</Link></li>
            <li><Link to={'/contacts'}>Контакти</Link></li>
          </ul>
        </article>
        <article className={styles.footer__category}>
          <h4 className={styles.footer__block__title}>Контакти</h4>
          <ul className={styles.footer__linkList}>
            <li><a href="tel:+380953599901">+38 (095) 359 99 01 </a></li>
            <li><a href="tel:+380939216404">+38 (093) 921 64 04</a></li>
          </ul>
        </article>
        <article className={styles.footer__category}>
          <ul className={styles.footer__social}>
            <li>
              <a href="viber://chat?number=%2B380939216404">
                <svg width="70" height="80" viewBox="0 0 436 456" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_dddddd_117_133)">
                <path d="M80.166 57.7104C80.166 26.2302 105.686 0.710449 137.166 0.710449H298.166C329.646 0.710449 355.166 26.2302 355.166 57.7104V218.71C355.166 250.191 329.646 275.71 298.166 275.71H137.166C105.686 275.71 80.166 250.191 80.166 218.71V57.7104Z" fill="#EBE9E9"/>
                </g>
                <g filter="url(#filter1_i_117_133)">
                <path d="M280.001 97.8501C277.536 89.0581 272.661 82.0981 265.508 77.1748C256.481 70.956 246.099 68.7505 237.132 67.4127C224.724 65.5627 213.486 65.3036 202.784 66.6112C192.744 67.8405 185.188 69.805 178.288 72.9747C164.772 79.1815 156.661 89.2329 154.184 102.84C152.979 109.444 152.171 115.416 151.701 121.11C150.617 134.277 151.599 145.932 154.708 156.73C157.733 167.258 163.024 174.784 170.882 179.725C172.889 180.985 175.444 181.895 177.926 182.775C179.168 183.214 180.361 183.648 181.403 184.106V205.378C181.403 208.162 183.657 210.416 186.441 210.416C187.755 210.416 189.014 209.904 189.954 208.988L209.581 189.897C210.437 188.921 210.437 188.921 211.317 188.903C218.023 188.77 224.875 188.511 231.684 188.144C239.934 187.692 249.491 186.896 258.494 183.142C266.732 179.701 272.746 174.242 276.355 166.92C280.121 159.279 282.363 150.999 283.201 141.617C284.671 125.118 283.623 110.8 280.001 97.8501ZM245.827 160.641C243.857 163.865 240.904 166.095 237.433 167.541C234.896 168.601 232.305 168.378 229.804 167.318C208.81 158.436 192.353 144.431 181.47 124.31C179.228 120.164 177.667 115.651 175.878 111.27C175.51 110.366 175.54 109.312 175.377 108.329C175.534 101.249 180.964 97.2655 186.447 96.0603C188.544 95.5963 190.4 96.3375 191.955 97.826C196.258 101.936 199.662 106.696 202.223 112.035C203.344 114.379 202.838 116.452 200.928 118.194C200.536 118.555 200.12 118.893 199.692 119.212C195.336 122.49 194.697 124.967 197.017 129.902C200.97 138.297 207.532 143.931 216.023 147.426C218.258 148.348 220.368 147.89 222.079 146.076C222.308 145.835 222.567 145.6 222.736 145.323C226.086 139.737 230.937 140.291 235.421 143.479C238.367 145.57 241.224 147.776 244.14 149.909C248.563 153.169 248.527 156.23 245.827 160.641ZM220.639 102.809C219.512 102.809 218.379 102.9 217.27 103.087C215.39 103.406 213.618 102.135 213.305 100.254C212.992 98.3803 214.257 96.6027 216.137 96.2893C217.614 96.0483 219.132 95.9217 220.639 95.9217C235.553 95.9217 247.69 108.058 247.69 122.972C247.69 124.485 247.563 126.004 247.316 127.48C247.033 129.161 245.574 130.354 243.923 130.354C243.736 130.354 243.544 130.342 243.351 130.306C241.477 129.987 240.211 128.215 240.525 126.341C240.711 125.244 240.802 124.111 240.802 122.979C240.802 111.854 231.757 102.809 220.639 102.809ZM235.637 125.19C235.637 127.088 234.095 128.631 232.197 128.631C230.298 128.631 228.756 127.088 228.756 125.19C228.756 119.495 224.122 114.861 218.427 114.861C216.529 114.861 214.986 113.319 214.986 111.421C214.986 109.522 216.529 107.98 218.427 107.98C227.912 107.974 235.637 115.699 235.637 125.19ZM258.814 129.39C258.452 130.993 257.036 132.072 255.457 132.072C255.204 132.072 254.945 132.042 254.692 131.987C252.836 131.566 251.673 129.722 252.095 127.872C252.595 125.672 252.848 123.4 252.848 121.122C252.848 104.382 239.229 90.7574 222.483 90.7574C220.199 90.7574 217.933 91.0105 215.734 91.5107C213.89 91.9385 212.034 90.7695 211.618 88.9135C211.196 87.0575 212.359 85.2135 214.215 84.7977C216.915 84.177 219.699 83.8697 222.495 83.8697C243.031 83.8697 259.742 100.58 259.742 121.116C259.742 123.913 259.428 126.697 258.814 129.39Z" fill="#5B7DF5"/>
                </g>
                <defs>
                <filter id="filter0_dddddd_117_133" x="0.166016" y="0.710449" width="435" height="455" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="2.76726"/>
                <feGaussianBlur stdDeviation="1.1069"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0196802 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_117_133"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="6.6501"/>
                <feGaussianBlur stdDeviation="2.66004"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0282725 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_117_133" result="effect2_dropShadow_117_133"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="12.5216"/>
                <feGaussianBlur stdDeviation="5.00862"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.035 0"/>
                <feBlend mode="normal" in2="effect2_dropShadow_117_133" result="effect3_dropShadow_117_133"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="22.3363"/>
                <feGaussianBlur stdDeviation="8.93452"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0417275 0"/>
                <feBlend mode="normal" in2="effect3_dropShadow_117_133" result="effect4_dropShadow_117_133"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="41.7776"/>
                <feGaussianBlur stdDeviation="16.711"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0503198 0"/>
                <feBlend mode="normal" in2="effect4_dropShadow_117_133" result="effect5_dropShadow_117_133"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="100"/>
                <feGaussianBlur stdDeviation="40"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
                <feBlend mode="normal" in2="effect5_dropShadow_117_133" result="effect6_dropShadow_117_133"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_117_133" result="shape"/>
                </filter>
                <filter id="filter1_i_117_133" x="127.169" y="47.7134" width="180.78" height="184.78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="7.5"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_117_133"/>
                </filter>
                </defs>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://t.me/+380953599901">
                <svg width="70" height="80" viewBox="0 0 436 456" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_dddddd_117_125)">
                  <path d="M80.3438 57.1777C80.3438 25.6975 105.864 0.177734 137.344 0.177734H298.344C329.824 0.177734 355.344 25.6975 355.344 57.1777V218.178C355.344 249.658 329.824 275.178 298.344 275.178H137.344C105.864 275.178 80.3438 249.658 80.3438 218.178V57.1777Z" fill="#EBE9E9"/>
                  </g>
                  <g filter="url(#filter1_i_117_125)">
                  <path d="M293.062 137.571C293.062 179.169 259.336 212.896 217.737 212.896C176.139 212.896 142.412 179.169 142.412 137.571C142.412 95.9724 176.139 62.2456 217.737 62.2456C259.336 62.2456 293.062 95.9724 293.062 137.571Z" fill="#5B7DF5"/>
                  </g>
                  <g filter="url(#filter2_i_117_125)">
                  <path d="M170.858 136.505C197.184 124.924 231.25 110.804 235.954 108.85C248.289 103.735 252.074 104.714 250.187 116.043C248.831 124.186 244.922 151.141 241.803 167.919C239.954 177.87 235.803 179.049 229.28 174.744C226.143 172.673 210.306 162.199 206.867 159.739C203.73 157.498 199.403 154.802 204.83 149.491C206.762 147.601 219.42 135.511 229.284 126.103C230.576 124.867 228.953 122.837 227.461 123.828C214.166 132.645 195.734 144.881 193.388 146.474C189.844 148.881 186.439 149.985 180.33 148.23C175.713 146.904 171.205 145.322 169.45 144.719C162.689 142.399 164.294 139.394 170.858 136.505Z" fill="#EBE9E9"/>
                  </g>
                  <defs>
                  <filter id="filter0_dddddd_117_125" x="0.34375" y="0.177734" width="435" height="455" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="2.76726"/>
                  <feGaussianBlur stdDeviation="1.1069"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0196802 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_117_125"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="6.6501"/>
                  <feGaussianBlur stdDeviation="2.66004"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0282725 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow_117_125" result="effect2_dropShadow_117_125"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="12.5216"/>
                  <feGaussianBlur stdDeviation="5.00862"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.035 0"/>
                  <feBlend mode="normal" in2="effect2_dropShadow_117_125" result="effect3_dropShadow_117_125"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="22.3363"/>
                  <feGaussianBlur stdDeviation="8.93452"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0417275 0"/>
                  <feBlend mode="normal" in2="effect3_dropShadow_117_125" result="effect4_dropShadow_117_125"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="41.7776"/>
                  <feGaussianBlur stdDeviation="16.711"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0503198 0"/>
                  <feBlend mode="normal" in2="effect4_dropShadow_117_125" result="effect5_dropShadow_117_125"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="100"/>
                  <feGaussianBlur stdDeviation="40"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
                  <feBlend mode="normal" in2="effect5_dropShadow_117_125" result="effect6_dropShadow_117_125"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_117_125" result="shape"/>
                  </filter>
                  <filter id="filter1_i_117_125" x="142.412" y="62.2456" width="150.65" height="154.65" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="7.5"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_117_125"/>
                  </filter>
                  <filter id="filter2_i_117_125" x="165.094" y="105.891" width="85.5518" height="75.2178" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="4"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_117_125"/>
                  </filter>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/avtouroki/">
                <svg width="70" height="80" viewBox="0 0 436 455" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_dddddd_117_118)">
                  <path d="M80.166 57C80.166 25.5198 105.686 0 137.166 0H298.166C329.646 0 355.166 25.5198 355.166 57V218C355.166 249.48 329.646 275 298.166 275H137.166C105.686 275 80.166 249.48 80.166 218V57Z" fill="#EBE9E9"/>
                  </g>
                  <g filter="url(#filter1_i_117_118)">
                  <path d="M190.883 74.4399C170.446 74.4399 153.817 91.0786 153.817 111.521V164.48C153.817 184.92 170.456 201.551 190.898 201.551H243.858C264.297 201.551 280.929 184.912 280.929 164.47V111.506C280.929 91.0688 264.29 74.4399 243.848 74.4399H190.883ZM255.506 94.7777C258.313 94.7777 260.591 97.0556 260.591 99.8622C260.591 102.669 258.313 104.947 255.506 104.947C252.7 104.947 250.422 102.669 250.422 99.8622C250.422 97.0556 252.7 94.7777 255.506 94.7777ZM217.373 104.947C235.601 104.947 250.422 119.768 250.422 137.996C250.422 156.223 235.598 171.044 217.373 171.044C199.145 171.044 184.324 156.221 184.324 137.996C184.324 119.77 199.145 104.947 217.373 104.947ZM217.373 115.116C204.736 115.116 194.493 125.358 194.493 137.996C194.493 150.633 204.736 160.876 217.373 160.876C230.01 160.876 240.253 150.633 240.253 137.996C240.253 125.358 230.01 115.116 217.373 115.116Z" fill="#5B7DF5"/>
                  </g>
                  <defs>
                  <filter id="filter0_dddddd_117_118" x="0.166016" y="0" width="435" height="455" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="2.76726"/>
                  <feGaussianBlur stdDeviation="1.1069"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0196802 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_117_118"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="6.6501"/>
                  <feGaussianBlur stdDeviation="2.66004"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0282725 0"/>
                  <feBlend mode="normal" in2="effect1_dropShadow_117_118" result="effect2_dropShadow_117_118"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="12.5216"/>
                  <feGaussianBlur stdDeviation="5.00862"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.035 0"/>
                  <feBlend mode="normal" in2="effect2_dropShadow_117_118" result="effect3_dropShadow_117_118"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="22.3363"/>
                  <feGaussianBlur stdDeviation="8.93452"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0417275 0"/>
                  <feBlend mode="normal" in2="effect3_dropShadow_117_118" result="effect4_dropShadow_117_118"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="41.7776"/>
                  <feGaussianBlur stdDeviation="16.711"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0503198 0"/>
                  <feBlend mode="normal" in2="effect4_dropShadow_117_118" result="effect5_dropShadow_117_118"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="100"/>
                  <feGaussianBlur stdDeviation="40"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
                  <feBlend mode="normal" in2="effect5_dropShadow_117_118" result="effect6_dropShadow_117_118"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect6_dropShadow_117_118" result="shape"/>
                  </filter>
                  <filter id="filter1_i_117_118" x="136.021" y="56.6445" width="162.702" height="166.702" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="7.5"/>
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"/>
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_117_118"/>
                  </filter>
                  </defs>
                  </svg>                  
              </a>
            </li>
          </ul>
        </article>
        <p className={styles.footer__rights}>avtoyroki© Kyiv 2023. All rights reserved.</p>
      </section>
    </div>
  </footer>
  )
}