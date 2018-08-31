    var filhos = [
        {
            'nome':'Miguel',
            'idade':'4'
        },
        {
            'nome':'Carlos',
            'idade':'1'
        }
    ]
    function loadFilhos(){
        var tbody = document.querySelector("#filhos tbody");
        tbody.innerHTML = "";
        for (var i = 0; i<filhos.length; i++){
            tbody.innerHTML += `<tr>
            <td> ${filhos[i].nome}</td> 
            <td> ${filhos[i].idade}</td>
            </tr>`;
        }
    }