console.log('entrando');
document.addEventListener('DOMContentLoaded', ()=>{
    soloNumero();
});

/**
  * Configura la restricción numérica en campos con [data-only-numbers]
*/
function soloNumero() {
    const numeroIngresado = document.querySelector('[data-only-numbers]');
    numeroIngresado.forEach(nro => {
        // 1. Previene el ingreso de caracteres no numéricos al presionar teclas o pegar
        nro.addEventListener('beforeinput', (e)=>{
            // Si hay texto siendo insertado (tecleado o pegado)
            if (e.data !== null) {
                // Rechaza si no es completamente dígitos (0-9)
                if (!/^\d+$/.test(e.data)) {
                    Swal.fire({
                            icon: "error",
                            title: "Error !!",
                            text: "Debe ingresar solo números",
                        });
                    e.preventDefault();    
                }
            }
        })

        // 2. Limpieza de respaldo (por si arrastran texto con el mouse)
        nro.addEventListener('input', (e)=>{
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    });
    
}
