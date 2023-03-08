let photoBox = document.querySelector('#car-img');

let photos = ["<img src='/zdj/DSC04284.jpg' alt='auto'>", "<img src='/zdj/DSC04237.jpg' alt='auto'>", "<img src='/zdj/DSC04264.jpg' alt='auto'>", "<img src='/zdj/DSC04327.jpg' alt='auto'>"];


 let i = 1

    setInterval(function photochange() {

             if (i == 1) {
                photoBox.innerHTML = photos[0]+photos[1]+photos[2]+photos[3];
                i++
            } else if (i == 2) {
                photoBox.innerHTML = photos[1]+photos[2]+photos[3]+photos[0];
                i++
            } else if (i == 3) {
                photoBox.innerHTML = photos[2]+photos[3]+photos[0]+photos[1];
                i++
            } else if (i == 4) {
                photoBox.innerHTML = photos[3]+photos[0]+photos[1]+photos[2];
                i = 1
            } else {
                console.log('cos poszlo nie tak');
                
            }
    }, 15000);

