if (grecaptcha) {
  if (grecaptcha.enterprise) {
    grecaptcha.enterprise.ready(function () {
      grecaptcha.enterprise
        .execute("6LdEadsjAAAAALNgl8k-WLK8A0qF7rA9HBwwHVR8", {
          action: "submit",
        })
        .then(function (token) {
          $("#homeForm").validate({
            ignore: "",
            rules: {
              name: "required",
              phone: {
                required: true,
                digits: true,
              },
              email: { required: true, email: true },
            },
            messages: {
              name: "Nombre obligatorio.",
              phone: {
                required: "Número telefónico obligatorio.",
                digits: "No es un número válido",
              },
              email: {
                required: "Correo obligatorio.",
                email: "Correo no valido.",
              },
            },
            highlight: function (element) {
              $(element).addClass("error");
              $(element).parent("div").addClass("error");
            },
            unhighlight: function (element) {
              $(element).removeClass("error").addClass("success");
              $(element).parent("div").removeClass("error").addClass("success");
            },
            submitHandler: function (form) {
              fbq("track", "Lead");

              $("#homeForm .btn-blue").attr("disabled", true);
              $("#homeForm .btn-blue").text("Enviando");
              $("#homeForm").ajaxSubmit({
                dataType: "json",
                success: function (data) {
                  if (data.message == 1) {
                    $("#homeForm .btn-blue").text("Enviado");
                    $("#homeForm")[0].reset();
                    setTimeout(() => {
                      $("#homeForm").fadeOut();
                      $(".contact__success").fadeIn();
                    }, 500);
                  }
                },
              });
            },
          });
        });
    });
    grecaptcha.enterprise.ready(function () {
      grecaptcha.enterprise
        .execute("6LdEadsjAAAAALNgl8k-WLK8A0qF7rA9HBwwHVR8", {
          action: "submit",
        })
        .then(function (token) {
          $("#callForm").validate({
            ignore: "",
            rules: {
              name: { required: true },
              email: { required: true, email: true },
              phone: { required: true, digits: true },
              terms: { required: true },
            },
            messages: {
              name: { required: "Nombre obligatorio." },
              email: {
                required: "Correo obligatorio.",
                email: "Correo no valido.",
              },
              phone: {
                required: "Número telefónico obligatorio.",
                digits: "No es un número válido",
              },
              terms: { required: "Campo obligatorio" },
            },
            highlight: function (element) {
              $(element).addClass("error");
              $(element).parent("div").addClass("error");
            },
            unhighlight: function (element) {
              $(element).removeClass("error").addClass("success");
              $(element).parent("div").removeClass("error").addClass("success");
            },
            submitHandler: function (form) {
              fbq("track", "Lead");
              $("#callForm .btn-blue").attr("disabled", true);
              $("#callForm .btn-blue").text("Enviando");
              $("#callForm").ajaxSubmit({
                dataType: "json",
                success: function (data) {
                  if (data.message == 1) {
                    $("#callForm")[0].reset();
                    setTimeout(() => {
                      $("#callForm").fadeOut();
                      $(".contact .contact__success").fadeIn();
                    }, 500);
                  }
                },
              });
            },
          });
        });
    });
    grecaptcha.enterprise.ready(function () {
      grecaptcha.enterprise
        .execute("6LdEadsjAAAAALNgl8k-WLK8A0qF7rA9HBwwHVR8", {
          action: "submit",
        })
        .then(function (token) {
          $("#ebookForm").validate({
            ignore: "",
            rules: {
              name: "required",
              phone: {
                required: true,
                digits: true,
              },
              email: { required: true, email: true },
            },
            messages: {
              name: "Nombre obligatorio.",
              phone: {
                required: "Número telefónico obligatorio.",
                digits: "No es un número válido",
              },

              email: {
                required: "Correo obligatorio.",
                email: "Correo no valido.",
              },
            },
            highlight: function (element) {
              $(element).addClass("error");
              $(element).parent("span").addClass("error");
            },
            unhighlight: function (element) {
              $(element).removeClass("error");
              $(element).parent("span").removeClass("error");
            },
            submitHandler: function (form) {
              fbq("track", "SubmitApplication");
              $("#ebookForm .btn-blue").attr("disabled", true);
              $("#ebookForm .btn-blue").text("Enviando");
              $("#ebookForm").ajaxSubmit({
                dataType: "json",
                success: function (data) {
                  if (data.message == 1) {
                    $("#ebookForm .btn-blue").text("Enviado");
                    $("#ebookForm")[0].reset();
                    setTimeout(() => {
                      $("#ebookForm").fadeOut();
                      $(".formEbook .contact__success").fadeIn();
                    }, 500);
                  }
                },
              });
            },
          });
        });
    });
  }
}

$("#ebookForm").validate({
  ignore: "",
  rules: {
    name: "required",
    phone: {
      required: true,
      digits: true,
    },
    email: { required: true, email: true },
  },
  messages: {
    name: "Nombre obligatorio.",
    phone: {
      required: "Número telefónico obligatorio.",
      digits: "No es un número válido",
    },

    email: {
      required: "Correo obligatorio.",
      email: "Correo no valido.",
    },
  },
  highlight: function (element) {
    $(element).addClass("error");
    $(element).parent("span").addClass("error");
  },
  unhighlight: function (element) {
    $(element).removeClass("error");
    $(element).parent("span").removeClass("error");
  },
  submitHandler: function (form) {
    fbq("track", "SubmitApplication");
    $("#ebookForm .btn-blue").attr("disabled", true);
    $("#ebookForm .btn-blue").text("Enviando");
    $("#ebookForm").ajaxSubmit({
      dataType: "json",
      success: function (data) {
        if (data.message == 1) {
          $("#ebookForm .btn-blue").text("Enviado");
          $("#ebookForm")[0].reset();
          setTimeout(() => {
            $("#ebookForm").fadeOut();
            $(".formEbook .contact__success").fadeIn();
          }, 500);
        }
      },
    });
  },
});
