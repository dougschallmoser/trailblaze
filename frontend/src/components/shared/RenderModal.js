import Swal from 'sweetalert2';

const RenderModal = (type, message) => {

  const displayModal = () => {
    if (type === 'success') {
      return (
        Swal.fire({
          icon: 'success',
          text: message || 'Success!',
          confirmButtonColor: '#1DA590',
          iconColor: '#1DA590'
        })
      )
    } else if (type === 'error') {
      return (
        Swal.fire({
          icon: 'error',
          text: message || 'An error has occured',
          confirmButtonColor: '#1DA590',
          iconColor: '#B22222'
        })
      )
    }
  }

  return displayModal();

}

export default RenderModal;