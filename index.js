let currentIndex = 0;
const slides = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const imageWidth = images[0].clientWidth;

function showSlide(index) {
    const offset = -index * imageWidth;
    slides.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

// Automatically transition to the next slide every 5 seconds
setInterval(nextSlide, 5000);

// Initial setup
showSlide(currentIndex);

//More codes

// Add smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Expandable and collapsible sections

const expandableSections = document.querySelectorAll('.expandable');

expandableSections.forEach(section => {
    const title = section.querySelector('.expandable-title');

    title.addEventListener('click', () => {
        section.classList.toggle('expanded');
    });
});



// Additional JavaScript for sliding visuals

const researchVisuals = document.getElementById('research-visuals');
const employmentVisuals = document.getElementById('employment-visuals');

function slideVisuals(container) {
    const visuals = container.getElementsByClassName('visual');
    let currentIndex = 0;

    function showVisual(index) {
        const offset = -index * visuals[0].offsetWidth;
        container.style.transform = `translateX(${offset}px)`;
    }

    function nextVisual() {
        currentIndex = (currentIndex + 1) % visuals.length;
        showVisual(currentIndex);
    }

    function prevVisual() {
        currentIndex = (currentIndex - 1 + visuals.length) % visuals.length;
        showVisual(currentIndex);
    }

    setInterval(nextVisual, 5000);
    showVisual(currentIndex);
}

slideVisuals(researchVisuals);
slideVisuals(employmentVisuals);


// Existing code...

// Smooth scrolling for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Expandable and collapsible sections

const expandableSections = document.querySelectorAll('.expandable');

expandableSections.forEach(section => {
    const title = section.querySelector('.expandable-title');

    title.addEventListener('click', () => {
        section.classList.toggle('expanded');
    });
});

// Image gallery slider with motion

let galleryIndex = 0;
const galleryImages = document.querySelectorAll('.image-gallery img');
const galleryImageWidth = galleryImages[0].clientWidth;

function showGalleryImage(index) {
    const galleryOffset = -index * galleryImageWidth;
    document.querySelector('.image-gallery').style.transform = `translateX(${galleryOffset}px)`;
}

function nextGalleryImage() {
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    showGalleryImage(galleryIndex);
}

function prevGalleryImage() {
    galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
    showGalleryImage(galleryIndex);
}

// Automatically transition to the next gallery image every 5 seconds
setInterval(nextGalleryImage, 5000);

// Initial setup for gallery
showGalleryImage(galleryIndex);

// Additional motion to images in the latest research and impact on employment sections

const researchImages = document.querySelectorAll('#research img');
const employmentImages = document.querySelectorAll('#employment img');

function applyHoverMotion(images) {
    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
}

applyHoverMotion(researchImages);
applyHoverMotion(employmentImages);

// Additional JavaScript for movement on click
function animateContact() {
    var contactSection = document.getElementById('contact');
    contactSection.style.backgroundColor = '#27ae60'; // Change background color on click

    // Reset the background color and transform after a delay
    setTimeout(function () {
        contactSection.style.backgroundColor = '#3498db';
        contactSection.style.transform = 'translateX(0)';
    }, 1000); // Adjust the delay as needed
}


// For the first section
let currentIndexSection1 = 0;
const slidesSection1 = document.querySelector('.slider-section-1 .slider');
const imagesSection1 = document.querySelectorAll('.slider-section-1 .slider img');
const imageWidthSection1 = imagesSection1[0].clientWidth;

function showSlideSection1(index) {
    const offsetSection1 = -index * imageWidthSection1;
    slidesSection1.style.transform = `translateX(${offsetSection1}px)`;
}

function nextSlideSection1() {
    currentIndexSection1 = (currentIndexSection1 + 1) % imagesSection1.length;
    showSlideSection1(currentIndexSection1);
}

function prevSlideSection1() {
    currentIndexSection1 = (currentIndexSection1 - 1 + imagesSection1.length) % imagesSection1.length;
    showSlideSection1(currentIndexSection1);
}

setInterval(nextSlideSection1, 5000);
showSlideSection1(currentIndexSection1);

// For the second section
let currentIndexSection2 = 0;
const slidesSection2 = document.querySelector('.slider-section-2 .slider');
const imagesSection2 = document.querySelectorAll('.slider-section-2 .slider img');
const imageWidthSection2 = imagesSection2[0].clientWidth;

function showSlideSection2(index) {
    const offsetSection2 = -index * imageWidthSection2;
    slidesSection2.style.transform = `translateX(${offsetSection2}px)`;
}

function nextSlideSection2() {
    currentIndexSection2 = (currentIndexSection2 + 1) % imagesSection2.length;
    showSlideSection2(currentIndexSection2);
}

function prevSlideSection2() {
    currentIndexSection2 = (currentIndexSection2 - 1 + imagesSection2.length) % imagesSection2.length;
    showSlideSection2(currentIndexSection2);
}

setInterval(nextSlideSection2, 5000);
showSlideSection2(currentIndexSection2);





// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Adding background animation to sections on scroll
  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function animateSections() {
      sections.forEach(section => {
        if (isInViewport(section)) {
          section.classList.add('background-gradient');
        } else {
          section.classList.remove('background-gradient');
        }
      });
    }
  
    window.addEventListener('scroll', animateSections);
  });
  
  // Adding movement animations to sections on scroll
  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function animateSections() {
      sections.forEach(section => {
        if (isInViewport(section)) {
          section.classList.add('animate__animated', 'animate__fadeInUp');
        } else {
          section.classList.remove('animate__animated', 'animate__fadeInUp');
        }
      });
    }
  
    window.addEventListener('scroll', animateSections);
  });


  document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let previousTranslate = 0;

    function startDrag(e) {
        isDragging = true;
        startPosition = e.clientX || e.touches[0].clientX;
        animateSlider();
    }

    function endDrag() {
        isDragging = false;
        const movedBy = currentTranslate - previousTranslate;

        if (movedBy < -100 && currentTranslate !== 0) {
            // Move to the next slide
            currentTranslate += 100;
        } else if (movedBy > 100 && currentTranslate !== -100 * (slider.children.length - 1)) {
            // Move to the previous slide
            currentTranslate -= 100;
        }

        animateSlider();
    }

    function drag(e) {
        if (isDragging) {
            const currentPosition = e.clientX || e.touches[0].clientX;
            currentTranslate = previousTranslate + currentPosition - startPosition;
        }
    }

    function animateSlider() {
        slider.style.transform = `translateX(${currentTranslate}%)`;
    }

    slider.addEventListener("mousedown", startDrag);
    slider.addEventListener("touchstart", startDrag);

    slider.addEventListener("mouseup", endDrag);
    slider.addEventListener("touchend", endDrag);

    slider.addEventListener("mousemove", drag);
    slider.addEventListener("touchmove", drag);
});

//future sections
const futureVisuals = document.getElementById('future-visuals');
    let rotationAngle = 0;

    futureVisuals.addEventListener('mouseenter', () => {
        rotationAngle += 10; // Adjust rotation speed
        updateRotation();
        updateBackgroundColor();
    });

    function updateRotation() {
        futureVisuals.style.transform = `rotate(${rotationAngle}deg)`;
    }

    function updateBackgroundColor() {
        const colors = ['#f0f0f0', '#d3d3d3']; // Add more colors as needed
        document.body.style.backgroundColor = colors[rotationAngle % colors.length];
    }


    const inspirationGallery = document.getElementById('inspiration-gallery');
    const moreImagesGallery = document.getElementById('more-images-gallery');

    // Make images float
    floatImages(inspirationGallery);
    floatImages(moreImagesGallery);

    function floatImages(gallery) {
        let direction = 1; // 1 for right, -1 for left
        let position = 0;

        function animate() {
            position += direction;
            gallery.style.transform = `translateX(${position}px)`;

            // Reverse direction when reaching the edge of the container
            if (position >= gallery.scrollWidth - gallery.clientWidth || position <= 0) {
                direction *= -1;
            }

            requestAnimationFrame(animate);
        }

        animate();
    }
    //Footer

    // JavaScript for footer interactivity
    function animateFooter() {
        var footer = document.querySelector('footer');
        footer.style.backgroundColor = '#2980b9'; // Change background color on click

        // Reset the background color after a delay
        setTimeout(function () {
            footer.style.backgroundColor = '#3498db';
        }, 1000); // Adjust the delay as needed
    }









// Dark Mode Toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);

// Real-Time Data Fetching using WebSockets
const socket = new WebSocket('ws://example.com/socket');

socket.addEventListener('message', function (event) {
    const data = JSON.parse(event.data);
    updateRealTimeData(data);
});

function updateRealTimeData(data) {
    document.getElementById('real-time-data').innerHTML = `
        <p>Data Point 1: ${data.point1}</p>
        <p>Data Point 2: ${data.point2}</p>
    `;
}

// Web Worker for Background Tasks
if (window.Worker) {
    const worker = new Worker('worker.js');

    worker.postMessage('start');

    worker.onmessage = function (event) {
        document.getElementById('worker-output').textContent = event.data;
    };
}

// AI-Powered Chatbot
const chatbot = document.getElementById('chatbot');
const chatbotInput = document.getElementById('chatbot-input');

chatbotInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const userMessage = chatbotInput.value;
        chatbotInput.value = '';
        addMessageToChatbot(userMessage, 'user');
        getChatbotResponse(userMessage);
    }
});

function addMessageToChatbot(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', sender);
    messageElement.textContent = message;
    chatbot.appendChild(messageElement);
}

function getChatbotResponse(message) {
    fetch('https://api.example.com/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
        addMessageToChatbot(data.response, 'bot');
    });
}

// Advanced Animations with GSAP
gsap.from('.header', { duration: 1.5, y: -50, opacity: 0 });
gsap.from('.main-content', { duration: 1.5, x: -50, opacity: 0, delay: 0.5 });
gsap.from('.footer', { duration: 1.5, y: 50, opacity: 0, delay: 1 });

// Dynamic Form Validation
const form = document.getElementById('dynamic-form');
const formInputs = form.querySelectorAll('input, textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', validateInput);
});

function validateInput(e) {
    const input = e.target;
    const errorMessage = input.nextElementSibling;

    if (input.validity.valid) {
        errorMessage.textContent = '';
    } else {
        showErrorMessage(input, errorMessage);
    }
}

function showErrorMessage(input, errorMessage) {
    if (input.validity.valueMissing) {
        errorMessage.textContent = 'This field is required.';
    } else if (input.validity.typeMismatch) {
        errorMessage.textContent = 'Please enter a valid value.';
    } else if (input.validity.tooShort) {
        errorMessage.textContent = `Value is too short. Minimum length is ${input.minLength}.`;
    }
}

// Interactive 3D Model Viewer
const viewer = document.getElementById('model-viewer');
const model = new THREE.Object3D();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
viewer.appendChild(renderer.domElement);

const loader = new THREE.GLTFLoader();
loader.load('model.gltf', function (gltf) {
    model.add(gltf.scene);
    scene.add(model);
    animate();
});

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    model.rotation.x += 0.01;
    model.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// Dynamic Chart with Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Monthly Data',
            data: [12, 19, 3, 5, 2, 3, 7],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Notification System
const notifyButton = document.getElementById('notify-btn');
notifyButton.addEventListener('click', () => {
    showNotification('New message received!', 'You have a new message in your inbox.');
});

function showNotification(title, body) {
    if (Notification.permission === 'granted') {
        new Notification(title, { body });
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(title, { body });
            }
        });
    }
}

// Progressive Web App (PWA) Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// User Authentication with Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm['email'].value;
    const password = loginForm['password'].value;

    auth.signInWithEmailAndPassword(email, password)
        .then(cred => {
            console.log('User logged in:', cred.user);
        })
        .catch(err => {
            console.log('Error:', err.message);
        });
});

// Content Personalization with AI
function personalizeContent() {
    fetch('https://api.example.com/personalize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: '12345' })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('personalized-content').textContent = data.content;
    });
}

personalizeContent();

// Augmented Reality Integration with WebXR
const arButton = document.getElementById('ar-button');
arButton.addEventListener('click', () => {
    navigator.xr.requestSession('immersive-ar', { requiredFeatures: ['hit-test'] })
        .then(onSessionStarted);
});

function onSessionStarted(session) {
    session.addEventListener('select', onSelect);
    session.requestReferenceSpace('local').then((refSpace) => {
        session.requestAnimationFrame(onXRFrame);
    });
}

function onXRFrame(time, frame) {
    const session = frame.session;
    session.requestAnimationFrame(onXRFrame);

    const viewerPose = frame.getViewerPose(refSpace);

    if (viewerPose) {
        // Update AR content here
    }
}

// WebRTC Video Chat
const videoButton = document.getElementById('video-button');
const localVideo = document.getElementById('local-video');
const remoteVideo = document.getElementById('remote-video');

videoButton.addEventListener('click', () => {
    startVideoChat();
});

function startVideoChat() {
    const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;

    const peerConnection = new RTCPeerConnection();

    localStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream);
    });

    peerConnection.ontrack = event => {
        remoteVideo.srcObject = event.streams[0];
    };

    // Signaling logic here
}

// Enhanced User Interactions with A-Frame VR
AFRAME.registerComponent('cursor-listener', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
            console.log('Element clicked:', evt.target);
        });
    }
});

// Interactive Map with Mapbox
mapboxgl.accessToken = 'your-access-token';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40],
    zoom: 9
});

map.on('click', (e) => {
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`<p>You clicked here: ${e.lngLat}</p>`)
        .addTo(map);
});

// Dynamic Image Gallery with Masonry Layout
const grid = document.querySelector('.grid');
const msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

// Image Lazy Loading
document.addEventListener('DOMContentLoaded', function () {
    const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function (lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback for older browsers
        lazyImages.forEach(function (lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove('lazy');
        });
    }
});

// Geolocation-Based Features
const locationButton = document.getElementById('location-button');
locationButton.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

function showPosition(position) {
    const { latitude, longitude } = position.coords;
    document.getElementById('location-output').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

// Enhanced Forms with Formik
const formikForm = document.getElementById('formik-form');

formikForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formikForm);
    const data = Object.fromEntries(formData.entries());

    console.log('Form Data:', data);

    // Perform form submission logic
});

// Dynamic Content Loading with Intersection Observer
const contentSections = document.querySelectorAll('.content-section');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

contentSections.forEach(section => {
    observer.observe(section);
});

// Real-Time Notifications with Push API
const subscribeButton = document.getElementById('subscribe-button');
subscribeButton.addEventListener('click', () => {
    subscribeUser();
});

function subscribeUser() {
    navigator.serviceWorker.ready.then(registration => {
        return registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlB64ToUint8Array('your-public-vapid-key')
        });
    }).then(subscription => {
        console.log('User subscribed:', subscription);
    }).catch(err => {
        console.log('Subscription failed:', err);
    });
}

function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

// Drag and Drop File Upload
const dropArea = document.getElementById('drop-area');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    handleFiles(files);
}

function handleFiles(files) {
    ([...files]).forEach(uploadFile);
}

function uploadFile(file) {
    const url = 'https://api.example.com/upload';
    const formData = new FormData();

    formData.append('file', file);

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('File uploaded successfully:', data);
    })
    .catch(error => {
        console.log('File upload failed:', error);
    });
}

// Dynamic Weather Widget
const weatherWidget = document.getElementById('weather-widget');
const weatherApiKey = 'your-weather-api-key';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${weatherApiKey}`;

fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
        weatherWidget.innerHTML = `<p>Temperature: ${temperature}°C</p>`;
    })
    .catch(error => {
        console.log('Error fetching weather data:', error);
    });

// Augmented Reality Integration with AR.js
const scene = document.querySelector('a-scene');
scene.addEventListener('loaded', () => {
    const marker = document.querySelector('a-marker');
    const box = document.createElement('a-box');

    box.setAttribute('position', '0 0.5 0');
    box.setAttribute('material', 'color: red');

    marker.appendChild(box);
});


