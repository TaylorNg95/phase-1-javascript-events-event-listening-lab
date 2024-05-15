function addingEventListener() {
    const button = document.querySelector('#button');
    button.addEventListener('click', clickAlert)

    function clickAlert(){
        alert('I was clicked!');
    }
}