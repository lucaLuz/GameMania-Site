// function mostrarPopup(){
//     window.alert("Ola Mundo")
// }
// $(document) .ready(function(){
//     $("#barras").click(function(){
//         if($(#menu).hasClass("#menu-ativo")){
//             $("#menu").removeClass("#menu-ativo")
//         }else{
//             $("#menu").addClass("#menu-ativo")
//         }
//     }
//     )
// }
// )




$( document ).ready(function() {
    $("#barras").click(function () {
        $("#menu").toggleClass("menu-ativo")
    })
})