$(document).ready(function(){
   
   $('header button').click(function(){
      $("form").slideDown()
   })

   $('#Cancelar').click(function(){
      $("form").slideUp()
   })

   $('form').on('submit',function(e) {
      e.preventDefault();
      const endereco = $('#Endereco').val()
      const NovoItem = $('<li style= "display:none"></li>');
      $(`<img src="${endereco}" />`).appendTo(NovoItem)
      $(`
         <div class ="Overlay-img-link">
            <a href = "${endereco}" target = "_blank" title = "Ver imagem em tamanho real">
               Ver imagem em tamanho real 
            </a>           
         </div>
      `).appendTo(NovoItem)
      $(NovoItem).appendTo('ul')
      $(NovoItem).fadeIn(1000)
      $('#Endereco').val('')
   })
})









