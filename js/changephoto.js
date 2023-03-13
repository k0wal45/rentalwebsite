// bmw x4m

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

    // bmw m2

let photoBox2 = document.querySelector('#car-img2');

let photos2 = ["<img src='/zdj/DSC04385.JPG' alt='auto'>", "<img src='/zdj/DSC04346.JPG' alt='auto'>", "<img src='/zdj/DSC04442.JPG' alt='auto'>", "<img src='/zdj/DSC04449.JPG' alt='auto'>"];


 let i2 = 1

    setInterval(function photochange2() {

             if (i2 == 1) {
                photoBox2.innerHTML = photos2[0]+photos2[1]+photos2[2]+photos2[3];
                i2++
            } else if (i2 == 2) {
                photoBox2.innerHTML = photos2[1]+photos2[2]+photos2[3]+photos2[0];
                i2++
            } else if (i2 == 3) {
                photoBox2.innerHTML = photos2[2]+photos2[3]+photos2[0]+photos2[1];
                i2++
            } else if (i2 == 4) {
                photoBox2.innerHTML = photos2[3]+photos2[0]+photos2[1]+photos2[2];
                i2 = 1
            } else {
                console.log('cos poszlo nie tak');
                
            }
    }, 15000);

