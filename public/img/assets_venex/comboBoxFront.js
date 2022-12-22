(function( $ ) {
    $.widget( "custom.combobox", {
      _create: function() {
        this.wrapper = $( "<span>" )
          .addClass( "input-group" )
          .insertAfter( this.element );
 
        this.word = '';
        this.xhrPath = this.element.attr('data-xhr-path');
        this.xhrSearch = new XMLHttpRequest();

        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
        this._createShowList();//se crea la lista

        // le agregamos el evento submit al formulario, antes de que se envie, 
        // Se cancela el ajax
        // Agregamos la opcion como seleccionada con el valor del input (lo que se esta buscando)
        // ocultamos el loading
        var form = this.element.closest('form');
        var that = this;

        $(form).bind('submit', function(event) {
            that.xhrSearch.abort();
            var optionSearch = '<option value="'+that.input.val()+'" selected></option>';
            that.element.html(optionSearch);
            that.input.removeClass('open');
            that.input.siblings('.input-group-addon').first().removeClass('open');
            that.list.hide();
        });

        // Obtenemos el parametro keywords del request, y precargamos la busqueda anterior
        if(typeof this._getParam('keywords') !== 'undefined' && this._getParam('keywords') !== null){
          value = this._getParam('keywords');
          this.input.val(value);
          this.word = value; 
          this._getResults();
        }          
      },
 
      _createAutocomplete: function() {
        // se obtiene setea el valor del input 
        // en este caso seria la ultima busqueda
        var selected = this.element.children( ":selected" ), 
            value = (typeof this._getParam('keywords') !== 'undefined' && this._getParam('keywords') !== null) ? this._getParam('keywords') : (selected.val() ? selected.text() : "");
        
        this.input = $( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .attr( "id", "combos" )
          .attr( "autocomplete", "off" )
          .addClass( "form-control" )
          .tooltip({
            tooltipClass: "ui-state-highlight"
          });
        var that = this;
        // detectamos un click fuera del contenedor, el cual se encuentra el input, y el listado de resultados
        $(document).on("click", function(e) {
          var container = that.input.closest('.form-group');

          if (!container.is(e.target) && container.has(e.target).length === 0) { 
            that.list.hide();  
            that.input.removeClass('open');
            that.input.siblings('.input-group-addon').first().removeClass('open');
          }
        });


        this._on( this.input, {
         
          click: function( event, ui ) {
            // this.input.select();
            if(!(typeof that._getParam('keywords') !== 'undefined' && that._getParam('keywords') !== null)){
              console.log('debugConsole');
              this.input.val('');
            }
          },
          keyup: function( event, ui ) {
            event.stopPropagation();
            if((event.which >= 30 && event.which <= 122) || event.which == 127 || event.which == 8){
              // this.word += String.fromCharCode(event.which);//se va generando el string de busqueda (esto porque si pidimos el val() del input, siempre nos trae el ultimo valor del selector)
              // controlar que los strings anterior y posterior sean diferentes para evitar hacer ajax de una misma palabra
              if(this.input.val().length > 2 && (this.word != this.input.val())){
                this.word = this.input.val();

                this._getResults();
              }
            }
            if(event.which == 27){
              this.list.hide();
              this.input.removeClass('open');
              this.input.siblings('.input-group-addon').first().removeClass('open');
            }
          },
         
          focusin: function(){
            this.list.show();
            if(this.list.is(':visible')){
              this.input.addClass('open');
              this.input.siblings('.input-group-addon').first().addClass('open');
            }
          }

        });
      },
 
      _createShowAllButton: function() {
        var input = this.input;
        var that = this;

        $( "<span></span>" )
            .addClass('input-group-addon')
            .html('<i class="fa fa-search"></i>')
            .click(function(e) {
              that.input.closest('form').submit();
            })
            .insertAfter(input);

        this.element.prepend( $("<option>").val('').text('') );
      },

      _createShowList: function() {
          // se toman los valores de las dimensiones y posicion del input
          // para que la lista aparezca debajo del input (como si fuera un selector)
          // y tenga el ancho del mismo
          var offset = this.input.offset();
          var padTop = Number(this.input.css('padding-top').replace("px", ""));
          var padBot = Number(this.input.css('padding-bottom').replace("px", ""));
          var borTop = Number(this.input.css('border-top').replace("px", ""));
          var borBot = Number(this.input.css('border-bottom').replace("px", ""));
          var positionX = 0;
          var positionY = (this.input.height() + padTop + padBot + borTop + borBot);
          var widthList = this.input.closest('.form-group').width();
    
          this.list = $('<ul class="combo-list-container"></ul>')
            .attr('id', 'combo-list')
            .css({
              top: positionY,
              left: positionX,
              width: widthList,
              display: 'none'
            })
            .insertAfter(this.input.parent());

      },
      
      // no es necesaria esta funcion 
      _source: function( request, response ) {
      },
 
      _removeIfInvalid: function( event, ui ) {
 
        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }
 
        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
 
        // Found a match, nothing to do
        if ( valid ) {
          return;
        }
 
        // Remove invalid value
        this.input
          .val( "" )
          .attr( "title", value + " didn't match any item" )
          .tooltip( "open" );
        this.element.val( "" );
        this._delay(function() {
          this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
        this.input.autocomplete( "instance" ).term = "";
      },
 
      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      },

      // AJAX de busqueda
      _getResults: function(){
        var that = this;
        that.xhrSearch.abort();// se aborta el ajax anterior y se realiza el nuevo ajax
        that.list.html('');//vaciamos por las dudas
        that.list.append('<div class="loading-search"><i class="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i></div>');

        that.xhrSearch = $.ajax({
          url: that.xhrPath,
          // async: false,
          type: 'GET',
          dataType: 'JSON',
          data: {keywords: that.word, limit: 4, isXhrSearch: true},
        }).done(function(response){
          var option = '';
          var link = '';
          // las opciones no aparecen, sino que en la siguiente llamada, aparecen los anteriores
          that.element.html('');
          option = $('<option value="'+that.word+'" selected>'+that.word+'</option>');
          that.element.append(option);

          $.each(response, function( index, item ) {

            option = $('<option></option>')
                  .val(item.id)            
                  .attr('data-url', item.url)
                  .attr('data-img', item.img)
                  .text(item.name);
            that.element.append(option);
          });
          that._renderList();
          that.input.addClass('open');
          that.input.siblings('.input-group-addon').first().addClass('open');
        }).fail(function(response){
            console.log('fail?', response);
        });
      },

      _renderList : function(){
          var option = '';
          var linkTo = '';
          var itemType = '';
          var text = '';
          var img = '';
          var that = this;


          this.list.html('');//se vacia la lista para agregar u actualizar nuevas opciones

          this.element.children( "option" ).map(function() {
            // no se agrega la primer opcion, esta sera la palabra que se esta buscando 
            // y que si se da enter o a la lupa esta debe hacer el submit del formulario
            // trallendo los resultados de la busqueda
            if($(this).val() != that.word){
              
              itemType = 'type-' + $(this).val().charAt(0);// Se identifica el grupo al que pertenece: categorias / productos
              option = $('<li></li>').addClass(itemType);// tag <li></li> con la clase para identificar el grupo              

              text = $('<div></div>').addClass('title').text($(this).text());// texto
              img = $('<div></div>');//contenedor de la imagen
              
              // si tiene imagen, se agrega al contenedor de la imagen
              if($(this).attr('data-img') != ''){
                img.addClass('img-container').append( $('<img>').addClass('product-search-thumb').attr('src', $(this).attr('data-img')) );
              }

              // Si tiene url se crea el tag <a></a>, sino es un tag <div></div>
              // Tiene que se diferente a "p_title" y "c_title"
              if($(this).attr('data-url') != '' && ($(this).val() != 'p_title' && $(this).val() != 'c_title')){
                linkTo = $('<a></a>')
                  .addClass('item-cont')
                  .attr('href', $(this).attr('data-url'));
              }else{
                linkTo = $('<div></div>');
                classForSeparator = 'not-link with-separator';
                option.addClass( classForSeparator );//Se agrega clase para identificar los tags <li></li> que seran tratados como titulos
                
                // Si es el titulo de productos y viene el link "ver más", lo agregamos
                if($(this).val() === 'p_title' && $(this).attr('data-url') != ''){
                  var moreProd = $('<a></a>').text('Ver más productos').attr('href', $(this).attr('data-url')).addClass('pull-right');
                  text.append(moreProd).addClass('clearfix');
                }
              }

              linkTo.append(img, text);//insertamos el contenedor de la imagen y el texto
              option.append(linkTo);//insertamos el contenido al tag <li></li>
              that.list.append(option);//finalmento intesertamos la opcion al listado
            }
          });

          if(this.list.is(':visible')){
            this.list.show();
          }
      },

      // obtenemos el parametro de la request especificado
      _getParam : function(name){
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
      }
    });
  })( jQuery );