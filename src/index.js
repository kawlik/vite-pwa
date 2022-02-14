//  PWA register
import { registerSW } from 'virtual:pwa-register'

//  style sheet
import './style/index.css';


//  register PWA
const updateSW = registerSW({
    onOfflineReady() { },
    onNeedRefresh() { },
});


/*  PWA installation
/*   *   *   *   *   *   *   *   *   *   */
( async function install() {


    //  install function ref
    let install_function;

    //  install button selector
    const selector_install = '#install-button';

    //  get install button elem
    const install_button = root.querySelector( selector_install );


    /*  create utiliry functions
    /*   *   *   *   *   *   *   *   */

    const setInstallButtonVisibility = ( isInstalled ) => {
        if( isInstalled ) {
            console.log( 'PWA app was installed!' );
            install_button.disabled = true;
            install_button.hidden = true;
            install_function = null;
        } else {
            console.warn( 'PWA app was not installed!' );
        }
    };

    const enableButton = () => {
        install_button.disabled = false;
        install_button.addEventListener( 'click', async ( event ) => {
            event.preventDefault();
            install_function.prompt();

            //  await for response
            const { outcome } = await install_function.userChoice;
            setInstallButtonVisibility( outcome === 'accepted' );
        });
    };


    /*  append event listeners
    /*   *   *   *   *   *   *   *   */

    //  listen for 'beforeinstallprompt' event
    window.addEventListener( 'beforeinstallprompt', ( event ) => {

        //  prevent default prompt
        event.preventDefault();

        //  set ref to event
        install_function = event;

        //  enable button
        enableButton();
    });

}());



/*  Main thread
/*   *   *   *   *   *   *   *   *   *   */
( async function main() {

    //  root element selector
    const selector_root = '#root';

    //  get root element
    const root = document.querySelector( selector_root );


    /*  root childerns setup
    /*   *   *   *   *   *   *   *   */

    //  set selectors app
    const selector_button = '#click-button';
    const selector_result = '#click-result';

    //  get app elements
    const button = root.querySelector( selector_button );
    const result = root.querySelector( selector_result );

    //  click counter
    let counter = 0;


    /*  create utiliry functions
    /*   *   *   *   *   *   *   *   */

    const updateResultCounter = () => {
        result.textContent = ++counter;
    };

    const onClickHandler = ( event ) => {
        event.preventDefault();
        updateResultCounter();
    };


    /*  append event listener
    /*   *   *   *   *   *   *   *   */

    button.addEventListener( 'click', onClickHandler );

})();