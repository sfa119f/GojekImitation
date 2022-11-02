import {
  faRectangleList,
  faCube,
  faCalendarCheck,
  faPercent,
  faWallet,
  faCircleQuestion,
  faGlobe,
  faBookmark,
  faUserGroup,
  faFingerprint,
  faBell,
  faShield,
  faLink,
  faMapLocationDot,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

export const AccountMenu = [
  {
    icon: faRectangleList,
    text: 'Pesanan',
    info: 'Cek riwayat & pesanan aktif',
    nextPage: '',
  },
  {
    icon: faCube,
    text: 'GoCLub',
    info: '900 XP',
    nextPage: '',
  },
  {
    icon: faCalendarCheck,
    text: 'Langgananku',
    nextPage: '',
    isNew: true,
  },
  {
    icon: faPercent,
    text: 'Promo',
    nextPage: '',
  },
  {
    icon: faWallet,
    text: 'Metode pembayaran',
    nextPage: '',
  },
  {
    icon: faCircleQuestion,
    text: 'Bantuan & laporan saya',
    nextPage: '',
  },
  {
    icon: faGlobe,
    text: 'Pilihan bahasa',
    nextPage: '',
  },
  {
    icon: faBookmark,
    text: 'Alamat favorit',
    nextPage: '',
  },
  {
    icon: faUserGroup,
    text: 'Ajak teman pakai Gojek',
    nextPage: '',
  },
  {
    icon: faFingerprint,
    text: 'Quick login',
    isSwitch: true,
    value: false,
  },
  {
    icon: faBell,
    text: 'Notifikasi',
    nextPage: '',
  },
  {
    icon: faShield,
    text: 'Keamanan akun',
    nextPage: '',
  },
  {
    icon: faLink,
    text: 'Atur akun',
    nextPage: '',
  },
];

export const InfoMenu = [
  {
    icon: faShield,
    text: 'Kebijakan Privasi',
    nextPage: '',
  },
  {
    icon: faRectangleList,
    text: 'Ketentuan Layanan',
    nextPage: '',
  },
  {
    icon: faMapLocationDot,
    text: 'Atribusi Data',
    nextPage: '',
  },
  {
    icon: faStar,
    text: 'Beri Rating',
    info: 'v.4.54.2',
    nextPage: '',
  },
];
