document.querySelector('.bonjour').addEventListener('click', function() {
    if (this.style.margin === '20px') {
      this.style.margin = '0';
    } else {
      this.style.margin = '30vh';
    }
  });