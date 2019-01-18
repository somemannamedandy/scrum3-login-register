$(document).ready(function(){
     /*SCRUM TEAM 3 CODE*/

    $.fn.funcToggle = function(a,b) {
        function toggleFunc(){ [b,a][this._toggle^=1].call(this); }
        return this.on("click", toggleFunc);
    };

    $(".s3-login,.s3-register").click(function(){
        $(".active").css(" border-bottom"," 5px solid #5584ff")
    });
    $(".s3-login").click(function(){
        $(".s3-register-form").css("display","none");
        $(".s3-login-form").css("display","block");
        $(".s3-login").parent().toggleClass('active');
        $(".s3-register").parent().toggleClass('active');

    });
    $(".s3-register").click(function(){
        $(".s3-register-form").css("display","block");
        $(".s3-login-form").css("display","none");
        $(".s3-register").parent().toggleClass('active');
        $(".s3-login").parent().toggleClass('active');
    });

    $('.s3-register').click(function(){
        $('head title', window.parent.document).text('Register').toggle();
    });

    $('.s3-login').click(function(){
        $('head title', window.parent.document).text('Home').toggle();
    });
    $('.s3-showandhide').click(function(){
        $('.s3-showandhide').toggleClass('fa-eye-slash');

    });
    $('.s3-showandhide').funcToggle(function(){
            $('#PasswordReg').attr('type','text');
    },
    function(){
        $('#PasswordReg').attr('type','password');
    });
    $('#PasswordReg').keyup(function(){

        const s3_minPassLength = 8,
            s3_minLowChar = 1,
            s3_minUppChar = 1,
            s3_minInt = 2,
            s3_minSpecialChar = 1;
        var s3_passInput = this.value,
            s3_intCount = s3_passInput.replace(/[^0-9]/g,"").length,
            s3_lowCharCount = s3_passInput.replace(/[^a-z]/g,"").length,
            s3_uppCharCount = s3_passInput.replace(/[^A-Z]/g,"").length,
            s3_specialCharCount = s3_passInput.replace(/[!@#$%^&*()_+\-=\[\]{};':"|,.<>\/?\\]/g,"").length;


        (s3_passInput.length < s3_minPassLength )?$('.s3-tooltip-text li:nth-child(1)').show() :$('.s3-tooltip-text li:nth-child(1)').hide();
        (s3_intCount<s3_minInt)? $('.s3-tooltip-text li:nth-child(2)').show() :$('.s3-tooltip-text li:nth-child(2)').hide();
        (s3_lowCharCount<s3_minLowChar)?$('.s3-tooltip-text li:nth-child(3)').show() :$('.s3-tooltip-text li:nth-child(3)').hide();
        (s3_uppCharCount<s3_minUppChar)? $('.s3-tooltip-text li:nth-child(4)').show() :$('.s3-tooltip-text li:nth-child(4)').hide();
        (s3_specialCharCount<s3_minSpecialChar)? $('.s3-tooltip-text li:nth-child(5)').show():$('.s3-tooltip-text li:nth-child(5)').hide();
        (s3_passInput.length >= s3_minPassLength && s3_intCount>=s3_minInt && s3_lowCharCount>=s3_minLowChar && s3_uppCharCount>=s3_minUppChar)?$('.s3-tooltip-text').hide() /*console.log('good enough')*/: $('.s3-tooltip-text').show();

    });

    /*END SCRUM TEAM 3 CODE*/
    /**/
});