import Navigo from 'navigo';
import AboutPage from './pages/about';
import DetailPage from './pages/detail';
import HomePage from './pages/homepage';
import Login from './pages/login';
import SignUp from './pages/signup';
import TuyenSinh from './pages/tuyensinh';
import DaoTao from './pages/ctdaotao';
import GocSinhVien from './pages/gocsinhvien';
import TuyenDung from './pages/tuyendung';
import DashBoard from './pages/admin/dashboard';
import NewsAdmin from './pages/admin/news-admin';
import AdminNewsEdit from './pages/admin/newsEdit';
import NewsAdd from './pages/admin/newsAdd';

const router = new Navigo('/', { linksSelector: 'a' });

const render = async (content, id) => {
  document.querySelector('#app').innerHTML = await content.print(id);
};

router.on({
  '/login': () => {
    render(Login);
  },
  '/signup': () => {
    render(SignUp);
  },
  '/': () => {
    render(HomePage);
  },
  '/about': () => {
    render(AboutPage);
  },
  '/gocsinhvien': () => {
    render(GocSinhVien);
  },
  // eslint-disable-next-line quotes
  "/news/:id": ({ data }) => {
    render(DetailPage, data.id);
  },
  '/tuyensinh': () => {
    render(TuyenSinh);
  },
  '/ctdaotao': () => {
    render(DaoTao);
  },
  '/tuyendung': () => {
    render(TuyenDung);
  },
  '/admin/dashboard': () => {
    render(DashBoard);
  },
  '/admin/news': () => {
    render(NewsAdmin);
  },
  '/admin/news/:id/edit': ({ data }) => {
    render(AdminNewsEdit, data.id);
  },
  '/admin/news/add': () => {
    render(NewsAdd);
  },
});

router.resolve();

// const API = 'https://61e7851ce32cd90017acbb38.mockapi.io/post/';

// fetch(API)
//   .then((resovle) => resovle.json())
//   .then((result) => console.log(result));
