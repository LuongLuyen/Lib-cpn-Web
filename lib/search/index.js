
const ComponentSearch =(api)=>{
    const template =
    `
        <input type="text" id="luyenSearch" onchange="handleChange()">
        <button onclick="handleClick()">click</button>
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

export{ComponentSearch};