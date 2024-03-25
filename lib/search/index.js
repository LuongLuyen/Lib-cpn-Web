
const ComponentSearch =(api)=>{
    const template =
    `
        <div class="luyen-search-box">
            <button class="luyen-btn-search" onclick="handleClick()">🔎</button>
            <input type="text" class="luyen-input-search" placeholder="Tìm kiếm..." id="luyenSearch" onchange="handleChange()">
        </div> 
        <script>
       var input = ''
       function handleChange() {
           var inputValue = document.getElementById("luyenSearch").value;
           return inputValue
       }
       const sendData= async()=>{
           if(input!== ''){
               try {
                   await axios.post('`
                   + api +
                   `', {input})
                   document.getElementById("luyenSearch").value=""
               } catch (error) {
                   alert("Api không hoạt động")
               }
           }else{
               alert("Vui lòng nhập nội dung tìm kiếm")
           }
       }
       function handleClick(){
           input = handleChange()
           sendData()
       }
       </script>
    `
    
    return template
}
const ComponentSearch1 =(api)=>{
    const template =
    `
    <div class="luyen-w">
    <input id="luyenSearch1" onchange="handleChange1()" class="luyen-inputs" style="border: solid 1px #333;" type="search" placeholder="Tìm kiếm..." />
    <button onclick="handleClick1()" class="luyen-btns">🔎</button>    
    </div>
    <script>
    var input = ''
    function handleChange1() {
        var inputValue = document.getElementById("luyenSearch1").value;
        return inputValue
    }
    const sendData1= async()=>{
        if(input!== ''){
            try {
                await axios.post('`
                + api +
                `', {input})
                document.getElementById("luyenSearch1").value=""
            } catch (error) {
                alert("Api không hoạt động")
            }
        }else{
            alert("Vui lòng nhập nội dung tìm kiếm")
        }
    }
    function handleClick1(){
        input = handleChange1()
        sendData1()
    }
    </script>
    `
    
    return template
}
const ComponentSearch2 =(api)=>{
    const template =
    `
    <div class="luyen-search-container">
    <input id="luyenSearch2" onchange="handleChange2()" class="luyen-search-input" type="text" placeholder="Search...">
    <button onclick="handleClick2()" class="luyen-search-button" type="button">Search</button>
  </div>
    <script>
    var input = ''
    function handleChange2() {
        var inputValue = document.getElementById("luyenSearch2").value;
        return inputValue
    }
    const sendData2= async()=>{
        if(input!== ''){
            try {
                await axios.post('`
                + api +
                `', {input})
                document.getElementById("luyenSearch2").value=""
            } catch (error) {
                alert("Api không hoạt động")
            }
        }else{
            alert("Vui lòng nhập nội dung tìm kiếm")
        }
    }
    function handleClick2(){
        input = handleChange2()
        sendData2()
    }
    </script>
    `
    
    return template
}
const ComponentSearch3 =(api)=>{
    const template =
    `
    <div class="l-search-container">
    <input id="luyenSearch3" onchange="handleChange3()" class="l-search-input" type="text" placeholder="Search...">
    <button onclick="handleClick3()" class="l-search-button" type="button">Search</button>
  </div>
    <script>
    var input = ''
    function handleChange3() {
        var inputValue = document.getElementById("luyenSearch3").value;
        return inputValue
    }
    const sendData3= async()=>{
        if(input!== ''){
            try {
                await axios.post('`
                + api +
                `', {input})
                document.getElementById("luyenSearch3").value=""
            } catch (error) {
                alert("Api không hoạt động")
            }
        }else{
            alert("Vui lòng nhập nội dung tìm kiếm")
        }
    }
    function handleClick3(){
        input = handleChange3()
        sendData3()
    }
    </script>
    `
    
    return template
}

export{ComponentSearch,ComponentSearch1,ComponentSearch2,ComponentSearch3};