//  style sheet
import './style/index.css';


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

    const enableButton = () => {
        install_button.disabled = false;
        install_button.addEventListener( 'click', ( event ) => {
            event.preventDefault();
            install_function.prompt();
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