
const tab = [...document.getElementsByClassName("oscuro")];

document.getElementById('switch').onclick = function(){
    document.getElementById('switch').classList.toggle('active-mod');

    if(document.getElementById('switch').classList.contains('active-mod')){
        localStorage.setItem('mode', 'true');
        document.getElementById('switch').classList.add('active-mod');
        document.getElementById('menuHorizontal').classList.add('dark-prueba');
        document.getElementById('menuVertical').classList.add('sidebar-dark-gray');
        document.getElementById('menuVertical').classList.add('dark-prueba');

        tab.forEach(function(elemento, index, arreglo) {
            console.log(elemento, index, arreglo);
            arreglo[index].classList.add("card-gray");
        });
        

    }else{
        localStorage.setItem('mode', 'false');
        document.getElementById('switch').classList.remove('active-mod');
        document.getElementById('menuHorizontal').classList.remove('dark-prueba');
        document.getElementById('menuVertical').classList.remove('sidebar-dark-gray');
        document.getElementById('menuVertical').classList.remove('dark-prueba');

        tab.forEach(function(elemento, index, arreglo) {
            console.log(elemento, index, arreglo);
            arreglo[index].classList.remove("card-gray");
        });
        
    }

}

if(localStorage.getItem('mode') === 'true'){

    document.getElementById('switch').classList.add('active-mod');
    document.getElementById('menuHorizontal').classList.add('dark-prueba');
    document.getElementById('menuVertical').classList.add('sidebar-dark-gray');
    document.getElementById('menuVertical').classList.add('dark-prueba');

    tab.forEach(function(elemento, index, arreglo) {
        console.log(elemento, index, arreglo);
        arreglo[index].classList.add("card-gray");
    });
} else {
    
    document.getElementById('switch').classList.remove('active-mod');
    document.getElementById('menuHorizontal').classList.remove('dark-prueba');
    document.getElementById('menuVertical').classList.remove('sidebar-dark-gray');
    document.getElementById('menuVertical').classList.remove('dark-prueba');

    tab.forEach(function(elemento, index, arreglo) {
        console.log(elemento, index, arreglo);
        arreglo[index].classList.remove("card-gray");
    });
    
}