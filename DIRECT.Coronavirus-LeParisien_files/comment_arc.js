/**
 * CommentArc Module
 *
 * by Paul Nirina - 2019
 **/
function sendPostMessage(message) {
    var url = (window.location != window.parent.location)
        ? document.referrer
        : document.location.href;

    if (url.startsWith("http://www.leparisien.fr")) {
        window.parent.postMessage(message, "http://www.leparisien.fr");
    }
    if (url.startsWith("http://sandbox-beta.leparisien.fr")) {
        window.parent.postMessage(message, "http://sandbox-beta.leparisien.fr");
    }
    if (url.startsWith("http://beta.leparisien.fr")) {
        window.parent.postMessage(message, "http://beta.leparisien.fr");
    }
}


function commentArc() {

    var module = {
        // VARS
        $comments: $('.comments'),
        $popin: $('#popin-comments'),
        $reportButton: $('.popin-comments__submit-button'),
        $reportSuccess: $('#popin-comments-success'),
        $list: $('.comments__list'),
        $form: $('.comments__form'),
        $modal: $('.comments__modal'),
        currentPage: 1,


        // INIT
        init: function () {         
            this.eventReport();
            module.updateClickMore();

            _.initCommentForm();
        },
        
        eventReport: function () {
            this.$comments.find('.comments__report-link').each(_.clickReport);
        },
        
        updateClickMore: function () {
            $('.comments__more-button').click(function () {
                var $this = $(this);
                var url = $this.data('url');

                module.$comments.find('.comments__more').remove();

                $.ajax({
                    url: url + "?_limit=10",
                    method: 'GET',
                    success: function (responseText) {
                        responseText = responseText.replace(/<div class="comments__user-profil-img"><img src="http:\/\/s1\.lprs1\.fr\/assets\/img\/E-AvatarCompte-Blanc\.svg" width="100%" \/><\/div>/g, '');
                        if (responseText.indexOf('comments__more') !== -1) {
                            responseText = responseText.replace(/\+ DE R&Eacute;ACTIONS/g, "VOIR PLUS DE COMMENTAIRES");
                        }
                        module.$comments.find('.comments__list').append(responseText);
                        module.eventReport();
                        module.updateClickMore();
                    }
                });
            });
        }
    };

    var _ = {
        initCommentForm: function () {

            module.$form.off('submit').on('submit', function (e) {
                e.preventDefault();
                e.stopPropagation();

                if (!!$.cookie("lp_connect")) {
                    var ajax = ajaxArc();
                    var $this = $(this);

                    ajax.init($this, {
                        success: function (responseText) {
                            if (responseText == "success") {
                                $this.addClass('success');
                                $this.find('.form__textarea-textarea').val('');
                                // $this.find('.form__textarea-textarea').after("Aucun message n'est renseigné.");

                                snackbar.className = "show";
                                setTimeout(function() {
                                    snackbar.className = snackbar.className.replace("show", "");
                                }, 3500);

                                return false;
                            }
                            else {
                                // Security.authentification_show();
                                // window.parent.tp.pianoId.show({"screen": "login"});
                                // window.parent.postMessage("show-login-screen", "*");
                                sendPostMessage("show-login-screen");
                            }
                        }
                    });

                    ajax.callPostAjax();
                } else {
                    // window.parent.tp.pianoId.show({"screen": "login"});
                    // window.parent.postMessage("show-login-screen", "*");
                    sendPostMessage("show-login-screen");
                }

                return false;
            });
        },
        
        clickReport: function () {
            var $this = $(this);

            $this.off('click').on('click', function () {
                // module.$popin.velocity('stop').velocity('fadeIn');
                module.$modal.css("display", "block");
            });
        },
    };

    module.init();
    return module;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

commentArc();

/* Afficher le formulaire de connexion ou non */
var commentHandlerForm = document.getElementsByClassName("comments__handler-form")[0];
var commentLoginLink = document.getElementsByClassName("comments__connection-link")[0];

// if (window.parent.tp && window.parent.tp.pianoId && window.parent.tp.pianoId.getUser()) {
if (!!$.cookie("lp_connect")) {
    commentHandlerForm.style.display = "block";
} else {
    commentLoginLink.style.display = "inline-block";
    commentLoginLink.onclick = function showLoginModal() {
        // if (window.parent.tp && window.parent.tp.pianoId) {
        //     window.parent.tp.pianoId.show({"screen": "login"});
        // }
        sendPostMessage("show-login-screen");
    }
}


/* Modal */

/* Modal signalement */
var modal = document.getElementsByClassName("comments__modal")[0];
var modalBtns = document.getElementsByClassName("comments__report-link-handler");
var span = document.getElementsByClassName("comments__modal-close")[0];
var inputMail = document.getElementById("signalement-email");
var textareaMessage = document.getElementById("signalement-message");
var errorInput = document.getElementsByClassName("comments__modal-text-input-error-message")[0];
var errorTextarea = document.getElementsByClassName("comments__modal-textarea-error-message")[0];

/*Modal success signalement */
var modalSuccess = document.getElementsByClassName("comments__modal-success")[0];
var spanSuccess = document.getElementsByClassName("comments__modal-success-close")[0];
var btnCloseSuccess = document.getElementsByClassName("comments__modal-success-input")[0];

document.getElementsByClassName("comments__modal-button")[0].addEventListener("click", function(event) {
    event.preventDefault();
    if (validateEmail(inputMail.value) && textareaMessage.value != "") {
        modal.style.display = "none";
        inputMail.value = "";
        textareaMessage.value = "";

        inputMail.style.borderColor = null;
        errorInput.innerHTML = "";
        textareaMessage.style.borderColor = "#1EA0E6";
        errorTextarea.innerHTML = "";

        modalSuccess.style.display = "block";
    } else {
        if (!validateEmail(inputMail.value)) {
            errorInput.innerHTML = "L'adresse mail est invalide.";
            inputMail.style.borderColor = "#F03333";
        }
        if (inputMail.style.borderColor == "rgb(240, 51, 51)" && validateEmail(inputMail.value)) {
            inputMail.style.borderColor = null;
            errorInput.innerHTML = "";
        }
        if (textareaMessage.value == "") {
            errorTextarea.innerHTML = "Aucun message n'est renseigné.";
            textareaMessage.style.borderColor = "#F03333";
        }
        if (textareaMessage.style.borderColor == "rgb(240, 51, 51)" && textareaMessage.value != "") {
            textareaMessage.style.borderColor = "#1EA0E6";
            errorTextarea.innerHTML = "";
        }
    }
    
});

/*
for (var i = 0; i < modalBtns.length; i++) {
    modalBtns[i].onclick = function() {
        modal.style.display = "block";
    }
}
*/

span.onclick = function() {
    modal.style.display = "none";
    inputMail.value = "";
    textareaMessage.value = "";
    
    inputMail.style.borderColor = null;
    errorInput.innerHTML = "";
    textareaMessage.style.borderColor = "#1EA0E6";
    errorTextarea.innerHTML = "";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        inputMail.value = "";
        textareaMessage.value = "";

        inputMail.style.borderColor = null;
        errorInput.innerHTML = "";
        textareaMessage.style.borderColor = "#1EA0E6";
        errorTextarea.innerHTML = "";
    }
    if (event.target == modalSuccess) {
        modalSuccess.style.display = "none";
    }
}

spanSuccess.onclick = function() {
    modalSuccess.style.display = "none";
}

btnCloseSuccess.onclick = function() {
    modalSuccess.style.display = "none";
}

/* Snackbar */

var snackbar = document.getElementById("snackbar");

var showSnackbar = function() {
    snackbar.className = "show";
    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}