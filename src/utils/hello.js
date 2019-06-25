
import $ from 'jquery';

// 接收如何使用 webpack 对 css 做打包
// 将 css 做为模块的方式来引入
import '../style/index.css';
import '../style/bg.scss';

// 将 图片 作为模块的方式来引入
import myImg from '../assets/ford_mustang_1979.jpg';
// import MyImg2 from './assets/photo.jpeg';
// console.log(MyImg2);

/*
* 创建 dom 对象，并返回
*
* @param {String} str 文本
* @return DOM对象
*
* */

export default () =>{
    let divEl = $(`
    <div>你配吗？</div>
    <h1>wo de css</h1>
  <img src="${myImg}" alt=""/>
`);

    return divEl;
};

//处理上面的默认暴露，还可以单独暴露
// export let name = 'Rainbow';







