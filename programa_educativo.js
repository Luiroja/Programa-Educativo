var course = 4999;
var carrera = 3999;
var master = 2999;

var beca = [
    "Facebook",
    "Google",
    "Jesua",
];

var becaFacebook = 20;
var becaGoogle = 15
var becaJesua = 50

var nombre = user;

var user = prompt("¿Esta interesado en un programa educativo?");
if (user == "si") {
    var programaEducativo = prompt("Los programas son: course, carrera y master");
    // If para el programa course
    if (programaEducativo == "course") {
        var beca = prompt("¿Cuenta usted con una beca?");
        if (beca == "si") {
            var becaEscogido = prompt("¿Que beca tiene: Facebook, Google o Jesua?").toLowerCase();

            if (becaEscogido == "facebook") {
                var courseFacebook = course * becaFacebook / 100;
                var courseFacebookTotal = courseFacebook * 2;
                alert("El precio mensual con descuento del course con la beca Facebook es $ " + courseFacebook + " .El costo total del course por 2 meses es: $" + courseFacebookTotal)

            } else if (becaEscogido == "google") {
                var courseGoogle = course * becaGoogle / 100;
                var courseGoogleTotal = courseGoogle * 2;
                alert("El precio mensual con descuento del course con la beca Google es $ " + courseGoogle + " .El costo total del course por 2 meses es: $" + courseFacebookTotal)

            } else if (becaEscogido == "jesua") {
                var courseJesua = course * becaJesua / 100;
                var courseJesuaTotal = courseJesua * 2;
                alert("El precio mensual con descuento del course con la beca Jesua es $" + courseJesua + " .El costo total del course por 2 meses es: $" + courseJesuaTotal);
            }

        } else if (beca == "no") {
            alert("Ha escogido el programa course y el costo final sin beca es de $ " + course);
        } else alert("Lo sentimos, no aceptamos esos caracteres, debe responder  'si' o 'no'");
    }
    // if para el programa de carrera
    else if (programaEducativo == "carrera") {
        var beca = prompt("Cuenta usted con una beca");
        if (beca == "si") {
            var becaEscogido = prompt("¿Que beca tiene: Facebook, Google o Jesua?").toLowerCase();

            if (becaEscogido == "facebook") {
                var carreraFacebook = carrera * becaFacebook / 100;
                var carreraFacebookTotal = carreraFacebook * 6;
                alert("El precio mensual con descuento de la carrera con la beca Facebook es $" + carreraFacebook + +  " .El costo total de la carrera por 6 meses es: $" + carreraFacebookTotal);

            } else if (becaEscogido == "google") {
                var carreraGoogle = carrera * becaGoogle / 100;
                var carreraGoogleTotal = carreraGoogle * 6;
                alert("El precio mensual con descuento de la carrera con la beca Google es $" + carreraGoogle + " .El costo total de la carrera por 6 meses es: $" + carreraGoogleTotal)

            } else if (becaEscogido == "jesua") {
                var carreraJesua = carrera * becaJesua / 100;
                var carreraJesuaTotal = carreraJesua * 6;
                alert("El precio mensual con descuento de la carrera con la beca Jesua es $" + carreraJesua + " .El costo total de la carrera por 6 meses es: $" + carreraGoogleTotal);
            }

        } else if (beca == "no") {
            alert("Ha escogido el programa carrera y el costo final sin beca es de $ " + carrera);
        } else alert("Lo sentimos, no aceptamos esos caracteres, debe responder  'si' o 'no'")
    }
    //if para el programa de master
    else if (programaEducativo == "master") {
        var beca = prompt("Cuenta usted con una beca");
        if (beca == "si") {
            var becaEscogido = prompt("¿Que beca tiene: Facebook, Google o Jesua?").toLowerCase();

            if (becaEscogido == "facebook") {
                var masterFacebook = master * becaFacebook / 100;
                var masterFacebookTotal = masterFacebook * 12;
                alert("El precio mensual con descuento del master con la beca Facebook es $" + masterFacebook + " .El costo total del master por 12 meses es: $" + masterFacebookTotal)

            } else if (becaEscogido == "google") {
                var masterGoogle = master * becaGoogle / 100;
                var masterGoogleTotal = masterGoogle * 12;
                alert("El precio mensual con descuento del master con la beca Google es $" + masterGoogle + " .El costo total del master por 12 meses es: $" + masterGoogleTotal);

            } else if (becaEscogido == "jesua") {
                var masterJesua = master * becaJesua / 100;
                var masterJesuaTotal = masterJesua * 12;
                alert("El precio mensual con descuento del master con la beca Jesua es $" + masterJesua + " .El costo total del master por 12 meses es: $" + masterJesuaTotal);
            }

        } else if (beca == "no") {
            alert("Ha escogido el programa master y el costo final sin beca es de $ " + master);
        } else alert("Lo sentimos, no aceptamos esas palabras, debe responder  'si' o 'no'")

    } else alert("No ha escogido ningun programa educativo");
} else alert("Lo sentimos no podemos ayudarle");
