const mobileNav = () =>{
    const headerBtn = document.querySelector('.header__menu');
    const mobileHeader = document.querySelector('.mobile_header');
    const mobileLinks = document.querySelectorAll('.m_header__link')
    let isMobileNavOpen= false;
    headerBtn.addEventListener('click', () => {
        isMobileNavOpen= !isMobileNavOpen;
        if(isMobileNavOpen){
            mobileHeader.style.display="flex";
            document.body.style.overflowY = 'hidden';
        }else
        {
            mobileHeader.style.display="none";
            document.body.style.overflowY = 'auto';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNavOpen = 'false';
            mobileHeader.style.display = 'none';
            document.body.style.overflowY = 'auto';
        })
    });
};
mobileNav()