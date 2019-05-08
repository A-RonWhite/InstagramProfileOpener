//UI Selectors
const nameDump = document.getElementById('name-dump');
const submit = document.getElementById('submit');
const tabSpam = document.getElementById('tab-open');
const handleLayout = document.querySelector('.handle-layout');
const errorMsg = document.querySelector('#error');
const delayUI = document.getElementById('range-value');

const delayAmount = delayChange();

//Event Listeners
submit.addEventListener('click', createLinks);
tabSpam.addEventListener('click', newTab);
delayUI.addEventListener('change', delayChange);


//GET DELAY FUNCTION TO WORK
function delayChange(){
    return parseInt(delayUI.value);
}

function createLinks(e) {
    //Split list so I can forEach through it
    const list = nameDump.value;
    const splitList = list.split(" ");

    //Check if a name has been entered
    if(list === ""){
        //Error message
        errorMsg.textContent = 'Please enter at least one instagram handle'
        errorMsg.classList = 'error';
    } else {
    splitList.forEach((handle) => {
        //Instagram link interface
        const button = document.createElement('button');
        button.classList = 'handle-button';
        handleLayout.appendChild(button);
        const link = document.createElement('a');
        link.href = `https://www.instagram.com/${handle}`;
        link.textContent = handle;
        link.classList = 'instagram-handle col-1'
        button.appendChild(link);

        //Reset Input
        nameDump.value = '';

        //No. of instagram handles
        handleCount(splitList);
    })
    }
    e.preventDefault()
}

function newTab(){
    const instaLinks = document.querySelectorAll('.instagram-handle');
    console.log(delayAmount*1000);


    //Open links in new tabs with a delay
    instaLinks.forEach((link, index) => {
        setTimeout(() => {
            window.open(`${link.href}`,'_blank');
        }, (delayAmount*1000) * (index +1))
    })
}

//Instagram handles added count
function handleCount(){
    const handleNumber = document.querySelectorAll('.handle-button');
    document.getElementById('count').textContent = `Number of users: ${handleNumber.length}`
}


//TO DO
//Fix grid CSS, too many goes off the side if the first row is already assigned - max-wdith?
//Add a way to remove error box or set a timeout on it
//check to see if delay functionality works
