

window.logine = async () => {
    Swal.fire({
      position: 'top-end',
      title: '<strong>Recuerda</u></strong>',
      icon: 'info',
      html:
        '<b>Si eres profesor tienes que iniciar con las credenciales que te mando el GREMIO</b>, ' +
        // '<a href="tags.html">Aqui</a> ' +
        '',
      showCloseButton: true,
      showCancelButton: false,
      background: 'var(--bs-body-color)',
      focusConfirm: false,
      confirmButtonText:
        '<a class="col btn" style="color: var(--bs-white);" role="button" href="login.html">Iniciar sesión</a>',
      // confirmButtonAriaLabel: 'Ir!',
      // cancelButtonText:
      //   '<a href="tags.html">Can</a>',
      // cancelButtonAriaLabel: 'Cerrar'
    })
    
  }