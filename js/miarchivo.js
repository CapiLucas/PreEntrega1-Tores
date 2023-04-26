let saludo = prompt(`ingrese 1 si quiere avanzar con el asistente de seguro, caso contrario ingrese 0`);
while(saludo!="0"){
    for (let i = 0; i < 1; i++) {
        let nombre = prompt(`ingrese su nombre porfavor`);
        alert(`hola ${nombre} bienvenido a la asistencia de seguros`);
        alert(`ingrese su modelo de auto entre estas opciones`);
        let auto = prompt(`Ford , Fiat, Renault, Chevrolet.`);
        auto=auto.toLowerCase()
        let edad = prompt(`De que año es?`);
        switch(auto){
            case "ford":
                alert(`Usted tiene un ${auto} del año ${edad} y su valor de seguro es de 63662`);
                break;

            case "fiat":
                alert(`Usted tiene un ${auto} del año ${edad} y su valor de seguro es de 56998`);
                break;

            case "renault":
                alert(`Usted tiene un ${auto} del año ${edad} y su valor de seguro es de 70202`);
                break;

            case"chevrolet":
                alert(`Usted tiene un ${auto} del año ${edad} y su valor de seguro es de 64980`);
                break;
            
            default:
                alert(`Marca desconocida o no tomada en cuenta`);
                break;
        }
        saludo = prompt(`ingrese 1 si quiere avanzar con el asistente de seguro, caso contrario ingrese 0`);
    }
}
