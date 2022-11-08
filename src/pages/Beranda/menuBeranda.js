import {
  faBoxesPacking,
  faCar,
  faCoins,
  faEllipsisVertical,
  faMoneyBill1Wave,
  faMoneyBillTrendUp,
  faMoneyBillWave,
  faMotorcycle,
  faShoppingBasket,
  faUtensils,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';
import {COLOR_MAIN_LIGHT} from '../../utils/constant';

export const gopayMenu = [
  {
    icon: faCoins,
    text: 'gopay coins',
    info: 'Klik buat detailnya',
    ammount: 0,
    link: '',
  },
  {
    icon: faMoneyBill1Wave,
    text: 'gopaylater',
    info: 'Klik & cek riwayat',
    ammount: 0,
    active: false,
    activationMsg: ['Aktifin GoPayLater', 'Klik buat aktifin'],
    link: '',
  },
  {
    icon: faWallet,
    text: 'gopay',
    info: 'Klik & cek riwayat',
    ammount: 0,
    link: '',
  },
];

export const mainMenu = [
  {
    icon: faMotorcycle,
    bg_color: COLOR_MAIN_LIGHT,
    text: 'GoRide',
  },
  {
    icon: faCar,
    bg_color: COLOR_MAIN_LIGHT,
    text: 'GoCar',
  },
  {
    icon: faUtensils,
    bg_color: 'orangered',
    text: 'GoFood',
  },
  {
    icon: faBoxesPacking,
    bg_color: COLOR_MAIN_LIGHT,
    text: 'GoSend',
  },
  {
    icon: faShoppingBasket,
    bg_color: 'orangered',
    text: 'GoMart',
  },
  {
    icon: faMoneyBillTrendUp,
    bg_color: 'deepskyblue',
    text: 'GoTagihan',
  },
  {
    icon: faMoneyBillWave,
    bg_color: 'deepskyblue',
    text: 'GoPayLater',
  },
  {
    icon: faEllipsisVertical,
    bg_color: 'darkslategrey',
    text: 'Lainnya',
  },
];
