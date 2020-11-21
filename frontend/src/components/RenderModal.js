import Swal from 'sweetalert2';

const RenderModal = (type, message) => {

  const displayModal = () => {
    if (type === 'success') {
      return (
        Swal.fire({
          icon: 'success',
          text: message || 'You have successfully logged in!',
          confirmButtonColor: '#1DA590',
          iconColor: '#1DA590'
        })
      )
    } else if (type === 'error') {
      return (
        Swal.fire({
          icon: 'error',
          text: message || 'Invalid credentials. Please try again.',
          confirmButtonColor: '#1DA590',
          iconColor: '#B22222'
        })
      )
    }
  }

  return displayModal();

}

export default RenderModal;