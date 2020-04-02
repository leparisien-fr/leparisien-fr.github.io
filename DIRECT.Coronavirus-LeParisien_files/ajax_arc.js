var ajaxArc = function(){
  var prv = {
    _options: {
      'type' 		: 'GET',
      'url'  		: "#",
      'complete'	: function(data){
        if(prv._form.button != null && prv._form.buttonContainer != null){
          prv._form.button.removeClass('nodisplay');
          $('.loading__container').remove();
        }
      }
    },
    _element: null,
    isForm: false,
    _form:{
      button: null,
      buttonContainer: null
    },
    init:function(element, options){
      this.updateOptions(options);
      this.initElement(element);
    },
    updateOptions:function(options){
      if(!!options){
        $.extend(true, prv._options, options, {});
      }
    },
    initElement:function(element){
      if(!!element){
        prv._element = element;

        var _ajaxData = {};
        if(prv._options.url == "#"){
          _ajaxData.url = prv._element.attr('action')||prv._element.data('action');
        }

        if(prv._element.is('form')){
          _ajaxData.data = prv._element.serialize();
          prv.isForm = true;
        }

        prv.updateOptions(_ajaxData);
      }
    },
    callGetAjax:function(){
      prv.updateOptions({'type':'GET'});

      if (!!prv._element) prv.loading();

      setTimeout(function(){
        $.ajax(prv._options);
      }, 250)
    },
    callPostAjax:function(){
      prv.updateOptions({'type':'POST'});

      if (!!prv._element) prv.loading();
      
      setTimeout(function(){
        $.ajax(prv._options);
      }, 250);

    },
    loading: function(){
      if(prv.isForm != true){
        prv._element.empty();
        prv._element.append(prv.makeLoading());
      }else{
        prv._form.button = $(prv._element).find('[type="submit"]');
        prv._form.buttonContainer = $(prv._form.button).parent();

        prv._form.buttonContainer.append(prv.makeCustomLoading(prv._form.button));
        prv._form.button.addClass('nodisplay');
      }
    },
    makeLoading: function(){
      return $("<div></div>")
        .addClass('loading__block')
        .append($('<div></div>')
          .addClass('loading loading--double'));
    },
    makeCustomLoading: function(button){
      return $("<div></div>")
        .addClass('loading__container')
        .css({
          display : 'inline-block',
          'text-align' : 'center',
          width : button.css('width'),
          height:	button.css('height'),
          'margin-top': button.css('margin-top')
        })
        .append($('<div></div>')
          .addClass('loading loading--double')
        );
    }
  };

  var pub = {
    init: function(element, options){
      prv.init(element, options);
    },
    updateOptions: function (options) {
      prv.updateOptions(options);
    },
    callGetAjax: function(){
      prv.callGetAjax();
    },
    callPostAjax: function(){
      prv.callPostAjax();
    }
  };

  return pub;
}
