
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

export{ComponentSearch};