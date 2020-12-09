const accordionBtn = document.querySelectorAll('.container .accordion .item .accordionBtn');
const items = document.querySelector('.container .accordion .item');

accordionBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        let content = elem.nextElementSibling;
        let active = document.querySelector('.container .accordion .item.active');

        if (active) {

            if (elem.parentElement.classList.contains('active')) {

                elem.parentElement.classList.remove('active');
                active.lastElementChild.style.maxHeight = '0';
            } else {
                active.classList.remove('active');
                active.lastElementChild.style.maxHeight = '0';

                elem.parentElement.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }


        } else {
            elem.parentElement.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});