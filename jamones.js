function regalo() {
    var valor;

    for (cliente = 1; cliente <= 10; cliente++) {
        valor = Math.floor((Math.random) * 15000);

        switch (true) {
            case valor>10000||valor<15000:
                console.log("cliente" + cliente + ":" + valor + "Gana cesta con jamón")
                break;
            case valor>=1000||valor<10000:
                console.log("cliente" + cliente + ":" + valor + "Gana cesta");
                break;
            default:
                console.log("cliente" + cliente + ":" + valor + "Cartita y va que chuta")
                
        }


    }

}
