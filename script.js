document.addEventListener('DOMContentLoaded', () => {
    const questions = [{
            text: "How do you like your eggs?",
            options: [{
                    text: "Scrambled",
                    image: "https://assets.bonappetit.com/photos/57ace84d53e63daf11a4db61/master/pass/SCRAMBLED-EGG-1-of-1.jpg",
                    career: "Paranormal Guide",
                    alt: "Scrambled eggs"
                },
                {
                    text: "Fried",
                    image: "https://th.bing.com/th/id/OIP.ALOr78jmNODd8amU89wuEAAAAA?rs=1&pid=ImgDetMain",
                    career: "Dog Food Taster",
                    alt: "Fried eggs"
                },
                {
                    text: "Sunny Side Up",
                    image: "https://numstheword.com/wp-content/uploads/2022/04/Sunny-Side-Up-Eggs-16-512x768.jpg",
                    career: "Professional Queuer",
                    alt: "Sunny side up eggs"
                },
                {
                    text: "I'm Vegan",
                    image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHNkazFkMDhzNWE1bzRncXpmcnFldmxiMm1ubjV1bXdzcnhza3gxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YQfjikIVjXal2tNNIG/giphy.gif",
                    career: "Professional Mourner",
                    alt: "Vegan food gif"
                }
            ]
        },
        {
            text: "Choose a breakfast meat:",
            options: [{
                    text: "Sausage",
                    image: "https://cookfasteatwell.com/wp-content/uploads/2023/06/Air-fried-breakfast-sauasage-on-a-white-plate.jpg",
                    career: "Dog Food Taster",
                    alt: "Sausage"
                },
                {
                    text: "Bacon",
                    image: "https://madaboutfood.co/wp-content/uploads/2018/11/2021-07-04-10.04.53-768x1024.jpg",
                    career: "Paranormal Guide",
                    alt: "Bacon"
                },
                {
                    text: "Canadian Bacon",
                    image: "https://th.bing.com/th/id/OIP.eIZ-y33bxnJlc3xoLaEROgAAAA?rs=1&pid=ImgDetMain",
                    career: "Fortune Cookie Writer",
                    alt: "Canadian bacon"
                },
                {
                    text: "Vegetarian Sausage",
                    image: "https://bing.com/th?id=OSK.779085bc0c30e081748f7512fbcaf6a7",
                    career: "Professional Mourner",
                    alt: "Vegetarian sausage"
                }
            ]
        },
        {
            text: "Pick a potato style:",
            options: [{
                    text: "Hashbrowns",
                    image: "https://minimalistbaker.com/wp-content/uploads/2021/03/THE-BEST-Hashbrowns-Buttery-Crispy-Salty-4-Ingredients-vegan-glutenfree-hashbrown-minimalistbaker-recipe-22.jpg",
                    career: "Dog Food Taster",
                    alt: "Hashbrowns"
                },
                {
                    text: "Home Fries",
                    image: "https://th.bing.com/th/id/OIP.bLAat2gJ49d29jOwXJKYCwHaE8?rs=1&pid=ImgDetMain",
                    career: "Paranormal Guide",
                    alt: "Home fries"
                },
                {
                    text: "Sweet Potato Hash",
                    image: "https://buildyourbite.com/wp-content/uploads/2018/05/sweet-potato-hash-recipe-40.jpg",
                    career: "Fortune Cookie Writer",
                    alt: "Sweet potato hash"
                },
                {
                    text: "No Potatoes",
                    image: "https://media.tenor.com/ET6wn2K0DZwAAAAC/potato.gif",
                    career: "Professional Mourner",
                    alt: "No potatoes"
                }
            ]
        },
        {
            text: "Choose a fruit:",
            options: [{
                    text: "Pineapple",
                    image: "https://healthynibblesandbits.com/wp-content/uploads/2017/06/How-to-Cut-Pineapple-5-768x1150.jpg",
                    career: "Paranormal Guide",
                    alt: "Pineapple"
                },
                {
                    text: "Fresh Berries",
                    image: "https://images.pexels.com/photos/4558293/pexels-photo-4558293.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                    career: "Dog Food Taster",
                    alt: "Fresh berries"
                },
                {
                    text: "Orange Slices",
                    image: "https://i.pinimg.com/originals/90/f5/fb/90f5fb181d44ef988e8ea5690f86af3c.jpg",
                    career: "Fortune Cookie Writer",
                    alt: "Orange slices"
                },
                {
                    text: "Grapefruit",
                    image: "https://th.bing.com/th/id/OIP.E3Fi2b8aj9CXlW-uj0aRUgHaHa?rs=1&pid=ImgDetMain",
                    career: "Professional Mourner",
                    alt: "Grapefruit"
                }
            ]
        },
        {
            text: "Choose a drink:",
            options: [{
                    text: "Orange Juice",
                    image: "https://wallpapercave.com/wp/wp11444248.gif",
                    career: "Professional Queuer",
                    alt: "Orange juice"
                },
                {
                    text: "Hot Coffee",
                    image: "https://img.freepik.com/premium-photo/photo-aesthetics-hot-coffee-with-real-coffee-beans_982935-6205.jpg",
                    career: "Dog Food Taster",
                    alt: "Hot coffee"
                },
                {
                    text: "Hot Tea",
                    image: "https://wallpapers.com/images/hd/brown-aesthetic-hot-tea-qomfw27jtxq6iixi.jpg",
                    career: "Fortune Cookie Writer",
                    alt: "Hot tea"
                },
                {
                    text: "Smoothie",
                    image: "https://i.pinimg.com/originals/02/29/ae/0229aec7b994e8a4180cb6348b5a1b82.jpg",
                    career: "Paranormal Guide",
                    alt: "Smoothie"
                }
            ]
        }
    ];

    const careers = {
        "Paranormal Guide": {
            image: "https://cdn3.careeraddict.com/uploads/article/62072/paranormal-guide.webp",
            description: "You have an uncanny ability to sense the unknown and guide others through mysterious experiences."
        },
        "Dog Food Taster": {
            image: "https://cdn0.careeraddict.com/uploads/article/62074/dog-food.webp",
            description: "With your refined palate, you’re perfect for making sure canine cuisine is top quality."
        },
        "Professional Queuer": {
            image: "https://cdn3.careeraddict.com/uploads/article/62079/line-stander.webp",
            description: "Patience and perseverance are your strengths, making you the master of standing in lines."
        },
        "Fortune Cookie Writer": {
            image: "https://th.bing.com/th/id/OIP.7DEUT1o_YMOTF_p4HGZw3wHaEK?rs=1&pid=ImgDetMain",
            description: "Creative and mysterious, you craft words that inspire hope and curiosity."
        },
        "Professional Mourner": {
            image: "https://static.messynessychic.com/wp-content/uploads/2021/06/160225_mourner.jpg",
            description: "Empathetic and expressive, you honor memories by being there in times of grief."
        }
    };

    const pagesWrapper = document.getElementById('pagesWrapper');
    let currentPage = 0;
    let selections = [];

    function createStartPage() {
        const start = document.createElement('section');
        start.className = 'page start-page';
        start.innerHTML = `
      <h1>Discover Your Future Career Based on Breakfast!</h1>
      <p>Answer the following food-based questions to find out what job awaits you. 100% accurate.</p>
      <button id="startBtn">Start Quiz</button>
    `;
        pagesWrapper.appendChild(start);
        const startBtn = start.querySelector('#startBtn');
        startBtn.addEventListener('click', () => {
            selections = [];
            currentPage = 1;
            slideToPage(currentPage);
        });
    }

    function createQuestionPage(question) {
        const section = document.createElement('section');
        section.className = 'page quiz-page';
        section.innerHTML = `<div class="question-container"><h2>${question.text}</h2><div class="options-grid"></div></div>`;
        const optionsGrid = section.querySelector('.options-grid');
        question.options.forEach(opt => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.setAttribute('data-career', opt.career);
            optionDiv.setAttribute('tabindex', '0');
            optionDiv.setAttribute('role', 'button');
            optionDiv.setAttribute('aria-label', `${opt.text} - Select this option and go to next question`);
            optionDiv.innerHTML = `
        <img src="${opt.image}" alt="${opt.alt || opt.text}" loading="lazy" />
        <div class="option-label">${opt.text}</div>
      `;
            optionDiv.addEventListener('click', () => selectOption(opt.career));
            optionDiv.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectOption(opt.career);
                }
            });
            optionsGrid.appendChild(optionDiv);
        });
        pagesWrapper.appendChild(section);
    }

    function createResultPage() {
        const result = document.createElement('section');
        result.className = 'page result-page';
        result.innerHTML = `
      <h1>Your Future Career Is...</h1>
      <h2 id="careerName"></h2>
      <img id="careerImage" src="" alt="Career Image" />
      <p id="careerDescription"></p>
      <button id="retakeBtn">Retake Quiz</button>
    `;
        pagesWrapper.appendChild(result);
    }

    function buildPages() {
        createStartPage();
        questions.forEach(q => createQuestionPage(q));
        createResultPage();
    }

    function slideToPage(index) {
        pagesWrapper.style.transform = `translateX(-${index * 100}vw)`;
    }

    function selectOption(career) {
        selections.push(career);
        if (currentPage < questions.length) {
            currentPage++;
            slideToPage(currentPage);
        } else {
            showResult();
            currentPage++;
            slideToPage(currentPage);
        }
    }

    function showResult() {
        const counts = {};
        let hasMourner = false;
        selections.forEach(career => {
            if (career === 'Professional Mourner') hasMourner = true;
            counts[career] = (counts[career] || 0) + 1;
        });
        let finalCareer;
        if (hasMourner) {
            finalCareer = 'Professional Mourner';
        } else {
            const max = Math.max(...Object.values(counts));
            const topCareers = Object.entries(counts)
                .filter(([_, count]) => count === max)
                .map(([career]) => career);
            finalCareer = topCareers[Math.floor(Math.random() * topCareers.length)];
        }
        document.getElementById('careerName').textContent = finalCareer;
        document.getElementById('careerImage').src = careers[finalCareer].image;
        document.getElementById('careerImage').alt = finalCareer;
        document.getElementById('careerDescription').textContent = careers[finalCareer].description;
        launchConfetti();
    }

    function launchConfetti() {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = {
            startVelocity: 30,
            spread: 360,
            ticks: 60,
            zIndex: 1000
        };
        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) {
                clearInterval(interval);
                return;
            }
            confetti(Object.assign({}, defaults, {
                particleCount: 20,
                origin: {
                    x: 0,
                    y: 0
                }
            }));
            confetti(Object.assign({}, defaults, {
                particleCount: 20,
                origin: {
                    x: 1,
                    y: 0
                }
            }));
            confetti(Object.assign({}, defaults, {
                particleCount: 20,
                origin: {
                    x: 0,
                    y: 1
                }
            }));
            confetti(Object.assign({}, defaults, {
                particleCount: 20,
                origin: {
                    x: 1,
                    y: 1
                }
            }));
        }, 250);
    }
    buildPages();
    pagesWrapper.addEventListener('click', e => {
        if (e.target && e.target.id === 'retakeBtn') {
            selections = [];
            currentPage = 0;
            slideToPage(currentPage);
        }
    });
});
