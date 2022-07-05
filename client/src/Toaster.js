import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast:true,
    position:'top-end',
    timer:5000,
    showConfirmButton:false,
    timerProgressBar:true
})

const makeToast = (type,msg) => {
    Toast.fire({
        icon:type,
        title:msg
    })
}

export default makeToast;