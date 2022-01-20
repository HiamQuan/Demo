import Banner from '../component/banner';
import News from '../component/news-list';
import Header from '../component/header';
import Footer from '../component/footer';

const HomePage = {
  async print() {
    return /* html */ `
            ${Header.print()}
            <div class="my-7">
                ${Banner.print()}
            </div>
            <div class="news bg-gray-50">
                ${await News.print()}
                ${await News.print()}
            </div>
            ${Footer.print()}      
        `;
  },
};
export default HomePage;
