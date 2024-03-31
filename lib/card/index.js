
const Card1 =(api)=>{
    const template =
    `
    <div class="containercard1">
    <div class="card1">
        <div class="slide slide1">
            <div class="content">
                <div class="iconcard1">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="slide slide2">
            <div class="content">
                <h3>
                    Hello there!
                </h3>
                <p>Trust yourself and keep going.</p>
            </div>
        </div>
    </div>
</div>
    `
    
    return template
}

const Card2 =(api)=>{
    const template =
    `
    <div class="canvas-wrapper">
        <a href="#" class="canvas">
            <div class="canvas_border">
                <svg>
                    <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:rgb(253,137,68);stop-opacity:1"></stop><stop offset="100%" style="stop-color:rgb(153,75,23);stop-opacity:1"></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                    <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
            </div>
            <div class="canvas_img-wrapper">
                <img class="canvas_img" src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Large.png" alt="">
            </div>
            <div class="canvas_copy canvas_copy--left">
                <span class="canvas_copy_subtitle">Heading</span>
                <strong class="canvas_copy_title">Hello</strong>
                <strong class="canvas_copy_title">World</strong>
                <span class="canvas_copy_details">Details and stuff</span>
            </div>
        </a>
        <a href="#" class="canvas">
            <div class="canvas_border">
                <svg>
                    <defs><linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:rgb(253,137,68);stop-opacity:1"></stop><stop offset="100%" style="stop-color:rgb(153,75,23);stop-opacity:1"></stop></linearGradient><linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#D34F48"></stop><stop offset="100%" stop-color="#772522"></stop></linearGradient></defs>
                    <rect id="rect-grad" class="rect-gradient" fill="none" stroke="url(#grad-orange)" stroke-linecap="square" stroke-width="4" stroke-miterlimit="30" width="100%" height="100%"></rect>
                </svg>
            </div>
            <div class="canvas_img-wrapper">
                <img class="canvas_img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/249772/Twitter_Logo_Blue.png" alt="">
            </div>
            <div class="canvas_copy">
                <span class="canvas_copy_subtitle">Heading</span>
                <strong class="canvas_copy_title">Hello</strong>
                <strong class="canvas_copy_title">World</strong>
                <span class="canvas_copy_details">Details and stuff</span>
            </div>
        </a>
    </div>
    `
    return template
}

const  gradients=[
    `<div class="gradient" color="blue"></div>`,
    `<div class="gradient" color="red"></div>`,
    `<div class="gradient" color="green"></div>`,
    `<div class="gradient" color="orange"></div>`,
    `<div class="gradient" color="black"></div>`,
    `<div class="gradient" color="white"></div>`,
    `<div class="gradient" color="yellow"></div>`,
    `<div class="gradient" color="pink"></div>`,
    `<div class="gradient" color="beige"></div>`,
    `<div class="gradient" color="brown"></div>`,
    `<div class="gradient" color="gray"></div>`,
    `<div class="gradient" color="purple"></div>`,
]
const  imgs=[
    `<img src="" alt="" class="shoe" color="blue">`,
    `<img src="" alt="" class="shoe" color="red">`,
    `<img src="" alt="" class="shoe" color="green">`,
    `<img src="" alt="" class="shoe" color="orange">`,
    `<img src="" alt="" class="shoe" color="black">`,
    `<img src="" alt="" class="shoe" color="white">`,
    `<img src="" alt="" class="shoe" color="yellow">`,
    `<img src="" alt="" class="shoe" color="pink">`,
    `<img src="" alt="" class="shoe" color="beige">`,
    `<img src="" alt="" class="shoe" color="brown">`,
    `<img src="" alt="" class="shoe" color="gray">`,
    `<img src="" alt="" class="shoe" color="purple">`,
]
const  colors=[
    `<span class="color" onclick="changeColor(this)" primary="#2175f5" color="blue"></span>`,
    `<span class="color" onclick="changeColor(this)" primary="#f84848" color="red"></span>`,
    `<span class="color" onclick="changeColor(this)" primary="#29b864" color="green"></span>`,
    `<span class="color" onclick="changeColor(this)" primary="#ff5521" color="orange"></span>`,
    `<span class="color" onclick="changeColor(this)" primary="#444" color="black"></span>`,
    `<span class="color" onclick="changeColor(this)" primary="#eee" color="white"></span>`,
    `<span class="color" onclick="changeColor(this)" primary="#FFFF00" color="yellow"></span>`,
    `<span class="color" onclick="changeColor(this)" primary="#FFC0CB" color="pink"></span>`,
    `<span class="color" onclick="changeColor(this)" primary="#F5F5DC" color="beige"></span>`,
    `<span class="color" onclick="changeColor(this)" primary="#A0522D" color="brown"></span>`,
    `<span class="color" onclick="changeColor(this)" primary="#808080" color="gray"></span>`,
    `<span class="color" onclick="changeColor(this)" primary="#800080" color="purple"></span>`,
]
const sizes = [
    `<span class="size" onclick="changeSize(this)">1</span>`,
    `<span class="size" onclick="changeSize(this)">2</span>`,
    `<span class="size" onclick="changeSize(this)">3</span>`,
    `<span class="size" onclick="changeSize(this)">4</span>`,
    `<span class="size" onclick="changeSize(this)">5</span>`,
    `<span class="size" onclick="changeSize(this)">6</span>`,
    `<span class="size" onclick="changeSize(this)">7</span>`,
    `<span class="size" onclick="changeSize(this)">8</span>`,
    `<span class="size" onclick="changeSize(this)">9</span>`,
    `<span class="size" onclick="changeSize(this)">10</span>`,
    `<span class="size" onclick="changeSize(this)">11</span>`,
    `<span class="size" onclick="changeSize(this)">12</span>`,
    `<span class="size" onclick="changeSize(this)">13</span>`,
    `<span class="size" onclick="changeSize(this)">14</span>`,
    `<span class="size" onclick="changeSize(this)">15</span>`,
    `<span class="size" onclick="changeSize(this)">16</span>`,
    `<span class="size" onclick="changeSize(this)">17</span>`,
    `<span class="size" onclick="changeSize(this)">18</span>`,
    `<span class="size" onclick="changeSize(this)">19</span>`,
    `<span class="size" onclick="changeSize(this)">20</span>`,
    `<span class="size" onclick="changeSize(this)">21</span>`,
    `<span class="size" onclick="changeSize(this)">22</span>`,
    `<span class="size" onclick="changeSize(this)">23</span>`,
    `<span class="size" onclick="changeSize(this)">24</span>`,
    `<span class="size" onclick="changeSize(this)">25</span>`,
    `<span class="size" onclick="changeSize(this)">26</span>`,
    `<span class="size" onclick="changeSize(this)">27</span>`,
    `<span class="size" onclick="changeSize(this)">28</span>`,
    `<span class="size" onclick="changeSize(this)">29</span>`,
    `<span class="size" onclick="changeSize(this)">30</span>`,
    `<span class="size" onclick="changeSize(this)">31</span>`,
    `<span class="size" onclick="changeSize(this)">32</span>`,
    `<span class="size" onclick="changeSize(this)">33</span>`,
    `<span class="size" onclick="changeSize(this)">34</span>`,
    `<span class="size" onclick="changeSize(this)">35</span>`,
    `<span class="size" onclick="changeSize(this)">36</span>`,
    `<span class="size" onclick="changeSize(this)">37</span>`,
    `<span class="size" onclick="changeSize(this)">38</span>`,
    `<span class="size" onclick="changeSize(this)">39</span>`,
    `<span class="size" onclick="changeSize(this)">40</span>`,
    `<span class="size" onclick="changeSize(this)">41</span>`,
    `<span class="size" onclick="changeSize(this)">42</span>`,
    `<span class="size" onclick="changeSize(this)">43</span>`,
    `<span class="size" onclick="changeSize(this)">44</span>`,
    `<span class="size" onclick="changeSize(this)">45</span>`,
    `<span class="size" onclick="changeSize(this)">46</span>`,
    `<span class="size" onclick="changeSize(this)">47</span>`,
    `<span class="size" onclick="changeSize(this)">48</span>`,
    `<span class="size" onclick="changeSize(this)">49</span>`,
    `<span class="size" onclick="changeSize(this)">50</span>`,
    `<span class="size" onclick="changeSize(this)">51</span>`,
    `<span class="size" onclick="changeSize(this)">52</span>`,
    `<span class="size" onclick="changeSize(this)">53</span>`,
    `<span class="size" onclick="changeSize(this)">54</span>`,
    `<span class="size" onclick="changeSize(this)">55</span>`,
    `<span class="size" onclick="changeSize(this)">56</span>`,
    `<span class="size" onclick="changeSize(this)">57</span>`,
    `<span class="size" onclick="changeSize(this)">58</span>`,
    `<span class="size" onclick="changeSize(this)">59</span>`,
    `<span class="size" onclick="changeSize(this)">60</span>`,
    `<span class="size" onclick="changeSize(this)">61</span>`,
    `<span class="size" onclick="changeSize(this)">62</span>`,
    `<span class="size" onclick="changeSize(this)">63</span>`,
    `<span class="size" onclick="changeSize(this)">64</span>`,
    `<span class="size" onclick="changeSize(this)">65</span>`,
    `<span class="size" onclick="changeSize(this)">66</span>`,
    `<span class="size" onclick="changeSize(this)">67</span>`,
    `<span class="size" onclick="changeSize(this)">68</span>`,
    `<span class="size" onclick="changeSize(this)">69</span>`,
    `<span class="size" onclick="changeSize(this)">70</span>`,
    `<span class="size" onclick="changeSize(this)">71</span>`,
    `<span class="size" onclick="changeSize(this)">72</span>`,
    `<span class="size" onclick="changeSize(this)">73</span>`,
    `<span class="size" onclick="changeSize(this)">74</span>`,
    `<span class="size" onclick="changeSize(this)">75</span>`,
    `<span class="size" onclick="changeSize(this)">76</span>`,
    `<span class="size" onclick="changeSize(this)">77</span>`,
    `<span class="size" onclick="changeSize(this)">78</span>`,
    `<span class="size" onclick="changeSize(this)">79</span>`,
    `<span class="size" onclick="changeSize(this)">80</span>`,
    `<span class="size" onclick="changeSize(this)">81</span>`,
    `<span class="size" onclick="changeSize(this)">82</span>`,
    `<span class="size" onclick="changeSize(this)">83</span>`,
    `<span class="size" onclick="changeSize(this)">84</span>`,
    `<span class="size" onclick="changeSize(this)">85</span>`,
    `<span class="size" onclick="changeSize(this)">86</span>`,
    `<span class="size" onclick="changeSize(this)">87</span>`,
    `<span class="size" onclick="changeSize(this)">88</span>`,
    `<span class="size" onclick="changeSize(this)">89</span>`,
    `<span class="size" onclick="changeSize(this)">90</span>`,
    `<span class="size" onclick="changeSize(this)">91</span>`,
    `<span class="size" onclick="changeSize(this)">92</span>`,
    `<span class="size" onclick="changeSize(this)">93</span>`,
    `<span class="size" onclick="changeSize(this)">94</span>`,
    `<span class="size" onclick="changeSize(this)">95</span>`,
    `<span class="size" onclick="changeSize(this)">96</span>`,
    `<span class="size" onclick="changeSize(this)">97</span>`,
    `<span class="size" onclick="changeSize(this)">98</span>`,
    `<span class="size" onclick="changeSize(this)">99</span>`,
    `<span class="size" onclick="changeSize(this)">100</span>`
];
const chuyendoi=(arr,fd,f,s)=>{
    let data = arr.map((element) => {
      if(element.includes(fd)){
        return element.replace(f, s)
      }
      return element
    })
    return data
  }
const chuyendoiimg=(arr,color,img)=>{
   let data = arr.map((e)=>{
    for(let i=0; i<color.length; i++){
        if(e.includes(color[i])){
            return e.replace('src=""', `src="../assets/${color[i]}.${img}"`)
        }
    }
    return e.replace('src=""', `src=""`)
   })
   return data
}
const chuyendoisize=(data)=>{
    let d =""
    let run =true
    sizes.forEach((s)=>{
        data.sizes.forEach((x)=>{
            if(s.includes(x)){
                if(run){
                    let a = s.replace('class="size"', 'class="size active"')
                    d=a
                    run = false
                }else{
                    d+=s
                }
            }
        })
    })
    return d
   
}
const  loc=(data)=> {
    let g = "",img = "",color = ""
    let mau1=data.colors[0]
    const checkAndAddColor = (str, colors)=> {
      for (let color of colors) {
        if (str.includes(color)) {
            return str
          }
        }
        return ''
      }
    chuyendoi(gradients,mau1,'class="gradient"','class="gradient second"').forEach((x) => g += checkAndAddColor(x,data.colors))
    chuyendoi(chuyendoiimg(imgs,data.colors,data.img),mau1,'class="shoe"','class="shoe show"').forEach((x) => img += checkAndAddColor(x,data.colors))
    chuyendoi(colors,mau1,'class="color"','class="color active"').forEach((x) => color += checkAndAddColor(x,data.colors))
    return [g, img, color]
}

const Card3 =(data,api)=>{
    const template =
    `
    <div class="container3">
      <div class="card3">
          <div class="shoeBackground">
              <div class="gradients">
                   `+loc(data)[0]+`
              </div>
              <h1 class="nike">New</h1>
              <img alt="" class="logo">
              <a href="#" class="share"><i class="fas fa-share-alt"></i></a>
              `+loc(data)[1]+`
             
          </div>
          <div class="info">
              <div class="shoeName">
                  <div>
                      <h1 class="big" id="namep">`+data.name+`</h1>
                      <span class="new">new</span>
                  </div>
                  <h3 class="small">`+data.named+`</h3>
              </div>
              <div class="description">
                  <h3 class="title">Thông tin sản phẩm</h3>
                  <p class="text">`+data.description+`</p>
              </div>
              <div class="color-container">
                  <h3 class="title">Màu sắc</h3>
                  <div class="colors">
                  `+loc(data)[2]+`
                  </div>
              </div>
              <div class="size-container">
                  <h3 class="title">Phân loại</h3>
                  <div class="sizes">
                 `+chuyendoisize(data)+`
                  </div>
              </div>
              <div class="buy-price" onclick="buy()" >
                  <a class="buy"><i class="fas fa-shopping-cart"></i>Mua ngay</a>
                  <div class="price">
                      <h1 id ="pricep">`+data.price+`</h1>
                      <span>đ</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <script>
    const product ={
        id:"`+data.id+`",
        name:document.getElementById('namep').textContent.trim(),
        size:"`+data.sizes[0]+`",
        color:"`+data.colors[0]+`",
        price:document.getElementById('pricep').textContent.trim()
    }
      let prevColor = "`+data.colors[0]+`";
      let animationEnd = true;
      
      function changeSize(e){
        product.size = e.textContent;
        const sizes = document.querySelectorAll('.size');
        sizes.forEach(size => {
            size.classList.remove('active')
        });
        e.classList.add('active');
      }
      document.documentElement.style.setProperty('--primary', prevColor);
      function changeColor(e){
          product.color = e.getAttribute('color');

          let primary = e.getAttribute('primary');
          if(!animationEnd) return;
          let color = e.getAttribute('color');
          let shoe = document.querySelector(\`.shoe[color="\${color}"]\`);
          let gradient = document.querySelector(\`.gradient[color="\${color}"]\`);
          let prevGradient = document.querySelector(\`.gradient[color="\${prevColor}"]\`);

          if(color == prevColor) return;
          const colors = document.querySelectorAll('.color');
          colors.forEach(c => {
            c.classList.remove('active')
          });
          e.classList.add('active');

          document.documentElement.style.setProperty('--primary', primary);
          
          const shoes = document.querySelectorAll('.shoe');
          shoes.forEach(s => s.classList.remove('show'));
          shoe.classList.add('show');


          const gradients = document.querySelectorAll('.gradient');
          gradients.forEach(g => g.classList.remove('first', 'second'));
          gradient.classList.add('first');
          prevGradient.classList.add('second');

          prevColor = color;
          animationEnd = false;

          gradient.addEventListener('animationend', () => {
            animationEnd = true;
          });
      }
      const buy =()=>{
        console.table(product)
      }
  </script>`
    return template
}

export{Card1,Card2,Card3};