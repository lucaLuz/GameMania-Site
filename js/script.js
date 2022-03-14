function mostrarPopup(){
    window.alert("Ola Mundo")
}
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
$(document).ready(function(){
    $("#banner-carrosel img:eq(0)").addClass("banner-carrosel-ativo").show()
})

setInterval(slide, 1000)

function slide(){
    if($(".banner-carrosel-ativo").next().length ){
        $(".banner-carrosel-ativo").removeClass("banner-carrosel-ativo").hide().next().addClass("banner-ativo").show()
    }else{
        $(".banner-carrosel-ativo").removeClass().hide()
        $("#banner-carrosel img:eq(0)").addClass("banner-carrosel-ativo").show()
    }
}

$("#barras").click(function (){
    $("#menu").toggleClass("menu-ativo")
})
